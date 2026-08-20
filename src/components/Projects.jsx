import React, { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import '../styles/Projects.css';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-150, 150], [10, -10]);
    const rotateY = useTransform(x, [-150, 150], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-image-wrapper">
                <div className="project-overlay">
                    <div className="overlay-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                            <Github size={20} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-link">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
                <div className="project-placeholder-img">
                    <Folder size={48} />
                </div>
            </div>

            <div className="project-card-content">
                <div className="project-card-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-card-links-mobile">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "A full-stack e-commerce solution with real-time inventory management and payment processing integration.",
            tags: ["React", "Node.js", "Stripe", "MongoDB"],
            github: "#",
            live: "#"
        },
        {
            title: "TaskMaster",
            description: "Collaborative project management tool featuring drag-and-drop kanban boards and team chat.",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            github: "#",
            live: "#"
        },
        {
            title: "Weather Vue",
            description: "Beautiful weather application providing detailed forecasts using OpenWeatherMap API with location detection.",
            tags: ["React", "API Integration", "CSS3"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="heading-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span className="accent-text">Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
