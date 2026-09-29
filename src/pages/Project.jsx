import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Our Featured Projects</h1>
        <p className="text-xs text-[#8c7a6b]">Take a look at completed residential and commercial interior transformations by ShreeInterio.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center space-x-4 border-b border-[#e5ded4] pb-4 text-xs font-bold">
        {['All', 'Residential', 'Commercial'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pb-2 ${filter === cat ? 'text-[#c89d7c] border-b-2 border-[#c89d7c]' : 'text-[#8c7a6b]'}`}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => onSelectProject(proj)}
            className="group bg-white rounded-xl overflow-hidden border border-[#e5ded4] cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#c89d7c]">{proj.category} • {proj.location}</span>
              <h2 className="text-xl font-serif font-bold text-[#2d241e]">{proj.title}</h2>
              <p className="text-xs text-[#8c7a6b]">{proj.concept}</p>
              <div className="pt-2 flex justify-between items-center text-xs text-[#5c4d41] font-medium border-t border-[#f0e8de] mt-4">
                <span>Style: {proj.style}</span>
                <span className="text-[#c89d7c] font-bold">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}