import React, { useState, useEffect } from 'react';
import '../styles/ContactForm.css';

declare global {
  interface Window {
    grecaptcha: any;
    onReCaptchaLoad?: () => void;
  }
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    
    window.onReCaptchaLoad = () => {
      window.grecaptcha.render('recaptcha-container', {
        'sitekey': '6LdGuu0pAAAAAF3Gvg9dGFQ5JOKgFQsOiX2z7MjJ'
      });
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      window.onReCaptchaLoad = undefined;
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      formDataToSend.append('form_subject', 'Новая заявка с сайта');
      formDataToSend.append('g-recaptcha-response', recaptchaResponse);
      
      const response = await fetch('/mail.php', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Произошла ошибка при отправке. Попробуйте позже.');
      }
      
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', message: '' });
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
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Получить бесплатную консультацию</h2>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Ваш телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>
            
            <div className="form-group recaptcha-wrapper">
              <div id="recaptcha-container"></div>
            </div>
            
            {submitError && <div className="form-error">{submitError}</div>}
            {submitSuccess && <div className="form-success">Спасибо за заявку! Мы свяжемся с вами в ближайшее время.</div>}
            
            <button 
              type="submit" 
              className="primary-btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
          <div className="contact-info">
            <h3>Или позвоните нам</h3>
            <div className="phone-list">
              <a href="tel:+72128385" className="contact-phone">212-83-85</a>
              <a href="tel:+74100288" className="contact-phone">410-02-88</a>
              <a href="tel:+79200068027" className="contact-phone">+7(920)006-80-27</a>
            </div>
            <p>Мы работаем ежедневно с 9:00 до 20:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 