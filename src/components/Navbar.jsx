import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

import { useRequestQuote } from '../context/RequestQuoteContext';
import siteConfig from '../config/siteConfig';
import './Navbar.css';

const Navbar = () => {
    const { openQuoteModal } = useRequestQuote();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/products', label: 'Products' },
        { path: '/export-process', label: 'Export Process' },
        { path: '/quality', label: 'Quality & Certifications' },
        { path: '/contact', label: 'Contact Us' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="container navbar-container">
                {/* Logo + Brand */}
                <Link to="/" className="navbar-logo">
                    <motion.div
                        className="navbar-brand"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="logo-wrapper">
                            <img src="/xporia-logo.jpg" alt="Xporia Overseas" className="logo-image" />
                        </div>
                        <div className="navbar-brand-text">
                            <span className="navbar-brand-title">XPORIA OVERSEAS</span>
                            <span className="navbar-brand-subtitle">Royal Standard of Global Trade</span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.label}
                            {isActive(link.path) && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="navbar-link-active-indicator"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA Button + WhatsApp */}
                <div className="navbar-actions">
                    <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-whatsapp-icon"
                        aria-label="Chat on WhatsApp"
                        title="Chat on WhatsApp"
                    >
                        <MessageCircle size={22} />
                    </a>
                    <button onClick={() => openQuoteModal()} className="btn btn-gold btn-sm navbar-cta">
                        Request Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="navbar-mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            className="btn btn-gold btn-sm"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openQuoteModal();
                            }}
                            style={{ width: '100%', marginTop: '1rem' }}
                        >
                            Request Quote
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
