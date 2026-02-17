import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Background.css';

const Background = () => {
    return (
        <div className="animated-bg-container">
            <div className="mesh-gradient"></div>
            <div className="glow-spheres">
                <motion.div
                    className="sphere sphere-1"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="sphere sphere-2"
                    animate={{
                        x: [0, -120, 80, 0],
                        y: [0, 80, -120, 0],
                        scale: [1, 0.8, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="sphere sphere-3"
                    animate={{
                        x: [0, 90, -100, 0],
                        y: [0, 110, -70, 0],
                        scale: [1, 1.1, 0.7, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <div className="glass-overlay"></div>
        </div>
    );
};

export default Background;
