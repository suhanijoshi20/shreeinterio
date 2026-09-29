import React, { useState } from 'react';
import { 
  Search, Heart, ShoppingBag, User, Menu, X, ChevronDown 
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, cartCount = 0, wishlistCount = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#e5dcd3] transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="xl:hidden p-1.5 text-[#2d241e] hover:bg-[#f4eee8] rounded-md transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* LOGO with Name */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 text-left shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#8c6d53] text-white flex items-center justify-center font-serif font-bold text-xl shadow-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-serif font-bold tracking-tight text-[#2d241e] leading-none">
              ShreeInterio
            </h1>
            <p className="text-[8px] sm:text-[9px] tracking-widest text-[#8c6d53] font-bold uppercase mt-0.5">
              LUXURY HOMES & DECOR
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-5 text-xs font-semibold tracking-wider text-[#42352b] uppercase">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-all duration-200 py-1 border-b-2 ${
                activeTab === item.id 
                  ? 'text-[#8c6d53] border-[#8c6d53] font-bold' 
                  : 'border-transparent hover:text-[#8c6d53] hover:border-[#8c6d53]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-3 text-[#42352b]">
          {/* Search Button */}
          <button 
            onClick={() => handleNavClick('shop')}
            className="p-2 hover:bg-[#f4eee8] rounded-full transition-colors relative group" 
            title="Search Products"
          >
            <Search size={20} />
          </button>

          {/* Wishlist Icon */}
          <button 
            onClick={() => handleNavClick('wishlist')}
            className="p-2 hover:bg-[#f4eee8] rounded-full transition-colors relative" 
            title="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button 
            onClick={() => handleNavClick('cart')}
            className="p-2 hover:bg-[#f4eee8] rounded-full transition-colors relative" 
            title="Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#8c6d53] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account Icon */}
          <button 
            onClick={() => handleNavClick('account')}
            className="p-2 hover:bg-[#f4eee8] rounded-full transition-colors" 
            title="Account"
          >
            <User size={20} />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e5dcd3] bg-white px-4 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2 text-xs font-semibold tracking-wide uppercase text-[#42352b]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg border-b border-[#f4eee8] transition-colors ${
                  activeTab === item.id 
                    ? 'bg-[#f4eee8] text-[#8c6d53] font-bold' 
                    : 'hover:bg-[#faf7f5]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}