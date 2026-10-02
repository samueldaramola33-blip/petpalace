import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7FB] text-slate-800 selection:bg-purple-200 selection:text-purple-900">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 4 Core Services */}
        <ServicesSection />

        {/* Pet Gallery: Exactly 4 photo slots */}
        <GallerySection />

        {/* Contact Section: Phone Calling & WhatsApp Button */}
        <ContactSection />
      </main>

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}
