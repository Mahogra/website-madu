import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

/**
 * Home Page - Mahogra Madu
 * 
 * Main landing page with hero, featured products, and CTAs
 */
function Home() {
  // Get featured products
  const featuredProducts = getFeaturedProducts();
  const hasFeaturedProducts = featuredProducts && featuredProducts.length > 0;
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background"></div>
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Mahogra Madu</h1>
            <p className="hero__subtitle">
              Temukan Pilihan Madu dari Mahogra Madu
            </p>
            <p className="hero__description">
              Jelajahi berbagai pilihan produk madu dari Mahogra Madu dan temukan produk yang sesuai dengan kebutuhan Anda.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="button button--primary">
                Lihat Produk
              </Link>
              <Link to="/contact" className="button button--secondary">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="brand-intro">
        <div className="container">
          <div className="brand-intro__content">
            <h2>Tentang Mahogra Madu</h2>
            <p>
  Mahogra Madu hadir untuk memperkenalkan berbagai pilihan produk madu
  kepada Anda melalui katalog yang informatif dan mudah diakses.
</p>
<p>
  Kami ingin membantu Anda mengenal produk-produk yang tersedia serta
  memberikan informasi lebih lanjut mengenai pilihan madu dari Mahogra Madu.
</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {hasFeaturedProducts ? (
        <section className="featured-products">
          <div className="container">
            <div className="featured-products__header">
              <h2>Produk Unggulan</h2>
              <p>Pilihan terbaik untuk Anda</p>
            </div>
            <div className="featured-products__grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="featured-products__cta">
              <Link to="/products" className="button button--outline">
                Lihat Semua Produk
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="featured-products">
          <div className="container">
            <div className="featured-products__header">
              <h2>Produk Kami</h2>
              <p>Koleksi madu premium sedang disiapkan</p>
            </div>
            <div className="featured-products__empty">
              <p>Kami sedang menyiapkan katalog produk terbaik untuk Anda.</p>
              <Link to="/products" className="button button--primary">
                Lihat Katalog
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2 className="why-choose__title">Mengapa Memilih Mahogra Madu</h2>
          <div className="why-choose__grid">
            <div className="why-choose__item">
              <div className="why-choose__icon">🍯</div>
              <h3>Pilihan Produk</h3>
              <p>Kenali berbagai pilihan produk madu yang tersedia di Mahogra Madu.</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">🌿</div>
              <h3>Mengenal Produk Kami</h3>
              <p>Dapatkan informasi mengenai produk dan pilihan yang tersedia.</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">✨</div>
              <h3>Beragam Pilihan Madu</h3>
              <p>Temukan produk yang sesuai dengan kebutuhan Anda.</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">🤝</div>
              <h3>Kami Siap Membantu Anda</h3>
              <p>Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai produk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta__content">
            <h2>Siap Mencoba Madu Premium Kami?</h2>
            <p>Jelajahi koleksi produk kami atau hubungi kami untuk informasi lebih lanjut</p>
            <div className="final-cta__actions">
              <Link to="/products" className="button button--primary">
                Lihat Produk
              </Link>
              <Link to="/contact" className="button button--outline-light">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
