import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img src="/xporia-logo.jpg" alt="Xporia Overseas" />
                        </div>
                        <p className="footer-description">
                            {siteConfig.company.description}
                        </p>
                        <div className="footer-social">
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={siteConfig.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <nav className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/export-process">Export Process</Link>
                            <Link to="/quality">Quality & Certifications</Link>
                            <Link to="/contact">Contact Us</Link>
                        </nav>
                    </div>

                    {/* Products */}
                    <div className="footer-column">
                        <h4 className="footer-title">Our Products</h4>
                        <nav className="footer-links">
                            <Link to="/products">Agro Commodities</Link>
                            <Link to="/products">Industrial Hardware</Link>
                            <Link to="/products">Textiles & Fabrics</Link>
                            <Link to="/products">Eco-Friendly Products</Link>
                            <Link to="/products">Food & Beverages</Link>
                            <Link to="/products">Handicrafts & Art</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="footer-contact">
                            <a href={`mailto:${siteConfig.contact.email}`} className="footer-contact-item">
                                <Mail size={18} />
                                <span>{siteConfig.contact.email}</span>
                            </a>
                            <a href={`tel:${siteConfig.contact.phone}`} className="footer-contact-item">
                                <Phone size={18} />
                                <span>{siteConfig.contact.phone}</span>
                            </a>
                            <div className="footer-contact-item">
                                <MapPin size={18} />
                                <span>
                                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                                    <br />
                                    {siteConfig.contact.address.country}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} {siteConfig.company.name}. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
