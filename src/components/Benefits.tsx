import React from 'react';
import '../styles/Benefits.css';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-icon">
        {icon}
      </div>
      <div className="benefit-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#247EBA">
          <path d="M12 2L2 6V8H22V6L12 2ZM5 10H3V20H5V10ZM11 10H9V20H11V10ZM21 10H19V20H21V10ZM13 20H17V10H15V18H13V20Z" />
        </svg>
      ),
      title: 'Гарантия 5 лет',
      description: 'Предоставляем официальную гарантию на все виды работ и материалы'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#247EBA">
          <path d="M20 8H17V6C17 3.2 14.8 1 12 1S7 3.2 7 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V10C22 8.9 21.1 8 20 8ZM9 6C9 4.3 10.3 3 12 3S15 4.3 15 6V8H9V6ZM20 20H4V10H7H17H20V20ZM13 15C13 15.6 12.6 16 12 16C11.4 16 11 15.6 11 15V13C11 12.4 11.4 12 12 12C12.6 12 13 12.4 13 13V15Z" />
        </svg>
      ),
      title: 'Бесплатный замер',
      description: 'Выезд специалиста для замера в удобное для вас время'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#247EBA">
          <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
        </svg>
      ),
      title: 'Быстрый монтаж',
      description: 'Установка окна занимает 1 день, балкона - до 3 дней'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#247EBA">
          <path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" />
        </svg>
      ),
      title: 'Рассрочка 0%',
      description: 'Возможность оплаты в рассрочку без процентов и переплат'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 