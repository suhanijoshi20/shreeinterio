import React from 'react';

export default function About({ setActiveTab }) {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 space-y-10 text-center">
      
      <div className="space-y-4">
        <span className="text-[#8c6d53] text-xs font-bold uppercase tracking-widest">ABOUT SHREEINTERIO</span>
        <h1 className="text-3xl md:text-5xl font-serif text-[#2d241e]">Designing Beautiful Spaces. Creating Better Lifestyles.</h1>
        <p className="text-[#6b5a4e] text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
          ShreeInterio is an interior, furniture and décor brand focused on creating spaces that are beautiful, functional and personal. We believe good design is not only about how a space looks—it is about how comfortably and naturally it works for everyday life.
        </p>
      </div>

      <div className="bg-[#f4eee8] p-8 rounded-2xl border border-[#e5dcd3] space-y-3">
        <h2 className="text-xl font-serif font-bold text-[#2d241e]">Our Philosophy</h2>
        <p className="text-sm font-medium text-[#8c6d53]">We don't just sell furniture. We help create spaces that feel like home.</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-serif text-[#2d241e]">What We Offer</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold text-[#2d241e]">
          {[
            'Interior Design', 'Furniture', 'Customized Furniture',
            'Modular Kitchens', 'Wardrobes', 'Home Décor',
            'Residential Interiors', 'Commercial Interiors', 'Turnkey Interior Solutions'
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-[#e5dcd3]">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <button onClick={() => setActiveTab('shop')} className="bg-[#2d241e] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#8c6d53] transition">
          Explore Our Collection →
        </button>
      </div>

    </div>
  );
}