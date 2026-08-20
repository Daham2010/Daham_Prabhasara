import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 800;
            const positions = new Float32Array(particlesCount * 3);
            
            for (let i = 0; i < particlesCount * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 18;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const particlesMaterial = new THREE.PointsMaterial({
                color: 0x818cf8,
                size: 0.03,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            });
            
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            const gridHelper = new THREE.GridHelper(24, 24, 0x6366f1, 0x1e1b4b);
            gridHelper.position.y = -4;
            gridHelper.position.z = -2;
            scene.add(gridHelper);

            camera.position.z = 7;

            let animationId;
            const animate = () => {
                animationId = requestAnimationFrame(animate);
                particles.rotation.y -= 0.002;
                particles.rotation.x -= 0.001;
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationId);
                particlesGeometry.dispose();
                particlesMaterial.dispose();
                renderer.dispose();
                if (container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
            };
        } catch (error) {
            console.error('Background3D initialization failed:', error);
        }
    }, []);

    return (
        <div 
            ref={mountRef} 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 0, 
                pointerEvents: 'none' 
            }}
        />
    );
};

export default Background3D;
