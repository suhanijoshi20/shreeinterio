import React from 'react';
import { STYLES } from '../data/mockData';

export default function Styles({ setActiveTab }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Find Your Interior Style</h1>
        <p className="text-xs text-[#8c7a6b]">Whether clean modern lines or warm traditional brass, find designs tailored to your taste.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STYLES.map((st, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveTab('shop')}
            className="group relative rounded-xl overflow-hidden bg-black text-white h-80 cursor-pointer shadow-md"
          >
            <img src={st.image} alt={st.name} className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end space-y-2">
              <h2 className="text-2xl font-serif font-bold">{st.name}</h2>
              <p className="text-xs text-gray-300">{st.desc}</p>
              <span className="text-xs font-bold text-[#c89d7c] pt-2">Explore {st.name} Products →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}