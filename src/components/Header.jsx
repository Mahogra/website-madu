import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when a nav link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="container header__container">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-text">Mahogra Madu</span>
        </Link>
        
        {/* Hamburger Button - Mobile Only */}
        <button 
          className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
        
        {/* Navigation Menu */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link" onClick={closeMenu}>
                Beranda
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about" className="header__nav-link" onClick={closeMenu}>
                Tentang
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/products" className="header__nav-link" onClick={closeMenu}>
                Produk
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link" onClick={closeMenu}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
