import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, SERVICES, PROJECTS, INSPIRATIONS, REVIEWS } from '../data/mockData';
import ProductCard from '../components/ProductCard';

// Comprehensive Dynamic Categories List
const ALL_CATEGORIES = [
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
  { name: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Wall Décor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400' },
  { name: 'Rugs & Carpets', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mirrors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400' },
  { name: 'Home Accessories', image: 'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Curtains & Window Décor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Bedding & Textiles', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dining & Tableware', image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=400' },
  { name: 'Kitchen Storage & Accessories', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Outdoor & Balcony Décor', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=400' },
  { name: 'Bathroom Décor & Accessories', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
];

// Comprehensive Dynamic Rooms List
const ALL_ROOMS = [
  { id: 'all', name: 'All Rooms', desc: 'Browse layout designs for every corner', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
  { id: 'living', name: 'Living Room', desc: 'Comfortable & elegant seating setups', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600' },
  { id: 'master_bed', name: 'Master Bedroom', desc: 'Serene and luxurious retreats', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600' },
  { id: 'guest_bed', name: 'Guest Bedroom', desc: 'Welcoming space for visitors', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600' },
  { id: 'kids_bed', name: 'Kids Bedroom', desc: 'Vibrant, safe, and playful environments', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600' },
  { id: 'dining', name: 'Dining Room', desc: 'Spaces designed for gathering and meals', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600' },
  { id: 'kitchen', name: 'Modular Kitchen', desc: 'Ergonomic & modern cooking hubs', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600' },
  { id: 'office', name: 'Home Office', desc: 'Productive, stylish work setups', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600' },
  { id: 'study', name: 'Study Room', desc: 'Quiet zones for focus & reading', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600' },
  { id: 'bathroom', name: 'Bathroom', desc: 'Modern spa-like relaxation', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600' },
  { id: 'entryway', name: 'Entryway', desc: 'First impressions that last', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600' },
  { id: 'hallway', name: 'Hallway', desc: 'Seamless passages and gallery walls', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600' },
  { id: 'balcony', name: 'Balcony', desc: 'Cozy outdoor nooks', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=600' },
  { id: 'terrace', name: 'Terrace', desc: 'Open sky dining & lounges', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600' },
  { id: 'patio', name: 'Patio', desc: 'Charming shaded seating', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
  { id: 'garden', name: 'Garden', desc: 'Lush greenery landscape balance', image: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&q=80&w=600' },
  { id: 'outdoor', name: 'Outdoor', desc: 'All weather furniture & lights', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600' },
  { id: 'nursery', name: 'Nursery', desc: 'Gentle and soothing baby rooms', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600' },
  { id: 'guest_room', name: 'Guest Room', desc: 'Hospitality redefined at home', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600' },
  { id: 'dressing', name: 'Dressing Room', desc: 'Custom walk-in wardrobes', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=600' },
  { id: 'theatre', name: 'Home Theatre', desc: 'Immersive entertainment spaces', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600' },
  { id: 'pooja', name: 'Pooja Room', desc: 'Sacred, peaceful mandir spaces', image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=600' },
  { id: 'utility', name: 'Utility Room', desc: 'Smart storage & laundry areas', image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600' },
];

// Comprehensive Dynamic Styles List
const ALL_STYLES = [
  { name: 'All Styles', desc: 'Explore all interior design themes', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
  { name: 'Modern', desc: 'Clean lines, simple forms, and neutral palettes', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Minimal', desc: 'Essential elements, uncluttered serene elegance', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Contemporary', desc: 'Fluid, current trends with soft curves', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600' },
  { name: 'Luxury', desc: 'Rich textures, brass accents, opulent detail', image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=600' },
  { name: 'Scandinavian', desc: 'Light woods, functional simplicity, cozy vibes', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600' },
  { name: 'Japandi', desc: 'Japanese wabi-sabi meets Nordic utility', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600' },
  { name: 'Boho', desc: 'Eclectic textures, woven weaves, organic plants', image: 'https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=600' },
  { name: 'Industrial', desc: 'Exposed brick, iron metals, raw concrete look', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600' },
  { name: 'Rustic', desc: 'Distressed wood, stone finishes, earth elements', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&q=80&w=600' },
  { name: 'Traditional', desc: 'Classic woodwork, rich symmetry, timeless appeal', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600' },
  { name: 'Classic', desc: 'Ornate moldings, refined proportion & balance', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
  { name: 'Vintage', desc: 'Charming nostalgia with repurposed character', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600' },
  { name: 'Retro', desc: 'Playful patterns and bold pop mid-century colors', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mid-Century Modern', desc: 'Iconic organic geometry and sleek tapered legs', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Farmhouse', desc: 'Cozy aprons, warm neutrals, relaxed feel', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Coastal', desc: 'Breeze-inspired whites, blues, rattan touches', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mediterranean', desc: 'Terracotta tiles, arched gateways, sunny warmth', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600' },
  { name: 'French Country', desc: 'Soft pastel tones, whitewashed timber curves', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600' },
  { name: 'Art Deco', desc: 'Bold geometric shapes and polished metallic shine', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Indian Contemporary', desc: 'Modern living with vibrant Indian craftsmanship', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Modern Indian', desc: 'Teak accents, handloom art, contemporary layout', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Transitional', desc: 'Harmonious blend of traditional and modern', image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=600' },
  { name: 'Eclectic', desc: 'Curated mix of varied eras and personal art', image: 'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Urban', desc: 'Sleek loft aesthetics with architectural edge', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600' },
  { name: 'Cottage', desc: 'Comfortable, inviting, floral & quaint spaces', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Tropical', desc: 'Exotic greenery, teak wood, airy tropical feel', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600' },
];

export default function Home({ setActiveTab, onAddToCart, onToggleWishlist, wishlist, onSelectProduct, openConsultationModal, onSelectProject }) {
  const trendingProducts = PRODUCTS.filter(p => p.isTrending);
  const newArrivals = PRODUCTS.filter(p => p.isNew);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className="space-y-20 pb-16"
    >
      
      {/* 2. HERO / FRONT PAGE */}
      <section className="relative bg-[#f5f1eb] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#c89d7c]">
              ShreeInterio Studio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d241e] font-bold leading-tight">
              Transform Your Space, Define Your Style.
            </h1>
            <p className="text-sm md:text-base text-[#6b5b4e] max-w-lg leading-relaxed">
              Discover premium furniture, décor, and complete turn-key interior solutions designed to make your home beautiful and functional.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setActiveTab('shop')}
                className="bg-[#2d241e] text-white hover:bg-[#42352b] px-6 py-3 rounded text-xs uppercase tracking-wider font-medium transition-all shadow-md"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className="border border-[#2d241e] text-[#2d241e] hover:bg-[#2d241e] hover:text-white px-6 py-3 rounded text-xs uppercase tracking-wider font-medium transition-all"
              >
                Explore Designs
              </button>
            </div>
            {/* Highlights */}
            <div className="pt-6 border-t border-[#e5ded4] flex items-center space-x-4 text-[11px] font-medium text-[#8c7a6b]">
              <span>✦ Premium Designs</span>
              <span>•</span>
              <span>✦ Quality Products</span>
              <span>•</span>
              <span>✦ Complete Solutions</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Modern Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-[#e5ded4] hidden sm:block max-w-xs">
              <p className="text-xs font-serif font-bold text-[#2d241e]">Indore's Trusted Interior Studio</p>
              <p className="text-[10px] text-[#8c7a6b] mt-1">100+ Completed Homes • Custom Furniture Workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY ROOM */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Shop by Room</h2>
            <p className="text-xs text-[#8c7a6b] mt-1">Find everything you need for every corner of your home.</p>
          </div>
          <button 
            onClick={() => setActiveTab('rooms')}
            className="w-10 h-10 rounded-full bg-[#f5f1eb] hover:bg-[#c89d7c] hover:text-white border border-[#e5ded4] flex items-center justify-center transition-all shadow-sm text-[#2d241e]"
            title="View All Rooms"
          >
            <span className="text-lg">→</span>
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {ALL_ROOMS.map((room) => (
            <div 
              key={room.id}
              onClick={() => setActiveTab('rooms')}
              className="group relative flex-none w-72 h-80 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all snap-start"
            >
              <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-serif font-semibold">{room.name}</h3>
                <p className="text-xs text-gray-200 mt-1 line-clamp-2">{room.desc}</p>
                <span className="text-xs text-[#c89d7c] font-medium mt-3 inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Shop by Category</h2>
              <p className="text-xs text-[#8c7a6b] mt-1">Explore our wide selection of decor & handcrafted pieces.</p>
            </div>
            <button 
              onClick={() => setActiveTab('shop')}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#c89d7c] hover:text-white border border-[#e5ded4] flex items-center justify-center transition-all shadow-sm text-[#2d241e]"
              title="View All Categories"
            >
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {ALL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveTab('shop')}
                className="group cursor-pointer flex-none flex flex-col items-center space-y-3 snap-start w-32"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-all">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-medium text-[#2d241e] group-hover:text-[#c89d7c] transition-colors text-center">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRENDING PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Trending Now</h2>
            <p className="text-xs text-[#8c7a6b] mt-1">Our most loved furniture and decor pieces this season.</p>
          </div>
          <button 
            onClick={() => setActiveTab('shop')}
            className="text-xs font-semibold text-[#c89d7c] hover:underline"
          >
            View All Products →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some(item => item.id === p.id)}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 6. SHOP BY INTERIOR STYLE */}
      <section className="bg-[#2d241e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Shop by Interior Style</h2>
              <p className="text-xs text-[#d9cdbf] mt-1">Find items tailored to your home's unique design language.</p>
            </div>
            <button 
              onClick={() => setActiveTab('styles')}
              className="w-10 h-10 rounded-full bg-[#42352b] hover:bg-[#c89d7c] text-white flex items-center justify-center transition-all shadow-sm"
              title="View All Styles"
            >
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {ALL_STYLES.map((st, i) => (
              <div 
                key={i} 
                onClick={() => setActiveTab('styles')}
                className="group relative flex-none w-72 h-80 rounded-lg overflow-hidden cursor-pointer border border-[#42352b] snap-start"
              >
                <img src={st.image} alt={st.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-serif font-bold text-white">{st.name}</h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">{st.desc}</p>
                  <span className="text-xs text-[#c89d7c] font-medium mt-3 inline-flex items-center">
                    Explore Style →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">New Arrivals</h2>
          <p className="text-xs text-[#8c7a6b]">Fresh handcrafted designs for your space.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some(item => item.id === p.id)}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 8. OUR SERVICES */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#c89d7c] font-semibold">Interior Solutions</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Tailored to You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-6 rounded-xl border border-[#e5ded4] shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-2xl font-serif font-bold text-[#c89d7c]">{s.id}</span>
                  <h3 className="text-base font-serif font-bold text-[#2d241e] mt-2">{s.title}</h3>
                  <p className="text-xs text-[#6b5b4e] mt-2 leading-relaxed">{s.desc}</p>
                </div>
                <button 
                  onClick={openConsultationModal}
                  className="text-xs font-semibold text-[#2d241e] hover:text-[#c89d7c] text-left pt-4 border-t border-[#f0e8de]"
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Featured Projects</h2>
            <p className="text-xs text-[#8c7a6b] mt-1">Explore our latest residential and commercial interiors in Indore.</p>
          </div>
          <button 
            onClick={() => setActiveTab('projects')}
            className="text-xs font-semibold text-[#c89d7c] hover:underline"
          >
            View All Projects →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div 
              key={proj.id} 
              onClick={() => onSelectProject(proj)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-[#e5ded4] bg-white"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#c89d7c]">
                    {proj.category} • {proj.location}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#2d241e] mt-0.5">{proj.title}</h3>
                </div>
                <span className="text-xs font-medium text-[#2d241e] group-hover:translate-x-1 transition-transform">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. INTERIOR INSPIRATION (SHOP THE LOOK) */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">Get Inspired & Shop the Look</h2>
            <p className="text-xs text-[#8c7a6b]">Click on room setups to buy matching curated items instantly.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSPIRATIONS.map((insp) => (
              <div key={insp.id} className="bg-white rounded-xl overflow-hidden border border-[#e5ded4] shadow-sm flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                  <img src={insp.image} alt={insp.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-white/90 text-[#2d241e] text-[10px] font-bold px-2 py-1 rounded">
                    {insp.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2d241e]">{insp.title}</h3>
                    <p className="text-xs text-[#8c7a6b] mt-1">Featured products in this room:</p>
                  </div>
                  <div className="space-y-2">
                    {insp.linkedProductIds.map(pid => {
                      const prod = PRODUCTS.find(p => p.id === pid);
                      if (!prod) return null;
                      return (
                        <div key={pid} className="flex items-center justify-between text-xs p-2 bg-[#f8f5f0] rounded">
                          <span className="font-medium text-[#2d241e] truncate max-w-[180px]">{prod.name}</span>
                          <button 
                            onClick={() => onAddToCart(prod)}
                            className="text-[#c89d7c] font-bold hover:underline"
                          >
                            ₹{prod.price} +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SPECIAL OFFER / PROMOTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-[#2d241e] text-white py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg z-10">
            <span className="bg-[#c89d7c] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Make Your Space Beautiful
            </h2>
            <p className="text-sm text-[#d9cdbf] leading-relaxed">
              Up to 30% OFF on selected luxury sofas, lighting fixtures, and accent mirrors. Free doorstep delivery in Indore.
            </p>
            <button 
              onClick={() => setActiveTab('shop')}
              className="bg-white text-[#2d241e] hover:bg-[#f0e8de] px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all"
            >
              Shop Now →
            </button>
          </div>
          <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl z-10">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800" alt="Offer Banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 12. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-[#e5ded4]">
          <div className="space-y-2">
            <span className="text-2xl">✨</span>
            <h3 className="font-serif font-bold text-[#2d241e] text-sm">Premium Quality</h3>
            <p className="text-xs text-[#8c7a6b]">Handcrafted solid teak & branded materials for unmatched durability.</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl">🛋️</span>
            <h3 className="font-serif font-bold text-[#2d241e] text-sm">Trusted Service</h3>
            <p className="text-xs text-[#8c7a6b]">100+ satisfied homeowners with end-to-end professional support.</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl">🔒</span>
            <h3 className="font-serif font-bold text-[#2d241e] text-sm">Secure Shopping</h3>
            <p className="text-xs text-[#8c7a6b]">Transparent pricing, safe payments, and guaranteed warranties.</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl">🏡</span>
            <h3 className="font-serif font-bold text-[#2d241e] text-sm">Complete Solutions</h3>
            <p className="text-xs text-[#8c7a6b]">Design, furniture procurement, and site execution under one roof.</p>
          </div>
        </div>
      </section>

      {/* 13. CUSTOMER REVIEWS */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e] font-bold">What Our Customers Say</h2>
            <p className="text-xs text-[#8c7a6b]">Real feedback from homeowners across Indore and Central India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#e5ded4] shadow-sm space-y-4">
                <div className="text-amber-500 text-sm">{"★".repeat(rev.rating)}</div>
                <p className="text-xs text-[#5c4d41] italic leading-relaxed">"{rev.comment}"</p>
                <div className="pt-2 border-t border-[#f0e8de] flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#2d241e]">{rev.name}</h4>
                    <span className="text-[10px] text-[#8c7a6b]">{rev.city}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">Verified Customer ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CONSULTATION CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4 py-8">
        <h2 className="text-3xl font-serif text-[#2d241e] font-bold">Have a Space in Mind?</h2>
        <p className="text-xs md:text-sm text-[#6b5b4e] max-w-md mx-auto">
          Let's turn your ideas into a beautiful, personalized interior. Talk to our senior interior architects today.
        </p>
        <button 
          onClick={openConsultationModal}
          className="bg-[#c89d7c] hover:bg-[#b08260] text-white px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          Book Free Consultation →
        </button>
      </section>

    </motion.div>
  );
}