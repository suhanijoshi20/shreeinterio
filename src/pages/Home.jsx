import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PRODUCTS, 
  ROOMS, 
  CATEGORIES, 
  STYLES, 
  SERVICES, 
  PROJECTS, 
  INSPIRATIONS, 
  REVIEWS 
} from '../data/mockData';

export default function Home({ onAddToCart }) {
  // Safe Fallbacks to prevent undefined .map() crashes
  const safeProducts = PRODUCTS || [];
  const safeRooms = ROOMS || [];
  const safeCategories = CATEGORIES || [];
  const safeStyles = STYLES || [];
  const safeServices = SERVICES || [];
  const safeProjects = PROJECTS || [];
  const safeInspirations = INSPIRATIONS || [];
  const safeReviews = REVIEWS || [];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white rounded-2xl overflow-hidden mx-4 md:mx-8">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600" 
            alt="Interior Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl px-6 py-20 md:py-32 md:px-12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Design Your Dream Space With Shree Interior
          </h1>
          <p className="text-lg md:text-xl text-stone-200">
            Discover luxury furniture, handcrafted lighting, and complete interior solutions customized for your home.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/shop" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md font-medium transition"
            >
              Explore Shop
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-md font-medium transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800">Shop by Category</h2>
            <p className="text-stone-600 text-sm mt-1">Explore our wide collection of home decor</p>
          </div>
          <Link to="/shop" className="text-amber-800 font-medium hover:underline text-sm">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {safeCategories.map((cat, idx) => (
            <Link 
              key={typeof cat === 'object' ? cat.id || idx : cat || idx} 
              to={`/shop?category=${encodeURIComponent(typeof cat === 'object' ? cat.name : cat)}`}
              className="p-4 bg-stone-50 hover:bg-amber-50 rounded-xl border border-stone-200 text-center transition group"
            >
              <p className="font-medium text-stone-800 group-hover:text-amber-800">
                {typeof cat === 'object' ? cat.name : cat}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800">Featured Collections</h2>
            <p className="text-stone-600 text-sm mt-1">Handpicked designs for elegant living</p>
          </div>
          <Link to="/shop" className="text-amber-800 font-medium hover:underline text-sm">
            Browse All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeProducts.slice(0, 4).map((product, idx) => (
            <div key={product.id || idx} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-2">
                <span className="text-xs uppercase tracking-wider text-stone-400">{product.category}</span>
                <h3 className="font-semibold text-stone-800 text-base">{product.name}</h3>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-amber-900">₹{product.price?.toLocaleString()}</span>
                  <button 
                    onClick={() => onAddToCart && onAddToCart(product)}
                    className="bg-stone-900 hover:bg-stone-800 text-white text-xs px-3 py-2 rounded transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-8">Shop by Room</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeRooms.map((room, idx) => (
            <div key={room.name || idx} className="relative rounded-xl overflow-hidden h-64 group cursor-pointer">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-xl font-serif text-white font-bold">{room.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-8 text-center">Our Interior Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeServices.map((service, idx) => (
              <div key={service.id || idx} className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
                <h3 className="text-xl font-semibold text-stone-800">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeReviews.map((review, idx) => (
            <div key={review.id || idx} className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4">
              <p className="text-stone-700 italic text-sm">"{review.comment}"</p>
              <div className="font-semibold text-stone-900 text-sm">— {review.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}