import React from 'react';
import QualityCertifications from '../components/QualityCertifications';
import siteConfig from '../config/siteConfig';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="animate-fade-in-up">About {siteConfig.company.name}</h1>
                    <p className="about-hero-subtitle animate-fade-in-up">
                        {siteConfig.company.tagline}
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <p>
                                Founded with a vision to connect businesses across borders, Xporia Overseas has grown
                                into a trusted name in international trade. We specialize in sourcing and exporting
                                premium quality products from India to global markets.
                            </p>
                            <p>
                                Our commitment to excellence, transparency, and customer satisfaction has helped us
                                build lasting relationships with clients worldwide. We understand the complexities
                                of international trade and work tirelessly to make the process seamless for our partners.
                            </p>
                            <p>
                                With a dedicated team of export professionals, extensive industry knowledge, and a
                                robust network of suppliers and logistics partners, we ensure that every shipment
                                meets the highest standards of quality and arrives on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section mission-vision-section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card">
                            <h3>Our Mission</h3>
                            <p>
                                To bridge the gap between Indian manufacturers and global buyers by providing
                                reliable, efficient, and transparent export services. We strive to showcase
                                the best of India's products to the world while ensuring complete customer
                                satisfaction and sustainable business practices.
                            </p>
                        </div>
                        <div className="vision-card">
                            <h3>Our Vision</h3>
                            <p>
                                To become the most trusted and preferred export partner for businesses worldwide,
                                known for our integrity, quality assurance, and commitment to excellence. We
                                envision a future where international trade is seamless, sustainable, and
                                mutually beneficial for all stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality & Certifications */}
            <QualityCertifications />

            {/* Why Choose Us */}
            <section className="section why-us-section">
                <div className="container">
                    <h2 className="section-title">Why Partner With Us?</h2>
                    <div className="why-us-grid">
                        <div className="why-us-item">
                            <div className="why-us-number">01</div>
                            <h4>Expert Team</h4>
                            <p>Experienced professionals with deep industry knowledge and export expertise</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-number">02</div>
                            <h4>Quality Assurance</h4>
                            <p>Rigorous quality checks at every stage ensuring only the best products</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-number">03</div>
                            <h4>Global Network</h4>
                            <p>Extensive network of trusted suppliers and logistics partners worldwide</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-number">04</div>
                            <h4>Transparent Pricing</h4>
                            <p>Competitive rates with no hidden costs, ensuring value for your investment</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-number">05</div>
                            <h4>On-Time Delivery</h4>
                            <p>Efficient logistics and tracking systems for guaranteed timely deliveries</p>
                        </div>
                        <div className="why-us-item">
                            <div className="why-us-number">06</div>
                            <h4>24/7 Support</h4>
                            <p>Dedicated customer support available round the clock for your queries</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
