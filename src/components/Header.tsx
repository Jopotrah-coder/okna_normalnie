import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        {/* Логотип */}
        <div className="logo">
          <a href="/" className="logo-link">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="#247EBA" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="22" stroke="#247EBA" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="22" stroke="#247EBA" strokeWidth="2"/>
                <line x1="2" y1="8" x2="22" y2="8" stroke="#247EBA" strokeWidth="2"/>
                <line x1="2" y1="16" x2="22" y2="16" stroke="#247EBA" strokeWidth="2"/>
              </svg>
            </div>
            <div className="logo-text">ЦЕНТР ОКОН</div>
          </a>
        </div>
        
        {/* Навигация */}
        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-backdrop" onClick={toggleMobileMenu}></div>
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Окна</a></li>
            <li><a href="#" className="nav-link">Балконы</a></li>
            <li><a href="#" className="nav-link">Рассрочка</a></li>
            <li><a href="#" className="nav-link">Дилерам</a></li>
            <li><a href="#" className="nav-link">О нас</a></li>
          </ul>
        </nav>
        
        {/* Контакты и кнопки */}
        <div className="header-contacts">
          <div className="social-icons">
            <a href="#" className="social-icon telegram">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 5L9.218 10.083M22 5L14.128 21.231L9.218 10.083M22 5L3 11.4652L9.218 10.083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="social-icon vk">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12.5C2 8.5 2 6.5 3 5C4 3.5 6 2 12 2C18 2 20 3.5 21 5C22 6.5 22 8.5 22 12.5C22 16.5 22 18.5 21 20C20 21.5 18 22.5 12 22.5C6 22.5 4 21.5 3 20C2 18.5 2 16.5 2 12.5Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 9.5H8C9 9.5 9.5 10 10 11L10.5 11.5C11 12.5 11.5 13 12.5 13C13.5 13 14 12.5 14.5 11.5L15 11C15.5 10 16 9.5 17 9.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="phones">
            <div className="phone">
              <a href="tel:+72128385" className="phone-link">+7 212-83-85</a>
            </div>
            <div className="phone">
              <a href="tel:+74100288" className="phone-link">+7 410-02-88</a>
            </div>
            <div className="phone-info">
              <a href="tel:+79200068027" className="phone-link">+7 920-006-80-27</a>
              <span className="work-hours">Пн-сб: 9:00 до 18:00</span>
            </div>
          </div>
          
          <a href="#" className="callback-btn">Бесплатный замер</a>
        </div>
        
        {/* Мобильная кнопка меню */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 