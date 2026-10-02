import React from 'react';
import { MessageCircle, Phone, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/petPalaceData';
import { PetPalaceLogo } from './PetPalaceLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand with real Pet Palace logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-black p-1.5 flex items-center justify-center border border-white/10 shadow-sm overflow-hidden">
            <PetPalaceLogo variant="emblem" className="w-full h-full" />
          </div>
          <div>
            <span className="text-base font-bold text-white font-display block leading-tight">
              Pet Palace
            </span>
            <span className="text-xs text-[#22c7be] font-medium">
              Veterinary Services
            </span>
          </div>
        </div>

        {/* Quick Contact Links */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-pink-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Copyright & Credit */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Pet Palace.</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </div>
          <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
          <a
            href="https://sammykrafttech.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
          >
            Built by Sammykraft Technologies
          </a>
        </div>

      </div>
    </footer>
  );
};
