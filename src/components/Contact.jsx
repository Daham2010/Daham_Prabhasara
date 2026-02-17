import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageCircle, Instagram, Facebook, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the Formspree ID is still the placeholder
        const FORMSPREE_ID = 'mgolyrng'; // Updated with your actual Formspree ID

        if (FORMSPREE_ID === 'PLACEHOLDER_ID') {
            setStatus({
                submitting: false,
                success: false,
                error: 'Please set up your Formspree ID in Contact.jsx.'
            });
            return;
        }

        setStatus({ submitting: true, success: false, error: null });

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Oops! There was a problem submitting your form');
            }
        } catch (error) {
            setStatus({ submitting: false, success: false, error: error.message });
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.h2
                    className="heading-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In <span className="accent-text">Touch</span>
                </motion.h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="contact-subtitle">Let's Talk</h3>
                        <p className="contact-text">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>

                        <div className="contact-links">
                            {/* Mapping links for easier animation */}
                            {[
                                { href: "mailto:daham2010prabhasara@gmail.com", icon: <Mail size={20} />, text: "daham2010prabhasara@gmail.com" },
                                { href: "https://wa.me/qr/LJVQOD3FXJO7J1", icon: <MessageCircle size={20} />, text: "WhatsApp" },
                                { href: "https://www.instagram.com/dahamprabhasara?utm_source=qr&igsh=dWVqazJtdnU3MzVv", icon: <Instagram size={20} />, text: "Instagram" },
                                { href: "https://facebook.com", icon: <Facebook size={20} />, text: "Facebook" },
                                { href: "https://www.tiktok.com/@dahamprabhasara2010?_r=1&_t=ZS-93wb8dnwe6X", icon: <Video size={20} />, text: "TikTok" },
                                { href: "https://github.com/Daham2010", icon: <Github size={20} />, text: "GitHub" },
                                { href: "https://linkedin.com", icon: <Linkedin size={20} />, text: "LinkedIn" }
                            ].map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    className="contact-link"
                                    target={link.href.startsWith('mailto') ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                                    whileHover={{ x: 5, color: "var(--accent-primary)" }}
                                >
                                    {link.icon} {link.text}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                                rows="5"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={status.submitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </motion.button>

                        {status.success && (
                            <motion.div
                                className="status-message success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Thanks for reaching out! Your message has been sent successfully.
                            </motion.div>
                        )}

                        {status.error && (
                            <motion.div
                                className="status-message error-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {status.error}
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
