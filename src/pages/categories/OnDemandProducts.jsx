import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import siteConfig from '../../config/siteConfig';
import './CategoryPage.css';

// Using existing image as hero background
import onDemandHero from '../../assets/images/products-assortment.png';

const OnDemandProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // On-Demand Products
    const onDemandProducts = [
        {
            id: 'ondemand-001',
            name: 'Organic & Bio Fertilisers',
            category: 'On-Demand Products',
            image: null,
            specifications: {
                'Type': 'Organic, Bio-fertilizers',
                'Forms': 'Granular, Powder, Liquid',
                'Certification': 'Organic Certified',
                'Composition': 'Nitrogen, Phosphorus, Potassium',
                'Application': 'Agriculture, Horticulture',
                'Packaging': 'As per requirement',
                'MOQ': 'Contact for details',
                'Custom': 'Available on request'
            }
        },
        {
            id: 'ondemand-002',
            name: 'Bio-degradable Products',
            category: 'On-Demand Products',
            image: null,
            specifications: {
                'Type': 'Eco-friendly, Biodegradable',
                'Materials': 'Plant-based, Compostable',
                'Products': 'Bags, Containers, Packaging',
                'Certification': 'Biodegradable Certified',
                'Features': 'Sustainable, Zero waste',
                'Packaging': 'Customizable',
                'MOQ': 'Contact for details',
                'Custom': 'Available on request'
            }
        },
        {
            id: 'ondemand-003',
            name: 'Plywood',
            category: 'On-Demand Products',
            image: null,
            specifications: {
                'Type': 'Commercial, Marine, BWR',
                'Thickness': '4mm - 25mm',
                'Size': 'Standard & Custom sizes',
                'Grade': 'A, B, C grades available',
                'Features': 'Water resistant, Durable',
                'Certification': 'ISI Certified',
                'MOQ': 'Contact for details',
                'Custom': 'Sizes available on request'
            }
        },
        {
            id: 'ondemand-004',
            name: 'MDF Boards',
            category: 'On-Demand Products',
            image: null,
            specifications: {
                'Type': 'Plain, Pre-laminated, HDF',
                'Thickness': '2.5mm - 30mm',
                'Size': 'Standard & Custom sizes',
                'Density': 'Standard, High Density',
                'Features': 'Smooth surface, Easy to work',
                'Application': 'Furniture, Interior decoration',
                'MOQ': 'Contact for details',
                'Custom': 'Available on request'
            }
        },
        {
            id: 'ondemand-005',
            name: 'Raw Materials',
            category: 'On-Demand Products',
            image: null,
            specifications: {
                'Type': 'Industrial, Agricultural',
                'Categories': 'Chemicals, Minerals, Metals',
                'Sourcing': 'Direct from manufacturers',
                'Quality': 'Industry grade certified',
                'Packaging': 'As per requirement',
                'Documentation': 'All export docs provided',
                'MOQ': 'Contact for details',
                'Custom': 'Sourcing available on request'
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

    const handleEnquiry = (productName) => {
        const message = `Hi, I'm interested in ${productName}. Please share more details about availability, pricing, and MOQ.`;
        const whatsappNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
                style={{ backgroundImage: `url(${onDemandHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>On-Demand Products</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Custom Sourcing Solutions
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">On-Demand Products</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        Custom sourcing for specialized industrial and agricultural requirements. 
                        We source and export a wide range of products based on your specific needs, 
                        from organic fertilizers to industrial raw materials.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid single-column">
                            <div className="content-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                                <h2>Tailored Sourcing for Your Business</h2>
                                <p>
                                    At Xporia Overseas, we understand that every business has unique requirements. 
                                    Our On-Demand Products division specializes in sourcing specialized products 
                                    that may not be part of our regular catalog.
                                </p>
                                <p>
                                    Whether you need organic fertilizers for sustainable agriculture, 
                                    eco-friendly biodegradable products, construction materials like plywood and MDF boards, 
                                    or specific industrial raw materials - we can source and export them for you 
                                    with the same quality assurance and documentation support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Available On-Demand Products</h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                        Click on any product to view specifications or enquire directly via WhatsApp
                    </p>
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {onDemandProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="product-card-category on-demand-card"
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="product-image-wrapper-category on-demand-placeholder">
                                    <div className="placeholder-icon">
                                        <span className="placeholder-text">{product.name.charAt(0)}</span>
                                    </div>
                                </div>
                                <div className="product-info-category">
                                    <span className="product-category-badge-small on-demand-badge">
                                        {product.category}
                                    </span>
                                    <h3 className="product-name-category">{product.name}</h3>
                                    <div className="product-actions">
                                        <button
                                            className="view-specs-btn-category"
                                            onClick={() => handleViewSpecifications(product)}
                                        >
                                            View Specifications
                                        </button>
                                        <button
                                            className="enquiry-btn"
                                            onClick={() => handleEnquiry(product.name)}
                                        >
                                            <MessageCircle size={16} />
                                            Enquire Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Custom Requirements Section */}
            <section className="section custom-requirements-section">
                <div className="container">
                    <div className="custom-requirements-card">
                        <h2>Need Something Specific?</h2>
                        <p>
                            Don't see what you're looking for? We can source virtually any product for export. 
                            Share your requirements with us, and we'll provide you with sourcing options, 
                            pricing, and delivery timelines.
                        </p>
                        <div className="cta-buttons">
                            <button 
                                className="btn btn-primary btn-lg"
                                onClick={() => handleEnquiry('Custom Product Requirement')}
                            >
                                <MessageCircle size={20} />
                                WhatsApp Us
                            </button>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Send Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Partner With Us for Custom Sourcing</h2>
                        <p>
                            Looking for reliable sourcing partners for specialized products? 
                            We handle everything from procurement to export documentation.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Get Started
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

export default OnDemandProducts;
