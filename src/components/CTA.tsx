import React from 'react';
import '../styles/CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container">
        <div className="cta-content">
          <div className="cta-left">
            <h2>Готовы улучшить комфорт вашего дома?</h2>
            <p>Закажите бесплатный замер и получите скидку 10% на все виды работ</p>
            <ul className="cta-features">
              <li>
                <span className="cta-icon">✓</span>
                Бесплатный выезд замерщика
              </li>
              <li>
                <span className="cta-icon">✓</span>
                Расчет стоимости в день замера
              </li>
              <li>
                <span className="cta-icon">✓</span>
                Возможность рассрочки без процентов
              </li>
            </ul>
          </div>
          
          <div className="cta-right">
            <div className="cta-form-container">
              <h3>Оставьте заявку сейчас</h3>
              <form className="cta-form">
                <div className="form-group">
                  <input type="text" placeholder="Ваше имя" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Ваш телефон" required />
                </div>
                <button type="submit" className="cta-submit-btn">
                  Записаться на замер
                  <svg className="btn-arrow" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
              <p className="privacy-note">Отправляя форму, вы соглашаетесь с <a href="/privacy-policy">политикой конфиденциальности</a></p>
            </div>
          </div>
        </div>
        
        <div className="cta-badge">
          <div className="badge-icon">%</div>
          <div className="badge-text">
            <span className="badge-discount">-10%</span>
            <span className="badge-desc">при заказе до конца месяца</span>
          </div>
        </div>
      </div>
      
      <div className="cta-shape top"></div>
      <div className="cta-shape bottom"></div>
      <div className="cta-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="cta-particle"></div>
        ))}
      </div>
    </section>
  );
};

export default CTA; 