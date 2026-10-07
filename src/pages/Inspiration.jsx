import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { INSPIRATIONS, BLOGS } from '../data/mockData';

export default function Inspiration({ onAddToCart }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 overflow-hidden">
      
      {/* Lookbook section */}
      <div className="space-y-6">
        <div 
          className="text-center max-w-xl mx-auto space-y-2"
          data-aos="fade-down"
        >
          <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Get Inspired</h1>
          <p className="text-xs text-[#8c7a6b]">Browse styled room setups and purchase individual matching items.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSPIRATIONS.map((insp, index) => (
            <div 
              key={insp.id} 
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 150}
              className="bg-white rounded-xl overflow-hidden border border-[#e5ded4] shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={insp.image} 
                  alt={insp.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#2d241e]">{insp.title}</h3>
                <p className="text-xs text-[#8c7a6b]">Shop this look:</p>
                <button 
                  onClick={() => alert('Add items from this look to cart!')}
                  className="w-full bg-[#c89d7c] text-white text-xs font-bold py-2.5 rounded hover:bg-[#b08260] transition-colors"
                >
                  Shop This Look →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blogs / Tips */}
      <div className="space-y-6 pt-12 border-t border-[#e5ded4]">
        <div 
          className="text-center max-w-xl mx-auto space-y-2"
          data-aos="fade-down"
        >
          <h2 className="text-2xl font-serif font-bold text-[#2d241e]">Interior Ideas & Décor Tips</h2>
          <p className="text-xs text-[#8c7a6b]">Read practical guides from our lead designers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((b, index) => (
            <div 
              key={b.id} 
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 150}
              className="bg-white rounded-xl overflow-hidden border border-[#e5ded4] space-y-3 p-4 hover:shadow-md transition-all"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={b.image} 
                  alt={b.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] text-[#c89d7c] font-bold">{b.date}</span>
              <h3 className="font-serif font-bold text-sm text-[#2d241e] line-clamp-2">{b.title}</h3>
              <p className="text-xs text-[#8c7a6b] line-clamp-2">{b.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}