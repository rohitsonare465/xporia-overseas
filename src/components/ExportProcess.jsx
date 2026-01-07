import React from 'react';
import * as Icons from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './ExportProcess.css';

const ExportProcess = () => {
    const getStepIcon = (step) => {
        const icons = {
            1: Icons.FileText,
            2: Icons.ShieldCheck,
            3: Icons.FileCheck,
            4: Icons.Package,
            5: Icons.Truck,
            6: Icons.CheckCircle
        };
        const IconComponent = icons[step] || Icons.Circle;
        return <IconComponent size={40} />;
    };

    return (
        <section className="section export-process-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Export Process</h2>
                    <p className="section-subtitle">
                        Seamless 6-step process ensuring quality and timely delivery
                    </p>
                </div>

                <div className="export-process-timeline">
                    {siteConfig.exportProcess.map((process, index) => (
                        <div
                            key={process.step}
                            className="export-step animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="export-step-number">{process.step}</div>
                            <div className="export-step-icon">
                                {getStepIcon(process.step)}
                            </div>
                            <h3 className="export-step-title">{process.title}</h3>
                            <p className="export-step-description">{process.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExportProcess;
