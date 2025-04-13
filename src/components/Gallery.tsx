import React, { useState } from 'react';
import '../styles/Gallery.css';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, description, category }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="gallery-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="gallery-image">
        <img src={image} alt={title} />
        <div className={`gallery-overlay ${hovered ? 'active' : ''}`}>
          <div className="gallery-info">
            <span className="gallery-category">{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="gallery-btn">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1531109323667-75eabeed525f?q=80&w=600&auto=format&fit=crop',
      title: 'Панорамное остекление',
      description: 'Современные панорамные окна с великолепным видом на город',
      category: 'residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1598815049455-262f008c5ccf?q=80&w=600&auto=format&fit=crop',
      title: 'Отделка балкона',
      description: 'Полная отделка балкона с изящными деталями',
      category: 'balcony'
    },
    {
      image: 'https://images.unsplash.com/photo-1459128806328-853c7ac1691a?q=80&w=600&auto=format&fit=crop',
      title: 'Остекление ЖК "Маяк"',
      description: 'Комплексное остекление нового жилого комплекса',
      category: 'commercial'
    },
    {
      image: 'https://images.unsplash.com/photo-1527960573570-60174d8d1a9e?q=80&w=600&auto=format&fit=crop',
      title: 'Французское остекление',
      description: 'Французские окна в частном загородном доме',
      category: 'residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?q=80&w=600&auto=format&fit=crop',
      title: 'Офисный комплекс',
      description: 'Алюминиевые конструкции для современного офиса',
      category: 'commercial'
    },
    {
      image: 'https://images.unsplash.com/photo-1563339007-6914941198b1?q=80&w=600&auto=format&fit=crop',
      title: 'Лоджия под ключ',
      description: 'Утепление и отделка лоджии с панорамными окнами',
      category: 'balcony'
    }
  ];
  
  const filters = [
    { id: 'all', name: 'Все проекты' },
    { id: 'residential', name: 'Жилые помещения' },
    { id: 'commercial', name: 'Коммерческие объекты' },
    { id: 'balcony', name: 'Балконы и лоджии' }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">НАШИ РАБОТЫ</h2>
        <p className="section-description">
          Ознакомьтесь с нашими последними проектами и убедитесь в качестве нашей работы
        </p>
        
        <div className="gallery-filters">
          {filters.map(filter => (
            <button 
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <GalleryItem 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
        
        <div className="gallery-more">
          <button className="primary-btn">Смотреть все проекты</button>
        </div>
      </div>
      
      <div className="gallery-shape top"></div>
      <div className="gallery-shape bottom"></div>
    </section>
  );
};

export default Gallery; 