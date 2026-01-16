import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
// Using environment variables for flexibility across environments
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'w9p20dtj',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use a date string for API versioning
  useCdn: true, // Enable CDN for faster, cached responses (set to false for real-time data)
});

// Image URL builder for generating optimized image URLs
const builder = imageUrlBuilder(client);

/**
 * Generate optimized image URL from Sanity image reference
 * @param {Object} source - Sanity image object
 * @returns {Object} - Image URL builder with chainable methods
 */
export const urlFor = (source) => {
  if (!source) return null;
  return builder.image(source);
};

/**
 * Fetch all active product categories
 * @returns {Promise<Array>} - Array of category objects
 */
export const getCategories = async () => {
  const query = `*[_type == "category" && active == true] | order(sortOrder asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    fullDescription,
    icon,
    heroImage,
    featuredImage,
    galleryImages,
    badge,
    featuredProducts,
    sortOrder
  }`;
  
  return client.fetch(query);
};

/**
 * Fetch a single category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Object>} - Category object
 */
export const getCategoryBySlug = async (slug) => {
  const query = `*[_type == "category" && slug.current == $slug && active == true][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    fullDescription,
    icon,
    heroImage,
    featuredImage,
    galleryImages,
    badge,
    featuredProducts
  }`;
  
  return client.fetch(query, { slug });
};

/**
 * Fetch all active products
 * @returns {Promise<Array>} - Array of product objects
 */
export const getProducts = async () => {
  const query = `*[_type == "product" && active == true] | order(sortOrder asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    gallery,
    hsCode,
    origin,
    packaging,
    moq,
    paymentTerms,
    badge,
    specifications,
    highlights,
    certifications,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }`;
  
  return client.fetch(query);
};

/**
 * Fetch products by category slug
 * @param {string} categorySlug - Category slug
 * @returns {Promise<Array>} - Array of product objects
 */
export const getProductsByCategory = async (categorySlug) => {
  const query = `*[_type == "product" && active == true && category->slug.current == $categorySlug] | order(sortOrder asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    gallery,
    hsCode,
    origin,
    packaging,
    moq,
    paymentTerms,
    badge,
    specifications,
    highlights,
    certifications,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }`;
  
  return client.fetch(query, { categorySlug });
};

/**
 * Fetch a single product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Object>} - Product object
 */
export const getProductBySlug = async (slug) => {
  const query = `*[_type == "product" && slug.current == $slug && active == true][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    fullDescription,
    image,
    gallery,
    hsCode,
    origin,
    packaging,
    moq,
    paymentTerms,
    badge,
    specifications,
    highlights,
    certifications,
    featured,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }`;
  
  return client.fetch(query, { slug });
};

/**
 * Fetch featured products for homepage
 * @param {number} limit - Maximum number of products to return
 * @returns {Promise<Array>} - Array of featured product objects
 */
export const getFeaturedProducts = async (limit = 6) => {
  const query = `*[_type == "product" && active == true && featured == true] | order(sortOrder asc)[0...$limit] {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    hsCode,
    origin,
    packaging,
    moq,
    badge,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }`;
  
  return client.fetch(query, { limit });
};

/**
 * Search products by name or description
 * @param {string} searchTerm - Search query
 * @returns {Promise<Array>} - Array of matching product objects
 */
export const searchProducts = async (searchTerm) => {
  const query = `*[_type == "product" && active == true && (
    name match $searchTerm + "*" ||
    description match $searchTerm + "*"
  )] | order(sortOrder asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    hsCode,
    origin,
    badge,
    "category": category->{
      _id,
      name,
      "slug": slug.current
    }
  }`;
  
  return client.fetch(query, { searchTerm });
};

export default client;
