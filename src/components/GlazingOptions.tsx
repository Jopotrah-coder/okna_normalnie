import React from 'react';
import '../styles/GlazingOptions.css';

interface GlazingOptionProps {
  title: string;
  description: string;
  icon: string;
}

const GlazingOption: React.FC<GlazingOptionProps> = ({ title, description, icon }) => {
  return (
    <div className="glazing-option">
      <div className="glazing-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const GlazingOptions: React.FC = () => {
  const options = [
    {
      title: 'ЭНЕРГОСБЕРЕГАЮЩИЙ ПАКЕТ',
      description: 'Энергосберегающее стекло делает окно значительно теплее обычного благодаря многослойному напылению металлов',
      icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176268.png'
    },
    {
      title: 'ШУМОИЗОЛЯЦИОННЫЙ ПАКЕТ',
      description: 'Для улучшения звукозащитных свойств в шумоизоляционном стеклопакете используются стекла разной толщины, которые гасят звуковые колебания разной частоты',
      icon: 'https://cdn-icons-png.flaticon.com/512/1082/1082431.png'
    },
    {
      title: 'МУЛЬТИФУНКЦИОНАЛЬНЫЙ ПАКЕТ',
      description: 'Мультифункциональное стекло обеспечивает максимальный комфорт: защищает от жары летом и сохраняет тепло зимой',
      icon: 'https://cdn-icons-png.flaticon.com/512/3731/3731083.png'
    }
  ];

  return (
    <section className="glazing-section" id="glazing">
      <div className="container">
        <h2 className="section-title">ВАРИАНТЫ СТЕКЛОПАКЕТОВ</h2>
        <p className="section-description">
          Основную площадь окна занимает стеклопакет, и именно через него происходит основная потеря тепла и проникновение жары, шума и света.
          Поэтому к выбору стеклопакета стоит уделить особое внимание.
        </p>
        <div className="glazing-options">
          {options.map((option, index) => (
            <GlazingOption
              key={index}
              title={option.title}
              description={option.description}
              icon={option.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlazingOptions; 