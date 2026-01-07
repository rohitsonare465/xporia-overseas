import React from 'react';
import ExportProcess from '../components/ExportProcess';
import './ExportProcessPage.css';

const ExportProcessPage = () => {
    return (
        <div className="export-process-page">
            {/* Hero Section */}
            <section className="export-hero">
                <div className="container">
                    <h1 className="animate-fade-in-up">How We Work</h1>
                    <p className="export-hero-subtitle animate-fade-in-up">
                        Our streamlined 6-step export process ensures quality, compliance, and timely delivery
                    </p>
                </div>
            </section>

            {/* Export Process Steps */}
            <ExportProcess />

            {/* Additional Info */}
            <section className="section export-info-section">
                <div className="container">
                    <div className="export-info-grid">
                        <div className="export-info-card">
                            <h3>Documentation Support</h3>
                            <p>
                                We handle all export documentation including licenses, certificates, customs
                                paperwork, and compliance requirements. Our team ensures everything is in order
                                for smooth customs clearance.
                            </p>
                        </div>
                        <div className="export-info-card">
                            <h3>Quality Control</h3>
                            <p>
                                Every product undergoes multiple quality checks before shipment. We maintain
                                strict quality standards and provide detailed quality certificates with each
                                consignment.
                            </p>
                        </div>
                        <div className="export-info-card">
                            <h3>Logistics Excellence</h3>
                            <p>
                                We work with trusted freight partners to ensure safe and timely delivery.
                                Real-time tracking and regular updates keep you informed throughout the
                                shipping process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section export-cta-section">
                <div className="container">
                    <div className="export-cta">
                        <h2>Ready to Start Exporting?</h2>
                        <p>Get in touch with us today to discuss your export requirements</p>
                        <a href="/contact" className="btn btn-gold btn-lg">
                            Request a Quote
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExportProcessPage;
