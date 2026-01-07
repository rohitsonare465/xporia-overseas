import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, User } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you! Your message has been sent. We will contact you soon.');
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section className="section contact-form-section">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Have a question or ready to start your export journey? We're here to help.</p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href={`mailto:${siteConfig.contact.email}`}>
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4>Call Us</h4>
                                    <a href={`tel:${siteConfig.contact.phone}`}>
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>
                                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state}<br />
                                        {siteConfig.contact.address.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <div className="input-wrapper">
                                    <User size={18} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <div className="input-wrapper">
                                    <Mail size={18} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <div className="input-wrapper">
                                    <Phone size={18} />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-gold btn-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
