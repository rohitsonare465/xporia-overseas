export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "hsCode",
      title: "HS Code",
      type: "string"
    },
    {
      name: "origin",
      title: "Origin",
      type: "string"
    },
    {
      name: "grade",
      title: "Grade / Specs",
      type: "string"
    },
    {
      name: "packaging",
      title: "Packaging",
      type: "string"
    },
    {
      name: "moq",
      title: "MOQ",
      type: "string"
    },
    {
      name: "deliveryTime",
      title: "Delivery Time",
      type: "string"
    },
    {
      name: "paymentTerms",
      title: "Payment Terms",
      type: "string"
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true
    }
  ]
};
