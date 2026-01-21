// import { useRequestQuote } from '../context/RequestQuoteContext';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import siteConfig from '../config/siteConfig';
import heroCardImg from '../assets/hero-vertical-card.png'; // Updated asset
import './Hero.css';

const Hero = () => {
    // const { openQuoteModal } = useRequestQuote();

    return (
        <section className="hero">
            <div className="hero-background-pattern"></div>

            <div className="container hero-container">
                {/* Left Column: Text Content */}
                <div className="hero-content-col">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="hero-badge-pill"
                    >
                        <Award size={16} />
                        <span>Premium Export Quality</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-title"
                    >
                        <span className="hero-company-name">
                            <span className="hero-company-initial">X</span>poria <span className="hero-company-initial">O</span>verseas
                        </span>
                        <span className="hero-subtitle">
                            Experience the <span className="text-gold-serif">Royal Standard</span> of <br /> Global Trade
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-description"
                    >
                        Authentic Indian products crafted with tradition, processed with precision.
                        Connecting premium Indian markets with discerning global clients through state-of-the-art logistics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <RouterLink to="/products" className="btn-hero-primary">
                            Explore Our Range
                        </RouterLink>
                        <button
                            onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi, I'm interested in receiving your product catalog.")}`, '_blank')}
                            className="btn-hero-outline"
                        >
                            Request Catalog
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="hero-certifications"
                    >
                        <div className="cert-item">
                            <span className="cert-label">FSSAI</span>
                            <span className="cert-sub">Food Safety Certified</span>
                        </div>
                        <div className="cert-item">
                            <span className="cert-label">ISO</span>
                            <span className="cert-sub">ISO 22000:2018</span>
                        </div>
                        <div className="cert-item">
                            <span className="cert-label">HACCP</span>
                            <span className="cert-sub">HACCP Certified</span>
                        </div>
                        <div className="cert-item">
                            <span className="cert-label">APEDA</span>
                            <span className="cert-sub">Export Registered</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Hero Image Card */}
                <div className="hero-image-col">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hero-image-card"
                    >
                        <motion.div
                            bg-image-wrapper
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="hero-card-inner"
                        >
                            <img src={heroCardImg} alt="Global Trade Composition" className="hero-card-img" />
                        </motion.div>

                        {/* Floating Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            className="float-card float-card-1"
                        >
                            <div className="float-icon-box"><Globe size={20} /></div>
                            <div className="float-text">
                                <span className="float-title">Global Network</span>
                                <span className="float-sub">50+ Countries</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            className="float-card float-card-2"
                        >
                            <div className="float-icon-box"><ShieldCheck size={20} /></div>
                            <div className="float-text">
                                <span className="float-title">100% Trusted</span>
                                <span className="float-sub">Quality Guarantee</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
