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

            {/* Product Categories */}
            <ProductGrid />

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
