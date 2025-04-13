import React, { useState } from 'react';
import '../styles/FAQ.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div 
      className={`faq-item ${isOpen ? 'open' : ''}`} 
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="faq-question">
        <h3>{question}</h3>
        <div className="faq-icon">
          <span className="vertical"></span>
          <span className="horizontal"></span>
        </div>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: 'Как долго занимает установка пластиковых окон?',
      answer: 'Установка стандартного окна занимает 3-4 часа. Для балконного остекления может потребоваться от 1 до 3 дней в зависимости от сложности работ и дополнительных услуг, таких как утепление или внутренняя отделка.'
    },
    {
      question: 'Какие виды стеклопакетов вы предлагаете?',
      answer: 'Мы предлагаем широкий выбор стеклопакетов: однокамерные, двухкамерные, энергосберегающие, шумоизоляционные и мультифункциональные. Наши специалисты помогут подобрать оптимальный вариант исходя из ваших потребностей и бюджета.'
    },
    {
      question: 'Предоставляете ли вы гарантию на работы и материалы?',
      answer: 'Да, мы предоставляем гарантию на все виды работ и материалы. Гарантийный срок на стеклопакеты и профили составляет 5 лет, на фурнитуру - 3 года, на монтажные работы - 2 года. В течение этого времени мы бесплатно устраним все возникшие неполадки.'
    },
    {
      question: 'Можно ли заказать рассрочку на остекление?',
      answer: 'Да, мы предлагаем рассрочку платежа на срок до 12 месяцев без процентов. Для оформления рассрочки нужен только паспорт, решение принимается в течение 15 минут.'
    },
    {
      question: 'Как происходит замер окон?',
      answer: 'Замер осуществляется нашим специалистом бесплатно в удобное для вас время. Во время замера мы также проконсультируем вас по выбору профиля, стеклопакета и других особенностей будущей конструкции.'
    },
    {
      question: 'Выполняете ли вы работы в области?',
      answer: 'Да, мы работаем как в Нижнем Новгороде, так и по всей Нижегородской области. Стоимость выезда в область рассчитывается индивидуально в зависимости от расстояния.'
    }
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <p className="section-description">
          Здесь вы найдете ответы на самые популярные вопросы о наших услугах и продукции
        </p>
        
        <div className="faq-container">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
          
          <div className="faq-image-container">
            <div className="faq-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop" 
                alt="Консультация по окнам" 
                className="faq-image"
              />
            </div>
            <div className="faq-contact">
              <h3>Не нашли ответ на свой вопрос?</h3>
              <p>Свяжитесь с нашими специалистами для получения бесплатной консультации</p>
              <button className="primary-btn">Задать вопрос</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="faq-blob"></div>
    </section>
  );
};

export default FAQ; 