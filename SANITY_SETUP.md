# Sanity CMS Setup Guide for Xporia Overseas

This guide explains how to manage your products and categories through Sanity CMS.

## 🚀 Quick Start

### 1. Access the Sanity Studio

```bash
cd xporia-overseas-admin
npm install  # Only needed first time
npm run dev
```

Open http://localhost:3333 in your browser.

### 2. Deploy Schema (First Time Only)

After making schema changes, deploy them to Sanity:

```bash
cd xporia-overseas-admin
npx sanity deploy
```

---

## 📦 Managing Categories

Categories are the main product groups shown on the Products page.

### Creating a Category

1. In Sanity Studio, click **"Product Categories"** in the sidebar
2. Click the **"+"** button to create a new category
3. Fill in the required fields:

| Field | Description | Required |
|-------|-------------|----------|
| **Category Name** | Display name (e.g., "Indian Spices") | ✅ Yes |
| **Slug** | URL-friendly name (auto-generated from name) | ✅ Yes |
| **Short Description** | Brief description for category cards | No |
| **Icon Name** | Lucide icon name (see list below) | No |
| **Hero Image** | Large banner image for category page | No |
| **Featured Image** | Thumbnail for category cards | No |
| **Featured Product Names** | List of popular products to show | No |
| **Sort Order** | Display order (lower = first) | No |
| **Active** | Toggle visibility on/off | No |

### Available Icons

Use these icon names in the "Icon Name" field:
- `Flame` - Fire/spices
- `Wheat` - Grains/agriculture
- `Leaf` - Herbs/natural
- `Droplet` - Oils/liquids
- `Shirt` - Textiles
- `Package` - General products
- `Coffee`, `Apple`, `Nut`, `Carrot` - Food items

Find more icons at: https://lucide.dev/icons

---

## 🛍️ Managing Products

### Creating a Product

1. In Sanity Studio, click **"Products"** in the sidebar
2. Click the **"+"** button to create a new product
3. Fill in the fields:

| Field | Description | Required |
|-------|-------------|----------|
| **Product Name** | Display name | ✅ Yes |
| **Slug** | URL-friendly name (auto-generated) | ✅ Yes |
| **Category** | Select from dropdown | ✅ Yes |
| **Product Image** | Main product photo | ✅ Yes |
| **Short Description** | 2-3 sentence description | No |
| **HS Code** | Customs code | No |
| **Origin** | Country of origin (default: India) | No |
| **Packaging** | Packaging options | No |
| **MOQ** | Minimum order quantity | No |
| **Payment Terms** | Accepted payment methods | No |
| **Badge** | Special label (e.g., "New", "Best Seller") | No |
| **Highlights** | Bullet points for key features | No |
| **Certifications** | Quality certifications | No |
| **Featured Product** | Show on homepage | No |
| **Active** | Toggle visibility | No |

### Image Guidelines

- **Recommended size**: 800×600 pixels
- **Format**: JPG or PNG
- **File size**: Under 2MB for fast loading
- **Aspect ratio**: 4:3 works best

### Adding Multiple Images

Use the **Image Gallery** field to add additional product photos.

---

## ✅ Publishing Changes

Changes in Sanity are saved as **drafts** until you publish them.

1. Make your changes
2. Click the **"Publish"** button (green) in the bottom right
3. Changes appear on the website **instantly**!

---

## 🔄 Real-Time Updates

The website uses Sanity's CDN for fast content delivery:

- **Published changes**: Appear within 1-2 minutes
- **CDN cache**: Automatically refreshes
- **No rebuild needed**: Changes go live automatically

---

## 📋 Example Product Entry

Here's an example of a well-filled product:

```
Product Name: Turmeric Powder
Slug: turmeric-powder (auto-generated)
Category: Indian Spices
Description: Premium Erode turmeric with 5%+ curcumin content. 
             Deep golden color and authentic flavor.
HS Code: 0910.30
Origin: India
Packaging: 25kg bags, 50kg bags, Custom
MOQ: 1 Metric Ton
Payment Terms: LC, T/T, CAD
Badge: Premium Quality
Highlights:
  - 5%+ curcumin content
  - No artificial colors
  - FSSAI certified
Certifications:
  - FSSAI
  - ISO 9001:2015
  - Organic India
Featured: Yes
Active: Yes
```

---

## 🆘 Troubleshooting

### Product not showing on website?

1. ✅ Check if **Active** is turned ON
2. ✅ Check if the product is **Published** (not just saved as draft)
3. ✅ Check if a **Category** is selected
4. ✅ Wait 1-2 minutes for CDN cache to refresh

### Category not showing?

1. ✅ Check if **Active** is turned ON
2. ✅ Check if **Published**
3. ✅ Make sure **Slug** is set

### Images not appearing?

1. ✅ Make sure image is uploaded (not just linked)
2. ✅ Check file size is under 2MB
3. ✅ Try re-uploading the image

---

## 🌐 Sanity Studio URLs

- **Local development**: http://localhost:3333
- **Online Studio** (after deploy): https://xporia-overseas-admin.sanity.studio

---

## 📞 Technical Support

For technical issues with the CMS:
- Check the Sanity documentation: https://www.sanity.io/docs
- Contact your web developer

---

## 🔐 Security Notes

- Never share your Sanity login credentials
- Use strong passwords
- Only give access to trusted team members
