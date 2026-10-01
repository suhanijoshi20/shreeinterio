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


import { motion } from 'framer-motion';

// Parent Container (Stagger Children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Single Card Variant
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ProductGrid({ products, onAddToCart }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
          <div className="overflow-hidden h-60">
            <motion.img 
              src={product.image} 
              alt={product.name} 
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-[#2d241e]">{product.name}</h3>
            <div className="mt-3 flex justify-between items-center">
              <span className="font-bold text-[#2d241e]">₹{product.price}</span>
              <motion.button 
                whileTap={{ scale: 0.92 }}
                onClick={() => onAddToCart(product)}
                className="bg-[#2d241e] hover:bg-[#c89d7c] text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}