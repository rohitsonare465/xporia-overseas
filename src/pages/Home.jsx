import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Certifications from '../components/Certifications';
import ExportProcess from '../components/ExportProcess';
import Reviews from '../components/Reviews';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ProductGrid />
            <Certifications />
            <ExportProcess />
            <Reviews />

            {/* Why Choose Us Section */}
            <section className="section why-choose-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="section-header"
                    >
                        <h2 className="section-title">Why Choose Xporia Overseas?</h2>
                        <p className="section-subtitle">
                            Your trusted partner for hassle-free global trade
                        </p>
                    </motion.div>

                    <div className="why-choose-grid">
                        {[
                            { icon: "🏆", title: "Premium Quality", text: "Rigorous quality control ensuring only the best products reach you" },
                            { icon: "🌍", title: "Global Reach", text: "Extensive network connecting businesses across 50+ countries" },
                            { icon: "⚡", title: "Fast Delivery", text: "Efficient logistics ensuring on-time delivery every time" },
                            { icon: "💎", title: "Competitive Pricing", text: "Direct sourcing from manufacturers for best market rates" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="why-choose-card"
                            >
                                <div className="why-choose-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="cta-content"
                    >
                        <h2>Ready to Start Your Export Journey?</h2>
                        <p>Get a free quote and discover how we can help grow your business globally</p>
                        <Link to="/contact" className="btn btn-gold btn-lg cta-btn">
                            Request Free Quote Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
