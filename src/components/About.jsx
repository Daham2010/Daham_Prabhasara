import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Eye } from 'lucide-react';
import '../styles/About.css';

import profileImg from '../assets/profile.jpg';

const About = () => {
    const services = [
        {
            num: "01",
            title: "Web Development",
            description: "I build modern, responsive web experiences using contemporary technologies such as Next.js, React, JavaScript, TypeScript, and modern web architecture."
        },
        {
            num: "02",
            title: "UI/UX & Digital Design",
            description: "I create refined interfaces with attention to visual hierarchy, usability, responsive layouts, animation, interaction, and detail."
        },
        {
            num: "03",
            title: "AI & Intelligent Applications",
            description: "I explore AI-powered applications and automation, experimenting with ways artificial intelligence can make software more useful and intelligent."
        },
        {
            num: "04",
            title: "Software & Product Development",
            description: "I enjoy designing and developing technology concepts that solve problems — from security and productivity ideas to experimental digital products."
        }
    ];

    const exploringTags = [
        "Web Engineering", "Next.js & React", "UI/UX Design", 
        "Artificial Intelligence", "Software Development", 
        "Digital Product Design", "Modern Web Technologies"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="section about-section">
            <div className="container">
                {/* Header */}
                <motion.h2
                    className="heading-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="accent-text">Me</span>
                </motion.h2>

                {/* Main Profile Info */}
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="about-subtitle">Turning Ideas Into Digital Experiences.</h3>
                        <p>
                            I’m <strong>Daham Prabhasara</strong>, a <strong>Developer & Digital Designer from Sri Lanka</strong>, currently pursuing my secondary education while building real-world skills in software development, web technologies, UI/UX, and artificial intelligence.
                        </p>
                        <p>
                            I enjoy taking an idea from a simple concept and transforming it into a <strong>functional, polished, and meaningful digital experience</strong>. My approach combines technology with design — focusing not only on how something works, but also on how it feels to use.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="about-image-wrapper">
                            <img src={profileImg} alt="Daham Prabhasara" className="about-image" />
                        </div>
                    </motion.div>
                </div>

                {/* What I Do Section */}
                <div className="what-i-do-container">
                    <motion.h3 
                        className="section-subheading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What <span className="accent-text">I Do</span>
                    </motion.h3>

                    <motion.div 
                        className="services-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div 
                                key={index} 
                                className="service-card"
                                variants={itemVariants}
                                whileHover={{ y: -5, borderColor: "var(--accent-primary)", boxShadow: "0 10px 30px rgba(99, 102, 241, 0.15)" }}
                            >
                                <span className="service-num">{service.num}</span>
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-desc">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Education and Approach Grid */}
                <div className="edu-approach-grid">
                    {/* Education */}
                    <motion.div 
                        className="edu-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-title-with-icon">
                            <BookOpen size={24} className="accent-icon" />
                            <h3 className="section-subheading-small">🎓 Education</h3>
                        </div>
                        <div className="edu-card">
                            <h4 className="edu-title">Secondary Education</h4>
                            <p className="edu-school">R/Karawita Central College — Sri Lanka</p>
                            <p className="edu-desc">
                                My education gives me a strong foundation in subjects such as <strong>Mathematics, Science, ICT, Commerce, English, Sinhala, History, Buddhism, and Music</strong>.
                            </p>
                            <p className="edu-desc">
                                I see education and development as two connected journeys. What I learn academically helps me develop my problem-solving ability, while building projects allows me to apply that knowledge in practical ways.
                            </p>
                        </div>
                    </motion.div>

                    {/* Approach */}
                    <motion.div 
                        className="approach-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="section-title-with-icon">
                            <Compass size={24} className="accent-icon" />
                            <h3 className="section-subheading-small">🚀 My Approach</h3>
                        </div>
                        <div className="approach-card">
                            <p className="approach-desc">
                                I believe great digital products are created where <strong>engineering, design, curiosity, and continuous learning</strong> meet.
                            </p>
                            <p className="approach-desc">
                                I’m constantly experimenting with new technologies, improving my development skills, studying modern design principles, and turning new ideas into projects.
                            </p>
                            <blockquote className="approach-blockquote">
                                <span className="quote-mark">“</span>
                                Learn deeply. Build boldly. Design intentionally.
                                <span className="quote-mark">”</span>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>

                {/* Currently Exploring */}
                <motion.div 
                    className="exploring-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="section-subheading-small text-center">🌐 Currently Exploring</h3>
                    <div className="exploring-tags">
                        {exploringTags.map((tag, index) => (
                            <motion.span 
                                key={index} 
                                className="exploring-badge"
                                whileHover={{ scale: 1.05, backgroundColor: "var(--accent-glow)", borderColor: "var(--accent-primary)" }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.05 * index }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Vision Statement */}
                <motion.div 
                    className="vision-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ boxShadow: "0 15px 40px rgba(99, 102, 241, 0.1)" }}
                >
                    <div className="vision-header">
                        <Eye size={28} className="accent-icon" />
                        <h3 className="vision-title">My Vision</h3>
                    </div>
                    <p className="vision-text">
                        My goal is to grow from a passionate student and creator into a <strong>high-level software developer and digital product designer</strong>, building technology that is useful, beautiful, and impactful.
                    </p>
                    <p className="vision-footer">
                        The journey is still beginning — but the direction is clear.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
