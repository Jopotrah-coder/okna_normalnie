import React, { useEffect, useState, useRef } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Single background image - using the second image from the previous carousel
  const backgroundImage = 'https://images.unsplash.com/photo-1585128903994-9788298932a6?q=80&w=1920&auto=format&fit=crop';
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Improved counter animations with easing
    const timer1 = setTimeout(() => {
      const interval = setInterval(() => {
        setCount1(prev => {
          if (prev < 12) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 150);
      return () => clearInterval(interval);
    }, 800);
    
    const timer2 = setTimeout(() => {
      const interval = setInterval(() => {
        setCount2(prev => {
          if (prev < 5000) return prev + Math.floor(Math.random() * 200) + 100;
          clearInterval(interval);
          return 5000;
        });
      }, 40);
      return () => clearInterval(interval);
    }, 900);
    
    const timer3 = setTimeout(() => {
      const interval = setInterval(() => {
        setCount3(prev => {
          if (prev < 100) return prev + 2;
          clearInterval(interval);
          return 100;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 1000);
    
    // Enhanced parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(0, 1 - scrollPosition / 700);
        
        if (contentRef.current) {
          contentRef.current.style.opacity = opacity.toString();
          contentRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
      }
    };

    // 3D tilt effect based on mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && contentRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        
        const x = (clientX / width - 0.5) * 20;
        const y = (clientY / height - 0.5) * 20;
        
        // Apply subtle 3D effect to content
        contentRef.current.style.transform = `perspective(1000px) rotateX(${-y * 0.05}deg) rotateY(${x * 0.05}deg) translateZ(10px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-background">
        <div 
          className="hero-bg-image active"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
      </div>
      
      <div className="hero-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div ref={contentRef} className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">★</span>
            <span>Лидер на рынке с 2010 года</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-highlight" style={{ color: 'white' }}>Установка пластиковых окон</span> <span style={{ color: 'white' }}>и отделка балконов</span>
          </h1>
          
          <h2 className="hero-subtitle" style={{ color: 'white' }}>в Нижнем Новгороде и Нижегородской области</h2>
          
          <div className="hero-counters">
            <div className="counter-item">
              <div className="counter-number">{count1}<span className="counter-plus">+</span></div>
              <div className="counter-label">Лет опыта</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{count2}<span className="counter-plus">+</span></div>
              <div className="counter-label">Довольных клиентов</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{count3}<span className="counter-percent">%</span></div>
              <div className="counter-label">Гарантия качества</div>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <span>Немецкое качество</span>
                <small>Только сертифицированные материалы</small>
              </div>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <span>Гарантия 5 лет</span>
                <small>На все виды работ и материалы</small>
              </div>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-content">
                <span>Быстрая установка</span>
                <small>Сроки работ от 1 дня</small>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <button className="primary-btn pulse-btn">
              <span>Рассчитать стоимость</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="secondary-hero-btn">
              <span>Смотреть каталог</span>
            </button>
          </div>
          
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="scroll-text">Прокрутите вниз</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 