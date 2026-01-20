import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import './Products.css';

const Products = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="container">
                    <h1 className="animate-fade-in-up">Our Products</h1>
                    <p className="products-hero-subtitle animate-fade-in-up">
                        Explore our diverse range of premium export products
                    </p>

                    {/* Search Bar */}
                    <div className="products-search animate-fade-in">
                        <div className="search-wrapper">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search products by name or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="section products-highlights-section">
                <div className="container">
                    <div className="products-highlights-content">
                        <div className="products-highlights-text">
                            <h2 className="section-title">Premium Quality, Infinite Variety</h2>
                            <p>
                                At Xporia Overseas, we take pride in offering an extensive catalog of top-tier products sourced
                                directly from the finest producers in India. From aromatic spices to durable textiles,
                                our selection is curated to meet global standards.
                            </p>
                            <div className="highlight-features">
                                <div className="highlight-feature">
                                    <div className="feature-icon">✨</div>
                                    <div>
                                        <h4>Curated Selection</h4>
                                        <p>Handpicked products ensuring authentic quality.</p>
                                    </div>
                                </div>
                                <div className="highlight-feature">
                                    <div className="feature-icon">📦</div>
                                    <div>
                                        <h4>Secure Packaging</h4>
                                        <p>Export-ready packaging for safe global transit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-highlights-images">
                            <div className="highlight-image-wrapper img-1">
                                <img src={require('../assets/images/products-assortment.png')} alt="Premium Product Assortment" />
                            </div>
                            <div className="highlight-image-wrapper img-2">
                                <img src={require('../assets/images/products-packaging.png')} alt="Secure Export Packaging" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <ProductGrid searchQuery={searchQuery} />

            {/* Call to Action */}
            <section className="section products-cta-section">
                <div className="container">
                    <div className="products-cta">
                        <h2>Can't Find What You're Looking For?</h2>
                        <p>
                            We source a wide variety of products. Contact us with your requirements,
                            and we'll help you find exactly what you need.
                        </p>
                        <a href="/contact" className="btn btn-gold btn-lg">
                            Contact Us for Custom Requirements
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
