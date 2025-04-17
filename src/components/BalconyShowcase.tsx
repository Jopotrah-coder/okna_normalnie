import React, { useState, useEffect, useRef } from 'react';
import '../styles/BalconyShowcase.css';

const BalconyShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Данные для вкладок
  const tabsData = [
    {
      title: 'Отделка балконов',
      description: 'Превратите ваш балкон в уютное и функциональное пространство с нашей профессиональной отделкой. Мы используем только качественные материалы и применяем современные технологии.',
      benefits: [
        'Надежное утепление',
        'Защита от шума и пыли',
        'Эстетичный внешний вид',
        'Дополнительное пространство для отдыха',
        'Долговечные материалы'
      ],
      price: 'от 33 000 ₽',
      image: 'https://народные-балконы.рф/upload/information_system_19/1/7/1/item_171/information_items_171.jpg'
    },
    {
      title: 'Остекление балконов',
      description: 'Максимальная защита от непогоды и потрясающий вид с профессиональным остеклением балконов и лоджий. Холодное и теплое остекление на выбор.',
      benefits: [
        'Защита от осадков и ветра',
        'Гарантия до 5 лет',
        'Возможность объединения с комнатой',
        'Энергосбережение',
        'Повышение шумоизоляции'
      ],
      price: 'от 39 000 ₽',
      image: 'https://static.tildacdn.com/tild3339-6238-4339-b736-653730393363/1519425199_3.jpg'
    },
    {
      title: 'Утепление балконов',
      description: 'Сделайте ваш балкон комфортным в любое время года. Мы используем современные материалы для максимальной теплоизоляции с минимальной потерей пространства.',
      benefits: [
        'Комфортная температура круглый год',
        'Защита от промерзания стен',
        'Предотвращение образования конденсата',
        'Возможность обустройства рабочего места',
        'Экономия на отоплении'
      ],
      price: 'от 28 000 ₽',
      image: 'https://okna-almaz.com/wp-content/uploads/2018/03/Yteplenie-01.jpg'
    }
  ];

  // Наблюдение за видимостью секции для анимации
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`balcony-showcase ${isInView ? 'in-view' : ''}`} id="balcony">
      <div className="balcony-showcase-waves top"></div>
      
      <div className="container">
        <div className="showcase-header">
          <div className="showcase-title">
            <h2 className="main-title">Балконы и лоджии</h2>
            <p className="subtitle">Специализируемся на профессиональной<br/>
              <span className="highlight">отделке и остеклении балконов и лоджий</span>
            </p>
          </div>
          
          <div className="showcase-action">
            <a href="#contact" className="estimate-btn">
              Рассчитать стоимость
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="showcase-tabs">
          <div className="tabs-header">
            {tabsData.map((tab, index) => (
              <button 
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="tabs-content">
            <div className="content-main">
              <div className="content-info">
                <h3>{tabsData[activeTab].title}</h3>
                <p className="content-description">{tabsData[activeTab].description}</p>
                <ul className="content-benefits">
                  {tabsData[activeTab].benefits.map((benefit, index) => (
                    <li key={index}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#247EBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="content-price">
                  <span className="price-label">Стоимость:</span>
                  <span className="price-value">{tabsData[activeTab].price}</span>
                </div>
                <div className="content-buttons">
                  <a href="#contact" className="primary-btn bigger-btn">Заказать</a>
                  <a href="/services" className="blue-btn">
                    <span>Подробнее</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="content-image animated-image">
                <img src={tabsData[activeTab].image} alt={tabsData[activeTab].title} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="balcony-showcase-waves bottom"></div>
    </section>
  );
};

export default BalconyShowcase; 