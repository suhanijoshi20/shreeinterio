import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomeInteriors({ setActiveTab }) {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 space-y-12">
      
      <div className="text-center space-y-3">
        <span className="text-[#8c6d53] text-xs font-bold uppercase tracking-widest">RESIDENTIAL INTERIORS</span>
        <h1 className="text-3xl md:text-5xl font-serif text-[#2d241e]">Home Interior Design in Indore</h1>
        <p className="text-[#6b5a4e] text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Transform Your House Into a Home. Your home should reflect your personality, lifestyle and aspirations. ShreeInterio creates customized residential interiors that combine beautiful design with everyday functionality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Living Room Interior', desc: 'Elegant seating, TV units, lighting, décor and furniture designed around your lifestyle.' },
          { title: 'Bedroom Interior', desc: 'Comfortable bedrooms with customized beds, wardrobes, lighting and storage.' },
          { title: 'Modular Kitchen', desc: 'Functional kitchens with smart storage and contemporary finishes.' },
          { title: 'Wardrobe Design', desc: 'Customized wardrobes designed to maximize storage without compromising aesthetics.' },
          { title: 'Dining Area', desc: 'Functional and welcoming dining spaces for everyday meals and celebrations.' },
          { title: 'Complete Home Interior', desc: 'A coordinated design for your entire home—from concept to execution.' }
        ].map((srv, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-[#e5dcd3] space-y-2 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-[#2d241e]">{srv.title}</h3>
            <p className="text-xs text-[#6b5a4e] leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="bg-[#f4eee8] p-8 rounded-2xl border border-[#e5dcd3] text-center space-y-6">
        <h2 className="text-2xl font-serif text-[#2d241e]">Our Interior Approach</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-[#8c6d53]">
          <span>Understand</span> → <span>Plan</span> → <span>Design</span> → <span>Visualize</span> → <span>Execute</span> → <span>Handover</span>
        </div>
        <button onClick={() => setActiveTab('contact')} className="bg-[#2d241e] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
          Start Your Home Interior Project <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}