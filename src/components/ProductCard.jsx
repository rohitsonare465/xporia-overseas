import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                )}
            </div>

            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                {product.hsCode && (
                    <div className="product-info-row">
                        <span className="info-label">HS Code:</span>
                        <span className="info-value">{product.hsCode}</span>
                    </div>
                )}

                <div className="product-info-row">
                    <span className="info-label">Origin:</span>
                    <span className="info-value">{product.origin}</span>
                </div>

                {product.packaging && (
                    <div className="product-info-row">
                        <span className="info-label">Packaging:</span>
                        <span className="info-value">{product.packaging}</span>
                    </div>
                )}

                {product.moq && (
                    <div className="product-info-row">
                        <span className="info-label">MOQ:</span>
                        <span className="info-value">{product.moq}</span>
                    </div>
                )}

                <button className="enquire-btn">Enquire Now</button>
            </div>
        </div>
    );
};

export default ProductCard;
