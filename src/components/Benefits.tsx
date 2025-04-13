import React from 'react';
import '../styles/Benefits.css';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-icon">
        <img src={icon} alt={title} />
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
      icon: 'https://cdn-icons-png.flaticon.com/512/4406/4406319.png',
      title: 'Гарантия 5 лет',
      description: 'Предоставляем официальную гарантию на все виды работ и материалы'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/686/686317.png',
      title: 'Бесплатный замер',
      description: 'Выезд специалиста для замера в удобное для вас время'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3662/3662056.png',
      title: 'Быстрый монтаж',
      description: 'Установка окна занимает 1 день, балкона - до 3 дней'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3242/3242257.png',
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