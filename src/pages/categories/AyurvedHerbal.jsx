import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryPage.css';
import ayurvedHero from '../../assets/ayurved-hero.jpg';
import ayurved1 from '../../assets/ayurved-1.jpg';
import ayurved2 from '../../assets/ayurved-2.jpg';

const AyurvedHerbal = () => {
    return (
        <div className="category-page">
            {/* Hero Section */}
            <section
                className="category-hero"
                style={{ backgroundImage: `url(${ayurvedHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Ayurved & Herbal</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Ancient Wellness Tradition
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Ayurved & Herbal</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        Harnessing 5000 years of Ayurvedic wisdom. We export authentic herbal products and
                        Ayurvedic ingredients sourced from pristine regions of India, bringing natural wellness
                        solutions to global markets.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Natural Wellness from India</h2>
                                <p>
                                    Ayurveda, the ancient Indian system of medicine, has gained global recognition
                                    for its holistic approach to health. Our Ayurvedic and herbal division specializes
                                    in sourcing authentic ingredients from certified organic farms and wild-crafted sources.
                                </p>
                                <p>
                                    From adaptogenic herbs like Ashwagandha to superfoods like Moringa, we ensure
                                    every product maintains its therapeutic properties through careful harvesting,
                                    processing, and storage. All our herbal products are tested for purity and potency.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={ayurved1} alt="Ayurvedic Herbs" className="content-image" />
                                <img src={ayurved2} alt="Herbal Extracts" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Ayurvedic & Herbal Range</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <h3>Ashwagandha</h3>
                            <p>
                                Premium Withania somnifera roots and powder. Known for its adaptogenic properties,
                                stress relief, and energy enhancement. Available in organic and conventional grades.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Tulsi (Holy Basil)</h3>
                            <p>
                                Sacred herb of India with powerful antioxidant properties. Available as dried leaves,
                                powder, and extracts. Perfect for teas and supplements.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Neem</h3>
                            <p>
                                Azadirachta indica leaves, powder, and oil. Renowned for its antibacterial and
                                purifying properties. Used in cosmetics and wellness products.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Moringa</h3>
                            <p>
                                Nutrient-dense superfood from Moringa oleifera. Available as leaf powder, seeds,
                                and oil. Rich in vitamins, minerals, and antioxidants.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Herbal Extracts</h3>
                            <p>
                                Concentrated extracts of various Ayurvedic herbs including Brahmi, Triphala, and
                                Amla. Standardized for active compounds and therapeutic efficacy.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Turmeric Curcumin</h3>
                            <p>
                                High-curcumin turmeric extracts and powders. Anti-inflammatory superfood with
                                global demand. Available in various potency levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Explore Ayurvedic Wellness Solutions</h2>
                        <p>
                            Partner with us for authentic Ayurvedic ingredients and herbal products.
                            We provide certifications, quality reports, and reliable global shipping.
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

export default AyurvedHerbal;
