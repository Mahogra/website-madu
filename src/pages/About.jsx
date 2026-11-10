import { Link } from 'react-router-dom';
import './About.css';

/**
 * About Page - Mahogra Madu
 * 
 * Brand storytelling page with company introduction and values
 * 
 * TODO: Add business information when available from client:
 * - Tahun berdiri
 * - Lokasi usaha
 * - Sejarah perusahaan lengkap
 * - Cerita pendiri
 * - Visi dan misi formal
 * - Sumber madu spesifik
 * - Proses produksi detail
 * - Sertifikasi (jika ada)
 */
function About() {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background"></div>
        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              Lebih Dekat dengan Alam, Lebih Mengenal Mahogra Madu
            </h1>
            <p className="about-hero__description">
              Kenali Mahogra Madu lebih dekat dan temukan berbagai pilihan produk madu yang tersedia untuk Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story">
        <div className="container">
          <div className="brand-story__content">
            <div className="brand-story__text">
              <h2>Cerita Kami</h2>
              <p>
                Mahogra Madu hadir sebagai brand yang memperkenalkan berbagai pilihan produk madu kepada masyarakat. 
                Melalui katalog produk yang informatif, kami ingin membantu setiap pengunjung mengenal lebih dekat 
                pilihan madu yang tersedia.
              </p>
              <p>
                Kami percaya bahwa mengenal sebuah produk merupakan langkah awal untuk menemukan pilihan yang sesuai. 
                Karena itu, Mahogra Madu berupaya menghadirkan informasi produk yang mudah diakses agar Anda dapat 
                mengenal setiap pilihan dengan lebih baik.
              </p>
            </div>
            <div className="brand-story__visual">
              <div className="brand-story__visual-placeholder">
                {/* Placeholder untuk gambar brand story */}
                <div className="brand-story__visual-icon">🍯</div>
                <p>Mahogra Madu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="our-products-section">
        <div className="container">
          <div className="our-products-section__content">
            <h2>Temukan Berbagai Pilihan Madu</h2>
            <p>
              Setiap produk memiliki informasi tersendiri. Jelajahi katalog Mahogra Madu untuk mengenal 
              lebih jauh pilihan produk yang tersedia.
            </p>
            <div className="our-products-section__cta">
              <Link to="/products" className="button button--primary">
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="closing-cta">
        <div className="container">
          <div className="closing-cta__content">
            <h2>Temukan Pilihan yang Tepat untuk Anda</h2>
            <p>
              Jelajahi katalog produk atau hubungi kami untuk mendapatkan informasi lebih lanjut.
            </p>
            <div className="closing-cta__actions">
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

export default About;
