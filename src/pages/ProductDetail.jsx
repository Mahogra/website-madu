import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductBySlug, formatPrice } from '../data/products';
import { generateProductMessage } from '../utils/whatsapp';
import WhatsAppButton from '../components/WhatsAppButton';
import './ProductDetail.css';

/**
 * ProductDetail Page
 * 
 * Menampilkan informasi detail tentang satu produk.
 * Menggunakan URL slug untuk menemukan dan menampilkan produk yang tepat.
 */
function ProductDetail() {
  // Ambil slug dari URL (contoh: /products/madu-hutan-murni)
  const [imageError, setImageError] = useState(false);
  const { slug } = useParams();
  
  // Cari produk berdasarkan slug
  const product = getProductBySlug(slug);
  
  // Jika produk tidak ditemukan, tampilkan not-found state
  if (!product) {
    return (
      <div className="container">
        <div className="product-detail__not-found">
          <h1>Produk Tidak Ditemukan</h1>
          <p>Produk yang Anda cari tidak ada atau telah dihapus.</p>
          <Link to="/products" className="button button--primary">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }
  
  // Destructure data produk
  const { name, price, weight, image, description } = product;
  
  // Generate pesan WhatsApp untuk produk ini
  const whatsappMessage = generateProductMessage(name, weight);
  
  return (
    <div className="container">
      <div className="product-detail">
        {/* Link Kembali ke Products */}
        <Link to="/products" className="product-detail__back-link">
          ← Kembali ke Katalog
        </Link>
        
        {/* Product Content */}
        <div className="product-detail__content">
          {/* Product Image */}
          <div className="product-detail__image-wrapper">
            {image && !imageError ? (
  <img
    src={image}
    alt={name}
    className="product-detail__image"
    onError={() => setImageError(true)}
  />
) : (
  <div className="product-detail__image-placeholder">
    <div className="placeholder-icon">🍯</div>
    <span>Gambar tidak tersedia</span>
  </div>
)}
          </div>
          
          {/* Product Info */}
          <div className="product-detail__info">
            <h1 className="product-detail__title">{name}</h1>
            
            {weight && (
              <p className="product-detail__weight">Ukuran: {weight}</p>
            )}
            
            <p className="product-detail__price">{formatPrice(price)}</p>
            
            {description && (
              <div className="product-detail__description">
                <h2>Deskripsi Produk</h2>
                <p>{description}</p>
              </div>
            )}
            
            {/* WhatsApp Button (hanya tampil jika nomor sudah dikonfigurasi) */}
            <div className="product-detail__actions">
              <WhatsAppButton message={whatsappMessage}>
                Pesan via WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
