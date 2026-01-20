import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from '../components/ProductModal';
import productsData from '../data/productsData';
import './ProductListing.css';

const ProductListing = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                staggerChildren: 0.1
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
        <div className="product-listing-page">
            <div className="container">
                {/* Page Header */}
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Our Product Catalog</h1>
                    <p className="page-subtitle">
                        Explore our comprehensive range of premium export products
                    </p>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    className="products-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {productsData.map((product) => (
                        <motion.div
                            key={product.id}
                            className="product-card-wrapper"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="product-card-listing">
                                {/* Product Image */}
                                <div className="product-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image-listing"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="product-info-listing">
                                    <span className="product-category-badge">
                                        {product.category}
                                    </span>
                                    <h3 className="product-name-listing">{product.name}</h3>

                                    {/* View Specifications Button */}
                                    <button
                                        className="view-specs-btn"
                                        onClick={() => handleViewSpecifications(product)}
                                    >
                                        View Specifications
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

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

export default ProductListing;
