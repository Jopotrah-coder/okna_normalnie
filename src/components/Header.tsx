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
            <img src="/logo.png" alt="Центр Окон" className="logo-image" />
            <div className="logo-text">ЦЕНТР ОКОН</div>
          </a>
        </div>
        
        {/* Навигация */}
        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-backdrop" onClick={toggleMobileMenu}></div>
          <ul className="nav-list">
            <li><a href="#" className="nav-link">Балконы</a></li>
            <li><a href="#" className="nav-link">Окна</a></li>
            <li><a href="#" className="nav-link">Рассрочка</a></li>
            <li><a href="#" className="nav-link">Дилерам</a></li>
            <li><a href="#" className="nav-link">О нас</a></li>
          </ul>
        </nav>
        
        {/* Контакты и кнопки */}
        <div className="header-contacts">
          <div className="social-icons">
            <a href="https://t.me/czentrokon" className="social-icon telegram" aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78 18.65L10.06 14.42L17.74 7.5C18.09 7.19 17.67 7.04 17.22 7.31L7.74 13.3L3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3L10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://vk.com/czentrokon" className="social-icon vk" aria-label="VK">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739V5.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H.9c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C6.318 17.343 9.374 19 12.154 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.114 18.217 19.407 19 20.405 19h2.625c.749 0 1.126-.368.909-1.094-.499-1.527-3.863-4.668-4.024-4.878z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          
          <div className="phones">
            <div className="phone-group">
              <div className="phone-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4171 22.2531 12.9809 21.3348 10.06 19.36C7.35933 17.5556 5.09962 15.2959 3.295 12.595C1.31351 9.66507 0.394978 6.22029 0.686 2.67002C0.685664 2.12105 0.896496 1.59286 1.27135 1.21839C1.64621 0.843925 2.1748 0.632928 2.724 0.632982H5.724C6.72168 0.622539 7.56407 1.33571 7.727 2.32002C7.88324 3.40498 8.15544 4.47233 8.536 5.50002C8.81446 6.24322 8.69622 7.0696 8.224 7.70002L7.01 8.91402C8.67993 11.755 10.9392 14.0148 13.78 15.684L14.994 14.47C15.6244 13.9978 16.4508 13.8795 17.194 14.158C18.2217 14.5386 19.289 14.8108 20.374 14.967C21.372 15.1311 22.0873 15.9893 22.07 16.999L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="phone-numbers">
                <a href="tel:+72128385" className="phone-link">212-83-85</a>
                <a href="tel:+74100288" className="phone-link">410-02-88</a>
              </div>
            </div>
            <div className="phone-info">
              <a href="tel:+79200068027" className="phone-link mobile">+7 920-006-80-27</a>
              <span className="work-hours">Пн-сб: 9:00 до 18:00</span>
            </div>
          </div>
          
          <a href="#" className="callback-btn">Бесплатный замер</a>
        </div>
        
        {/* Мобильная кнопка меню */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;