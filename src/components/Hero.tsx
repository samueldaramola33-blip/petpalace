import React from 'react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 lg:pt-16 lg:pb-16 bg-[#FAF7FB]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/50 via-pink-200/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-200/40 via-purple-100/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Simplified content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Small label line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-purple-900">
              <span className="flex items-center gap-1.5 text-pink-600">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                Pet Palace Veterinary Services
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="text-slate-600">Pedigree Sales & Importation</span>
            </div>

            {/* Large heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display text-balance">
              Premium Pet Sales, Importation &{' '}
              <span className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Nationwide Delivery
              </span>
            </h1>

            {/* One short tagline/description line */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Purebred companions, worldwide importation, and safe nationwide delivery to your doorstep.
            </p>

          </div>

          {/* Right Column: Single puppy photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="bg-white rounded-3xl p-3 border border-purple-100 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-purple-50">
                  <ImageWithFallback
                    src="/pet4.jpeg"
                    fallbackSrc="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
                    alt="Pet Palace Puppy"
                    fallbackTitle="Pet Palace Puppy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-pink-200 uppercase tracking-wider">
                      Pet Palace Veterinary Services
                    </p>
                    <p className="text-sm font-bold text-white font-display">
                      One of Our Happy Puppies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
