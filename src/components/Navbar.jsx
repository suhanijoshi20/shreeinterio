import React, { useState } from 'react';

export default function Navbar({ activeTab, setActiveTab, cartCount, wishlistCount, openConsultationModal, openCartModal, openWishlistModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
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

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e5ded4]">
      {/* Top Banner */}
      <div className="bg-[#2d241e] text-[#d9cdbf] text-[11px] py-1.5 text-center tracking-wide font-light px-4">
        ✨ Transform your home with ShreeInterio | Free consultation on orders above ₹50,000
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2d241e] hover:text-[#c89d7c]"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* LOGO WITH CIRCLE S/I ICON */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center space-x-3 group"
        >
          {/* Custom Circle Logo (Dollar-style S with I inside) */}
          <div className="w-10 h-10 rounded-full bg-[#2d241e] flex items-center justify-center text-[#c89d7c] shadow-sm group-hover:bg-[#c89d7c] group-hover:text-white transition-all duration-300">
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circle Ring */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
              
              {/* 'S' Shape */}
              <path 
                d="M 65 32 C 60 24 40 24 35 34 C 30 44 65 48 65 64 C 65 78 40 78 35 68" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
              
              {/* 'I' Line (Vertical dollar-style line) */}
              <line 
                x1="50" 
                y1="18" 
                x2="50" 
                y2="82" 
                stroke="currentColor" 
                strokeWidth="7" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          {/* Brand Name Text */}
          <span className="text-2xl font-serif font-bold text-[#2d241e] tracking-tight">
            Shree<span className="text-[#c89d7c]">Interio</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-medium text-[#5c4d41]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors duration-200 hover:text-[#2d241e] py-2 border-b-2 ${
                activeTab === link.id
                  ? 'text-[#2d241e] border-[#c89d7c] font-semibold'
                  : 'border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => handleNavClick('shop')} 
            className="p-2 text-[#2d241e] hover:text-[#c89d7c]"
            title="Search Products"
          >
            🔍
          </button>

          <button 
            onClick={openWishlistModal} 
            className="relative p-2 text-[#2d241e] hover:text-[#c89d7c]"
            title="Wishlist"
          >
            ♡
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#c89d7c] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          <button 
            onClick={openCartModal} 
            className="relative p-2 text-[#2d241e] hover:text-[#c89d7c]"
            title="Cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#2d241e] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={openConsultationModal}
            className="hidden sm:inline-block bg-[#c89d7c] hover:bg-[#b08260] text-white text-xs font-medium px-4 py-2 rounded transition-all shadow-sm"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f5] border-b border-[#e5ded4] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2.5 text-sm font-medium border-b border-[#f0e8de] ${
                activeTab === link.id ? 'text-[#c89d7c] font-bold' : 'text-[#2d241e]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal();
              }}
              className="w-full bg-[#c89d7c] text-white text-sm font-medium py-3 rounded text-center"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}