import React from 'react';
import { Microscope, ClipboardCheck, Award, FileCheck, ShieldCheck, Leaf } from 'lucide-react';
import QualityCertifications from '../components/QualityCertifications';
import './Quality.css';

const Quality = () => {
    return (
        <div className="quality-page">
            {/* Hero Section */}
            <section className="quality-hero">
                <div className="container">
                    <h1 className="animate-fade-in-up">Quality Assurance</h1>
                    <p className="quality-hero-subtitle animate-fade-in-up">
                        Committed to excellence in every shipment with internationally recognized certifications
                    </p>
                </div>
            </section>

            {/* Quality Commitment - New Section */}
            <section className="section quality-commitment-section">
                <div className="container">
                    <div className="quality-commitment-content">
                        <div className="quality-commitment-text">
                            <h2 className="section-title">Purity You Can Trust</h2>
                            <p>
                                Quality isn't just a checkbox for us; it's the foundation of our business. From the
                                sun-drenched organic farms where our spices grow to our state-of-the-art testing labs,
                                we maintain unwavering standards at every step of the supply chain.
                            </p>
                            <div className="commitment-features">
                                <div className="commitment-feature">
                                    <div className="c-feature-icon">
                                        <Leaf size={24} />
                                    </div>
                                    <div>
                                        <h4>Ethical Sourcing</h4>
                                        <p>Directly sourced from certified organic farms.</p>
                                    </div>
                                </div>
                                <div className="commitment-feature">
                                    <div className="c-feature-icon">
                                        <Microscope size={24} />
                                    </div>
                                    <div>
                                        <h4>Lab Tested</h4>
                                        <p>Advanced laboratory testing for purity and potency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quality-commitment-images">
                            <div className="commitment-image-wrapper c-img-1">
                                <img src={require('../assets/images/quality-organic-farm.png')} alt="Organic Farm Sourcing" />
                            </div>
                            <div className="commitment-image-wrapper c-img-2">
                                <img src={require('../assets/images/quality-lab-testing.png')} alt="Laboratory Testing" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="section quality-standards-section">
                <div className="container">
                    <h2 className="section-title">Our Quality Standards</h2>
                    <div className="quality-standards-grid">
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">
                                <Microscope size={40} />
                            </div>
                            <h3>Rigorous Inspection</h3>
                            <p>
                                Every product undergoes multiple quality checks at different stages - from
                                sourcing to packaging. We ensure only the best products reach our clients.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">
                                <ClipboardCheck size={40} />
                            </div>
                            <h3>Compliance</h3>
                            <p>
                                Full compliance with international quality standards and regulations. All
                                necessary certificates and documentation provided with every shipment.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">
                                <ShieldCheck size={40} />
                            </div>
                            <h3>Verified Suppliers</h3>
                            <p>
                                We work only with certified manufacturers and suppliers who meet our strict
                                quality criteria and maintain consistent standards.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">
                                <FileCheck size={40} />
                            </div>
                            <h3>Quality Reports</h3>
                            <p>
                                Detailed quality inspection reports and certificates provided for complete
                                transparency and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <QualityCertifications />
        </div>
    );
};

export default Quality;
