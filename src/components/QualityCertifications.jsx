import React from 'react';
import * as Icons from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './QualityCertifications.css';

const QualityCertifications = () => {
    return (
        <section className="section quality-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Quality & Certifications</h2>
                    <p className="section-subtitle">
                        Internationally recognized certifications ensuring excellence
                    </p>
                </div>

                <div className="certifications-grid">
                    {siteConfig.certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="certification-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="certification-badge">
                                <Icons.Award size={48} />
                            </div>
                            <h3 className="certification-name">{cert.name}</h3>
                            <p className="certification-description">{cert.description}</p>
                            {cert.number && (
                                <div className="certification-number">
                                    <span className="cert-label">License No:</span>
                                    <span className="cert-value">{cert.number}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Company Values */}
                <div className="values-section">
                    <h3 className="values-title">Our Core Values</h3>
                    <div className="values-grid">
                        {siteConfig.values.map((value, index) => {
                            const IconComponent = Icons[value.icon] || Icons.Circle;
                            return (
                                <div key={index} className="value-card">
                                    <div className="value-icon">
                                        <IconComponent size={40} />
                                    </div>
                                    <h4 className="value-title">{value.title}</h4>
                                    <p className="value-description">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityCertifications;
