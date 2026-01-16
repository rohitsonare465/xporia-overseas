import { useState, useEffect } from 'react';
import {
  getCategories,
  getCategoryBySlug,
  urlFor
} from '../services/sanityClient';

/**
 * Hook to fetch all categories
 * @returns {Object} - { categories, loading, error }
 */
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        // Transform image URLs
        const transformedCategories = data.map(category => ({
          ...category,
          heroImage: category.heroImage ? urlFor(category.heroImage).width(1920).url() : null,
          featuredImage: category.featuredImage ? urlFor(category.featuredImage).width(600).url() : null,
          galleryImages: category.galleryImages?.map(img => urlFor(img).width(800).url()) || []
        }));
        setCategories(transformedCategories);
        setError(null);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

/**
 * Hook to fetch a single category by slug
 * @param {string} slug - Category slug
 * @returns {Object} - { category, loading, error }
 */
export const useCategory = (slug) => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchCategory = async () => {
      try {
        setLoading(true);
        const data = await getCategoryBySlug(slug);
        if (data) {
          setCategory({
            ...data,
            heroImage: data.heroImage ? urlFor(data.heroImage).width(1920).url() : null,
            featuredImage: data.featuredImage ? urlFor(data.featuredImage).width(600).url() : null,
            galleryImages: data.galleryImages?.map(img => urlFor(img).width(800).url()) || []
          });
        } else {
          setCategory(null);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching category:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [slug]);

  return { category, loading, error };
};
