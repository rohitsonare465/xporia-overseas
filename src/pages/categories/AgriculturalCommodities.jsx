import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import agriculturalProducts from '../../data/agriculturalProducts';
import './CategoryPage.css';
import agricultureHero from '../../assets/agriculture-hero.jpg';
import agriculture1 from '../../assets/agriculture-1.jpg';
import agriculture2 from '../../assets/agriculture-2.jpg';

const AgriculturalCommodities = () => {
    return (
        <div className="category-page">
            {/* Hero Section */}
            <section
                className="category-hero"
                style={{ backgroundImage: `url(${agricultureHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Agricultural Commodities</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Premium Indian Produce
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Agricultural Commodities</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        From the fertile fields of India to global markets. We source premium agricultural
                        commodities including basmati rice, wheat, pulses, and millets directly from trusted
                        farmers, ensuring quality and sustainability in every shipment.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Farm to Global Markets</h2>
                                <p>
                                    India's agricultural heritage spans thousands of years, and we bring this legacy
                                    to international buyers. Our agricultural commodities division specializes in
                                    premium grains, pulses, and oilseeds sourced from the best farming regions.
                                </p>
                                <p>
                                    We work directly with farmer cooperatives to ensure fair pricing, sustainable
                                    farming practices, and consistent quality. Our rigorous quality control processes
                                    guarantee that every batch meets international food safety standards.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={agriculture1} alt="Agricultural Products" className="content-image" />
                                <img src={agriculture2} alt="Premium Grains" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Listing Section */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Product Range</h2>
                    <p className="section-subtitle">
                        Browse our selection of premium agricultural commodities. We offer flexible MOQ and mixed container shipments.
                    </p>
                    <div className="products-grid">
                        {agriculturalProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Source Premium Agricultural Products</h2>
                        <p>
                            Looking for bulk agricultural commodities? We offer competitive pricing,
                            reliable supply chains, and quality assurance for all our products.
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

export default AgriculturalCommodities;
