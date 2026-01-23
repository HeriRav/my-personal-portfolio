"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const SunScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Textures
    const textureLoader = new THREE.TextureLoader();

    const sunTexture = textureLoader.load("/textures/2k_sun.jpg");

    // Sun
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64),
      new THREE.MeshStandardMaterial({
        map: sunTexture,
        emissive: new THREE.Color(0xfff2cc),
        emissiveMap: sunTexture,
        emissiveIntensity: 20,
        roughness: 1,
      }),
    );

    scene.add(sun);

    // Glow
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0xffcc66,
        transparent: true,
        opacity: 0.2,
      }),
    );

    scene.add(glow);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(10, 10, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(pointLight, ambientLight);

    sunTexture.colorSpace = THREE.SRGBColorSpace;
    sunTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    sunTexture.generateMipmaps = true;
    sunTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      sun.rotation.y += 0.003;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SunScene;
