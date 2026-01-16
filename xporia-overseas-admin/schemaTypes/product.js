export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      description: "The name of the product",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of the product name",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Select the product category",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      description: "Main product image (recommended: 800x600px)",
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      description: "Additional product images",
      of: [{ 
        type: "image", 
        options: { hotspot: true } 
      }]
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      description: "Brief product description (2-3 sentences)",
      rows: 3
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      description: "Detailed product description with formatting",
      of: [{ type: "block" }]
    },
    {
      name: "hsCode",
      title: "HS Code",
      type: "string",
      description: "Harmonized System code for customs"
    },
    {
      name: "origin",
      title: "Origin",
      type: "string",
      description: "Country/region of origin",
      initialValue: "India"
    },
    {
      name: "packaging",
      title: "Packaging",
      type: "string",
      description: "Available packaging options (e.g., 25kg bags, 50kg bags)"
    },
    {
      name: "moq",
      title: "Minimum Order Quantity (MOQ)",
      type: "string",
      description: "Minimum order quantity for this product"
    },
    {
      name: "paymentTerms",
      title: "Payment Terms",
      type: "string",
      description: "Accepted payment terms"
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Optional badge text (e.g., 'New', 'Best Seller', 'Premium')"
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      description: "Product specifications (key-value pairs)",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "value", title: "Value", type: "string" }
        ],
        preview: {
          select: { title: "label", subtitle: "value" }
        }
      }]
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      description: "Key product highlights (bullet points)",
      of: [{ type: "string" }]
    },
    {
      name: "certifications",
      title: "Certifications",
      type: "array",
      description: "Product certifications (e.g., Organic, ISO, FSSAI)",
      of: [{ type: "string" }]
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order in which product appears (lower = first)",
      initialValue: 0
    },
    {
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      description: "Show this product on the homepage",
      initialValue: false
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Is this product available for display?",
      initialValue: true
    }
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }]
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }]
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "image"
    }
  }
};
