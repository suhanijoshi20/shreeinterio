import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Rooms from './pages/Rooms';
import Styles from './pages/Styles';
import Projects from './pages/Project';
import Services from './pages/Services';
import Inspiration from './pages/Inspiration';
import About from './pages/About';
import Contact from './pages/Contact'; 

import ProductDetail from './pages/ProductDetail';
import { CartModal, ConsultationModal } from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
  };

  // Wishlist actions
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#2d241e] font-sans antialiased flex flex-col justify-between">
      
      {/* 1. TOP NAVIGATION BAR */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        wishlistCount={wishlist.length}
        openConsultationModal={() => setIsConsultationOpen(true)}
        openCartModal={() => setIsCartOpen(true)}
        openWishlistModal={() => setIsWishlistOpen(true)}
      />

      {/* DYNAMIC CONTENT ROUTING */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onSelectProduct={(p) => setSelectedProduct(p)}
            openConsultationModal={() => setIsConsultationOpen(true)}
            onSelectProject={(proj) => { setSelectedProject(proj); setActiveTab('projects'); }}
          />
        )}

        {activeTab === 'shop' && (
          <Shop 
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {activeTab === 'rooms' && <Rooms setActiveTab={setActiveTab} />}
        {activeTab === 'styles' && <Styles setActiveTab={setActiveTab} />}
        {activeTab === 'projects' && <Projects onSelectProject={(p) => setSelectedProject(p)} />}
        {activeTab === 'services' && <Services openConsultationModal={() => setIsConsultationOpen(true)} />}
        {activeTab === 'inspiration' && <Inspiration onAddToCart={handleAddToCart} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'contact' && <Contact openConsultationModal={() => setIsConsultationOpen(true)} />}
      </main>

      {/* 15. FOOTER */}
      <Footer 
        setActiveTab={setActiveTab} 
        openConsultationModal={() => setIsConsultationOpen(true)} 
      />

      {/* MODALS & DRAWERS */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlist.some(item => item.id === selectedProduct.id)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      )}

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

    </div>
  );
}