import React from 'react';
import siteConfig from '../config/siteConfig';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello! I'm interested in your export services.");
        const whatsappNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <button
            className="whatsapp-button animate-float"
            onClick={handleWhatsAppClick}
            aria-label="Contact us on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <span className="whatsapp-icon" aria-hidden="true" />
            <span className="whatsapp-badge">Chat</span>
        </button>
    );
};

export default WhatsAppButton;
