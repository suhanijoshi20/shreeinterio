import React from 'react';
import { ArrowRight, CheckCircle2, Star, Truck, ShieldCheck, Headphones, Palette } from 'lucide-react';

export default function Home({ setActiveTab, setCategoryFilter }) {
  const categories = [
    { name: 'Sofas & Seating', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80' },
    { name: 'Beds & Bedroom', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80' },
    { name: 'Dining & Kitchen', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80' },
    { name: 'Storage & Wardrobes', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=300&q=80' },
    { name: 'Tables & Chairs', img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=300&q=80' },
    { name: 'Lighting', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80' },
    { name: 'Rugs & Carpets', img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=300&q=80' },
    { name: 'Home Décor', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80' },
  ];

  const trendingProducts = [
    { id: 1, name: 'L-Shaped Fabric Sofa', rating: 4.8, reviews: 56, mrp: 72000, price: 48999, discount: '32% OFF', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Wooden Dining Table Set', rating: 4.6, reviews: 42, mrp: 46000, price: 32999, discount: '28% OFF', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'King Size Upholstered Bed', rating: 4.7, reviews: 37, mrp: 80000, price: 54999, discount: '31% OFF', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: '3 Door Wooden Wardrobe', rating: 4.5, reviews: 28, mrp: 36000, price: 24999, discount: '31% OFF', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner Section */}
      <section className="relative bg-[#f4eee8] py-16 md:py-24 px-4 overflow-hidden border-b border-[#e5dcd3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#8c6d53] text-xs font-bold uppercase tracking-widest bg-[#e8ded5] px-3 py-1 rounded-full">
              PREMIUM INTERIORS | FURNITURE | DÉCOR
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#2d241e] leading-tight">
              Beautiful Spaces for a Comfortable and Royal Life
            </h1>
            <p className="text-[#6b5a4e] text-sm md:text-base max-w-lg leading-relaxed">
              Discover thoughtfully designed furniture, décor and interior solutions that bring together comfort, functionality and timeless style. From elegant furniture to customized interiors, ShreeInterio helps you create spaces that truly feel like your own.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => setActiveTab('shop')} className="bg-[#8c6d53] hover:bg-[#735740] text-white px-7 py-3 rounded-md font-medium text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-md">
                Shop Now <ArrowRight size={14} />
              </button>
              <button onClick={() => setActiveTab('kitchen')} className="bg-white border border-[#b59e8c] text-[#523d2e] hover:bg-[#faf7f5] px-7 py-3 rounded-md font-medium text-xs uppercase tracking-wider transition">
                Explore Interiors
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-[#8c6d53] text-white text-center rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-lg z-10 font-serif">
              <span className="text-xs uppercase">Up To</span>
              <span className="text-xl font-bold">40%</span>
              <span className="text-[10px] uppercase">Off</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" 
              alt="ShreeInterio Luxury Living Room" 
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Shop By Category (Circular Icons) */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex justify-between items-end border-b border-[#e5dcd3] pb-4">
          <div>
            <span className="text-[11px] font-bold text-[#8c6d53] uppercase tracking-widest">SHOP BY CATEGORY</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e]">Explore Our Collections</h2>
          </div>
          <button onClick={() => setActiveTab('shop')} className="text-xs font-bold text-[#8c6d53] hover:underline flex items-center gap-1">
            View All Categories →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => { setCategoryFilter(cat.name); setActiveTab('shop'); }}
              className="group flex flex-col items-center space-y-3 text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#e5dcd3] group-hover:border-[#8c6d53] transition duration-300 p-1 bg-white shadow-sm">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500" />
              </div>
              <span className="text-xs font-semibold text-[#42352b] group-hover:text-[#8c6d53] transition">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex justify-between items-end border-b border-[#e5dcd3] pb-4">
          <div>
            <span className="text-[11px] font-bold text-[#8c6d53] uppercase tracking-widest">FEATURED PRODUCTS</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e]">Trending Now</h2>
            <p className="text-xs text-[#6b5a4e] mt-1">Discover our latest furniture and décor pieces designed for modern Indian homes.</p>
          </div>
          <button onClick={() => setActiveTab('shop')} className="text-xs font-bold text-[#8c6d53] hover:underline">
            Shop Furniture →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-xl border border-[#e5dcd3] overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="relative h-56 overflow-hidden bg-[#faf7f5]">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-[#8c6d53] text-white text-[10px] font-bold px-2 py-1 rounded">
                  {prod.discount}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-serif font-semibold text-[#2d241e] text-sm">{prod.name}</h3>
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  <Star size={12} fill="currentColor" />
                  <span className="font-bold text-[#2d241e]">{prod.rating}</span>
                  <span className="text-[#8c7a6b]">({prod.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-base font-bold text-[#8c6d53]">₹{prod.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-[#8c7a6b] line-through">₹{prod.mrp.toLocaleString('en-IN')}</span>
                </div>
                <button onClick={() => setActiveTab('shop')} className="w-full mt-2 bg-[#2d241e] hover:bg-[#8c6d53] text-white text-xs font-semibold py-2 rounded transition">
                  View Options
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Designed for Your Lifestyle */}
      <section className="bg-[#f9f6f2] py-14 border-y border-[#e5dcd3]">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold text-[#8c6d53] uppercase tracking-widest">SHOP BY STYLE</span>
            <h2 className="text-3xl font-serif text-[#2d241e]">Styles for Every Space</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Modern', desc: 'Clean lines, elegant finishes and contemporary furniture for modern homes.' },
              { title: 'Minimalist', desc: 'Simple, functional and clutter-free designs for peaceful living.' },
              { title: 'Luxury', desc: 'Premium materials, sophisticated details and statement furniture.' },
              { title: 'Contemporary', desc: 'A perfect balance of modern aesthetics and everyday functionality.' }
            ].map((style, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#e5dcd3] shadow-sm text-center space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#2d241e]">{style.title}</h3>
                <p className="text-xs text-[#6b5a4e] leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Furniture Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#2d241e] text-white rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">CUSTOMIZED FURNITURE</span>
            <h2 className="text-3xl md:text-4xl font-serif">Your Space. Your Design. Your Furniture.</h2>
            <p className="text-[#d9cdbf] text-xs md:text-sm leading-relaxed">
              Looking for something unique? Our customized furniture solutions are designed according to your space, lifestyle, measurements and preferences.
            </p>
            <button onClick={() => setActiveTab('customFurniture')} className="bg-[#8c6d53] hover:bg-[#a38063] text-white px-6 py-3 rounded-md font-medium text-xs uppercase tracking-wider flex items-center gap-2 transition inline-flex">
              Get Customized Furniture →
            </button>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" alt="Customized Furniture Indore" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Interior Design Services Overview */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-bold text-[#8c6d53] uppercase tracking-widest">OUR EXPERTISE</span>
          <h2 className="text-3xl font-serif text-[#2d241e]">Interior Design Services</h2>
          <p className="text-xs text-[#6b5a4e] max-w-xl mx-auto">
            ShreeInterio goes beyond furniture. We create complete interior solutions for homes and commercial spaces in Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Living Room Interiors', 'Bedroom Interiors', 'Modular Kitchen Design',
            'Wardrobe Design', 'False Ceiling & Lighting', 'Customized Furniture',
            'Complete Home Interiors', 'Office Interiors', 'Turnkey Interior Execution'
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-[#e5dcd3] flex items-center gap-3">
              <CheckCircle2 size={18} className="text-[#8c6d53] shrink-0" />
              <span className="text-xs font-bold text-[#2d241e]">{service}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => setActiveTab('homeInteriors')} className="bg-[#2d241e] text-white px-8 py-3 rounded-md font-medium text-xs uppercase tracking-wider hover:bg-[#8c6d53] transition">
            Explore Interior Design →
          </button>
        </div>
      </section>

      {/* Why Choose ShreeInterio */}
      <section className="bg-[#f4eee8] py-12 border-y border-[#e5dcd3]">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl font-serif text-center text-[#2d241e]">Why Choose ShreeInterio?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#2d241e]">Premium Quality</h3>
              <p className="text-xs text-[#6b5a4e]">Thoughtfully selected materials and finishes for long-lasting performance.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#2d241e]">Customized Solutions</h3>
              <p className="text-xs text-[#6b5a4e]">Designed around your exact space and interior requirements in Indore.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#2d241e]">End-to-End Execution</h3>
              <p className="text-xs text-[#6b5a4e]">From product selection to complete residential & commercial interior setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="max-w-7xl mx-auto px-4 pt-8 text-[11px] text-[#8c7a6b] space-y-3 border-t border-[#e5dcd3]">
        <p className="font-bold text-[#2d241e]">Interior Design & Furniture Store in Indore</p>
        <p>
          ShreeInterio is a leading <strong>interior design company in Indore</strong> providing turn-key <strong>home interior designer in Indore</strong> services, <strong>modular kitchen design in Indore</strong>, and <strong>customized furniture in Indore</strong>. Visit our showroom at LIG Colony, RSS Nagar, Indore.
        </p>
      </section>

    </div>
  );
}