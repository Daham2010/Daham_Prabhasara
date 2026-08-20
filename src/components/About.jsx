import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

import profileImg from '../assets/profile.jpg';

const About = () => {
    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js", "HTML5 & CSS3",
        "Tailwind CSS", "Git & GitHub", "REST APIs", "UI/UX Design"
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.h2
                    className="heading-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="accent-text">Me</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I'm a dedicated web developer with a passion for creating seamless digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in building responsive, user-friendly websites and applications.
                        </p>
                        <p>
                            My journey in tech started with a curiosity about how things work on the web, which quickly turned into a career. I love solving complex problems and turning ideas into reality through clean, efficient code.
                        </p>

                        <div className="skills-container">
                            <h3 className="skills-title">My Tech Stack</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                        whileHover={{ scale: 1.05, backgroundColor: "var(--accent-glow)" }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
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
            </div>
        </section>
    );
};

export default About;
