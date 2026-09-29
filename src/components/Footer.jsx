import React from 'react';

export default function Footer({ setActiveTab, openConsultationModal }) {
  return (
    <footer className="bg-[#2d241e] text-[#d9cdbf] pt-16 pb-8 text-xs border-t border-[#42352b]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-[#42352b]">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4 pr-6">
          <h2 className="text-2xl font-serif text-white font-bold tracking-wide">
            Shree<span className="text-[#c89d7c]">Interio</span>
          </h2>
          <p className="text-[12px] leading-relaxed text-[#b8a99a]">
            Premium interior designing and custom furniture studio based in Indore. We blend functional design with modern aesthetics to craft spaces you love returning to.
          </p>
          <div className="space-y-1 text-[11px] text-[#d9cdbf]">
            <p>📍 B-57, LIG Colony, RSS Nagar, Indore – 452011</p>
            <p>📞 +91 84352 99100 | sbaindore@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider border-b border-[#42352b] pb-1">Quick Links</h3>
          <ul className="space-y-2 text-[11px] text-[#b8a99a]">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Shop Furniture</button></li>
            <li><button onClick={() => setActiveTab('rooms')} className="hover:text-white transition-colors">Shop by Room</button></li>
            <li><button onClick={() => setActiveTab('styles')} className="hover:text-white transition-colors">Interior Styles</button></li>
            <li><button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors">Completed Projects</button></li>
            <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About Us</button></li>
          </ul>
        </div>

        {/* Shop Collections */}
        <div className="space-y-3">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider border-b border-[#42352b] pb-1">Shop Collections</h3>
          <ul className="space-y-2 text-[11px] text-[#b8a99a]">
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Living Room Sofas</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Bedroom Sets</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Modular Kitchens</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Pendant Lighting</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Wall Decor & Mirrors</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Jute Rugs</button></li>
          </ul>
        </div>

        {/* Services & Support */}
        <div className="space-y-3">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider border-b border-[#42352b] pb-1">Services & Support</h3>
          <ul className="space-y-2 text-[11px] text-[#b8a99a]">
            <li><button onClick={openConsultationModal} className="hover:text-white transition-colors">Free Consultation</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">Budget Designing</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">Turn-key Execution</button></li>
            <li><a href="#shipping" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#8c7a6b]">
        <p>© 2026 ShreeInterio. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Pinterest</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
        <p>Designed for Beautiful Living</p>
      </div>
    </footer>
  );
}