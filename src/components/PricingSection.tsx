import React from 'react';
import '../styles/PricingSection.css';

interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
  discount?: string;
  icon?: React.ReactNode;
}

const PriceCard: React.FC<PriceCardProps> = ({ 
  title,
  price,
  image,
  features,
  popular = false,
  discount,
  icon
}) => {
  return (
    <div className={`price-card slide-up ${popular ? 'popular' : ''}`}>
      {popular && (
        <div className="service-badge">Популярное</div>
      )}
      {discount && (
        <div className="service-discount">{discount}</div>
      )}
      <div className="price-image">
        <img src={image} alt={title} />
      </div>
      <div className="price-content">
        {icon && (
          <div className="service-icon">
            {icon}
          </div>
        )}
        <h3>{title}</h3>
        <div className="price">{price}</div>
        <ul className="price-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="price-card-buttons">
          <button className="secondary-btn">
            <span>Подробнее</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const priceCards = [
    {
      title: 'Окна Эконом',
      price: '4 990 ₽',
      image: '/images/apartment-glazing.jpg',
      features: [
        'Профиль: КВЕ, Exprof, Novotex',
        'Стеклопакет: 24-32 мм',
        'Фурнитура: Базовая',
        'Гарантия: 3 года',
        'Срок изготовления: 5-7 дней'
      ],
      popular: true,
      discount: '-20%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      title: 'Окна Стандарт',
      price: '7 990 ₽',
      image: '/images/balcony-glazing.jpg',
      features: [
        'Профиль: Rehau, Veka, KBE',
        'Стеклопакет: 32-40 мм',
        'Фурнитура: Базовая Roto, Maco',
        'Гарантия: 5 лет',
        'Срок изготовления: 7-10 дней'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: 'Окна Премиум',
      price: '12 990 ₽',
      image: '/images/services/apartment-glazing.jpg',
      features: [
        'Профиль: Rehau Intelio, Geneo',
        'Стеклопакет: 40-52 мм',
        'Фурнитура: Premium Roto, Maco',
        'Гарантия: 7 лет',
        'Срок изготовления: 10-14 дней'
      ],
      popular: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-top-shape"></div>
      <div className="floating-particles"></div>
      <div className="container">
        <h2 className="section-title">Цены на окна</h2>
        <p className="section-description">
          Мы предлагаем различные варианты остекления под любой бюджет и требования.
          Все наши изделия производятся из качественных материалов и устанавливаются опытными специалистами.
        </p>
        <div className="price-cards">
          {priceCards.map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              image={card.image}
              features={card.features}
              popular={card.popular}
              discount={card.discount}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="services-action">
          <a href="#contact" className="primary-action-btn">
            <span>Получить консультацию</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="pricing-shape"></div>
    </section>
  );
};

export default PricingSection; 