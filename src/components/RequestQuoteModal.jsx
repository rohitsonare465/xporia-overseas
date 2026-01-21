import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { sendQuoteEmails } from '../services/emailService';
import { useRequestQuote } from '../context/RequestQuoteContext';
import './RequestQuoteModal.css';

const RequestQuoteModal = () => {
    const { isQuoteOpen, prefilledProduct, closeQuoteModal } = useRequestQuote();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        whatsapp: '',
        company: '',
        country: '',
        product: '',
        quantity: '',
        message: ''
    });
    const [sameAsPhone, setSameAsPhone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    useEffect(() => {
        if (prefilledProduct) {
            setFormData(prev => ({ ...prev, product: prefilledProduct }));
        }
    }, [prefilledProduct]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'phone' && sameAsPhone ? { whatsapp: value } : {})
        }));
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setSameAsPhone(checked);
        if (checked) {
            setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send emails via EmailJS
            const results = await sendQuoteEmails(formData);

            console.log('Quote Email Results:', results);

            if (results.userEmailSent && results.clientEmailSent) {
                // Both emails sent successfully
                setSubmitStatus('success');
            } else if (results.userEmailSent || results.clientEmailSent) {
                // At least one email sent
                setSubmitStatus('success');
                console.warn('Partial email delivery:', results.errors);
            } else {
                // Both failed
                console.error('Email sending failed:', results.errors);
                setSubmitStatus('error');
            }

            if (results.userEmailSent || results.clientEmailSent) {
                setTimeout(() => {
                    closeQuoteModal();
                    setSubmitStatus(null);
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        whatsapp: '',
                        company: '',
                        country: '',
                        product: '',
                        quantity: '',
                        message: ''
                    });
                }, 2000);
            }
        } catch (error) {
            console.error('Quote Submission Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeQuoteModal();
        };
        if (isQuoteOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isQuoteOpen, closeQuoteModal]);

    return (
        <AnimatePresence>
            {isQuoteOpen && (
                <div className="quote-modal-backdrop" onClick={closeQuoteModal}>
                    <motion.div
                        className="quote-modal-container"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="quote-modal-header">
                            <h2 className="quote-modal-title">Request a Quote</h2>
                            <button className="quote-modal-close" onClick={closeQuoteModal} aria-label="Close">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="quote-modal-body">
                            <p className="quote-description">
                                Fill out the form below and our team will get back to you with a competitive price within 24 hours.
                            </p>

                            <div className="enquiry-type-group">
                                <span className="enquiry-type-label">Enquiry Type:</span>
                                <span className="enquiry-tag">Standard Product</span>
                            </div>

                            <form className="quote-form" onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">Full Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-input"
                                            placeholder="John Doe"
                                            required
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address <span className="required">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="john@company.com"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Phone Number <span className="required">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-input"
                                            placeholder="Digits only"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox-group">
                                            <label className="form-label">WhatsApp Number <span className="required">*</span></label>
                                            <label className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={sameAsPhone}
                                                    onChange={handleCheckboxChange}
                                                />
                                                Same as Phone
                                            </label>
                                        </div>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            className="form-input"
                                            placeholder="Digits only"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleInputChange}
                                            readOnly={sameAsPhone}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="form-input"
                                            placeholder="Your Company Ltd"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Country Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="country"
                                            className="form-input"
                                            placeholder="e.g. USA, UAE"
                                            required
                                            value={formData.country}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Product <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="product"
                                            className="form-input"
                                            placeholder="Product Name"
                                            required
                                            value={formData.product}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Quantity</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            className="form-input"
                                            placeholder="e.g. 1 FCL, 500 KG"
                                            value={formData.quantity}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label className="form-label">Additional Requirements</label>
                                        <textarea
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Specific grade, packaging, or delivery terms..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="quote-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully!' : 'Submit Quote Request'}
                                    {!isSubmitting && !submitStatus && <Send size={18} />}
                                </button>
                                {submitStatus === 'error' && (
                                    <p style={{ color: 'red', textAlign: 'center', marginTop: '0.5rem' }}>Failed to send. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RequestQuoteModal;
