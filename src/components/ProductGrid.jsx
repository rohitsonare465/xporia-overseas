import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './ProductGrid.css';

const ProductGrid = () => {
    const getIcon = (iconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent size={48} /> : <Icons.Package size={48} />;
    };

    return (
        <section className="section product-grid-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Product Range</h2>
                    <p className="section-subtitle">
                        Explore our diverse catalog of premium export products
                    </p>
                </div>

                <div className="product-grid">
                    {siteConfig.productCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="product-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-card-icon">
                                {getIcon(category.icon)}
                            </div>
                            <h3 className="product-card-title">{category.name}</h3>
                            <p className="product-card-description">{category.description}</p>
                            <ul className="product-card-items">
                                {category.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <Link to={`/products/${category.slug}`} className="product-card-link">
                                View All Products
                                <Icons.ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
