import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CustomFurniture({ setActiveTab }) {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 space-y-12">
      
      <div className="bg-[#2d241e] text-white p-8 md:p-12 rounded-2xl space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">BESPOKE FURNITURE INDORE</span>
        <h1 className="text-3xl md:text-5xl font-serif">Customized Furniture in Indore</h1>
        <p className="text-[#d9cdbf] text-xs md:text-sm max-w-2xl">
          Furniture Made for Your Space. Not every space needs standard-size furniture. ShreeInterio creates customized furniture designed around your measurements, requirements, lifestyle and interior style.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-serif text-[#2d241e]">What We Customize</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            'TV Units', 'Wardrobes', 'Beds', 'Sofas', 'Dining Tables', 
            'Study Tables', 'Bookshelves', 'Storage Units', 'Crockery Units', 
            'Console Tables', 'Office Furniture'
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-[#e5dcd3] text-center text-xs font-bold text-[#2d241e]">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f4eee8] p-8 rounded-xl border border-[#e5dcd3] text-center space-y-4">
        <h3 className="text-xl font-serif text-[#2d241e]">Choose Your Custom Parameters</h3>
        <p className="text-xs text-[#8c6d53] font-bold">Size | Material | Colour | Finish | Storage | Style</p>
        <button onClick={() => setActiveTab('contact')} className="bg-[#8c6d53] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
          Request Custom Furniture <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}