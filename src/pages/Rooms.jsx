import React from 'react';
import { ROOMS } from '../data/mockData';

export default function Rooms({ setActiveTab }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Shop Your Space</h1>
        <p className="text-xs text-[#8c7a6b]">Explore customized interior concepts and furniture organized by room type.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOMS.map((room) => (
          <div 
            key={room.id}
            onClick={() => setActiveTab('shop')}
            className="group bg-white rounded-xl overflow-hidden border border-[#e5ded4] cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-serif font-bold text-[#2d241e]">{room.name}</h2>
              <p className="text-xs text-[#8c7a6b]">{room.desc}</p>
              <button className="text-xs font-bold text-[#c89d7c] pt-2 inline-block">
                View Room Collection →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}