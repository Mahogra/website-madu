import WhatsAppButton from '../components/WhatsAppButton';
import './Contact.css';

/**
 * Contact Page - Mahogra Madu
 * 
 * Halaman kontak dengan informasi cara menghubungi Mahogra Madu.
 * Menampilkan WhatsApp CTA jika nomor sudah dikonfigurasi.
 * 
 * TODO: Tambahkan informasi kontak dari klien ketika tersedia:
 * - Nomor WhatsApp Business
 * - Alamat lengkap
 * - Email (jika ada)
 * - Jam operasional
 * - Link media sosial (Instagram, Facebook, dll)
 */
function Contact() {
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero__background"></div>
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Hubungi Kami</h1>
            <p className="contact-hero__description">
              Kami siap membantu Anda mendapatkan informasi lebih lanjut tentang produk Mahogra Madu.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-info__content">
            <div className="contact-info__text">
              <h2>Informasi Kontak</h2>
              <p>
                Untuk informasi lebih lanjut mengenai produk Mahogra Madu atau pertanyaan lainnya, 
                silakan hubungi kami melalui WhatsApp.
              </p>
              <p>
                Kami akan dengan senang hati membantu Anda menemukan produk yang sesuai dengan kebutuhan Anda.
              </p>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="contact-info__cta">
              <WhatsAppButton>
                Hubungi via WhatsApp
              </WhatsAppButton>
              
              {/* Info placeholder ketika WhatsApp belum dikonfigurasi */}
              <div className="contact-info__placeholder">
                <p>
                  Informasi kontak lengkap akan tersedia segera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="contact-additional">
        <div className="container">
          <div className="contact-additional__grid">
            <div className="contact-additional__item">
              <div className="contact-additional__icon">💬</div>
              <h3>Chat dengan Kami</h3>
              <p>Tanyakan informasi produk melalui WhatsApp</p>
            </div>
            
            <div className="contact-additional__item">
              <div className="contact-additional__icon">📦</div>
              <h3>Informasi Produk</h3>
              <p>Dapatkan detail lengkap mengenai produk kami</p>
            </div>
            
            <div className="contact-additional__item">
              <div className="contact-additional__icon">🤝</div>
              <h3>Layanan Pelanggan</h3>
              <p>Kami siap membantu kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
