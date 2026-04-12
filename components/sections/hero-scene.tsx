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

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.2, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x7bc8ff, 0.85);
    const keyLight = new THREE.PointLight(0x4fc3f7, 14, 20, 2);
    keyLight.position.set(2.8, 1.8, 4.5);

    const rimLight = new THREE.PointLight(0x0ea5e9, 8, 18, 2);
    rimLight.position.set(-3.6, -1.8, -1.5);

    scene.add(ambientLight, keyLight, rimLight);

    const cluster = new THREE.Group();
    scene.add(cluster);

    const wireCoreGeometry = new THREE.IcosahedronGeometry(1.45, 1);
    const wireCoreMaterial = new THREE.MeshPhongMaterial({
      color: 0x7dd3fc,
      emissive: 0x0f3a52,
      emissiveIntensity: 0.9,
      opacity: 0.45,
      shininess: 90,
      transparent: true,
      wireframe: true,
    });
    const wireCore = new THREE.Mesh(wireCoreGeometry, wireCoreMaterial);
    cluster.add(wireCore);

    const edgesGeometry = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.78, 0));
    const edgesMaterial = new THREE.LineBasicMaterial({
      color: 0xb8ecff,
      opacity: 0.55,
      transparent: true,
    });
    const shell = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cluster.add(shell);

    const orbitalGeometry = new THREE.TorusGeometry(2.35, 0.04, 16, 180);
    const orbitalMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      opacity: 0.45,
      transparent: true,
    });
    const orbitalRing = new THREE.Mesh(orbitalGeometry, orbitalMaterial);
    orbitalRing.rotation.set(1.12, 0.32, 0.4);
    cluster.add(orbitalRing);

    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(2.1, 3.45);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const height = THREE.MathUtils.randFloatSpread(1.9);
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
      size: 0.045,
      sizeAttenuation: true,
      transparent: true,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    cluster.add(particles);

    const nodeGeometry = new THREE.SphereGeometry(0.055, 14, 14);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf8fafc,
      opacity: 0.85,
      transparent: true,
    });

    const nodes = Array.from({ length: 10 }, (_, index) => {
      const angle = (index / 10) * Math.PI * 2;
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);

      mesh.position.set(Math.cos(angle) * 2.6, Math.sin(angle * 1.8) * 0.5, Math.sin(angle) * 2.4);
      cluster.add(mesh);

      return mesh;
    });

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
      const targetX = prefersReducedMotion ? 0.12 : pointer.y * 0.22;
      const targetY = prefersReducedMotion ? 0.35 : pointer.x * 0.35;

      cluster.rotation.x = THREE.MathUtils.lerp(cluster.rotation.x, targetX, 0.04);
      cluster.rotation.y = THREE.MathUtils.lerp(cluster.rotation.y, targetY, 0.04);

      if (!prefersReducedMotion) {
        wireCore.rotation.x = elapsed * 0.32;
        wireCore.rotation.y = elapsed * 0.46;
        shell.rotation.x = -elapsed * 0.18;
        shell.rotation.y = elapsed * 0.28;
        orbitalRing.rotation.z = elapsed * 0.24;
        particles.rotation.y = elapsed * 0.08;
        particles.rotation.x = Math.sin(elapsed * 0.2) * 0.12;

        nodes.forEach((node, index) => {
          const offset = elapsed * 0.7 + index * 0.42;
          node.position.y = Math.sin(offset) * 0.42;
          node.scale.setScalar(0.92 + Math.sin(offset * 1.6) * 0.12);
        });
      }

      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        prefersReducedMotion ? 0 : pointer.x * 0.24,
        0.03
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        prefersReducedMotion ? 0.2 : -pointer.y * 0.18,
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
      edgesGeometry.dispose();
      edgesMaterial.dispose();
      orbitalGeometry.dispose();
      orbitalMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      nodeGeometry.dispose();
      disposeMaterial(nodeMaterial);
      renderer.dispose();
      scene.clear();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-border/80 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(180deg,rgba(5,12,20,0.98),rgba(11,18,28,0.9))]">
      <div
        ref={containerRef}
        aria-hidden="true"
        className="absolute inset-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,6,23,0.26)_70%,rgba(2,6,23,0.72)_100%)]" />
      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-sky-100/80">
        3D System Sketch
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 max-w-[15rem] space-y-2">
        <p className="text-sm font-medium text-slate-100">Go workflows, queues, and state transitions.</p>
        <p className="text-xs leading-relaxed text-slate-300/80">
          A lightweight Three.js layer to make the portfolio feel more alive without pulling attention away from the backend work.
        </p>
      </div>
    </div>
  );
}
