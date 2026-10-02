import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronRight, Sparkles } from 'lucide-react';

const HOME_SECTIONS_DATA = {
  categories: [
    "Furniture", "Lighting", "Wall Décor", "Rugs & Carpets", "Mirrors",
    "Home Accessories", "Curtains & Window Décor", "Bedding & Textiles",
    "Dining & Tableware", "Kitchen Storage & Accessories", "Outdoor & Balcony Décor", "Bathroom Décor & Accessories"
  ],
  rooms: [
    "All", "Living Room", "Master Bedroom", "Guest Bedroom", "Kids Bedroom",
    "Dining Room", "Modular Kitchen", "Home Office", "Study Room", "Bathroom",
    "Entryway", "Hallway", "Balcony", "Terrace", "Patio", "Garden", "Outdoor",
    "Nursery", "Guest Room", "Dressing Room", "Home Theatre", "Pooja Room", "Utility Room"
  ],
  styles: [
    "All Styles", "Modern", "Minimal", "Contemporary", "Luxury", "Scandinavian",
    "Japandi", "Boho", "Industrial", "Rustic", "Traditional", "Classic", "Vintage",
    "Retro", "Mid-Century Modern", "Farmhouse", "Coastal", "Mediterranean",
    "French Country", "Art Deco", "Indian Contemporary", "Modern Indian",
    "Transitional", "Eclectic", "Urban", "Cottage", "Tropical"
  ]
};

export default function HomeSection({ onSelectFilter }) {
  const [activeModal, setActiveModal] = useState(null); // 'category', 'room', or 'style'

  const handleOptionClick = (type, val) => {
    if (onSelectFilter) {
      onSelectFilter(type, val);
    }
    setActiveModal(null);
  };

  return (
    <div className="bg-[#fbf9f5] text-[#2d241e] min-h-screen py-12 px-4 md:px-8">
      {/* Hero Welcome Banner */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-[#c89d7c] text-xs uppercase font-bold tracking-widest block mb-2">
          ShreeInterio Exclusive
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Crafting Timeless Spaces
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base">
          Explore our complete catalog categorized by design themes, home areas, and handcrafted products.
        </p>
      </div>

      {/* Featured Navigation Cards with Circular Arrow Buttons */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* 1. Shop by Category Card */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-[#2d241e] text-[#c89d7c] rounded-2xl flex items-center justify-center font-bold mb-6">
              01
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">Shop by Category</h2>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">
              Explore 12 curated product categories ranging from luxury furniture to artisanal lighting.
            </p>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-400">12 Categories</span>
            <button
              onClick={() => setActiveModal('category')}
              aria-label="Open Categories"
              className="w-12 h-12 rounded-full bg-[#2d241e] hover:bg-[#c89d7c] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Shop by Room Card */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-[#2d241e] text-[#c89d7c] rounded-2xl flex items-center justify-center font-bold mb-6">
              02
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">Shop by Room</h2>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">
              Tailored designs for 23 distinct living spaces including Pooja Rooms, Master Bedrooms, and Balconies.
            </p>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-400">23 Room Types</span>
            <button
              onClick={() => setActiveModal('room')}
              aria-label="Open Room Types"
              className="w-12 h-12 rounded-full bg-[#2d241e] hover:bg-[#c89d7c] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3. Shop by Interior Style Card */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-[#2d241e] text-[#c89d7c] rounded-2xl flex items-center justify-center font-bold mb-6">
              03
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">Shop by Style</h2>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">
              Find inspiration across 27 aesthetic themes from Japandi and Minimalist to Modern Indian.
            </p>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-400">27 Architectural Styles</span>
            <button
              onClick={() => setActiveModal('style')}
              aria-label="Open Architectural Styles"
              className="w-12 h-12 rounded-full bg-[#2d241e] hover:bg-[#c89d7c] text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* MODAL / OVERLAY FOR EXPANDED OPTIONS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 max-h-[85vh] flex flex-col shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase text-[#c89d7c] tracking-wider">
                    All Options Available
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#2d241e]">
                    {activeModal === 'category' && "Shop by Category"}
                    {activeModal === 'room' && "Shop by Room"}
                    {activeModal === 'style' && "Shop by Interior Style"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Grid Options */}
              <div className="overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeModal === 'category' &&
                  HOME_SECTIONS_DATA.categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleOptionClick('category', cat)}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-[#c89d7c] hover:bg-[#fbf9f5] transition text-left text-xs font-medium text-[#2d241e] group"
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#c89d7c] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}

                {activeModal === 'room' &&
                  HOME_SECTIONS_DATA.rooms.map((room) => (
                    <button
                      key={room}
                      onClick={() => handleOptionClick('room', room)}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-[#c89d7c] hover:bg-[#fbf9f5] transition text-left text-xs font-medium text-[#2d241e] group"
                    >
                      <span>{room}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#c89d7c] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}

                {activeModal === 'style' &&
                  HOME_SECTIONS_DATA.styles.map((st) => (
                    <button
                      key={st}
                      onClick={() => handleOptionClick('style', st)}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-[#c89d7c] hover:bg-[#fbf9f5] transition text-left text-xs font-medium text-[#2d241e] group"
                    >
                      <span>{st}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#c89d7c] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}