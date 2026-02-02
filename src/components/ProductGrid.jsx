import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import siteConfig from '../config/siteConfig';
import allProducts from '../data/allProducts';
import ProductModal from './ProductModal';
import './ProductGrid.css';

const ProductGrid = ({ searchQuery = '' }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getIcon = (iconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : <Icons.Package size={32} />;
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Filter individual products when searching
    const filteredProducts = searchQuery
        ? allProducts.filter(product => {
            const query = searchQuery.toLowerCase();
            return (
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        })
        : [];

    const filteredCategories = siteConfig.productCategories.filter(category => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            category.name.toLowerCase().includes(query) ||
            category.description.toLowerCase().includes(query) ||
            category.items.some(item => item.toLowerCase().includes(query))
        );
    });

    const handleViewSpecifications = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Show individual products when searching
    const showProductResults = searchQuery && filteredProducts.length > 0;

    return (
        <section className="section product-grid-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        {showProductResults ? `Search Results for "${searchQuery}"` : 'Our Product Range'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        {showProductResults 
                            ? `Found ${filteredProducts.length} product${filteredProducts.length > 1 ? 's' : ''}`
                            : 'Explore our diverse catalog of premium export products'
                        }
                    </motion.p>
                </div>

                {/* Show individual product results when searching */}
                {showProductResults ? (
                    <motion.div
                        className="product-grid search-results-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="search-product-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="search-product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="search-product-content">
                                    <span className="search-product-category">{product.category}</span>
                                    <h3 className="search-product-name">{product.name}</h3>
                                    <div className="search-product-actions">
                                        <button 
                                            className="btn-view-specs"
                                            onClick={() => handleViewSpecifications(product)}
                                        >
                                            View Specifications
                                        </button>
                                        <Link 
                                            to={`/products/${product.categorySlug}`} 
                                            className="btn-view-category"
                                        >
                                            View Category
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        className="product-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category) => (
                                <motion.div
                                    key={category.id}
                                    className="product-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="product-card-bg"></div>
                                    <div className="product-card-content">
                                        <div className="product-card-icon">
                                            {getIcon(category.icon)}
                                        </div>
                                        <h3 className="product-card-title">{category.name}</h3>
                                        <p className="product-card-description">{category.description}</p>
                                        <ul className="product-card-items">
                                            {category.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="bullet">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to={`/products/${category.slug}`} className="product-card-link">
                                            <span>View Collection</span>
                                            <Icons.ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-secondary)' }}>
                                <h3>No products found matching "{searchQuery}"</h3>
                                <p>Try searching for products like "Rice", "Turmeric", or "Ashwagandha"</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Product Modal */}
            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
            />
        </section>
    );
};

export default ProductGrid;
