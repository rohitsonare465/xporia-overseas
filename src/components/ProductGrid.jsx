import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import siteConfig from '../config/siteConfig';
import './ProductGrid.css';

const ProductGrid = ({ searchQuery = '' }) => {
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

    const filteredCategories = siteConfig.productCategories.filter(category => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            category.name.toLowerCase().includes(query) ||
            category.description.toLowerCase().includes(query) ||
            category.items.some(item => item.toLowerCase().includes(query))
        );
    });

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
                        Our Product Range
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        Explore our diverse catalog of premium export products
                    </motion.p>
                </div>

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
                                        {category.items.slice(0, 3).map((item, idx) => (
                                            <li key={idx}>
                                                <span className="bullet">•</span> {item}
                                            </li>
                                        ))}
                                        {category.items.length > 3 && (
                                            <li className="more-items">+{category.items.length - 3} more</li>
                                        )}
                                    </ul>
                                    {category.isInquiryOnly ? (
                                        <button
                                            onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${category.name}`)}`, '_blank')}
                                            className="product-card-link"
                                            style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                                        >
                                            <span>Enquire Now</span>
                                            <Icons.MessageCircle size={16} />
                                        </button>
                                    ) : (
                                        <Link to={`/products/${category.slug}`} className="product-card-link">
                                            <span>View Collection</span>
                                            <Icons.ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-secondary)' }}>
                            <h3>No products found matching "{searchQuery}"</h3>
                            <p>Try searching for categories like "Spices" or "Textiles"</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;
