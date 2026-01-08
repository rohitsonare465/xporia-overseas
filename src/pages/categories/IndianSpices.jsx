import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryPage.css';
import spicesHero from '../../assets/spices-hero.jpg';
import spices1 from '../../assets/spices-1.jpg';
import spices2 from '../../assets/spices-2.jpg';

const IndianSpices = () => {
    return (
        <div className="category-page">
            {/* Hero Section */}
            <section
                className="category-hero"
                style={{ backgroundImage: `url(${spicesHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Indian Spices</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Premium Indian Produce
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Indian Spices</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        Bringing the authentic taste and aroma of India to the world. We specialize in sourcing
                        high-grade spices directly from the heart of Indian agriculture, ensuring premium quality
                        and authentic flavors in every shipment.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Authentic Indian Flavors</h2>
                                <p>
                                    India is known as the "Spice Bowl of the World," and Xporia Overseas takes
                                    pride in delivering this legacy. Our spices division focuses on high-value
                                    crops like Guntur Red Chillies, Erode Turmeric, and Gujarat Cumin.
                                </p>
                                <p>
                                    We understand that international buyers require consistency in quality, grade,
                                    and packaging. Whether you need whole spices for retail packing or bulk powders
                                    for industrial use, we ensure every batch meets international standards.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={spices1} alt="Indian Spices" className="content-image" />
                                <img src={spices2} alt="Premium Quality" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Spice Collection</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <h3>Turmeric</h3>
                            <p>
                                Premium Erode turmeric known for its high curcumin content and vibrant golden color.
                                Available in whole fingers and powder form.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Cumin</h3>
                            <p>
                                Gujarat cumin seeds with superior aroma and flavor. Perfect for both whole spice
                                blends and ground applications.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Cardamom</h3>
                            <p>
                                Green cardamom from Kerala hills, offering intense aroma and flavor. Available in
                                whole pods and seeds.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Black Pepper</h3>
                            <p>
                                Malabar black pepper with high piperine content. Available in whole peppercorns,
                                cracked, and powder forms.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Red Chili</h3>
                            <p>
                                Guntur red chillies known for their heat and color. Available in whole dried form
                                and various powder grades.
                            </p>
                        </div>
                        <div className="product-item">
                            <h3>Coriander</h3>
                            <p>
                                Premium coriander seeds with excellent aroma. Available as whole seeds and finely
                                ground powder.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Ready to Order Premium Indian Spices?</h2>
                        <p>
                            Contact us for bulk orders, custom packaging, or specific grade requirements.
                            We're here to help you source the finest Indian spices for your business.
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

export default IndianSpices;
