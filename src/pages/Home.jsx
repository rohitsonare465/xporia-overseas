import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import ExportProcess from '../components/ExportProcess';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ProductGrid />
            <ExportProcess />

            {/* Why Choose Us Section */}
            <section className="section why-choose-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Xporia Overseas?</h2>
                        <p className="section-subtitle">
                            Your trusted partner for hassle-free global trade
                        </p>
                    </div>

                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <div className="why-choose-icon">🏆</div>
                            <h3>Premium Quality</h3>
                            <p>Rigorous quality control ensuring only the best products reach you</p>
                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-icon">🌍</div>
                            <h3>Global Reach</h3>
                            <p>Extensive network connecting businesses across 50+ countries</p>
                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-icon">⚡</div>
                            <h3>Fast Delivery</h3>
                            <p>Efficient logistics ensuring on-time delivery every time</p>
                        </div>
                        <div className="why-choose-card">
                            <div className="why-choose-icon">💎</div>
                            <h3>Competitive Pricing</h3>
                            <p>Direct sourcing from manufacturers for best market rates</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Export Journey?</h2>
                        <p>Get a free quote and discover how we can help grow your business globally</p>
                        <a href="/contact" className="btn btn-gold btn-lg">
                            Request Free Quote Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
