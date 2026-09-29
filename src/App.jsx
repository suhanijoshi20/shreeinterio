import React, { useState } from 'react';
import { 
  ShoppingBag, ChevronDown, Menu, X, ArrowLeft
} from 'lucide-react';

// Import All Separate Page Files
import Home from './pages/Home';
import Shop from './pages/Shop';
import ModularKitchen from './pages/ModularKitchen';
import HomeInteriors from './pages/HomeInteriors';
import CustomFurniture from './pages/CustomFurniture';
import About from './pages/About';
import Contact from './pages/Contact';
import Execution from './pages/Execution';
import FreeConsultancy from './pages/FreeConsultancy';
import BudgetDesigning from './pages/BudgetDesigning';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setSelectedProduct(null);
    setIsMobileMenuOpen(false);
    setIsCategoryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#2d241e] flex flex-col justify-between font-sans overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#f4eee8] text-[#523d2e] text-[10px] sm:text-[11px] py-1.5 px-4 border-b border-[#e5dcd3]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1 sm:gap-2 text-center sm:text-left">
          <span>Free Shipping on Orders Above ₹25,000</span>
          <span className="hidden xs:inline">Custom Furniture & Interiors Available</span>
          <span className="hidden md:inline">Secure Payments</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-[#e5dcd3]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          
          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-1 text-[#2d241e] hover:bg-[#f4eee8] rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="text-left flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#8c6d53] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
              S
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-serif font-bold tracking-tight text-[#2d241e] leading-none">ShreeInterio</h1>
              <p className="text-[8px] sm:text-[9px] tracking-widest text-[#8c6d53] font-bold uppercase mt-0.5">INTERIORS | FURNITURE | DÉCOR</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-xs font-semibold tracking-wider text-[#42352b] uppercase">
            <button onClick={() => handleNavClick('home')} className={activeTab === 'home' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>Home</button>
            <button onClick={() => handleNavClick('shop')} className={activeTab === 'shop' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>Shop</button>
            
            {/* Desktop Categories Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setIsCategoryDropdownOpen(true)} onMouseLeave={() => setIsCategoryDropdownOpen(false)}>
              <button className={`flex items-center gap-1 uppercase hover:text-[#8c6d53] ${['kitchen', 'homeInteriors', 'customFurniture'].includes(activeTab) ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : ''}`}>
                Categories <ChevronDown size={14} />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#e5dcd3] rounded-md shadow-xl py-2 normal-case text-xs font-medium space-y-1">
                  <button 
                    onClick={() => handleNavClick('kitchen')} 
                    className="w-full text-left px-4 py-2 hover:bg-[#f4eee8] text-[#2d241e]"
                  >
                    Modular Kitchen Design
                  </button>
                  <button 
                    onClick={() => handleNavClick('homeInteriors')} 
                    className="w-full text-left px-4 py-2 hover:bg-[#f4eee8] text-[#2d241e]"
                  >
                    Home Interior Design
                  </button>
                  <button 
                    onClick={() => handleNavClick('customFurniture')} 
                    className="w-full text-left px-4 py-2 hover:bg-[#f4eee8] text-[#2d241e]"
                  >
                    Customized Furniture
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('freeConsultancy')} className={activeTab === 'freeConsultancy' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>
              Free Consultancy
            </button>

            <button onClick={() => handleNavClick('budgetDesigning')} className={activeTab === 'budgetDesigning' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>
              Budget Designing
            </button>

            <button onClick={() => handleNavClick('execution')} className={activeTab === 'execution' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>
              Project Execution
            </button>

            <button onClick={() => handleNavClick('about')} className={activeTab === 'about' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>About Us</button>
            <button onClick={() => handleNavClick('contact')} className={activeTab === 'contact' ? 'text-[#8c6d53] border-b-2 border-[#8c6d53] pb-1' : 'hover:text-[#8c6d53]'}>Contact</button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 text-[#42352b]">
            <button onClick={() => setCartCount(cartCount + 1)} className="relative p-1.5 hover:bg-[#f4eee8] rounded-full transition-colors" aria-label="Shopping Cart">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#8c6d53] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Out Drawer / Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5dcd3] bg-white px-4 py-5 shadow-lg space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3 text-sm font-semibold tracking-wide text-[#42352b]">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'home' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Home
              </button>
              
              <button 
                onClick={() => handleNavClick('shop')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'shop' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Shop Furniture
              </button>

              {/* Mobile Categories Submenu */}
              <div className="py-2 border-b border-[#f4eee8] space-y-2">
                <button 
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)} 
                  className="w-full flex justify-between items-center text-left text-[#42352b]"
                >
                  <span className={['kitchen', 'homeInteriors', 'customFurniture'].includes(activeTab) ? 'text-[#8c6d53] font-bold' : ''}>Categories</span>
                  <ChevronDown size={16} className={`transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="pl-4 space-y-2 text-xs font-medium pt-2 text-[#6b5a4e]">
                    <button onClick={() => handleNavClick('kitchen')} className="block w-full text-left py-1 hover:text-[#8c6d53]">
                      Modular Kitchen Design
                    </button>
                    <button onClick={() => handleNavClick('homeInteriors')} className="block w-full text-left py-1 hover:text-[#8c6d53]">
                      Home Interior Design
                    </button>
                    <button onClick={() => handleNavClick('customFurniture')} className="block w-full text-left py-1 hover:text-[#8c6d53]">
                      Customized Furniture
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavClick('freeConsultancy')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'freeConsultancy' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Free Consultancy
              </button>

              <button 
                onClick={() => handleNavClick('budgetDesigning')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'budgetDesigning' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Budget Designing
              </button>

              <button 
                onClick={() => handleNavClick('execution')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'execution' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Project Execution
              </button>

              <button 
                onClick={() => handleNavClick('about')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'about' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                About Us
              </button>

              <button 
                onClick={() => handleNavClick('contact')} 
                className={`text-left py-2 border-b border-[#f4eee8] ${activeTab === 'contact' ? 'text-[#8c6d53] font-bold' : ''}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Dynamic View Rendering */}
      <main className="flex-1">
        {selectedProduct ? (
          /* PRODUCT PAGE VIEW */
          <div className="py-6 sm:py-10 max-w-6xl mx-auto px-4 space-y-6 sm:space-y-8">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8c6d53] hover:underline"
            >
              <ArrowLeft size={14} /> Back to Shopping
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-white p-5 sm:p-8 rounded-2xl border border-[#e5dcd3]">
              <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-64 sm:h-80 object-cover rounded-xl" />
              <div className="space-y-4">
                <h1 className="text-xl sm:text-2xl font-serif text-[#2d241e] font-bold">{selectedProduct.name}</h1>
                <p className="text-xs text-[#6b5a4e]">A thoughtfully designed piece created to bring style, comfort and functionality to your space.</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#8c6d53]">₹{selectedProduct.price.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-[#8c7a6b] line-through">₹{selectedProduct.mrp.toLocaleString('en-IN')}</span>
                </div>
                <div className="space-y-2 border-t border-b py-3 text-xs text-[#523d2e]">
                  <p>✓ Premium finish</p>
                  <p>✓ Contemporary design</p>
                  <p>✓ Designed for Indian homes</p>
                </div>
                <button onClick={() => setCartCount(cartCount + 1)} className="w-full bg-[#8c6d53] text-white py-3 rounded-lg text-xs font-bold uppercase hover:bg-[#735842] transition-colors">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {activeTab === 'home' && <Home setActiveTab={handleNavClick} setCategoryFilter={setCategoryFilter} />}
            {activeTab === 'shop' && <Shop categoryFilter={categoryFilter} onProductSelect={setSelectedProduct} />}
            {activeTab === 'kitchen' && <ModularKitchen setActiveTab={handleNavClick} />}
            {activeTab === 'homeInteriors' && <HomeInteriors setActiveTab={handleNavClick} />}
            {activeTab === 'customFurniture' && <CustomFurniture setActiveTab={handleNavClick} />}
            {activeTab === 'freeConsultancy' && <FreeConsultancy setActiveTab={handleNavClick} />}
            {activeTab === 'budgetDesigning' && <BudgetDesigning setActiveTab={handleNavClick} />}
            {activeTab === 'execution' && <Execution />}
            {activeTab === 'about' && <About setActiveTab={handleNavClick} />}
            {activeTab === 'contact' && <Contact />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#2d241e] text-[#d9cdbf] py-8 sm:py-10 text-xs border-t border-[#42352b]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-serif text-white font-bold mb-2">ShreeInterio</h2>
            <p className="text-[11px] leading-relaxed">B-57, LIG Colony, RSS Nagar, Indore – 452011</p>
            <p className="mt-1">Phone: 8435299100 | sbaindore@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2 uppercase">Quick Links</h3>
            <ul className="space-y-1.5 text-[11px]">
              <li><button onClick={() => handleNavClick('shop')} className="hover:text-white">Shop Furniture</button></li>
              <li><button onClick={() => handleNavClick('freeConsultancy')} className="hover:text-white">Free Consultancy</button></li>
              <li><button onClick={() => handleNavClick('budgetDesigning')} className="hover:text-white">Budget Designing</button></li>
              <li><button onClick={() => handleNavClick('execution')} className="hover:text-white">Project Execution</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2 uppercase">Stay Connected</h3>
            <p className="text-[11px] leading-relaxed">Designed for Beautiful Living © 2026 ShreeInterio. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}