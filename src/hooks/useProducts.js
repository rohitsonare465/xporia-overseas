import { useState, useEffect } from 'react';
import {
  getProducts,
  getProductsByCategory,
  getProductBySlug,
  getFeaturedProducts,
  searchProducts,
  urlFor
} from '../services/sanityClient';

/**
 * Hook to fetch all products
 * @returns {Object} - { products, loading, error }
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        // Transform image URLs
        const transformedProducts = data.map(product => ({
          ...product,
          image: product.image ? urlFor(product.image).width(800).url() : null,
          gallery: product.gallery?.map(img => urlFor(img).width(800).url()) || []
        }));
        setProducts(transformedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

/**
 * Hook to fetch products by category
 * @param {string} categorySlug - Category slug
 * @returns {Object} - { products, loading, error }
 */
export const useProductsByCategory = (categorySlug) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categorySlug) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductsByCategory(categorySlug);
        // Transform image URLs
        const transformedProducts = data.map(product => ({
          ...product,
          image: product.image ? urlFor(product.image).width(800).url() : null,
          gallery: product.gallery?.map(img => urlFor(img).width(800).url()) || []
        }));
        setProducts(transformedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products by category:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return { products, loading, error };
};

/**
 * Hook to fetch a single product by slug
 * @param {string} slug - Product slug
 * @returns {Object} - { product, loading, error }
 */
export const useProduct = (slug) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductBySlug(slug);
        if (data) {
          setProduct({
            ...data,
            image: data.image ? urlFor(data.image).width(800).url() : null,
            gallery: data.gallery?.map(img => urlFor(img).width(800).url()) || []
          });
        } else {
          setProduct(null);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
};

/**
 * Hook to fetch featured products
 * @param {number} limit - Maximum number of products
 * @returns {Object} - { products, loading, error }
 */
export const useFeaturedProducts = (limit = 6) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedProducts(limit);
        // Transform image URLs
        const transformedProducts = data.map(product => ({
          ...product,
          image: product.image ? urlFor(product.image).width(800).url() : null
        }));
        setProducts(transformedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  return { products, loading, error };
};

/**
 * Hook to search products
 * @param {string} searchTerm - Search query
 * @returns {Object} - { products, loading, error, search }
 */
export const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim().length < 2) {
      setProducts([]);
      return;
    }

    try {
      setLoading(true);
      const data = await searchProducts(searchTerm);
      // Transform image URLs
      const transformedProducts = data.map(product => ({
        ...product,
        image: product.image ? urlFor(product.image).width(400).url() : null
      }));
      setProducts(transformedProducts);
      setError(null);
    } catch (err) {
      console.error('Error searching products:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, search };
};
