import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, role, image }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-quote">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="quote-icon">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zM10 21h12v2H10v-2zm5.585-8.679C14.556 11.227 14 10 14 8.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.746-1.179z"/>
        </svg>
        <p>{text}</p>
      </div>
      <div className="testimonial-author">
        <div className="author-image">
          <img src={image} alt={author} />
        </div>
        <div className="author-info">
          <h4>{author}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      text: "Очень доволен качеством окон и сервисом! Устанавливали балконный блок, всё сделано аккуратно и профессионально. Особенно порадовала шумоизоляция — теперь не слышно улицу совсем.",
      author: "Александр Петров",
      role: "Новая квартира в ЖК Цветы",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Заказывала остекление лоджии. Ребята справились за один день! Всё чисто, аккуратно, никакого мусора. Окна не выпускают тепло зимой, а летом в комнате прохладно. Рекомендую!",
      author: "Елена Смирнова",
      role: "Квартира в новостройке",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Компания ОкнаПро делала мне панорамное остекление в загородном доме. Получилось шикарно! Качество на высоте, энергосбережение работает как надо, зимой тепло не уходит.",
      author: "Дмитрий Иванов",
      role: "Владелец коттеджа",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      text: "Спасибо команде ОкнаПро за профессионализм! Выбрали стильные входные группы для нашего офиса, все смонтировали в выходные, чтобы не мешать рабочему процессу. Большое спасибо!",
      author: "Марина Кузнецова",
      role: "Директор веб-студии",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
        <p className="section-description">
          Мы гордимся качеством нашей работы и довольными клиентами. Ваш комфорт — наша главная задача!
        </p>
        
        <div className="testimonials-container">
          <div className="testimonials-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <Testimonial 
                  text={testimonial.text}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
          
          <div className="testimonials-controls">
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="testimonials-decoration left"></div>
      <div className="testimonials-decoration right"></div>
    </section>
  );
};

export default Testimonials; 