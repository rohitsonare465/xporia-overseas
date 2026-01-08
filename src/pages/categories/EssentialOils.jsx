import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryPage.css';
import oilsHero from '../../assets/oils-hero.jpg';
import oils1 from '../../assets/oils-1.jpg';
import oils2 from '../../assets/oils-2.jpg';

const EssentialOils = () => {
    return (
        <div className="category-page">
            {/* Hero Section */}
            <section
                className="category-hero"
                style={{ backgroundImage: `url(${oilsHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Essential Oils</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Pure & Natural Aromatherapy
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Essential Oils</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        Capturing nature's essence in every drop. We extract and export premium essential oils
                        from India's diverse botanical landscape, offering pure, therapeutic-grade oils for
                        aromatherapy, cosmetics, and wellness industries worldwide.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Therapeutic Grade Essential Oils</h2>
                                <p>
                                    Essential oils have been used for centuries in traditional Indian medicine and
                                    aromatherapy. Our essential oils division focuses on steam-distilled and
                                    cold-pressed oils that retain their natural therapeutic properties.
                                </p>
                                <p>
                                    We work with certified distilleries and conduct rigorous GC-MS testing to ensure
                                    purity and authenticity. From eucalyptus to sandalwood, each oil is carefully
                                    extracted, bottled, and shipped to maintain its aromatic and therapeutic integrity.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={oils1} alt="Essential Oils" className="content-image" />
                                <img src={oils2} alt="Aromatherapy Products" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Essential Oil Collection</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <h3>Eucalyptus Oil</h3>
                            <p>
                                Pure eucalyptus globulus oil with high cineole content. Known for respiratory
                                support and refreshing aroma. Ideal for aromatherapy and pharmaceutical use.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Tea Tree Oil</h3>
                            <p>
                                Melaleuca alternifolia oil with powerful antimicrobial properties. Perfect for
                                skincare, cosmetics, and natural cleaning products.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Lavender Oil</h3>
                            <p>
                                Calming lavender essential oil for relaxation and sleep support. High-quality
                                oil suitable for aromatherapy, cosmetics, and personal care products.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Peppermint Oil</h3>
                            <p>
                                Refreshing Mentha piperita oil with high menthol content. Used in aromatherapy,
                                food flavoring, and pharmaceutical applications.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Lemongrass Oil</h3>
                            <p>
                                Citrus-scented Cymbopogon oil with uplifting properties. Popular in perfumery,
                                aromatherapy, and natural insect repellents.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Sandalwood Oil</h3>
                            <p>
                                Premium Santalum album oil with rich, woody aroma. Highly valued in perfumery,
                                meditation, and luxury cosmetics. Sustainably sourced.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Source Premium Essential Oils</h2>
                        <p>
                            Looking for therapeutic-grade essential oils? We provide GC-MS reports,
                            organic certifications, and reliable supply for your business needs.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EssentialOils;
