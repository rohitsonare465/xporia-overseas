import React from 'react';
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

            {/* Quality Standards */}
            <section className="section quality-standards-section">
                <div className="container">
                    <h2 className="section-title">Our Quality Standards</h2>
                    <div className="quality-standards-grid">
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">🔍</div>
                            <h3>Rigorous Inspection</h3>
                            <p>
                                Every product undergoes multiple quality checks at different stages - from
                                sourcing to packaging. We ensure only the best products reach our clients.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">📋</div>
                            <h3>Compliance</h3>
                            <p>
                                Full compliance with international quality standards and regulations. All
                                necessary certificates and documentation provided with every shipment.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">🏭</div>
                            <h3>Verified Suppliers</h3>
                            <p>
                                We work only with certified manufacturers and suppliers who meet our strict
                                quality criteria and maintain consistent standards.
                            </p>
                        </div>
                        <div className="quality-standard-card">
                            <div className="quality-standard-icon">✅</div>
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
