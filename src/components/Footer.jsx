import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Video } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Daham Prabhasara<span className="accent-text">.</span>
                </div>

                <div className="footer-socials">
                    <a href="#" aria-label="Github"><Github size={20} /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="#" aria-label="TikTok"><Video size={20} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                </div>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Daham Prabhasara. All rights reserved. Powerd by DahaX UI
                </p>
            </div>
        </footer>
    );
};

export default Footer;

