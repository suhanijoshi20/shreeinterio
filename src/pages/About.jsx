// src/pages/About.jsx
import React from 'react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">About ShreeInterio</h1>
        <p className="text-xs text-[#8c7a6b]">Crafting elegant, modern homes across Central India.</p>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" alt="Studio" className="w-full h-full object-cover" />
      </div>

      <div className="space-y-4 text-xs text-[#6b5b4e] leading-relaxed">
        <p>
          Founded in Indore, **ShreeInterio** is a full-service interior design firm and online luxury furniture studio. We specialize in turn-key residential projects, modular kitchens, custom solid wood furniture, and curated accent accessories.
        </p>
        <p>
          Our team of interior architects and skilled craftsmen work closely to transform blank floors into comfortable, aesthetic sanctuaries designed for modern living.
        </p>
      </div>
    </div>
  );
}