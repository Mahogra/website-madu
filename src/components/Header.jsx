import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <div className="container" style={containerStyle}>
        <Link to="/" style={logoStyle}>
          <span style={logoTextStyle}>Mahogra Madu</span>
        </Link>
        
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li>
              <Link to="/" style={navLinkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={navLinkStyle}>About</Link>
            </li>
            <li>
              <Link to="/products" style={navLinkStyle}>Products</Link>
            </li>
            <li>
              <Link to="/contact" style={navLinkStyle}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Inline styles for Phase 1 (will be refined later)
const headerStyle = {
  backgroundColor: 'var(--color-white)',
  boxShadow: 'var(--shadow-sm)',
  position: 'sticky',
  top: 0,
  zIndex: 'var(--z-index-sticky)',
  height: 'var(--header-height)',
  display: 'flex',
  alignItems: 'center'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  textDecoration: 'none'
};

const logoTextStyle = {
  fontSize: 'var(--font-size-xl)',
  color: 'var(--color-primary)',
  fontFamily: 'var(--font-heading)',
  fontWeight: 'var(--font-weight-bold)',
  display: 'block'
};

const navStyle = {
  overflow: 'auto'
};

const navListStyle = {
  display: 'flex',
  gap: 'var(--spacing-lg)',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const navLinkStyle = {
  color: 'var(--color-text)',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: 'var(--font-size-base)',
  transition: 'color var(--transition-fast)'
};

export default Header;
