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
          center: [56.267648, 43.914501], // Координаты Нижнего Новгорода
          zoom: 12,
          fullscreenControl: false,
          zoomControl: true
        });

        // Добавляем маркеры для каждого офиса
        // @ts-ignore
        window.DG.marker([56.23566, 43.869449]).addTo(map).bindPopup(
          '<div class="map-popup">' +
          '<strong>Центр Окон</strong><br>' + 
          'ул. Веденяпина, 6 — 1 этаж<br>' +
          '<a href="tel:+79200068027">+7‒920‒006‒80‒27</a><br>' +
          'Сегодня: 10:00–17:00<br>' +
          'Откроется завтра в 10:00<br>' +
          'Оплата: картой, наличными, через банк, по QR-коду, перевод с карты<br>' +
          '<a href="https://2gis.ru/n_novgorod/geo/2674154732456598" target="_blank" class="map-more-btn">Узнать больше</a>' +
          '</div>'
        );
        
        // @ts-ignore
        window.DG.marker([56.29435, 43.935445]).addTo(map).bindPopup(
          '<div class="map-popup">' +
          '<strong>Центр Окон</strong><br>' + 
          'проспект Ленина, 16 — 1 этаж<br>' +
          '<a href="tel:+79200068027">+7‒920‒006‒80‒27</a><br>' +
          'Сегодня: 10:00–17:00<br>' +
          'Откроется завтра в 10:00<br>' +
          'Оплата: картой, наличными, через банк, по QR-коду, перевод с карты<br>' +
          '<a href="https://2gis.ru/n_novgorod/geo/2674154732452953" target="_blank" class="map-more-btn">Узнать больше</a>' +
          '</div>'
        );
        
        // @ts-ignore
        window.DG.marker([56.227908, 43.895563]).addTo(map).bindPopup(
          '<div class="map-popup">' +
          '<strong>Центр Окон</strong><br>' + 
          'ул. Юлиуса Фучика, 60 — 2 этаж<br>' +
          '<a href="tel:+79200068027">+7‒920‒006‒80‒27</a><br>' +
          'Сегодня: 08:00–17:00<br>' +
          'Откроется завтра в 08:00<br>' +
          'Оплата: наличными, через банк, по QR-коду, перевод с карты<br>' +
          '<a href="https://2gis.ru/n_novgorod/geo/2674154732457059" target="_blank" class="map-more-btn">Узнать больше</a>' +
          '</div>'
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
      </div>
    </section>
  );
};

export default MapSection; 