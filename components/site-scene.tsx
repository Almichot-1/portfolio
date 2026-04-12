"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  if (Array.isArray(material)) {
    material.forEach((entry) => entry.dispose());
    return;
  }

  material.dispose();
}

export function SiteScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 11.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xbfdbfe, 0.85);
    const keyLight = new THREE.PointLight(0x67e8f9, 14, 36, 2);
    keyLight.position.set(4.5, 4.5, 6);

    const fillLight = new THREE.PointLight(0x0ea5e9, 9, 30, 2);
    fillLight.position.set(-6.5, -2.5, 5);

    scene.add(ambientLight, keyLight, fillLight);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const particleCount = 320;
    const particlePositions = new Float32Array(particleCount * 3);
    const nodeVectors: THREE.Vector3[] = [];

    for (let index = 0; index < particleCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(3.5, 9.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0.2, Math.PI - 0.2);
      const offset = index * 3;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi) * 0.7;
      const z = radius * Math.sin(phi) * Math.sin(theta);

      particlePositions[offset] = x;
      particlePositions[offset + 1] = y;
      particlePositions[offset + 2] = z;

      if (index < 22) {
        nodeVectors.push(new THREE.Vector3(x * 0.82, y * 0.82, z * 0.82));
      }
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xe2f3ff,
      size: 0.032,
      opacity: 0.72,
      sizeAttenuation: true,
      transparent: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    cluster.add(particles);

    const nodeGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf8fafc,
      opacity: 0.8,
      transparent: true,
    });

    nodeVectors.forEach((vector) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(vector);
      cluster.add(node);
    });

    const linePositions: number[] = [];

    for (let outerIndex = 0; outerIndex < nodeVectors.length; outerIndex += 1) {
      for (let innerIndex = outerIndex + 1; innerIndex < nodeVectors.length; innerIndex += 1) {
        const distance = nodeVectors[outerIndex].distanceTo(nodeVectors[innerIndex]);

        if (distance > 4.25) {
          continue;
        }

        linePositions.push(
          nodeVectors[outerIndex].x,
          nodeVectors[outerIndex].y,
          nodeVectors[outerIndex].z,
          nodeVectors[innerIndex].x,
          nodeVectors[innerIndex].y,
          nodeVectors[innerIndex].z
        );
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      opacity: 0.14,
      transparent: true,
    });

    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    cluster.add(lines);

    const ringGeometry = new THREE.TorusGeometry(6.5, 0.022, 18, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      opacity: 0.15,
      transparent: true,
    });

    const ringA = new THREE.Mesh(ringGeometry, ringMaterial);
    ringA.rotation.set(1.05, 0.1, 0.3);
    cluster.add(ringA);

    const ringB = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    ringB.rotation.set(0.2, 0.9, -0.15);
    ringB.scale.setScalar(1.18);
    cluster.add(ringB);

    const pointer = new THREE.Vector2(0, 0);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.set(
        (event.clientX / window.innerWidth - 0.5) * 2,
        (event.clientY / window.innerHeight - 0.5) * 2
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const targetRotationY = prefersReducedMotion ? 0.18 : elapsed * 0.03 + pointer.x * 0.12;
      const targetRotationX = prefersReducedMotion ? 0.08 : pointer.y * 0.08;

      cluster.rotation.y = THREE.MathUtils.lerp(cluster.rotation.y, targetRotationY, 0.02);
      cluster.rotation.x = THREE.MathUtils.lerp(cluster.rotation.x, targetRotationX, 0.02);

      particles.rotation.y = elapsed * 0.015;
      ringA.rotation.z = elapsed * 0.04;
      ringB.rotation.z = -elapsed * 0.025;

      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        prefersReducedMotion ? 0 : pointer.x * 0.38,
        0.03
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        prefersReducedMotion ? 0 : -pointer.y * 0.24,
        0.03
      );
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      nodeGeometry.dispose();
      disposeMaterial(nodeMaterial);
      linesGeometry.dispose();
      linesMaterial.dispose();
      ringGeometry.dispose();
      disposeMaterial(ringMaterial);
      disposeMaterial(ringB.material);
      renderer.dispose();
      scene.clear();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] opacity-80" />;
}
