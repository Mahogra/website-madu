import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

/**
 * Products Page
 * 
 * Menampilkan semua produk dalam layout grid.
 * Menampilkan empty state ketika belum ada produk yang dikonfigurasi.
 */
function Products() {
  // Cek apakah produk tersedia
  const hasProducts = products && products.length > 0;
  
  return (
    <div className="container">
      <div className="products-page">
        {/* Page Header */}
        <header className="products-page__header">
          <h1>Katalog Produk</h1>
          <p>Jelajahi berbagai pilihan produk madu dari Mahogra Madu.</p>
        </header>
        
        {/* Products Grid or Empty State */}
        {hasProducts ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // Empty state ketika belum ada produk
          <div className="products-page__empty">
            <p>Katalog produk sedang disiapkan.</p>
            <p>Silakan kembali lagi nanti!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
