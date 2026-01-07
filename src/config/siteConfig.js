// Centralized configuration for Xporia Overseas website
// Update these values when client provides actual information

const siteConfig = {
  // Company Information
  company: {
    name: "XPORIA OVERSEAS",
    tagline: "Your Trusted Partner in Global Trade",
    description: "Leading import-export company connecting businesses worldwide with premium products and reliable logistics solutions.",
  },

  // Contact Information (PLACEHOLDER - Update when available)
  contact: {
    email: "info@xporiaoverseas.com",
    phone: "+91 XXXXX XXXXX",
    address: {
      street: "Business District",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400001"
    },
    whatsapp: "+91XXXXXXXXXX", // Update this with actual WhatsApp number
  },

  // Social Media (PLACEHOLDER - Update when available)
  social: {
    instagram: "https://instagram.com/xporiaoverseas",
    linkedin: "https://linkedin.com/company/xporiaoverseas",
    twitter: "https://twitter.com/xporiaoverseas",
    facebook: "https://facebook.com/xporiaoverseas",
  },

  // Product Categories (PLACEHOLDER)
  productCategories: [
    {
      id: 1,
      name: "Agro Commodities",
      description: "Premium quality agricultural products sourced directly from farmers",
      icon: "Wheat",
      items: ["Spices", "Rice", "Pulses", "Oil Seeds"]
    },
    {
      id: 2,
      name: "Industrial Hardware",
      description: "High-grade industrial components and machinery parts",
      icon: "Settings",
      items: ["Fasteners", "Tools", "Machinery Parts", "Safety Equipment"]
    },
    {
      id: 3,
      name: "Textiles & Fabrics",
      description: "Quality textiles and traditional handloom products",
      icon: "Shirt",
      items: ["Cotton Fabrics", "Silk", "Wool", "Synthetic Textiles"]
    },
    {
      id: 4,
      name: "Eco-Friendly Products",
      description: "Sustainable and environmentally conscious products",
      icon: "Leaf",
      items: ["Bamboo Products", "Organic Cotton", "Biodegradable Items", "Natural Fibers"]
    },
    {
      id: 5,
      name: "Food & Beverages",
      description: "Export quality food products and beverages",
      icon: "Coffee",
      items: ["Tea", "Coffee", "Packaged Foods", "Organic Products"]
    },
    {
      id: 6,
      name: "Handicrafts & Art",
      description: "Traditional Indian handicrafts and artistic products",
      icon: "Palette",
      items: ["Wooden Crafts", "Metal Art", "Pottery", "Traditional Art"]
    }
  ],

  // Export Process Steps
  exportProcess: [
    {
      step: 1,
      title: "Inquiry & Quote",
      description: "Submit your requirements and receive a detailed quotation within 24 hours"
    },
    {
      step: 2,
      title: "Quality Check",
      description: "Rigorous quality inspection ensuring products meet international standards"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Complete export documentation including licenses, certificates, and customs paperwork"
    },
    {
      step: 4,
      title: "Packaging",
      description: "Professional packaging designed for safe international transportation"
    },
    {
      step: 5,
      title: "Logistics",
      description: "Efficient shipping arrangements with trusted freight partners worldwide"
    },
    {
      step: 6,
      title: "Delivery",
      description: "On-time delivery with real-time tracking and post-delivery support"
    }
  ],

  // Certifications (PLACEHOLDER)
  certifications: [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System"
    },
    {
      name: "IEC Registration",
      description: "Import Export Code"
    },
    {
      name: "GST Registered",
      description: "Goods and Services Tax"
    },
    {
      name: "FSSAI Certified",
      description: "Food Safety Standards"
    },
    {
      name: "APEDA Registered",
      description: "Agricultural Export"
    },
    {
      name: "Verified Exporter",
      description: "Government Recognized"
    }
  ],

  // Company Values
  values: [
    {
      title: "Integrity",
      description: "Transparent dealings and honest business practices in every transaction",
      icon: "Shield"
    },
    {
      title: "Excellence",
      description: "Commitment to delivering the highest quality products and services",
      icon: "Award"
    },
    {
      title: "Reliability",
      description: "On-time delivery and consistent performance you can count on",
      icon: "Clock"
    },
    {
      title: "Global Reach",
      description: "Extensive network connecting businesses across continents",
      icon: "Globe"
    }
  ]
};

export default siteConfig;
