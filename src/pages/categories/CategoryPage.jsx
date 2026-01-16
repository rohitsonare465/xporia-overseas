import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Loader2 } from 'lucide-react';
import { useCategory, useProductsByCategory } from '../../hooks';
import ProductCard from '../../components/ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
    const { slug } = useParams();
    const { category, loading: categoryLoading, error: categoryError } = useCategory(slug);
    const { products, loading: productsLoading, error: productsError } = useProductsByCategory(slug);

    // Show loading state
    if (categoryLoading) {
        return (
            <div className="category-page">
                <div className="loading-container">
                    <Loader2 className="loading-spinner" size={48} />
                    <p>Loading category...</p>
                </div>
            </div>
        );
    }

    // If category not found, redirect to products page
    if (!category && !categoryLoading) {
        return <Navigate to="/products" replace />;
    }

    // Default hero image if none provided
    const heroImageStyle = category?.heroImage 
        ? { backgroundImage: `url(${category.heroImage})` }
        : { backgroundColor: 'var(--deep-green)' };

    return (
        <div className="category-page">
            {/* Hero Section */}
            <section className="category-hero" style={heroImageStyle}>
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>{category?.name}</span>
                    </div>

                    {/* Badge */}
                    {category?.badge && (
                        <div className="category-badge animate-fade-in-up">
                            {category.badge}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="animate-fade-in-up">{category?.name}</h1>

                    {/* Description */}
                    {category?.description && (
                        <p className="category-hero-description animate-fade-in-up">
                            {category.description}
                        </p>
                    )}
                </div>
            </section>

            {/* Gallery Section (if images exist) */}
            {category?.galleryImages && category.galleryImages.length > 0 && (
                <section className="category-content">
                    <div className="container">
                        <div className="content-section">
                            <div className="content-grid">
                                <div className="content-text">
                                    <h2>About {category.name}</h2>
                                    {category.fullDescription ? (
                                        // Render portable text if available
                                        <div className="rich-text">
                                            {category.fullDescription.map((block, index) => {
                                                if (block._type === 'block') {
                                                    return <p key={index}>{block.children?.map(child => child.text).join('')}</p>;
                                                }
                                                return null;
                                            })}
                                        </div>
                                    ) : (
                                        <p>{category.description}</p>
                                    )}
                                </div>
                                <div className="content-images">
                                    {category.galleryImages.slice(0, 2).map((img, index) => (
                                        <img 
                                            key={index}
                                            src={img} 
                                            alt={`${category.name} ${index + 1}`} 
                                            className="content-image" 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Products Section */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our {category?.name} Collection</h2>
                    
                    {productsLoading ? (
                        <div className="products-loading">
                            <Loader2 className="loading-spinner" size={32} />
                            <p>Loading products...</p>
                        </div>
                    ) : products && products.length > 0 ? (
                        <div className="products-grid">
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No products available in this category yet.</p>
                            <p>Check back soon or contact us for more information.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="category-cta">
                        <h2>Ready to Order {category?.name}?</h2>
                        <p>
                            Contact us for bulk orders, custom packaging, or specific grade requirements.
                            We're here to help you source the finest products for your business.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;
