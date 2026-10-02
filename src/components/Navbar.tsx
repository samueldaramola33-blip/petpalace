import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PetPalaceLogo } from './PetPalaceLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7FB]/95 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand wordmark with real Pet Palace logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-xl bg-black p-1.5 flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform overflow-hidden">
            <PetPalaceLogo variant="emblem" className="w-full h-full" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display">
            Pet Palace
          </span>
        </a>

        {/* Clean text navigation links only */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a
            href="#services"
            className="hover:text-purple-700 transition-colors"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-purple-700 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-purple-700 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-purple-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-6 py-4 shadow-lg space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-purple-700 border-b border-slate-100"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-purple-700 border-b border-slate-100"
          >
            Pet Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-purple-700"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
