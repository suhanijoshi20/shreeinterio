import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, cartCount = 0, wishlistCount = 0, setIsConsultationModalOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'styles', label: 'Styles' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#e5dcd3]">
      {/* Top Announcement Bar */}
      <div className="bg-[#2d241e] text-[#d9cdbf] text-[10px] sm:text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>✨ Complete Interior & Furniture Solutions | Free Delivery above ₹25,000</span>
          <div className="hidden md:flex gap-4">
            <span>📞 8435299100</span>
            <span>✉️ sbaindore@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="xl:hidden p-1 text-[#2d241e]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* LOGO */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 text-left shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#8c6d53] text-white flex items-center justify-center font-serif font-bold text-xl">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-serif font-bold tracking-tight text-[#2d241e] leading-none">
              ShreeInterio
            </h1>
            <p className="text-[8px] tracking-widest text-[#8c6d53] font-bold uppercase mt-0.5">
              LUXURY HOMES & DECOR
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center space-x-5 text-xs font-semibold tracking-wider text-[#42352b] uppercase">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-all py-1 border-b-2 ${
                activeTab === item.id 
                  ? 'text-[#8c6d53] border-[#8c6d53] font-bold' 
                  : 'border-transparent hover:text-[#8c6d53]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Icons & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 text-[#42352b]">
          <button 
            onClick={() => setIsConsultationModalOpen(true)}
            className="hidden sm:inline-flex bg-[#8c6d53] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#735842] transition-colors"
          >
            Book Consultation
          </button>

          <button onClick={() => handleNavClick('shop')} className="p-2 hover:bg-[#f4eee8] rounded-full">
            <Search size={20} />
          </button>

          <button onClick={() => handleNavClick('shop')} className="p-2 hover:bg-[#f4eee8] rounded-full relative">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={() => handleNavClick('shop')} className="p-2 hover:bg-[#f4eee8] rounded-full relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#8c6d53] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e5dcd3] bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 px-3 text-xs uppercase font-semibold rounded ${
                activeTab === item.id ? 'bg-[#f4eee8] text-[#8c6d53]' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setIsConsultationModalOpen(true); setIsMobileMenuOpen(false); }}
            className="w-full mt-2 bg-[#8c6d53] text-white py-2.5 rounded text-xs uppercase font-bold"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}