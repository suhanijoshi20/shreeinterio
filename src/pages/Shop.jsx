import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShopSection from '../components/ShopSection';

export default function Shop({ onAddToCart, onToggleWishlist, wishlist }) {
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#2d241e]">
      {/* --- SHOP HERO BANNER --- */}
      <section className="relative bg-[#2d241e] text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c89d7c_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c89d7c] text-xs font-semibold tracking-widest uppercase mb-2 block"
          >
            Curated Furniture & Home Décor
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Our Complete Collection
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto"
          >
            Discover handcrafted furniture, elegant lighting, and luxury accessories designed to transform your living spaces.
          </motion.p>
        </div>
      </section>

      {/* --- MASTER SHOP SECTION (FILTER + PRODUCT GRID) --- */}
      <div className="py-6">
        <ShopSection 
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
        />
      </div>

      {/* --- QUICK VIEW PRODUCT MODAL (OPTIONAL) --- */}
      {selectedProductForModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProductForModal(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full p-6 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full rounded-xl overflow-hidden bg-stone-100">
                <img 
                  src={selectedProductForModal.image} 
                  alt={selectedProductForModal.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#c89d7c]">
                    {selectedProductForModal.category}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#2d241e] mt-1">
                    {selectedProductForModal.name}
                  </h2>
                  <p className="text-xl font-bold text-[#2d241e] mt-2">
                    ₹{selectedProductForModal.price?.toLocaleString()}
                  </p>
                  <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                    Premium crafted piece tailored for modern interiors. Made with durable materials and refined finishing.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      onAddToCart && onAddToCart(selectedProductForModal);
                      setSelectedProductForModal(null);
                    }}
                    className="flex-1 bg-[#2d241e] hover:bg-[#c89d7c] text-white py-3 rounded-lg text-xs font-bold transition"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => {
                      onToggleWishlist && onToggleWishlist(selectedProductForModal);
                    }}
                    className="px-4 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 text-xs font-bold"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}