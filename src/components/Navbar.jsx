import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  cartCount, 
  wishlistCount, 
  openConsultationModal, 
  openCartModal, 
  openWishlistModal 
}) {
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
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e5ded4]"
    >
      {/* Top Banner */}
      <div className="bg-[#2d241e] text-[#d9cdbf] text-[11px] py-1.5 text-center tracking-wide font-light px-4 overflow-hidden">
        <motion.span 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block"
        >
          ✨ Transform your home with ShreeInterio | Free consultation on orders above ₹50,000
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2d241e] hover:text-[#c89d7c] transition-colors"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </motion.button>

        {/* LOGO WITH CIRCLE S/I ICON */}
        <motion.div 
          onClick={() => handleNavClick('home')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer flex items-center space-x-3 group"
        >
          {/* Custom Circle Logo */}
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full bg-[#2d241e] flex items-center justify-center text-[#c89d7c] shadow-sm group-hover:bg-[#c89d7c] group-hover:text-white transition-colors duration-300"
          >
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
              <path 
                d="M 65 32 C 60 24 40 24 35 34 C 30 44 65 48 65 64 C 65 78 40 78 35 68" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
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
          </motion.div>

          {/* Brand Name Text */}
          <span className="text-2xl font-serif font-bold text-[#2d241e] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
            Shree<span className="text-[#c89d7c]">Interio</span>
          </span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-medium text-[#5c4d41]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-2 transition-colors duration-200 hover:text-[#2d241e] ${
                activeTab === link.id ? 'text-[#2d241e] font-semibold' : ''
              }`}
            >
              {link.label}
              
              {/* Sliding Active Underline Indicator */}
              {activeTab === link.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c89d7c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <motion.button 
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavClick('shop')} 
            className="p-2 text-[#2d241e] hover:text-[#c89d7c] transition-colors"
            title="Search Products"
          >
            🔍
          </motion.button>

          {/* Wishlist Button */}
          <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWishlistModal} 
            className="relative p-2 text-[#2d241e] hover:text-[#c89d7c] transition-colors"
            title="Wishlist"
          >
            ♡
            <AnimatePresence>
              {wishlistCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={wishlistCount}
                  className="absolute top-0 right-0 bg-[#c89d7c] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Cart Button */}
          <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={openCartModal} 
            className="relative p-2 text-[#2d241e] hover:text-[#c89d7c] transition-colors"
            title="Cart"
          >
            🛒
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={cartCount}
                  className="absolute top-0 right-0 bg-[#2d241e] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Book Consultation Button */}
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#b08260' }}
            whileTap={{ scale: 0.95 }}
            onClick={openConsultationModal}
            className="hidden sm:inline-block bg-[#c89d7c] text-white text-xs font-medium px-4 py-2 rounded transition-all shadow-sm"
          >
            Book Consultation
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#fbf9f5] border-b border-[#e5ded4] px-4 pt-2 pb-6 space-y-1 overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.03 + 0.1, duration: 0.2 }}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 text-sm font-medium border-b border-[#f0e8de] transition-all ${
                  activeTab === link.id ? 'text-[#c89d7c] font-bold pl-2 border-[#c89d7c]' : 'text-[#2d241e]'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="pt-4"
            >
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultationModal();
                }}
                className="w-full bg-[#c89d7c] text-white text-sm font-medium py-3 rounded text-center shadow-md"
              >
                Book Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}