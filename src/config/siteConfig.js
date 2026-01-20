// Centralized configuration for Xporia Overseas website
// Update these values when client provides actual information

const siteConfig = {
  // Company Information
  company: {
    name: "XPORIA OVERSEAS",
    tagline: "Your Trusted Partner in Global Trade",
    description: "Leading import-export company connecting businesses worldwide with premium products and reliable logistics solutions.",
  },

  // Contact Information
  contact: {
    email: "info@xporiaoverseas.com",
    phone: "+91 79873 52105",
    address: {
      street: "1049, Sche No. 114/2 part - 2, AB Road",
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "452010"
    },
    whatsapp: "+917987352105", // WhatsApp number without spaces
  },

  // Social Media (PLACEHOLDER - Update when available)
  social: {
    instagram: "https://www.instagram.com/xporiaoverseas?igsh=YjBjdnF4bHdkdjh0",
    linkedin: "https://www.linkedin.com/in/xporia-overseas-7873343a4",
    twitter: "https://x.com/xporiaoverseas?s=11",
  },

  // Product Categories
  productCategories: [
    {
      id: 1,
      name: "Indian Spices",
      slug: "indian-spices",
      description: "Premium quality traditional Indian spices sourced from finest regions",
      icon: "Flame",
      items: ["Turmeric", "Cumin", "Cardamom", "Black Pepper", "Red Chili"]
    },
    {
      id: 2,
      name: "Agricultural Commodities",
      slug: "agricultural-commodities",
      description: "High-quality agricultural products directly from Indian farms",
      icon: "Wheat",
      items: ["Basmati Rice", "Wheat", "Pulses", "Millets", "Oil Seeds"]
    },
    {
      id: 3,
      name: "Ayurved & Herbal",
      slug: "ayurved-herbal",
      description: "Authentic Ayurvedic and herbal products for wellness",
      icon: "Leaf",
      items: ["Ashwagandha", "Tulsi", "Neem", "Moringa", "Herbal Extracts"]
    },
    {
      id: 4,
      name: "Essential Oils",
      slug: "essential-oils",
      description: "Pure and natural essential oils extracted with care",
      icon: "Droplet",
      items: ["Eucalyptus Oil", "Tea Tree Oil", "Lavender Oil", "Peppermint Oil", "Lemongrass Oil"]
    },
    {
      id: 5,
      name: "Indian Textiles",
      slug: "indian-textiles",
      description: "Traditional and contemporary Indian textile products",
      icon: "Shirt",
      items: ["Cotton Fabrics", "Silk Sarees", "Handloom Products", "Embroidered Textiles", "Organic Cotton"]
    },
    {
      id: 6,
      name: "On-Demand Products",
      slug: "on-demand-products",
      description: "Custom sourcing for specialized industrial and agricultural requirements",
      icon: "Package",
      isInquiryOnly: true,
      items: ["Organic & Bio Fertilisers", "Bio-degradable Products", "Plywood’s", "MDF Boards", "Raw Materials"]
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

  // Certifications
  certifications: [
    {
      name: "Udyam Registration",
      description: "Government Recognized MSME",
      number: "UDYAM-MP-23-0246606"
    },
    {
      name: "GST Compliant",
      description: "Fully Tax Compliant Business",
      number: "23ADVPZ2719H1ZZ"
    },
    {
      name: "IEC Holder",
      description: "Import Export Code Certified",
      number: "ADVPZ2719H"
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
