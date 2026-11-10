/**
 * Product Data - Mahogra Madu
 * 
 * This file contains all product information and helper functions
 * to work with the product catalog.
 */

/**
 * Products Array
 * 
 * Structure for each product:
 * {
 *   id: number - Unique identifier for React keys
 *   slug: string - URL-friendly name (e.g., 'madu-hutan-murni')
 *   name: string - Display name of the product
 *   description: string - Brief product description
 *   price: number - Price in Indonesian Rupiah (IDR)
 *   weight: string - Product weight/size (e.g., '500g', '1kg')
 *   image: string - Path to product image (relative to /public)
 *   featured: boolean - Whether to display on homepage
 * }
 * 
 * NOTE: Currently empty - waiting for actual product data from client
 */
export const products = [
  // Example structure (commented out until real data is available):
  // {
  //   id: 1,
  //   slug: 'madu-hutan-murni',
  //   name: 'Madu Hutan Murni',
  //   description: 'Madu murni dari hutan Indonesia',
  //   price: 150000,
  //   weight: '500g',
  //   image: '/images/products/madu-hutan.jpg',
  //   featured: true
  // },
];

/**
 * Get a single product by its slug
 * 
 * @param {string} slug - The URL slug of the product
 * @returns {object|undefined} - Product object or undefined if not found
 * 
 * Example: getProductBySlug('madu-hutan-murni')
 */
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

/**
 * Get all featured products
 * 
 * @returns {array} - Array of products where featured === true
 * 
 * Featured products are typically shown on the homepage
 */
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured === true);
};

/**
 * Format price to Indonesian Rupiah currency format
 * 
 * @param {number} price - Price in rupiah (e.g., 150000)
 * @returns {string} - Formatted price string (e.g., 'Rp 150.000')
 * 
 * Uses Intl.NumberFormat for proper localization
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
