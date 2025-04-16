import React, { useEffect } from 'react';
import '../styles/MapSection.css';

const MapSection: React.FC = () => {
  useEffect(() => {
    // Загружаем скрипт 2GIS карты
    const mapScript = document.createElement('script');
    mapScript.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
    mapScript.async = true;
    document.body.appendChild(mapScript);

    mapScript.onload = () => {
      // @ts-ignore
      window.DG.then(() => {
        // @ts-ignore
        const map = window.DG.map('map-container', {
          center: [56.297, 43.936], // Координаты Нижнего Новгорода
          zoom: 13,
          fullscreenControl: false,
          zoomControl: true
        });

        // Добавляем маркеры для каждого офиса
        // @ts-ignore
        window.DG.marker([56.301, 43.940]).addTo(map).bindPopup(
          'Центр Окон<br>' + 
          'ул. Вединяпина, д6<br>' +
          '<a href="tel:+72128385">212-83-85</a>'
        );
        
        // @ts-ignore
        window.DG.marker([56.276, 43.967]).addTo(map).bindPopup(
          'Центр Окон<br>' + 
          'проспект Ленина, д16<br>' +
          '<a href="tel:+74100288">410-02-88</a>'
        );
        
        // @ts-ignore
        window.DG.marker([56.285, 43.920]).addTo(map).bindPopup(
          'Центр Окон<br>' + 
          'ул. Ю. Фучика, д60к1, офис 17<br>' +
          '<a href="tel:+79200068027">+7(920)006-80-27</a>'
        );
      });
    };

    return () => {
      if (document.body.contains(mapScript)) {
        document.body.removeChild(mapScript);
      }
    };
  }, []);

  return (
    <section className="map-section" id="map">
      <div className="container">
        <h2 className="section-title">Мы находимся здесь</h2>
        <p className="section-description">Посетите наши офисы в Нижнем Новгороде</p>
        
        {/* Карта на всю ширину */}
        <div className="map-full-container">
          <div id="map-container" className="map-container"></div>
        </div>
        
        {/* Отзывы под картой */}
        <div className="reviews-section">
          <h2 className="section-title">Отзывы наших клиентов</h2>
          <p className="section-description">Что о нас говорят клиенты на 2GIS</p>
          
          <div className="reviews-wrapper">
            <div className="reviews-iframe-container">
              <iframe 
                id="big_light_70000001032086994" 
                frameBorder="0" 
                width="100%" 
                height="824px" 
                sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                src="https://2gis.ru/n_novgorod/firm/70000001039603957/tab/reviews"
                title="Отзывы на 2GIS" 
                className="reviews-iframe"
              ></iframe>
            </div>
            
            <div className="reviews-actions">
              <a href="https://2gis.ru/n_novgorod/firm/70000001039603957/tab/reviews" target="_blank" rel="noopener noreferrer" className="review-link">
                Смотреть все отзывы на 2GIS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="#" className="primary-btn leave-review-btn">
                Оставить отзыв
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 