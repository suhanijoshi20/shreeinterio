import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#2d241e] text-[#d9cdbf] pt-12 pb-8 text-xs border-t border-[#42352b]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#42352b]">
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-xl font-serif text-white font-bold">ShreeInterio</h2>
          <p className="text-[11px] leading-relaxed text-[#b8a99a]">
            Premium interior designing and custom furniture studio based in Indore.
          </p>
          <p className="text-[11px]">📍 B-57, LIG Colony, RSS Nagar, Indore – 452011</p>
          <p className="text-[11px]">📞 8435299100 | sbaindore@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider">Quick Links</h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Shop Furniture</button></li>
            <li><button onClick={() => setActiveTab('projects')} className="hover:text-white">Completed Projects</button></li>
            <li><button onClick={() => setActiveTab('about')} className="hover:text-white">About Company</button></li>
            <li><button onClick={() => setActiveTab('contact')} className="hover:text-white">Contact Us</button></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider">Shop Collections</h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Living Room Sofas</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Bedroom Sets</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Modular Kitchens</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Pendant Lighting</button></li>
            <li><button onClick={() => setActiveTab('shop')} className="hover:text-white">Wall Decor & Mirrors</button></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase text-xs tracking-wider">Customer Support</h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#" className="hover:text-white">Free Consultation</a></li>
            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refund</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#8c7a6b]">
        <p>© 2026 ShreeInterio. All Rights Reserved.</p>
        <p>Designed for Beautiful Living</p>
      </div>
    </footer>
  );
}