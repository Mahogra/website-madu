
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-text">Mahogra Madu</span>
        </Link>

        <button
          className="header__menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="header-navigation"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
        >
          <ul className="header__nav-list">
            <li>
              <Link to="/" className="header__nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header__nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="header__nav-link" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
