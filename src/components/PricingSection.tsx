import React from 'react';
import '../styles/PricingSection.css';

interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, image, features }) => {
  return (
    <div className="price-card">
      <div className="price-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="price-tag">{price}</div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <img src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png" alt="check" className="check-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="primary-btn price-btn">ОСТАВИТЬ ЗАЯВКУ</button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const priceCards = [
    {
      title: 'Двухстворчатое окно',
      price: 'от 25000 руб',
      image: 'https://brest.alutech.by/upload/webp/resize_cache/f7a/400_400_1/f7acc07f17c74e48190121a62bb8d61d.webp',
      features: ['Профиль Rehau Blitz New', 'С установкой']
    },
    {
      title: 'Трёхстворчатое окно',
      price: 'от 33000 руб',
      image: 'https://studokna.ru/upload/iblock/f41/4.jpg',
      features: ['Профиль Rehau Blitz New', 'С установкой']
    },
    {
      title: 'Балконный блок',
      price: 'от 36200 руб',
      image: 'https://f-okna.kz/sites/default/files/field/image/balkonnyy_blok_chto_nuzhno_znat_pri_vybore.jpg',
      features: ['Профиль Rehau Blitz New', 'С установкой']
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2 className="section-title">ЦЕНЫ НА ОКНА</h2>
        <div className="price-cards">
          {priceCards.map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              image={card.image}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 