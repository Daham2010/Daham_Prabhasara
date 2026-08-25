import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Printer, Download } from 'lucide-react';
import '../styles/Resume.css';

const Resume = () => {
    const experiences = [
        {
            company: "Independent Web Development",
            role: "Full-Stack Web Developer & UI Designer",
            period: "2023 - Present",
            description: "Architecting and building responsive web applications using React, Next.js, and Node.js. Designing clean interfaces with a strong emphasis on usability and modern layout principles."
        },
        {
            company: "Personal Tech Exploration",
            role: "AI & Automation Explorer",
            period: "2024 - Present",
            description: "Building smart applications and testing integrations using Large Language Models, Gemini API, and building automated digital tools."
        },
        {
            company: "Open Source Projects",
            role: "Software & Concept Builder",
            period: "2022 - Present",
            description: "Developing and launching functional concepts in productivity, security, and digital product design while studying modern programming patterns."
        }
    ];

    const education = [
        {
            institution: "R/Karawita Central College — Sri Lanka",
            degree: "Secondary Education (Mathematics, Science, ICT, Commerce focus)",
            year: "2020 - Present"
        }
    ];

    const detailedSkills = [
        { name: "React / Next.js / Vite", level: 92 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "UI/UX & Digital Product Design", level: 85 },
        { name: "HTML5 / CSS3 / Tailwind CSS", level: 90 },
        { name: "AI Integration & APIs", level: 80 }
    ];

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resumesec" className="section resume-section">
            <div className="container">
                <div className="resume-header-flex">
                    <motion.h2
                        className="heading-md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        My <span className="accent-text">Resume</span>
                    </motion.h2>
                    <motion.button
                        className="btn btn-secondary print-btn"
                        onClick={handlePrint}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Printer size={18} /> Print / Save as PDF
                    </motion.button>
                </div>

                <div className="resume-grid">
                    {/* Experience Column */}
                    <div className="resume-column">
                        <h3 className="resume-subtitle"><Briefcase size={20} /> Professional Experience</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="timeline-dot"></div>
                                    <span className="timeline-period">{exp.period}</span>
                                    <h4 className="timeline-title">{exp.role}</h4>
                                    <h5 className="timeline-company">{exp.company}</h5>
                                    <p className="timeline-text">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Skills & Education Column */}
                    <div className="resume-column">
                        <section className="resume-sub-section">
                            <h3 className="resume-subtitle"><Award size={20} /> Technical Skills</h3>
                            <div className="skills-bars">
                                {detailedSkills.map((skill, index) => (
                                    <div key={index} className="skill-bar-container">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="resume-sub-section mt-4">
                            <h3 className="resume-subtitle"><GraduationCap size={20} /> Education</h3>
                            {education.map((edu, index) => (
                                <div key={index} className="edu-card">
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    <h5 className="edu-institution">{edu.institution}</h5>
                                    <span className="edu-year">{edu.year}</span>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
