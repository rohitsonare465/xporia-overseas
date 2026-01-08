import React from 'react';
import { Shield, FileCheck, Globe, Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            icon: Shield,
            title: "Udyam Registration",
            description: "Government Recognized MSME",
            number: "UDYAM-MP-23-0246606",
            color: "#2563eb"
        },
        {
            id: 2,
            icon: FileCheck,
            title: "GST Compliant",
            description: "Fully Tax Compliant Business",
            number: "23ADVPZ2719H1ZZ",
            color: "#10b981"
        },
        {
            id: 3,
            icon: Globe,
            title: "IEC Holder",
            description: "Import Export Code Certified",
            number: "ADVPZ2719H",
            color: "#f59e0b"
        }
    ];

    return (
        <section className="certifications-section">
            <div className="container">
                <div className="certifications-header">
                    <div className="section-badge">
                        <Award size={20} />
                        <span>Certified & Compliant</span>
                    </div>
                    <h2>Certifications & Compliance</h2>
                    <p className="certifications-subtitle">
                        Fully licensed and certified for international trade, ensuring peace of mind for our global partners.
                    </p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert) => {
                        const IconComponent = cert.icon;
                        return (
                            <div key={cert.id} className="certification-card">
                                <div
                                    className="cert-icon-wrapper"
                                    style={{ backgroundColor: `${cert.color}15` }}
                                >
                                    <IconComponent
                                        size={32}
                                        style={{ color: cert.color }}
                                    />
                                </div>
                                <h3>{cert.title}</h3>
                                <p className="cert-description">{cert.description}</p>
                                <div className="cert-number">
                                    <span className="cert-label">License No:</span>
                                    <span className="cert-value">{cert.number}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="iso-banner">
                    <div className="iso-content">
                        <Shield size={40} className="iso-icon" />
                        <div className="iso-text">
                            <h3>Committed to Quality Standards</h3>
                            <p>
                                Our strict quality management protocols ensure consistent product quality, complete
                                traceability, and continuous improvement at every stage of the supply chain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
