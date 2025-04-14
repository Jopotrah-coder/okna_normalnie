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
        
        <div className="map-container-wrapper">
          <div id="map-container" className="map-container"></div>
          
          <div className="reviews-container">
            <h3>Отзывы клиентов</h3>
            
            <div className="reviews-iframe-container">
              <iframe 
                src="https://2gis.ru/n_novgorod/firm/70000001030762604/tab/reviews" 
                title="Отзывы на 2GIS" 
                className="reviews-iframe"
                frameBorder="0"
              ></iframe>
            </div>
            
            <a href="https://2gis.ru/n_novgorod/firm/70000001030762604/tab/reviews" target="_blank" rel="noopener noreferrer" className="review-link">
              Смотреть все отзывы на 2GIS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 