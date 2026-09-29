import React from 'react';
import { SERVICES } from '../data/mockData';

export default function Services({ openConsultationModal }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#c89d7c] font-bold">End-to-End Solutions</span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2d241e]">Interior Solutions Tailored to You</h1>
        <p className="text-xs md:text-sm text-[#8c7a6b]">
          From 2D/3D design layouts to site execution and handcrafted furniture, we handle everything under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((serv) => (
          <div key={serv.id} className="bg-white p-8 rounded-2xl border border-[#e5ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-3xl font-serif font-bold text-[#c89d7c]">{serv.id}</span>
              <h2 className="text-xl font-serif font-bold text-[#2d241e]">{serv.title}</h2>
              <p className="text-xs text-[#6b5b4e] leading-relaxed">{serv.desc}</p>
            </div>
            <div className="pt-4 border-t border-[#f0e8de]">
              <button 
                onClick={openConsultationModal}
                className="bg-[#2d241e] text-white hover:bg-[#c89d7c] text-xs font-bold px-6 py-2.5 rounded transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}