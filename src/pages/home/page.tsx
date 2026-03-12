import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import Testimonials from './components/Testimonials';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Credentials />
      <Testimonials />
      <ConsultationCTA />
      <Footer />
    </div>
  );
}