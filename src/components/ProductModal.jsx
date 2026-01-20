import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Close modal when clicking on backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        className="modal-container"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                            <X size={24} />
                        </button>

                        {/* Modal Content */}
                        <div className="modal-content">
                            {/* Product Image */}
                            <div className="modal-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="modal-product-image"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="modal-details">
                                {/* Category Badge */}
                                <span className="modal-category-badge">{product.category}</span>

                                {/* Product Name */}
                                <h2 className="modal-product-name">{product.name}</h2>

                                {/* Specifications */}
                                <div className="specifications-section">
                                    <h3 className="specifications-title">Product Specifications</h3>
                                    <div className="specifications-list">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="specification-item">
                                                <span className="spec-label">{key}</span>
                                                <span className="spec-value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact CTA */}
                                <div className="modal-cta">
                                    <a
                                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-contact-btn"
                                    >
                                        Enquire on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
