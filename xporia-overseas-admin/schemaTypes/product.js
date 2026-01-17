export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Agro Commodities & Spices', value: 'agro-commodities-spices' },
          { title: 'Processed & Value-Added Foods', value: 'processed-foods' },
          { title: 'Eco & Natural Fiber Products', value: 'eco-fiber' },
          { title: 'Industrial Hardware & Engineering', value: 'industrial-hardware' },
          { title: 'Metals & Raw Industrial Materials', value: 'metals-materials' },
          { title: 'Chemicals & Industrial Consumables', value: 'chemicals' },
          { title: 'Textiles & Apparel', value: 'textiles-apparel' },
          { title: 'Herbal, AYUSH & Wellness', value: 'herbal-wellness' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'hsCode',
      title: 'HS Code',
      type: 'string'
    },
    {
      name: 'origin',
      title: 'Origin',
      type: 'string'
    },
    {
      name: 'grade',
      title: 'Grade / Specs',
      type: 'string'
    },
    {
      name: 'packaging',
      title: 'Packaging',
      type: 'string'
    },
    {
      name: 'moq',
      title: 'MOQ',
      type: 'string'
    },
    {
      name: 'deliveryTime',
      title: 'Delivery Time',
      type: 'string'
    },
    {
      name: 'paymentTerms',
      title: 'Payment Terms',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image'
    }
  }
}
