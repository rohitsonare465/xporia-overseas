export default {
  name: "category",
  title: "Product Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      description: "Name of the product category",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly version of the category name",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      description: "Brief category description for product grid cards",
      rows: 2
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      description: "Detailed category description for the category page",
      of: [{ type: "block" }]
    },
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name (e.g., Flame, Wheat, Leaf, Droplet, Shirt). Visit lucide.dev for options."
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Large banner image for the category page header",
      options: { hotspot: true }
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      description: "Thumbnail image for category cards",
      options: { hotspot: true }
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      description: "Additional images shown on the category page",
      of: [{
        type: "image",
        options: { hotspot: true }
      }]
    },
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Optional badge shown on category page (e.g., 'Premium Indian Produce')"
    },
    {
      name: "featuredProducts",
      title: "Featured Product Names",
      type: "array",
      description: "Quick list of popular products (shown on category cards)",
      of: [{ type: "string" }]
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order in which category appears (lower = first)",
      initialValue: 0
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Is this category visible on the website?",
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
      subtitle: "description",
      media: "featuredImage"
    }
  }
};
