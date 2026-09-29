import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 
  ArrowRight, Star, Heart, CheckCircle2, Phone, Mail, MapPin, Sparkles, Filter 
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Execution from './pages/Execution';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(4);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#2d241e] flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        setIsConsultationModalOpen={setIsConsultationModalOpen}
      />

      {/* Main Pages Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* 1. HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-[#e8ded5] text-[#8c6d53] text-xs font-bold uppercase tracking-wider rounded-full">
                  Interior & Furniture Studio
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2d241e] leading-tight">
                  Transform Your Space, Define Your Style
                </h1>
                <p className="text-sm sm:text-base text-[#6b5a4e] leading-relaxed max-w-xl">
                  Discover furniture, décor and complete interior solutions designed to make your home beautiful, functional, and uniquely yours.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={() => setActiveTab('shop')} className="bg-[#8c6d53] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase hover:bg-[#735842] transition-colors flex items-center gap-2">
                    Shop Collection <ArrowRight size={16} />
                  </button>
                  <button onClick={() => setActiveTab('projects')} className="border border-[#8c6d53] text-[#8c6d53] px-6 py-3 rounded-lg text-xs font-bold uppercase hover:bg-[#f4eee8] transition-colors">
                    Explore Designs
                  </button>
                </div>
                <div className="pt-6 border-t border-[#e5dcd3] flex flex-wrap gap-6 text-xs text-[#523d2e] font-semibold">
                  <span>• Premium Designs</span>
                  <span>• Quality Products</span>
                  <span>• Complete Interior Solutions</span>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Luxury Interior" 
                  className="rounded-3xl shadow-xl w-full h-[420px] sm:h-[500px] object-cover"
                />
              </div>
            </section>

            {/* 2. SHOP BY ROOM */}
            <section className="bg-white py-16 border-y border-[#e5dcd3]">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl font-serif font-bold">Shop by Room</h2>
                  <p className="text-xs text-[#6b5a4e] mt-2">Find everything you need for every corner of your home.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: '🛋️ Living Room', desc: 'Sofa, tables, TV units, décor', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600' },
                    { name: '🛏️ Bedroom', desc: 'Beds, wardrobes, side tables', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
                    { name: '🍽️ Dining Room', desc: 'Dining tables, chairs, lighting', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600' },
                    { name: '🍳 Kitchen', desc: 'Storage, accessories, modular setup', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600' },
                    { name: '💼 Home Office', desc: 'Desk, ergonomic chair, shelves', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600' },
                    { name: '🌿 Outdoor', desc: 'Balcony sets, outdoor furniture & plants', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600' }
                  ].map((room, idx) => (
                    <div key={idx} onClick={() => setActiveTab('shop')} className="group cursor-pointer bg-[#faf7f5] rounded-2xl overflow-hidden border border-[#e5dcd3] hover:shadow-md transition-all">
                      <img src={room.img} alt={room.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="p-5">
                        <h3 className="font-serif font-bold text-lg">{room.name}</h3>
                        <p className="text-xs text-[#6b5a4e] mt-1">{room.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8c6d53] mt-3 group-hover:underline">
                          Explore Room <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. TRENDING PRODUCTS */}
            <section className="py-16 max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-3xl font-serif font-bold">Trending Now</h2>
                  <p className="text-xs text-[#6b5a4e] mt-1">Handpicked bestsellers for modern Indian homes.</p>
                </div>
                <button onClick={() => setActiveTab('shop')} className="text-xs font-bold text-[#8c6d53] hover:underline flex items-center gap-1">
                  View All Products <ArrowRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Modern Velvet Lounge Chair', price: '₹12,999', mrp: '₹16,999', rating: '4.8', img: 'https://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=500' },
                  { name: 'Minimal Solid Wood Coffee Table', price: '₹8,499', mrp: '₹11,000', rating: '4.9', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500' },
                  { name: 'Designer Brass Pendant Light', price: '₹5,999', mrp: '₹8,500', rating: '4.7', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500' },
                  { name: 'Luxury Round Wall Mirror', price: '₹7,499', mrp: '₹9,999', rating: '4.9', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500' },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-[#e5dcd3] overflow-hidden p-4 relative group">
                    <button className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-gray-600 hover:text-rose-500">
                      <Heart size={16} />
                    </button>
                    <img src={item.img} alt={item.name} className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star size={14} fill="currentColor" /> {item.rating}
                      </div>
                      <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-[#8c6d53] text-base">{item.price}</span>
                        <span className="text-xs text-gray-400 line-through">{item.mrp}</span>
                      </div>
                      <button 
                        onClick={() => setCartCount(cartCount + 1)} 
                        className="w-full bg-[#faf7f5] border border-[#8c6d53] text-[#8c6d53] py-2 rounded-lg text-xs font-bold hover:bg-[#8c6d53] hover:text-white transition-colors mt-2"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. OUR SERVICES */}
            <section className="bg-[#2d241e] text-[#d9cdbf] py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs uppercase font-bold text-[#8c6d53] tracking-widest">End to End Solutions</span>
                  <h2 className="text-3xl font-serif font-bold text-white mt-1">Interior Solutions Tailored to You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { num: '01', title: 'Free Consultancy', desc: 'Discuss your space, requirements and budget with our expert team.' },
                    { num: '02', title: 'Budget Designing', desc: 'Get stylish 3D interior plans designed strictly to fit your budget.' },
                    { num: '03', title: 'Project Execution', desc: 'From civil work to final setup, complete execution handled seamlessly.' },
                    { num: '04', title: 'Custom Furniture', desc: 'Tailor-made sofas, wardrobes and tables crafted for your exact measurements.' },
                  ].map((srv, idx) => (
                    <div key={idx} className="bg-[#3a3028] p-6 rounded-2xl border border-[#524337] space-y-3">
                      <span className="text-3xl font-serif font-bold text-[#8c6d53]">{srv.num}</span>
                      <h3 className="text-lg font-bold text-white">{srv.title}</h3>
                      <p className="text-xs text-[#b8a99a] leading-relaxed">{srv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. CONSULTATION CTA */}
            <section className="max-w-5xl mx-auto my-16 px-4">
              <div className="bg-[#f4eee8] border border-[#e5dcd3] p-8 md:p-12 rounded-3xl text-center space-y-4">
                <h2 className="text-3xl font-serif font-bold text-[#2d241e]">Have a Space in Mind?</h2>
                <p className="text-xs sm:text-sm text-[#6b5a4e] max-w-lg mx-auto">
                  Let's turn your ideas into a beautiful, personalized interior space. Book a free session with our lead designer in Indore.
                </p>
                <button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-[#8c6d53] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase hover:bg-[#735842] transition-colors shadow-md"
                >
                  Book Free Consultation →
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Dynamic Pages */}
        {activeTab === 'shop' && <Shop />}
        {activeTab === 'rooms' && <Shop />}
        {activeTab === 'styles' && <Shop />}
        {activeTab === 'projects' && <Execution />}
        {activeTab === 'services' && <Execution />}
        {activeTab === 'inspiration' && <Shop />}
        {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 relative space-y-4">
            <button 
              onClick={() => setIsConsultationModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-xl font-serif font-bold text-[#2d241e]">Book Free Consultation</h3>
            <p className="text-xs text-[#6b5a4e]">Fill in your details and our interior architect will get in touch with you.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Consultation Request Submitted!'); setIsConsultationModalOpen(false); }} className="space-y-3 pt-2">
              <input type="text" placeholder="Your Name" required className="w-full border border-[#e5dcd3] p-2.5 rounded-lg text-xs" />
              <input type="tel" placeholder="Phone Number" required className="w-full border border-[#e5dcd3] p-2.5 rounded-lg text-xs" />
              <select className="w-full border border-[#e5dcd3] p-2.5 rounded-lg text-xs text-gray-600">
                <option>Select Service</option>
                <option>Full Home Interior</option>
                <option>Modular Kitchen</option>
                <option>Custom Furniture</option>
              </select>
              <button type="submit" className="w-full bg-[#8c6d53] text-white py-3 rounded-lg text-xs font-bold uppercase hover:bg-[#735842]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}