import React from 'react';
import { Shield, FileCheck, Globe } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            icon: Shield,
            title: "Udyam Registration",
            number: "UDYAM-MP-23-0246606",
            color: "#2563eb"
        },
        {
            id: 2,
            icon: FileCheck,
            title: "GST Compliant",
            number: "23ADVPZ2719H1ZZ",
            color: "#10b981"
        },
        {
            id: 3,
            icon: Globe,
            title: "IEC Holder",
            number: "ADVPZ2719H",
            color: "#f59e0b"
        }
    ];

    return (
        <section className="certifications-section certifications-compact">
            <div className="container">
                <div className="certifications-inline">
                    <span className="certifications-label">Certified & Compliant:</span>
                    <div className="certifications-list">
                        {certifications.map((cert) => {
                            const IconComponent = cert.icon;
                            return (
                                <div key={cert.id} className="cert-inline-item">
                                    <IconComponent size={16} style={{ color: cert.color }} />
                                    <span className="cert-inline-title">{cert.title}</span>
                                    <span className="cert-inline-number">{cert.number}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
