import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import './CategoryPage.css';
import spicesHero from '../../assets/spices-hero.jpg';
import spices1 from '../../assets/spices-1.jpg';
import spices2 from '../../assets/spices-2.jpg';
import blackPepperImg from '../../assets/products/black-pepper.jpg';
import dryRedChilliImg from '../../assets/products/dry-red-chilli.jpg';
import chilliPowderImg from '../../assets/products/chilli-powder.jpg';
import turmericImg from '../../assets/products/turmeric.jpg';
import freshGingerImg from '../../assets/products/fresh-ginger.jpg';
import dryGingerImg from '../../assets/products/dry-ginger.jpg';
import greenCardamomImg from '../../assets/products/green-cardamom.jpg';
import blackCardamomImg from '../../assets/products/black-cardamom.jpg';
import cuminSeedsImg from '../../assets/products/cumin-seeds.jpg';
import corianderSeedsImg from '../../assets/products/coriander-seeds.jpg';
import fenugreekImg from '../../assets/products/fenugreek.jpg';
import ajwainImg from '../../assets/products/ajwain.jpg';
import cinnamonImg from '../../assets/products/cinnamon.jpg';
import fennelImg from '../../assets/products/fennel.jpg';
import bayLeafImg from '../../assets/products/bay-leaf.jpg';
import cloveImg from '../../assets/products/clove.jpg';
import nutmegImg from '../../assets/products/nutmeg.jpg';
import starAniseImg from '../../assets/products/star-anise.jpg';
import tamarindImg from '../../assets/products/tamarind.jpg';
import curryLeafImg from '../../assets/products/curry-leaf.jpg';
import blendedMasalasImg from '../../assets/products/blended-masalas.jpg';

const IndianSpices = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Indian Spices Products
    const spicesProducts = [
        {
            id: 'spice-001',
            name: 'Black Pepper',
            category: 'Indian Spices',
            image: blackPepperImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Malabar',
                'Purity': '99.5%',
                'Moisture': 'Max 12%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Size': '4.75mm+',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-002',
            name: 'Dry Red Chilli',
            category: 'Indian Spices',
            image: dryRedChilliImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Teja S17',
                'Color': 'Bright Red',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '18 months',
                'Heat Level': 'Hot',
                'Form': 'Whole/Powder'
            }
        },
        {
            id: 'spice-003',
            name: 'Chilli Powder',
            category: 'Indian Spices',
            image: chilliPowderImg,
            specifications: {
                'Origin': 'India',
                'Color': 'Deep Red',
                'Purity': '99%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '18 months',
                'Heat Level': 'Medium to Hot',
                'Form': 'Fine Powder'
            }
        },
        {
            id: 'spice-004',
            name: 'Turmeric',
            category: 'Indian Spices',
            image: turmericImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Erode/Salem',
                'Curcumin Content': '3-5%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Color': 'Golden Yellow',
                'Form': 'Powder/Fingers'
            }
        },
        {
            id: 'spice-005',
            name: 'Ginger (Fresh)',
            category: 'Indian Spices',
            image: freshGingerImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Fresh Ginger Root',
                'Quality': 'Grade A',
                'Moisture': 'Natural Fresh',
                'Packaging': 'Mesh bags/Cartons',
                'Shelf Life': '2-3 months (refrigerated)',
                'Size': 'Medium to Large',
                'Color': 'Light Brown'
            }
        },
        {
            id: 'spice-006',
            name: 'Ginger (Dry)',
            category: 'Indian Spices',
            image: dryGingerImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Dried Ginger Slices',
                'Moisture': 'Max 12%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Color': 'Light Yellow',
                'Form': 'Slices/Powder',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-007',
            name: 'Cardamom (Small / Green)',
            category: 'Indian Spices',
            image: greenCardamomImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Kerala Green',
                'Size': '6-7mm',
                'Moisture': 'Max 10%',
                'Packaging': '10kg/25kg cartons',
                'Shelf Life': '24 months',
                'Color': 'Green',
                'Grade': 'Premium Bold'
            }
        },
        {
            id: 'spice-008',
            name: 'Cardamom (Large / Black)',
            category: 'Indian Spices',
            image: blackCardamomImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Black Cardamom',
                'Size': 'Large Pods',
                'Moisture': 'Max 12%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Aroma': 'Smoky',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-009',
            name: 'Cumin (Jeera)',
            category: 'Indian Spices',
            image: cuminSeedsImg,
            specifications: {
                'Origin': 'India',
                'Variety': 'Gujarat Cumin',
                'Purity': '99%',
                'Moisture': 'Max 9%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Color': 'Greenish Brown',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-010',
            name: 'Coriander',
            category: 'Indian Spices',
            image: corianderSeedsImg,
            specifications: {
                'Origin': 'India',
                'Purity': '99%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Color': 'Light Brown',
                'Form': 'Whole Seeds/Powder',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-011',
            name: 'Fenugreek (Methi)',
            category: 'Indian Spices',
            image: fenugreekImg,
            specifications: {
                'Origin': 'India',
                'Purity': '99%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Color': 'Yellow-Brown',
                'Form': 'Whole Seeds/Powder',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-012',
            name: 'Ajwain (Carom Seed)',
            category: 'Indian Spices',
            image: ajwainImg,
            specifications: {
                'Origin': 'India',
                'Purity': '99%',
                'Moisture': 'Max 9%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Aroma': 'Strong & Pungent',
                'Form': 'Whole Seeds',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-013',
            name: 'Cinnamon (Dalchini)',
            category: 'Indian Spices',
            image: cinnamonImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Ceylon/Cassia',
                'Moisture': 'Max 12%',
                'Packaging': '25kg cartons',
                'Shelf Life': '24 months',
                'Form': 'Sticks/Powder',
                'Color': 'Light Brown',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-014',
            name: 'Fennel (Saunf)',
            category: 'Indian Spices',
            image: fennelImg,
            specifications: {
                'Origin': 'India',
                'Purity': '99%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg PP bags',
                'Shelf Life': '24 months',
                'Color': 'Green',
                'Form': 'Whole Seeds',
                'Grade': 'Premium Bold'
            }
        },
        {
            id: 'spice-015',
            name: 'Bay Leaf (Tej Patta)',
            category: 'Indian Spices',
            image: bayLeafImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Dried Leaves',
                'Moisture': 'Max 10%',
                'Packaging': '10kg/25kg cartons',
                'Shelf Life': '18 months',
                'Color': 'Green-Brown',
                'Aroma': 'Strong & Aromatic',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-016',
            name: 'Clove',
            category: 'Indian Spices',
            image: cloveImg,
            specifications: {
                'Origin': 'India',
                'Purity': '99%',
                'Moisture': 'Max 10%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Aroma': 'Strong & Sweet',
                'Form': 'Whole Buds',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-017',
            name: 'Nutmeg',
            category: 'Indian Spices',
            image: nutmegImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Whole Nutmeg',
                'Moisture': 'Max 10%',
                'Packaging': '25kg cartons',
                'Shelf Life': '24 months',
                'Size': 'Bold',
                'Form': 'Whole/Powder',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-018',
            name: 'Star Anise',
            category: 'Indian Spices',
            image: starAniseImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Whole Star',
                'Moisture': 'Max 12%',
                'Packaging': '25kg bags',
                'Shelf Life': '24 months',
                'Aroma': 'Sweet & Licorice',
                'Color': 'Brown',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-019',
            name: 'Tamarind (Spice Use)',
            category: 'Indian Spices',
            image: tamarindImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Seedless',
                'Moisture': 'Max 15%',
                'Packaging': '25kg bags',
                'Shelf Life': '12 months',
                'Form': 'Block/Paste',
                'Taste': 'Sour & Tangy',
                'Grade': 'Premium'
            }
        },
        {
            id: 'spice-020',
            name: 'Curry Leaf',
            category: 'Indian Spices',
            image: curryLeafImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Dried Leaves',
                'Moisture': 'Max 10%',
                'Packaging': '10kg/25kg cartons',
                'Shelf Life': '12 months',
                'Color': 'Green',
                'Aroma': 'Strong & Aromatic',
                'Grade': 'Premium Quality'
            }
        },
        {
            id: 'spice-021',
            name: 'Blended Masalas',
            category: 'Indian Spices',
            image: blendedMasalasImg,
            specifications: {
                'Origin': 'India',
                'Type': 'Custom Spice Blends',
                'Varieties': 'Garam Masala, Curry Powder, Tandoori Masala, Chaat Masala',
                'Packaging': '25kg/50kg bags',
                'Shelf Life': '18 months',
                'Form': 'Fine Powder',
                'Customization': 'Available',
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
        setTimeout(() => setSelectedProduct(null), 300);
    };

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
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

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
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {spicesProducts.map((product) => (
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

export default IndianSpices;
