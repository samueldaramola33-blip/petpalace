import React from 'react';
import {
  HeartHandshake,
  Globe,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/petPalaceData';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-pink-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-fuchsia-500" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-violet-600" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-pink-500" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Our Core Services
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            Comprehensive Pet Care, Sales & Relocation
          </h2>

          <p className="text-sm text-slate-600">
            From healthy cats and dogs to international pet transport, accessories, and nationwide delivery.
          </p>
        </div>

        {/* 4 Core Services Grid: Clean, consistent cards without bullet lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl border border-purple-100 bg-[#FAF7FB] p-6 sm:p-7 hover:bg-white hover:shadow-lg hover:border-purple-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-purple-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-purple-400 font-display">
                    0{index + 1}.
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-600 uppercase tracking-wide mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-purple-100/60 flex items-center justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-pink-600 transition-colors"
                >
                  <span>Contact for Details →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
