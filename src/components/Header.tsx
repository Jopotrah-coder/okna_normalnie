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
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.07989 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.07989 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 7H21" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>ОкнаПро</h1>
            <p>Качественные окна в Нижнем Новгороде</p>
          </div>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-backdrop" onClick={toggleMobileMenu}></div>
          <div className="nav-inner">
            <button className="close-menu-btn" onClick={toggleMobileMenu}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className="nav-list">
              <li><a href="#services">Услуги</a></li>
              <li><a href="#glazing">Стеклопакеты</a></li>
              <li><a href="#pricing">Цены</a></li>
              <li><a href="#gallery">Наши работы</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
        </nav>

        <div className="contact-info">
          <div className="phone-numbers">
            <a href="tel:2128385" className="phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77725 3.00106 4.81286 3.00009H7.53253C7.96014 2.99577 8.37079 3.16298 8.65928 3.45979C9.45062 4.28572 9.97017 8.4 9.22881 9.1414C8.41769 9.9525 6.6709 9.0492 5.82144 9.76041C7.13307 13.1062 9.8879 15.8611 13.2337 17.1727C13.9427 16.3243 13.0461 14.5798 13.855 13.7709C14.5963 13.0295 18.7138 13.5496 19.5397 14.341C19.8373 14.6295 20.0051 15.0403 19.9995 15.4679C19.9995 15.4679 20.9995 16.4767 20.9995 16.4767Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>212-83-85</span>
            </a>
            <a href="tel:4100288" className="phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77725 3.00106 4.81286 3.00009H7.53253C7.96014 2.99577 8.37079 3.16298 8.65928 3.45979C9.45062 4.28572 9.97017 8.4 9.22881 9.1414C8.41769 9.9525 6.6709 9.0492 5.82144 9.76041C7.13307 13.1062 9.8879 15.8611 13.2337 17.1727C13.9427 16.3243 13.0461 14.5798 13.855 13.7709C14.5963 13.0295 18.7138 13.5496 19.5397 14.341C19.8373 14.6295 20.0051 15.0403 19.9995 15.4679C19.9995 15.4679 20.9995 16.4767 20.9995 16.4767Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>410-02-88</span>
            </a>
          </div>
          <a href="tel:+79200068027" className="header-mobile-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77725 3.00106 4.81286 3.00009H7.53253C7.96014 2.99577 8.37079 3.16298 8.65928 3.45979C9.45062 4.28572 9.97017 8.4 9.22881 9.1414C8.41769 9.9525 6.6709 9.0492 5.82144 9.76041C7.13307 13.1062 9.8879 15.8611 13.2337 17.1727C13.9427 16.3243 13.0461 14.5798 13.855 13.7709C14.5963 13.0295 18.7138 13.5496 19.5397 14.341C19.8373 14.6295 20.0051 15.0403 19.9995 15.4679C19.9995 15.4679 20.9995 16.4767 20.9995 16.4767Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button className="call-btn">
            <span>Заказать звонок</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 