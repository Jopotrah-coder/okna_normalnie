import React, { useState, useEffect, useRef } from 'react';
import '../styles/CTA.css';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaCTALoad?: () => void;
  }
}

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load reCAPTCHA script if not already loaded
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaCTALoad&render=explicit';
      script.async = true;
      script.defer = true;
      
      window.onRecaptchaCTALoad = () => {
        if (recaptchaRef.current) {
          window.grecaptcha.render('recaptcha-cta-container', {
            'sitekey': '6LdGuu0pAAAAAF3Gvg9dGFQ5JOKgFQsOiX2z7MjJ'
          });
        }
      };
      
      document.body.appendChild(script);
      
      return () => {
        window.onRecaptchaCTALoad = undefined;
      };
    } else {
      // If script already loaded, render the recaptcha
      if (window.grecaptcha && recaptchaRef.current) {
        try {
          window.grecaptcha.render('recaptcha-cta-container', {
            'sitekey': '6LdGuu0pAAAAAF3Gvg9dGFQ5JOKgFQsOiX2z7MjJ'
          });
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const recaptchaResponse = window.grecaptcha.getResponse();
      
      if (!recaptchaResponse) {
        throw new Error('Пожалуйста, подтвердите, что вы не робот');
      }
      
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      // Add hidden fields for PHP processing
      formDataToSend.append('project_name', 'Центрокон НН');
      formDataToSend.append('admin_email', 'czentrokon@yandex.ru');
      formDataToSend.append('form_subject', 'Заявка на бесплатный замер');
      formDataToSend.append('g-recaptcha-response', recaptchaResponse);
      
      const response = await fetch('/mail.php', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Произошла ошибка при отправке. Попробуйте позже.');
      }
      
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '' });
      window.grecaptcha.reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Произошла ошибка');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Ваш телефон" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group recaptcha-wrapper" ref={recaptchaRef}>
                  <div id="recaptcha-cta-container"></div>
                </div>
                
                {submitError && <div className="form-error">{submitError}</div>}
                {submitSuccess && <div className="form-success">Спасибо за заявку! Мы свяжемся с вами в ближайшее время.</div>}
                
                <button 
                  type="submit" 
                  className="cta-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Записаться на замер'}
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
          <div className="badge-text">
            <span className="badge-discount">10%</span>
            <span className="badge-desc">скидка до конца месяца</span>
          </div>
        </div>
      </div>
      
      <div className="cta-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="cta-particle"></div>
        ))}
      </div>
    </section>
  );
};

export default CTA; 