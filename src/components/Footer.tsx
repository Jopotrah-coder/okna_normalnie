import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-about">
            <div className="footer-logo">
              <h2>ООО "Окна НН"</h2>
              <p>Качественные окна в Нижнем Новгороде с 2015 года</p>
            </div>
            <p className="about-text">
              Мы специализируемся на производстве и установке пластиковых окон, остеклении и отделке балконов. 
              Используем только проверенные материалы и комплектующие от европейских производителей.
            </p>
            <div className="social-icons">
              <a href="https://instagram.com/okna_nn" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span>📸</span>
              </a>
              <a href="https://wa.me/79101234567" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span>💬</span>
              </a>
              <a href="https://t.me/okna_nn" target="_blank" rel="noopener noreferrer" className="social-icon">
                <span>✈️</span>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Навигация</h3>
            <ul>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#glazing">Стеклопакеты</a></li>
              <li><a href="#pricing">Цены</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h3>Контакты</h3>
            <p><span className="icon-location">📍</span> Адреса:</p>
            <p className="address-item">г. Нижний Новгород, ул. Вединяпина, д6</p>
            <p className="address-item">г. Нижний Новгород, проспект Ленина, д16</p>
            <p className="address-item">г. Нижний Новгород, ул. Ю. Фучика, д60к1, офис 17</p>
            <p><span className="icon-phone">📞</span> Телефоны:</p>
            <p className="phone-item"><a href="tel:+72128385">212-83-85</a></p>
            <p className="phone-item"><a href="tel:+74100288">410-02-88</a></p>
            <p className="phone-item"><a href="tel:+79200068027">+7 (920) 006-80-27</a></p>
            <p><span className="icon-email">✉️</span> Email: <a href="mailto:czentrokon@yandex.ru">czentrokon@yandex.ru</a></p>
            <p><span className="icon-time">🕒</span> Режим работы: Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ООО "Окна НН". Все права защищены.</p>
          <p>ИНН: 5256123456 | ОГРН: 1157746123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;