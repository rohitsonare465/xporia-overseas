import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import './CategoryPage.css';
import agricultureHero from '../../assets/agriculture-hero.jpg';
import agriculture1 from '../../assets/agriculture-1.jpg';
import agriculture2 from '../../assets/agriculture-2.jpg';
import riceImg from '../../assets/products/rice.jpg';
import pulsesImg from '../../assets/products/pulses.jpg';
import milletsImg from '../../assets/products/millets.jpg';
import jaggeryImg from '../../assets/products/jaggery.jpg';
import chickpeasImg from '../../assets/products/chickpeas.jpg';
import psylliumHuskImg from '../../assets/products/psyllium-husk.jpg';
import foxnutImg from '../../assets/products/foxnut.jpg';
import teaImg from '../../assets/products/tea.jpg';
import coffeeImg from '../../assets/products/coffee.jpg';

const AgriculturalCommodities = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Agricultural Products
    const agriculturalProducts = [
        {
            id: 'agri-001',
            name: 'Rice',
            category: 'Agricultural Commodities',
            image: riceImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Basmati, Non-Basmati',
                'Grain Length': '6-8mm (Basmati)',
                'Moisture': 'Max 14%',
                'Packaging': '25kg/50kg PP bags',
                'Shelf Life': '12 months',
                'Purity': '95% minimum',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-002',
            name: 'Pulses',
            category: 'Agricultural Commodities',
            image: pulsesImg,
            specifications: {
                'Origin': 'India',
                'Varieties': 'Toor Dal, Moong Dal, Urad Dal, Masoor Dal',
                'Moisture': 'Max 12%',
                'Packaging': '25kg/50kg bags',
                'Shelf Life': '12 months',
                'Purity': '99%',
                'Split': 'Machine Split',
                'Grade': 'Premium'
            }
        },
        {
            id: 'agri-003',
            name: 'Millets',
            category: 'Agricultural Commodities',
            image: milletsImg,
            specifications: {
                'Origin': 'India',
                'Varieties': 'Pearl, Finger, Foxtail, Proso, Barnyard, Kodo',
                'Moisture': 'Max 12%',
                'Packaging': '25kg/50kg bags',
                'Shelf Life': '12 months',
                'Purity': '99%',
                'Type': 'Organic & Conventional',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-004',
            name: 'Jaggery',
            category: 'Agricultural Commodities',
            image: jaggeryImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Sugarcane Jaggery',
                'Color': 'Golden Brown',
                'Moisture': 'Max 8%',
                'Packaging': '25kg/50kg bags or blocks',
                'Shelf Life': '12 months',
                'Form': 'Block/Powder',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-005',
            name: 'Chickpeas',
            category: 'Agricultural Commodities',
            image: chickpeasImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Kabuli & Desi',
                'Size': '7-9mm (Kabuli)',
                'Moisture': 'Max 12%',
                'Packaging': '25kg/50kg PP bags',
                'Shelf Life': '12 months',
                'Purity': '99%',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-006',
            name: 'Psyllium Husk (Isabgol)',
            category: 'Agricultural Commodities',
            image: psylliumHuskImg,
            specifications: {
                'Origin': 'India',
                'Purity': '95-99%',
                'Moisture': 'Max 12%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Form': 'Husk/Powder',
                'Color': 'White to Cream',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-007',
            name: 'Foxnut (Makhana)',
            category: 'Agricultural Commodities',
            image: foxnutImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Popped Lotus Seeds',
                'Size': 'Jumbo, Medium, Small',
                'Moisture': 'Max 10%',
                'Packaging': '10kg/25kg cartons',
                'Shelf Life': '12 months',
                'Color': 'White',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-008',
            name: 'Tea',
            category: 'Agricultural Commodities',
            image: teaImg,
            specifications: {
                'Origin': 'India',
                'Varieties': 'Assam, Darjeeling, Nilgiri, Green Tea',
                'Type': 'CTC, Orthodox, Green',
                'Moisture': 'Max 7%',
                'Packaging': '25kg/50kg bags',
                'Shelf Life': '24 months',
                'Form': 'Loose Leaf',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'agri-009',
            name: 'Coffee',
            category: 'Agricultural Commodities',
            image: coffeeImg,
            specifications: {
                'Origin': 'India',
                'Varieties': 'Arabica, Robusta',
                'Type': 'Green Beans, Roasted',
                'Moisture': 'Max 12%',
                'Packaging': '60kg jute bags',
                'Shelf Life': '12 months (green), 6 months (roasted)',
                'Grade': 'AA, A, Premium',
                'Processing': 'Washed/Natural'
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

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Product Range</h2>
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {agriculturalProducts.map((product) => (
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

export default AgriculturalCommodities;
