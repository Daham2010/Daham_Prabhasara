import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hero3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
            
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshStandardMaterial({ 
                color: 0x6366f1, 
                metalness: 0.8, 
                roughness: 0.2 
            });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0x6366f1, 1);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            camera.position.z = 5;

            let animationId;
            const animate = () => {
                animationId = requestAnimationFrame(animate);
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.015;
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                if (!container) return;
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationId);
                geometry.dispose();
                material.dispose();
                renderer.dispose();
                if (container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
            };
        } catch (error) {
            console.error('Hero3D initialization failed:', error);
        }
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default Hero3D;
