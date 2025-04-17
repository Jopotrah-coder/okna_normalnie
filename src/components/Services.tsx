import React from 'react';
import '../styles/Services.css';

interface ServiceItemProps {
  title: string;
  price: string;
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, price, image }) => {
  return (
    <div className="service-item slide-up">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <div className="content-spacer"></div>
        <div className="blue-btn">
          <span>Подробнее</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Остекление квартир',
      price: '21000р.',
      image: '/images/apartment-glazing.jpg'
    },
    {
      title: 'Остекление балконов',
      price: '39000р.',
      image: 'https://static.tildacdn.com/tild3339-6238-4339-b736-653730393363/1519425199_3.jpg'
    },
    {
      title: 'Остекление коттеджей',
      price: '57000р.',
      image: 'https://tmk-okna.ru/img/bg_trapetsevidnye.jpg'
    },
    {
      title: 'Входные группы',
      price: '42000р.',
      image: 'https://st44.stpulscen.ru/images/product/238/347/773_original.jpg'
    },
    {
      title: 'Отделка балконов',
      price: '33000р.',
      image: 'https://народные-балконы.рф/upload/information_system_19/1/7/1/item_171/information_items_171.jpg'
    },
    {
      title: 'Алюминевые конструкции',
      price: '60000р.',
      image: 'https://амет-групп-рт.рф/wp-content/uploads/2019/10/alum_konstr3.jpg'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">ВИДЫ ВЫПОЛНЯЕМЫХ РАБОТ</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              title={service.title}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 