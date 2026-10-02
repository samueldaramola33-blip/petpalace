import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/petPalaceData';

export const ContactSection: React.FC = () => {
  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Pet Palace! I would like to inquire about pet sales, importation, and delivery services.'
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Contact Pet Palace
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Get in touch directly for pet inquiries, importation requests, and nationwide delivery quotes.
          </p>
        </div>

        {/* Simplified Direct Calling & WhatsApp Only */}
        <div className="max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF7FB] border border-purple-100 shadow-sm space-y-4">
          
          {/* Phone Number for Calling */}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full py-4 px-6 bg-purple-100 hover:bg-purple-200 text-purple-950 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-colors shadow-sm cursor-pointer"
          >
            <Phone className="w-5 h-5 text-purple-700" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

      </div>
    </section>
  );
};
