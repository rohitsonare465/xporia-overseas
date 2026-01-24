import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Reviews.css';

const reviewsData = [
    {
        id: 1,
        name: "Ahmed Al-Rashid",
        company: "Al-Rashid Trading Co.",
        country: "UAE",
        flag: "🇦🇪",
        rating: 5,
        review: "Exceptional quality spices! We've been importing from Xporia Overseas for 2 years now. Their turmeric and cumin are the finest we've sourced. Highly recommended for any serious importer.",
        avatar: "AR",
        product: "Indian Spices"
    },
    {
        id: 2,
        name: "Sarah Mitchell",
        company: "Green Earth Organics",
        country: "USA",
        flag: "🇺🇸",
        rating: 5,
        review: "The organic certification and quality documentation provided by Xporia is impeccable. Their basmati rice has become our bestseller. Professional team and reliable delivery!",
        avatar: "SM",
        product: "Agricultural Products"
    },
    {
        id: 3,
        name: "Hiroshi Tanaka",
        company: "Tanaka Imports Ltd.",
        country: "Japan",
        flag: "🇯🇵",
        rating: 5,
        review: "We appreciate the attention to detail and packaging standards. The essential oils arrived in perfect condition. Xporia understands international quality requirements.",
        avatar: "HT",
        product: "Essential Oils"
    },
    {
        id: 4,
        name: "Maria Rodriguez",
        company: "Sabores del Mundo",
        country: "Spain",
        flag: "🇪🇸",
        rating: 5,
        review: "Fantastic partnership! Their cardamom and black pepper are premium grade. Quick responses, competitive pricing, and excellent customer service. Our go-to supplier!",
        avatar: "MR",
        product: "Indian Spices"
    },
    {
        id: 5,
        name: "Michael Thompson",
        company: "UK Spice Traders",
        country: "United Kingdom",
        flag: "🇬🇧",
        rating: 5,
        review: "Been in the spice trade for 20 years. Xporia Overseas stands out for their consistency and reliability.",
        avatar: "MT",
        product: "Indian Spices"
    },
    {
        id: 6,
        name: "Chen Wei",
        company: "Oriental Herbs Co.",
        country: "Singapore",
        flag: "🇸🇬",
        rating: 5,
        review: "The Ayurvedic herbs we source from Xporia are of exceptional quality. Their team's knowledge about traditional Indian herbs is impressive. Trustworthy partner!",
        avatar: "CW",
        product: "Ayurved & Herbal"
    },
    {
        id: 7,
        name: "Klaus Weber",
        company: "Weber Gewürze GmbH",
        country: "Germany",
        flag: "🇩🇪",
        rating: 5,
        review: "German quality standards met! Their documentation, lab reports, and compliance with EU regulations are outstanding. Smooth customs clearance every time.",
        avatar: "KW",
        product: "Agricultural Products"
    },
    {
        id: 8,
        name: "Fatima Al-Hassan",
        company: "Gulf Gourmet Foods",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        rating: 5,
        review: "The textile quality exceeded our expectations. Beautiful traditional fabrics with authentic craftsmanship. Xporia handles export formalities seamlessly.",
        avatar: "FH",
        product: "Indian Textiles"
    },
    {
        id: 9,
        name: "Jean-Pierre Dubois",
        company: "Épices de France",
        country: "France",
        flag: "🇫🇷",
        rating: 5,
        review: "Magnifique! The aromatic quality of their spices is unmatched. Our French customers love the authentic Indian flavors. Professional and punctual delivery.",
        avatar: "JP",
        product: "Indian Spices"
    },
    {
        id: 10,
        name: "Anna Kowalski",
        company: "Eastern Treasures",
        country: "Australia",
        flag: "🇦🇺",
        rating: 5,
        review: "Despite the distance, Xporia ensures our orders arrive fresh and on time. Their cold chain logistics for essential oils is excellent. 5 stars for reliability!",
        avatar: "AK",
        product: "Essential Oils"
    },
    {
        id: 11,
        name: "Robert van der Berg",
        company: "Amsterdam Trade House",
        country: "Netherlands",
        flag: "🇳🇱",
        rating: 5,
        review: "Excellent communication and transparency in pricing. The organic products line is impressive. They've become our primary supplier for Indian commodities.",
        avatar: "RV",
        product: "Agricultural Products"
    },
    {
        id: 12,
        name: "Priya Sharma",
        company: "NZ Spice Emporium",
        country: "New Zealand",
        flag: "🇳🇿",
        rating: 5,
        review: "Outstanding quality and service! The custom packaging options helped us build our brand. Xporia truly understands the export business. Highly recommended!",
        avatar: "PS",
        product: "Indian Spices"
    }
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Number of visible cards based on screen size
    const getVisibleCards = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        return 3;
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    };

    const getVisibleReviews = () => {
        const reviews = [];
        for (let i = 0; i < visibleCards; i++) {
            const index = (currentIndex + i) % reviewsData.length;
            reviews.push(reviewsData[index]);
        }
        return reviews;
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="reviews-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-badge">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Trusted by businesses across 50+ countries worldwide
                    </p>
                </motion.div>

                <div className="reviews-container">
                    <button 
                        className="review-nav-btn prev" 
                        onClick={handlePrev}
                        aria-label="Previous review"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="reviews-track">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div 
                                key={currentIndex}
                                className="reviews-grid"
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {getVisibleReviews().map((review, index) => (
                                    <motion.div
                                        key={review.id}
                                        className="review-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="review-header">
                                            <div className="reviewer-avatar">
                                                {review.avatar}
                                            </div>
                                            <div className="reviewer-info">
                                                <h4 className="reviewer-name">{review.name}</h4>
                                                <p className="reviewer-company">{review.company}</p>
                                                <div className="reviewer-location">
                                                    <span className="flag">{review.flag}</span>
                                                    <span>{review.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="review-rating">
                                            {renderStars(review.rating)}
                                        </div>
                                        
                                        <p className="review-text">"{review.review}"</p>
                                        
                                        <div className="review-product">
                                            <span className="product-tag">{review.product}</span>
                                        </div>

                                        <div className="quote-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                                            </svg>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button 
                        className="review-nav-btn next" 
                        onClick={handleNext}
                        aria-label="Next review"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="reviews-dots">
                    {reviewsData.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="trust-indicators"
                >
                    <div className="trust-item">
                        <span className="trust-number">500+</span>
                        <span className="trust-label">Happy Clients</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">50+</span>
                        <span className="trust-label">Countries Served</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">10K+</span>
                        <span className="trust-label">Orders Delivered</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">4.9</span>
                        <span className="trust-label">Average Rating</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
