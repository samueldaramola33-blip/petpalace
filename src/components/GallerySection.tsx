import React from 'react';
import { Camera } from 'lucide-react';
import { FOUR_GALLERY_SLOTS } from '../data/petPalaceData';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#FAF7FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-600">
            <Camera className="w-4 h-4" />
            <span>Pet Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Featured Companions
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Recent pets from Pet Palace. Contact us for current availability and details.
          </p>
        </div>

        {/* 4 Client Pet Photo Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_GALLERY_SLOTS.map((slot, index) => {
            return (
              <div
                key={slot.id}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Slot */}
                  <div className="relative aspect-[4/3] bg-purple-100 overflow-hidden">
                    <ImageWithFallback
                      src={slot.imageUrl}
                      fallbackSrc={slot.fallbackUrl}
                      alt={slot.title}
                      fallbackTitle={slot.title}
                      objectPosition={slot.objectPosition || 'center'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Slot Indicator Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                      0{index + 1}
                    </div>

                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm text-purple-900 px-2.5 py-0.5 rounded text-[10px] font-bold shadow-xs">
                      {slot.category}
                    </div>
                  </div>

                  {/* Slot Details */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {slot.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Contact Pet Palace for availability and inquiries.
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href="#contact"
                    className="w-full py-2 px-3 bg-purple-50 hover:bg-purple-100 text-purple-900 rounded-lg text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span>Contact About This Pet ↓</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
