import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Mahogra Madu</h3>
          <p style={textStyle}>Madu Premium Indonesia</p>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Menu</h4>
          <ul style={linkListStyle}>
            <li><Link to="/" style={linkStyle}>Beranda</Link></li>
            <li><Link to="/about" style={linkStyle}>Tentang</Link></li>
            <li><Link to="/products" style={linkStyle}>Produk</Link></li>
            <li><Link to="/contact" style={linkStyle}>Kontak</Link></li>
          </ul>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Ikuti Kami</h4>
          <p style={textStyle}>Tetap terhubung dengan Mahogra Madu</p>
        </div>
      </div>
      
      <div style={copyrightStyle}>
        <div className="container">
          <p style={copyrightTextStyle}>
            © {currentYear} Mahogra Madu. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Inline styles for Phase 1
const footerStyle = {
  backgroundColor: 'var(--color-forest-green)',
  color: 'var(--color-white)',
  marginTop: 'var(--spacing-3xl)',
  paddingTop: 'var(--spacing-xl)',
  paddingBottom: 'var(--spacing-md)'
};

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 'var(--spacing-xl)'
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-xs)'
};

const headingStyle = {
  color: 'var(--color-white)',
  fontSize: 'var(--font-size-lg)',
  marginBottom: 'var(--spacing-sm)'
};

const textStyle = {
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-cream)',
  marginBottom: '0.25rem'
};

const linkListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-xs)'
};

const linkStyle = {
  color: 'var(--color-cream)',
  fontSize: 'var(--font-size-sm)',
  transition: 'color var(--transition-fast)'
};

const copyrightStyle = {
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  marginTop: 'var(--spacing-xl)',
  paddingTop: 'var(--spacing-md)'
};

const copyrightTextStyle = {
  textAlign: 'center',
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-cream)',
  margin: 0
};

export default Footer;
