import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryPage.css';
import textilesHero from '../../assets/textiles-hero.jpg';
import textiles1 from '../../assets/textiles-1.jpg';
import textiles2 from '../../assets/textiles-2.jpg';

const IndianTextiles = () => {
    return (
        <div className="category-page">
            {/* Hero Section */}
            <section
                className="category-hero"
                style={{ backgroundImage: `url(${textilesHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Indian Textiles</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Weaving Tradition & Quality
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Indian Textiles</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        From handloom heritage to modern fabrics. We export exquisite Indian textiles that
                        blend traditional craftsmanship with contemporary design, bringing the rich textile
                        legacy of India to fashion and home décor markets worldwide.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Heritage Craftsmanship</h2>
                                <p>
                                    India's textile industry is one of the oldest in the world, with a heritage
                                    spanning over 5000 years. Our textiles division showcases the finest cotton,
                                    silk, and handloom products from renowned weaving clusters across India.
                                </p>
                                <p>
                                    We work with skilled artisans and modern manufacturers to offer a diverse range
                                    of textiles - from traditional silk sarees to contemporary organic cotton fabrics.
                                    Each piece reflects India's rich cultural heritage and commitment to quality.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={textiles1} alt="Indian Textiles" className="content-image" />
                                <img src={textiles2} alt="Handloom Fabrics" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Textile Collection</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <h3>Cotton Fabrics</h3>
                            <p>
                                Premium Indian cotton fabrics including voile, poplin, and cambric. Available in
                                solid colors, prints, and traditional block prints. Perfect for apparel and home textiles.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Silk Sarees</h3>
                            <p>
                                Exquisite silk sarees from Kanchipuram, Banarasi, and Mysore. Featuring intricate
                                zari work, traditional motifs, and vibrant colors. A symbol of Indian elegance.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Handloom Products</h3>
                            <p>
                                Authentic handloom textiles from various Indian states. Includes Khadi, Chanderi,
                                and Maheshwari fabrics. Supporting traditional weavers and sustainable practices.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Embroidered Textiles</h3>
                            <p>
                                Hand-embroidered fabrics featuring Chikankari, Phulkari, and Kantha work. Perfect
                                for high-end fashion, home décor, and luxury accessories.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Organic Cotton</h3>
                            <p>
                                GOTS-certified organic cotton fabrics in various weaves and weights. Eco-friendly
                                and sustainable options for conscious fashion brands.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Home Textiles</h3>
                            <p>
                                Bed linens, curtains, cushion covers, and table linens. Combining traditional
                                Indian designs with modern aesthetics for global home décor markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Discover Indian Textile Excellence</h2>
                        <p>
                            Looking for premium Indian textiles for your brand? We offer custom designs,
                            bulk orders, and quality assurance for all textile products.
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

export default IndianTextiles;
