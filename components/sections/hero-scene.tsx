"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type HeroSceneProps = {
  className?: string;
};

function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  if (Array.isArray(material)) {
    material.forEach((entry) => entry.dispose());
    return;
  }

  material.dispose();
}

export function HeroScene({ className }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.1, 7.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xbfe5ff, 0.72);
    const keyLight = new THREE.PointLight(0x67e8f9, 15, 24, 2);
    keyLight.position.set(2.6, 2.4, 4.6);
    const rimLight = new THREE.PointLight(0x38bdf8, 9, 18, 2);
    rimLight.position.set(-3.8, -1.8, -1.4);
    scene.add(ambientLight, keyLight, rimLight);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const wireCoreGeometry = new THREE.IcosahedronGeometry(1.42, 1);
    const wireCoreMaterial = new THREE.MeshPhongMaterial({
      color: 0x9fe9ff,
      emissive: 0x08364a,
      emissiveIntensity: 1,
      opacity: 0.48,
      shininess: 100,
      transparent: true,
      wireframe: true,
    });
    const wireCore = new THREE.Mesh(wireCoreGeometry, wireCoreMaterial);
    cluster.add(wireCore);

    const shellGeometry = new THREE.TorusKnotGeometry(1.55, 0.18, 180, 24, 2, 3);
    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.18,
      metalness: 0.42,
      roughness: 0.24,
      opacity: 0.3,
      transparent: true,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    cluster.add(shell);

    const ringGeometry = new THREE.TorusGeometry(2.45, 0.045, 18, 180);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      opacity: 0.38,
      transparent: true,
    });
    const ringA = new THREE.Mesh(ringGeometry, ringMaterial);
    ringA.rotation.set(1.14, 0.22, 0.42);
    cluster.add(ringA);

    const ringB = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    ringB.rotation.set(0.4, 1.02, -0.2);
    ringB.scale.setScalar(0.88);
    cluster.add(ringB);

    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(2.2, 3.65);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const height = THREE.MathUtils.randFloatSpread(2.2);
      const offset = index * 3;

      particlePositions[offset] = Math.cos(angle) * radius;
      particlePositions[offset + 1] = height;
      particlePositions[offset + 2] = Math.sin(angle) * radius;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      opacity: 0.95,
      size: 0.042,
      sizeAttenuation: true,
      transparent: true,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    cluster.add(particles);

    const pointer = new THREE.Vector2(0, 0);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      pointer.set((x - 0.5) * 2, (y - 0.5) * 2);
    };

    const handlePointerLeave = () => {
      pointer.set(0, 0);
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

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
      const targetX = prefersReducedMotion ? 0.1 : pointer.y * 0.2;
      const targetY = prefersReducedMotion ? 0.24 : pointer.x * 0.3;

      cluster.rotation.x = THREE.MathUtils.lerp(cluster.rotation.x, targetX, 0.04);
      cluster.rotation.y = THREE.MathUtils.lerp(cluster.rotation.y, targetY, 0.04);

      wireCore.rotation.x = elapsed * 0.34;
      wireCore.rotation.y = elapsed * 0.46;
      shell.rotation.x = elapsed * 0.16;
      shell.rotation.y = -elapsed * 0.18;
      ringA.rotation.z = elapsed * 0.22;
      ringB.rotation.z = -elapsed * 0.18;
      particles.rotation.y = elapsed * 0.08;

      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        prefersReducedMotion ? 0 : pointer.x * 0.2,
        0.03
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        prefersReducedMotion ? 0.1 : -pointer.y * 0.16,
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
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);

      wireCoreGeometry.dispose();
      wireCoreMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      ringGeometry.dispose();
      disposeMaterial(ringMaterial);
      disposeMaterial(ringB.material);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      scene.clear();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "panel-surface relative overflow-hidden rounded-[30px]",
        className
      )}
    >
      <div ref={containerRef} aria-hidden="true" className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(2,6,23,0.32)_68%,rgba(2,6,23,0.72)_100%)]" />
    </div>
  );
}
