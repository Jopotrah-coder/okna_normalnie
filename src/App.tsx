import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import GlazingOptions from './components/GlazingOptions';
import PricingSection from './components/PricingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import MapSection from './components/MapSection';
import './styles/global.css';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <GlazingOptions />
      <PricingSection />
      <FAQ />
      <CTA />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
