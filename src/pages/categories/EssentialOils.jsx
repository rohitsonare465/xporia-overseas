import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductModal from '../../components/ProductModal';
import './CategoryPage.css';
import oilsHero from '../../assets/oils-hero.jpg';
import oils1 from '../../assets/oils-1.jpg';
import oils2 from '../../assets/oils-2.jpg';
import roseOilImg from '../../assets/products/rose-oil.jpg';
import jasmineOilImg from '../../assets/products/jasmine-oil.jpg';
import lavenderOilImg from '../../assets/products/lavender-oil.jpg';
import peppermintOilImg from '../../assets/products/peppermint-oil.jpg';
import spearmintOilImg from '../../assets/products/spearmint-oil.jpg';
import teaTreeOilImg from '../../assets/products/tea-tree-oil.jpg';
import basilOilImg from '../../assets/products/basil-oil.jpg';
import rosemaryOilImg from '../../assets/products/rosemary-oil.jpg';
import thymeOilImg from '../../assets/products/thyme-oil.jpg';
import cloveOilImg from '../../assets/products/clove-oil.jpg';
import cinnamonOilImg from '../../assets/products/cinnamon-oil.jpg';
import blackPepperOilImg from '../../assets/products/black-pepper-oil.jpg';
import cardamomOilImg from '../../assets/products/cardamom-oil.jpg';
import nutmegOilImg from '../../assets/products/nutmeg-oil.jpg';
import gingerOilImg from '../../assets/products/ginger-oil.jpg';
import sandalwoodOilImg from '../../assets/products/sandalwood-oil.jpg';
import cedarwoodOilImg from '../../assets/products/cedarwood-oil.jpg';
import pineOilImg from '../../assets/products/pine-oil.jpg';
import cypressOilImg from '../../assets/products/cypress-oil.jpg';
import frankincenseOilImg from '../../assets/products/frankincense-oil.jpg';
import myrrhOilImg from '../../assets/products/myrrh-oil.jpg';
import lemongrassOilImg from '../../assets/products/lemongrass-oil.jpg';
import vetiverOilImg from '../../assets/products/vetiver-oil.jpg';
import palmarosaOilImg from '../../assets/products/palmarosa-oil.jpg';
import citronellaOilImg from '../../assets/products/citronella-oil.jpg';
import patchouliOilImg from '../../assets/products/patchouli-oil.jpg';
import neemOilImg from '../../assets/products/neem-oil.jpg';
import bergamotOilImg from '../../assets/products/bergamot-oil.jpg';
import eucalyptusOilImg from '../../assets/products/eucalyptus-oil.jpg';

const EssentialOils = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Essential Oil Products
    const essentialOilProducts = [
        {
            id: 'oil-001',
            name: 'Rose Oil',
            category: 'Essential Oils',
            image: roseOilImg,
            specifications: {
                'Botanical Name': 'Rosa damascena',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-002',
            name: 'Jasmine Oil',
            category: 'Essential Oils',
            image: jasmineOilImg,
            specifications: {
                'Botanical Name': 'Jasminum grandiflorum',
                'Extraction Method': 'Solvent Extraction',
                'Purity': '100% Pure Absolute',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Absolute'
            }
        },
        {
            id: 'oil-003',
            name: 'Lavender Oil',
            category: 'Essential Oils',
            image: lavenderOilImg,
            specifications: {
                'Botanical Name': 'Lavandula angustifolia',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-004',
            name: 'Peppermint Oil',
            category: 'Essential Oils',
            image: peppermintOilImg,
            specifications: {
                'Botanical Name': 'Mentha piperita',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Menthol Content': '40-50%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-005',
            name: 'Spearmint Oil',
            category: 'Essential Oils',
            image: spearmintOilImg,
            specifications: {
                'Botanical Name': 'Mentha spicata',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Carvone Content': '50-70%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-006',
            name: 'Tea Tree Oil',
            category: 'Essential Oils',
            image: teaTreeOilImg,
            specifications: {
                'Botanical Name': 'Melaleuca alternifolia',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Terpinen-4-ol': '30-48%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-007',
            name: 'Basil Oil',
            category: 'Essential Oils',
            image: basilOilImg,
            specifications: {
                'Botanical Name': 'Ocimum basilicum',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-008',
            name: 'Rosemary Oil',
            category: 'Essential Oils',
            image: rosemaryOilImg,
            specifications: {
                'Botanical Name': 'Rosmarinus officinalis',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-009',
            name: 'Thyme Oil',
            category: 'Essential Oils',
            image: thymeOilImg,
            specifications: {
                'Botanical Name': 'Thymus vulgaris',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Thymol Content': '30-50%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-010',
            name: 'Clove Oil',
            category: 'Essential Oils',
            image: cloveOilImg,
            specifications: {
                'Botanical Name': 'Syzygium aromaticum',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Eugenol Content': '75-85%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-011',
            name: 'Cinnamon Oil',
            category: 'Essential Oils',
            image: cinnamonOilImg,
            specifications: {
                'Botanical Name': 'Cinnamomum verum',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Cinnamaldehyde': '60-75%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-012',
            name: 'Black Pepper Oil',
            category: 'Essential Oils',
            image: blackPepperOilImg,
            specifications: {
                'Botanical Name': 'Piper nigrum',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-013',
            name: 'Cardamom Oil',
            category: 'Essential Oils',
            image: cardamomOilImg,
            specifications: {
                'Botanical Name': 'Elettaria cardamomum',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-014',
            name: 'Nutmeg Oil',
            category: 'Essential Oils',
            image: nutmegOilImg,
            specifications: {
                'Botanical Name': 'Myristica fragrans',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-015',
            name: 'Ginger Oil',
            category: 'Essential Oils',
            image: gingerOilImg,
            specifications: {
                'Botanical Name': 'Zingiber officinale',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-016',
            name: 'Sandalwood Oil',
            category: 'Essential Oils',
            image: sandalwoodOilImg,
            specifications: {
                'Botanical Name': 'Santalum album',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Therapeutic'
            }
        },
        {
            id: 'oil-017',
            name: 'Cedarwood Oil',
            category: 'Essential Oils',
            image: cedarwoodOilImg,
            specifications: {
                'Botanical Name': 'Cedrus atlantica',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-018',
            name: 'Pine Oil',
            category: 'Essential Oils',
            image: pineOilImg,
            specifications: {
                'Botanical Name': 'Pinus sylvestris',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-019',
            name: 'Cypress Oil',
            category: 'Essential Oils',
            image: cypressOilImg,
            specifications: {
                'Botanical Name': 'Cupressus sempervirens',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-020',
            name: 'Frankincense Oil',
            category: 'Essential Oils',
            image: frankincenseOilImg,
            specifications: {
                'Botanical Name': 'Boswellia serrata',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Therapeutic'
            }
        },
        {
            id: 'oil-021',
            name: 'Myrrh Oil',
            category: 'Essential Oils',
            image: myrrhOilImg,
            specifications: {
                'Botanical Name': 'Commiphora myrrha',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Therapeutic'
            }
        },
        {
            id: 'oil-022',
            name: 'Lemongrass Oil',
            category: 'Essential Oils',
            image: lemongrassOilImg,
            specifications: {
                'Botanical Name': 'Cymbopogon flexuosus',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Citral Content': '70-85%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-023',
            name: 'Vetiver (Khus) Oil',
            category: 'Essential Oils',
            image: vetiverOilImg,
            specifications: {
                'Botanical Name': 'Chrysopogon zizanioides',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Therapeutic'
            }
        },
        {
            id: 'oil-024',
            name: 'Palmarosa Oil',
            category: 'Essential Oils',
            image: palmarosaOilImg,
            specifications: {
                'Botanical Name': 'Cymbopogon martinii',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Geraniol Content': '75-85%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-025',
            name: 'Citronella Oil',
            category: 'Essential Oils',
            image: citronellaOilImg,
            specifications: {
                'Botanical Name': 'Cymbopogon winterianus',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Application': 'Repellent/Aromatherapy',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Commercial/Therapeutic'
            }
        },
        {
            id: 'oil-026',
            name: 'Patchouli Oil',
            category: 'Essential Oils',
            image: patchouliOilImg,
            specifications: {
                'Botanical Name': 'Pogostemon cablin',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '36 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Premium Therapeutic'
            }
        },
        {
            id: 'oil-027',
            name: 'Neem Oil',
            category: 'Essential Oils',
            image: neemOilImg,
            specifications: {
                'Botanical Name': 'Azadirachta indica',
                'Extraction Method': 'Cold Pressed',
                'Purity': '100% Pure',
                'Azadirachtin': '1500-3000 PPM',
                'Packaging': '100ml/250ml/500ml/1L bottles',
                'Shelf Life': '24 months',
                'Testing': 'Lab Tested',
                'Grade': 'Pharmaceutical/Cosmetic'
            }
        },
        {
            id: 'oil-028',
            name: 'Bergamot Oil',
            category: 'Essential Oils',
            image: bergamotOilImg,
            specifications: {
                'Botanical Name': 'Citrus bergamia',
                'Extraction Method': 'Cold Pressed',
                'Purity': '100% Pure',
                'Origin': 'India',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '12 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
            }
        },
        {
            id: 'oil-029',
            name: 'Eucalyptus Oil',
            category: 'Essential Oils',
            image: eucalyptusOilImg,
            specifications: {
                'Botanical Name': 'Eucalyptus globulus',
                'Extraction Method': 'Steam Distillation',
                'Purity': '100% Pure',
                'Cineole Content': '60-80%',
                'Packaging': '10ml/25ml/100ml bottles',
                'Shelf Life': '24 months',
                'Testing': 'GC-MS Certified',
                'Grade': 'Therapeutic Grade'
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
                style={{ backgroundImage: `url(${oilsHero})` }}
            >
                <div className="container">
                    {/* Breadcrumb */}
                    <div className="breadcrumb animate-fade-in">
                        <Link to="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/products">Products</Link>
                        <ChevronRight size={16} />
                        <span>Essential Oils</span>
                    </div>

                    {/* Badge */}
                    <div className="category-badge animate-fade-in-up">
                        Pure & Natural Aromatherapy
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-in-up">Essential Oils</h1>

                    {/* Description */}
                    <p className="category-hero-description animate-fade-in-up">
                        Capturing nature's essence in every drop. We extract and export premium essential oils
                        from India's diverse botanical landscape, offering pure, therapeutic-grade oils for
                        aromatherapy, cosmetics, and wellness industries worldwide.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-content">
                <div className="container">
                    <div className="content-section">
                        <div className="content-grid">
                            <div className="content-text">
                                <h2>Therapeutic Grade Essential Oils</h2>
                                <p>
                                    Essential oils have been used for centuries in traditional Indian medicine and
                                    aromatherapy. Our essential oils division focuses on steam-distilled and
                                    cold-pressed oils that retain their natural therapeutic properties.
                                </p>
                                <p>
                                    We work with certified distilleries and conduct rigorous GC-MS testing to ensure
                                    purity and authenticity. From eucalyptus to sandalwood, each oil is carefully
                                    extracted, bottled, and shipped to maintain its aromatic and therapeutic integrity.
                                </p>
                            </div>
                            <div className="content-images">
                                <img src={oils1} alt="Essential Oils" className="content-image" />
                                <img src={oils2} alt="Aromatherapy Products" className="content-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="product-showcase">
                <div className="container">
                    <h2>Our Essential Oil Collection</h2>
                    <motion.div
                        className="products-grid-category"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {essentialOilProducts.map((product) => (
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
                        <h2>Source Premium Essential Oils</h2>
                        <p>
                            Looking for therapeutic-grade essential oils? We provide GC-MS reports,
                            organic certifications, and reliable supply for your business needs.
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

export default EssentialOils;
