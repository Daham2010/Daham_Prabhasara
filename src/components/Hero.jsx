import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Magnetic from './Magnetic';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        className="hero-greeting accent-text"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.p>
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Daham Prabhasara<span className="text-gradient">.</span>
                    </motion.h1>
                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        I build <span className="text-gradient">digital experiences</span> that matter.
                    </motion.h2>
                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        A passionate developer crafting beautiful, high-performance web applications with a focus on user experience and modern design.
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Magnetic>
                            <a href="#projects" className="btn btn-primary">
                                View Work <ArrowRight size={20} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#resumesec" className="btn btn-secondary">
                                View Resume <ArrowRight size={20} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#contact" className="btn btn-secondary btn-outline">
                                Contact Me
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>
                <div className="hero-visual">
                    <motion.div
                        className="hero-circle"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div
                        className="hero-circle-2"
                        animate={{
                            y: [0, 20, 0],
                            scale: [1, 0.95, 1]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
