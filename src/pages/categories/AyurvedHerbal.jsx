import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import './CategoryPage.css';
import ayurvedHero from '../../assets/ayurved-hero.jpg';
import ayurved1 from '../../assets/ayurved-1.jpg';
import ayurved2 from '../../assets/ayurved-2.jpg';
import ashwagandhaImg from '../../assets/products/ashwagandha.jpg';
import shatavariImg from '../../assets/products/shatavari.jpg';
import amlaImg from '../../assets/products/amla.jpg';
import moringaPowderImg from '../../assets/products/moringa-powder.jpg';
import giloyImg from '../../assets/products/giloy.jpg';
import shilajitImg from '../../assets/products/shilajit.jpg';
import brahmiImg from '../../assets/products/brahmi.jpg';
import mulethiImg from '../../assets/products/mulethi.jpg';
import tulsiImg from '../../assets/products/tulsi.jpg';
import neemImg from '../../assets/products/neem.jpg';
import triphalaImg from '../../assets/products/triphala.jpg';
import hingImg from '../../assets/products/hing.jpg';
import bhringrajImg from '../../assets/products/bhringraj.jpg';

const AyurvedHerbal = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ayurvedic & Herbal Products
    const ayurvedProducts = [
        {
            id: 'ayur-001',
            name: 'Ashwagandha',
            category: 'Ayurved & Herbal',
            image: ashwagandhaImg,
            specifications: {
                'Botanical Name': 'Withania somnifera',
                'Part Used': 'Roots',
                'Form': 'Powder/Extract',
                'Active Compound': 'Withanolides 2.5-5%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Certification': 'Organic Available',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-002',
            name: 'Shatavari',
            category: 'Ayurved & Herbal',
            image: shatavariImg,
            specifications: {
                'Botanical Name': 'Asparagus racemosus',
                'Part Used': 'Roots',
                'Form': 'Powder/Extract',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Women\'s Health Support',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-003',
            name: 'Amla (Indian Gooseberry)',
            category: 'Ayurved & Herbal',
            image: amlaImg,
            specifications: {
                'Botanical Name': 'Phyllanthus emblica',
                'Part Used': 'Fruit',
                'Form': 'Powder/Extract/Dried',
                'Vitamin C': 'High Content',
                'Packaging': '25kg bags',
                'Shelf Life': '18 months',
                'Type': 'Organic & Conventional',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-004',
            name: 'Moringa Powder',
            category: 'Ayurved & Herbal',
            image: moringaPowderImg,
            specifications: {
                'Botanical Name': 'Moringa oleifera',
                'Part Used': 'Leaves',
                'Form': 'Fine Powder',
                'Protein Content': '25-30%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Certification': 'Organic Available',
                'Grade': 'Premium Superfood'
            }
        },
        {
            id: 'ayur-005',
            name: 'Giloy',
            category: 'Ayurved & Herbal',
            image: giloyImg,
            specifications: {
                'Botanical Name': 'Tinospora cordifolia',
                'Part Used': 'Stem',
                'Form': 'Powder/Extract',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Immunity Booster',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-006',
            name: 'Shilajit',
            category: 'Ayurved & Herbal',
            image: shilajitImg,
            specifications: {
                'Type': 'Himalayan Mineral Resin',
                'Form': 'Resin/Powder',
                'Fulvic Acid': '60-80%',
                'Purity': 'Premium Grade',
                'Packaging': '1kg/5kg containers',
                'Shelf Life': '36 months',
                'Origin': 'Himalayan Mountains',
                'Grade': 'Gold Grade'
            }
        },
        {
            id: 'ayur-007',
            name: 'Brahmi',
            category: 'Ayurved & Herbal',
            image: brahmiImg,
            specifications: {
                'Botanical Name': 'Bacopa monnieri',
                'Part Used': 'Whole Plant',
                'Form': 'Powder/Extract',
                'Active Compound': 'Bacosides 20-50%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Memory & Cognitive Support',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-008',
            name: 'Mulethi (Licorice)',
            category: 'Ayurved & Herbal',
            image: mulethiImg,
            specifications: {
                'Botanical Name': 'Glycyrrhiza glabra',
                'Part Used': 'Roots',
                'Form': 'Powder/Sticks',
                'Glycyrrhizin': '3-5%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Respiratory & Digestive Support',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-009',
            name: 'Tulsi (Holy Basil)',
            category: 'Ayurved & Herbal',
            image: tulsiImg,
            specifications: {
                'Botanical Name': 'Ocimum sanctum',
                'Part Used': 'Leaves',
                'Form': 'Dried Leaves/Powder',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '18 months',
                'Benefits': 'Immunity & Stress Relief',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-010',
            name: 'Neem',
            category: 'Ayurved & Herbal',
            image: neemImg,
            specifications: {
                'Botanical Name': 'Azadirachta indica',
                'Part Used': 'Leaves/Seeds',
                'Form': 'Powder/Oil',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Antibacterial & Skin Health',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-011',
            name: 'Triphala',
            category: 'Ayurved & Herbal',
            image: triphalaImg,
            specifications: {
                'Composition': 'Amla, Haritaki, Bibhitaki',
                'Form': 'Powder/Tablets',
                'Ratio': '1:1:1',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Digestive & Detox Support',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-012',
            name: 'Hing (Asafoetida)',
            category: 'Ayurved & Herbal',
            image: hingImg,
            specifications: {
                'Botanical Name': 'Ferula assa-foetida',
                'Part Used': 'Resin',
                'Form': 'Powder/Resin',
                'Purity': '95-99%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Digestive Aid & Flavoring',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'ayur-013',
            name: 'Bhringraj',
            category: 'Ayurved & Herbal',
            image: bhringrajImg,
            specifications: {
                'Botanical Name': 'Eclipta alba',
                'Part Used': 'Whole Plant',
                'Form': 'Powder/Oil',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Benefits': 'Hair Growth & Liver Support',
                'Grade': 'Premium Quality'
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
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {ayurvedProducts.map((product) => (
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

export default AyurvedHerbal;
