import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }

            setScrolled(currentScrollY > 50);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Resume', href: '#resumesec' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="scroll-progress-bar"
                style={{ scaleX, transformOrigin: "0%" }}
            />
            <div className="container navbar-container">
                <motion.a
                    href="#"
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Daham Prabhasara<span className="accent-text">.</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="menu-toggle mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link mobile-link" onClick={toggleMenu}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
