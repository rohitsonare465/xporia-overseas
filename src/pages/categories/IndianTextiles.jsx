import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import './CategoryPage.css';
import textilesHero from '../../assets/textiles-hero.jpg';
import textiles1 from '../../assets/textiles-1.jpg';
import textiles2 from '../../assets/textiles-2.jpg';
import organicCottonImg from '../../assets/products/organic-cotton.jpg';
import bambooFabricImg from '../../assets/products/bamboo-fabric.jpg';
import recycledPolyesterImg from '../../assets/products/recycled-polyester.jpg';
import woolImg from '../../assets/products/wool.jpg';
import juteImg from '../../assets/products/jute-fabric.jpg';

const IndianTextiles = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Textile Products
    const textileProducts = [
        {
            id: 'textile-001',
            name: 'Organic Cotton',
            category: 'Indian Textiles',
            image: organicCottonImg,
            specifications: {
                'Material': '100% Organic Cotton',
                'Certification': 'GOTS Certified',
                'Thread Count': '200-400 TC',
                'Width': '44-60 inches',
                'Weight': '100-200 GSM',
                'Packaging': 'Rolls/Bales',
                'MOQ': '500 meters',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'textile-002',
            name: 'Bamboo Fabric',
            category: 'Indian Textiles',
            image: bambooFabricImg,
            specifications: {
                'Material': '100% Bamboo Fiber',
                'Type': 'Bamboo Viscose',
                'Width': '58-60 inches',
                'Weight': '150-250 GSM',
                'Features': 'Antibacterial, Breathable',
                'Packaging': 'Rolls',
                'MOQ': '500 meters',
                'Grade': 'Premium Eco-Friendly'
            }
        },
        {
            id: 'textile-003',
            name: 'Recycled Polyester',
            category: 'Indian Textiles',
            image: recycledPolyesterImg,
            specifications: {
                'Material': '100% Recycled PET',
                'Certification': 'GRS Certified',
                'Width': '58-60 inches',
                'Weight': '100-300 GSM',
                'Features': 'Sustainable, Durable',
                'Packaging': 'Rolls',
                'MOQ': '1000 meters',
                'Grade': 'Premium Recycled'
            }
        },
        {
            id: 'textile-004',
            name: 'Wool',
            category: 'Indian Textiles',
            image: woolImg,
            specifications: {
                'Material': '100% Pure Wool',
                'Type': 'Merino, Pashmina, Regular',
                'Width': '54-60 inches',
                'Weight': '200-400 GSM',
                'Features': 'Warm, Soft, Natural',
                'Packaging': 'Rolls/Bales',
                'MOQ': '300 meters',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'textile-005',
            name: 'Jute',
            category: 'Indian Textiles',
            image: juteImg,
            specifications: {
                'Material': '100% Natural Jute',
                'Type': 'Hessian, Burlap',
                'Width': '40-72 inches',
                'Weight': '200-600 GSM',
                'Features': 'Biodegradable, Eco-Friendly',
                'Packaging': 'Rolls/Bales',
                'MOQ': '500 meters',
                'Grade': 'Premium Natural Fiber'
            }
        }
    ];

    const handleViewSpecifications = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

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
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {textileProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="product-card-category"
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="product-image-wrapper-category">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image-category"
                                    />
                                </div>
                                <div className="product-info-category">
                                    <span className="product-category-badge-small">
                                        {product.category}
                                    </span>
                                    <h3 className="product-name-category">{product.name}</h3>
                                    <button
                                        className="view-specs-btn-category"
                                        onClick={() => handleViewSpecifications(product)}
                                    >
                                        View Specifications
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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

            {/* Product Modal */}
            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default IndianTextiles;
