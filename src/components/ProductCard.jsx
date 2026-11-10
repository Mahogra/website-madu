import { Link } from 'react-router-dom';
import { useState } from 'react';
import { formatPrice } from '../data/products';
import './ProductCard.css';

/**
 * ProductCard Component
 * 
 * Menampilkan produk dalam format card dengan gambar, nama, harga, dan deskripsi.
 * Digunakan di grid produk (halaman Products, featured products di Home).
 * 
 * Props:
 * - product: object (required) - Data produk dengan:
 *   - slug: string - URL slug untuk routing
 *   - name: string - Nama produk
 *   - price: number - Harga dalam IDR
 *   - weight: string - Ukuran/berat produk
 *   - image: string - Path ke gambar produk
 *   - description: string (optional) - Deskripsi singkat
 *   - featured: boolean (optional) - Status featured
 * 
 * Cara kerja:
 * 1. Menerima data produk melalui props
 * 2. Format harga menggunakan helper function
 * 3. Wrap semua dalam Link untuk navigasi
 * 4. Handle gambar yang hilang dengan placeholder
 */
function ProductCard({ product }) {
  // Jika tidak ada data produk, jangan render apapun
  const [imageError, setImageError] = useState(false);
  if (!product) {
    return null;
  }
  
  // Destructure properti produk
  const { slug, name, price, weight, image, description, featured } = product;
  
  return (
    <Link to={`/products/${slug}`} className="product-card">
      {/* Product Image */}
      <div className="product-card__image-wrapper">
        {image && !imageError ? (
  <img
    src={image}
    alt={name}
    className="product-card__image"
    onError={() => setImageError(true)}
  />
) : (
  <div className="product-card__image-placeholder">
    <div className="placeholder-icon">🍯</div>
  </div>
)}
        
        {/* Featured Badge */}
        {featured && (
          <span className="product-card__badge">Unggulan</span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="product-card__content">
        <h3 className="product-card__title">{name}</h3>
        
        {/* Weight/Size */}
        {weight && (
          <p className="product-card__weight">{weight}</p>
        )}
        
        {/* Description (jika tersedia) */}
        {description && (
          <p className="product-card__description">{description}</p>
        )}
        
        {/* Price */}
        <p className="product-card__price">{formatPrice(price)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
