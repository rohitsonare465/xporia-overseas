import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    {/* Trust Badge */}
                    <div className="hero-badge animate-fade-in">
                        <ShieldCheck size={20} />
                        <span>Certified Indian Exporter</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="hero-title animate-fade-in-up">
                        {siteConfig.company.name}
                    </h1>

                    <p className="hero-tagline animate-fade-in-up">
                        {siteConfig.company.tagline}
                    </p>

                    <p className="hero-description animate-fade-in-up">
                        {siteConfig.company.description}
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas animate-fade-in-up">
                        <Link to="/contact" className="btn btn-gold btn-lg">
                            Get Export Quote
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/products" className="btn btn-outline btn-lg">
                            View Product Catalog
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats animate-fade-in">
                        <div className="hero-stat">
                            <Globe2 className="hero-stat-icon" />
                            <div className="hero-stat-content">
                                <div className="hero-stat-number">50+</div>
                                <div className="hero-stat-label">Countries Served</div>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <ShieldCheck className="hero-stat-icon" />
                            <div className="hero-stat-content">
                                <div className="hero-stat-number">1000+</div>
                                <div className="hero-stat-label">Successful Exports</div>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <ShieldCheck className="hero-stat-icon" />
                            <div className="hero-stat-content">
                                <div className="hero-stat-number">100%</div>
                                <div className="hero-stat-label">Quality Assured</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
