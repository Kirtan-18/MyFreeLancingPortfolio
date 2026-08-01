import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 3. Central Hologram Glass Cube
    const cubeGeo = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
      ior: 1.5,
      transparent: true,
      opacity: 0.85
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    scene.add(cubeMesh);

    // 4. Outer Holographic Wireframe Rings
    const ringGroup = new THREE.Group();
    const ringGeo1 = new THREE.TorusGeometry(2.5, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x7000ff, wireframe: true });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x00ffc2, wireframe: true });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    ringGroup.add(ringMesh2);

    scene.add(ringGroup);

    // 5. Floating Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(0.6, 0.18, 128, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xff007a,
      roughness: 0.2,
      metalness: 0.8
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(3.2, -1.2, -0.5);
    scene.add(knotMesh);

    // 6. Floating Sphere
    const sphereGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x7000ff,
      roughness: 0.1,
      metalness: 0.9
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(-3.2, 1.5, -1);
    scene.add(sphereMesh);

    // 7. Particle Stars Field
    const particleCount = 600;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 8. Cyber Grid Floor
    const gridHelper = new THREE.GridHelper(30, 30, 0x00f0ff, 0x12121c);
    gridHelper.position.y = -3.5;
    scene.add(gridHelper);

    // 9. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 20);
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);

    const dirLight = new THREE.DirectionalLight(0x7000ff, 1.5);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);

    // 10. Mouse Interaction & Animation Loop
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth rotations
      cubeMesh.rotation.x += 0.005;
      cubeMesh.rotation.y += 0.008;

      ringGroup.rotation.z += 0.004;
      ringGroup.rotation.x += 0.003;

      knotMesh.rotation.y += 0.01;
      knotMesh.rotation.z -= 0.006;

      sphereMesh.rotation.y -= 0.005;

      particlePoints.rotation.y += 0.0008;
      particlePoints.rotation.x += 0.0004;

      // Mouse Parallax Light Tracking
      pointLight.position.x += (mouseX * 5 - pointLight.position.x) * 0.05;
      pointLight.position.y += (mouseY * 4 + 2 - pointLight.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Responsive Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-auto w-full h-full"
    />
  );
};
