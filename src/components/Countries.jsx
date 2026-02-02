import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import './Countries.css';

const countriesData = [
    { name: "United Arab Emirates", flag: "🇦🇪", region: "Middle East" },
    { name: "United States", flag: "🇺🇸", region: "North America" },
    { name: "Japan", flag: "🇯🇵", region: "Asia" },
    { name: "Spain", flag: "🇪🇸", region: "Europe" },
    { name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
    { name: "Singapore", flag: "🇸🇬", region: "Asia" },
    { name: "Germany", flag: "🇩🇪", region: "Europe" },
    { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
    { name: "France", flag: "🇫🇷", region: "Europe" },
    { name: "Australia", flag: "🇦🇺", region: "Oceania" },
    { name: "Netherlands", flag: "🇳🇱", region: "Europe" },
    { name: "New Zealand", flag: "🇳🇿", region: "Oceania" },
    { name: "Canada", flag: "🇨🇦", region: "North America" },
    { name: "Italy", flag: "🇮🇹", region: "Europe" },
    { name: "Qatar", flag: "🇶🇦", region: "Middle East" },
    { name: "Kuwait", flag: "🇰🇼", region: "Middle East" },
    { name: "Oman", flag: "🇴🇲", region: "Middle East" },
    { name: "Bahrain", flag: "🇧🇭", region: "Middle East" },
    { name: "Malaysia", flag: "🇲🇾", region: "Asia" },
    { name: "South Korea", flag: "🇰🇷", region: "Asia" },
    { name: "Thailand", flag: "🇹🇭", region: "Asia" },
    { name: "Vietnam", flag: "🇻🇳", region: "Asia" },
    { name: "Indonesia", flag: "🇮🇩", region: "Asia" },
    { name: "South Africa", flag: "🇿🇦", region: "Africa" },
    { name: "Kenya", flag: "🇰🇪", region: "Africa" },
    { name: "Nigeria", flag: "🇳🇬", region: "Africa" },
    { name: "Egypt", flag: "🇪🇬", region: "Africa" },
    { name: "Morocco", flag: "🇲🇦", region: "Africa" },
    { name: "Brazil", flag: "🇧🇷", region: "South America" },
    { name: "Mexico", flag: "🇲🇽", region: "North America" },
];

const Countries = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="countries-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <div className="countries-badge">
                        <Globe size={20} />
                        <span>Global Reach</span>
                    </div>
                    <h2 className="section-title">Countries We Export To</h2>
                    <p className="section-subtitle">
                        Delivering premium Indian products to businesses across the globe
                    </p>
                </motion.div>

                <motion.div
                    className="countries-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {countriesData.map((country, index) => (
                        <motion.div
                            key={country.name}
                            className="country-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <span className="country-flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="countries-cta"
                >
                    <p>Don't see your country? We ship worldwide!</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Countries;
