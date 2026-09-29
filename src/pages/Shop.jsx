import React, { useState, useMemo } from 'react';
import { PRODUCTS, ROOMS, STYLES, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';

export default function Shop({ onAddToCart, onToggleWishlist, wishlist, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedRoom !== 'All' && p.room !== selectedRoom) return false;
      if (selectedStyle !== 'All' && p.style !== selectedStyle) return false;
      
      if (priceRange === 'under5k' && p.price >= 5000) return false;
      if (priceRange === '5k-10k' && (p.price < 5000 || p.price > 10000)) return false;
      if (priceRange === '10k-25k' && (p.price < 10000 || p.price > 25000)) return false;
      if (priceRange === 'above25k' && p.price <= 25000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popular') return b.rating - a.rating;
      return b.id.localeCompare(a.id); // Default newest
    });
  }, [selectedCategory, selectedRoom, selectedStyle, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Shop Furniture & Décor</h1>
        <p className="text-xs text-[#8c7a6b] mt-1">Explore curated pieces designed for modern living.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar Filter */}
        <div className="bg-white p-6 rounded-xl border border-[#e5ded4] space-y-6 h-fit">
          <div className="flex justify-between items-center pb-3 border-b border-[#f0e8de]">
            <h2 className="font-serif font-bold text-sm text-[#2d241e]">Filters</h2>
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRoom('All');
                setSelectedStyle('All');
                setPriceRange('All');
              }}
              className="text-[11px] text-[#c89d7c] hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Categories Filter */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d241e]">Category</h3>
            <div className="space-y-1 text-xs text-[#6b5b4e]">
              {['All', ...CATEGORIES.map(c => c.name)].map((cat) => (
                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={selectedCategory === cat} 
                    onChange={() => setSelectedCategory(cat)}
                    className="accent-[#c89d7c]"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Room Filter */}
          <div className="space-y-2 pt-4 border-t border-[#f0e8de]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d241e]">Room</h3>
            <div className="space-y-1 text-xs text-[#6b5b4e]">
              {['All', 'Living', 'Bedroom', 'Dining', 'Modular Kitchen', 'Home Office'].map((r) => (
                <label key={r} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="room" 
                    checked={selectedRoom === r} 
                    onChange={() => setSelectedRoom(r)}
                    className="accent-[#c89d7c]"
                  />
                  <span>{r}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 pt-4 border-t border-[#f0e8de]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d241e]">Price</h3>
            <div className="space-y-1 text-xs text-[#6b5b4e]">
              {[
                { label: 'All Prices', val: 'All' },
                { label: 'Under ₹5,000', val: 'under5k' },
                { label: '₹5,000 – ₹10,000', val: '5k-10k' },
                { label: '₹10,000 – ₹25,000', val: '10k-25k' },
                { label: '₹25,000+', val: 'above25k' },
              ].map((p) => (
                <label key={p.val} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={priceRange === p.val} 
                    onChange={() => setPriceRange(p.val)}
                    className="accent-[#c89d7c]"
                  />
                  <span>{p.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div className="space-y-2 pt-4 border-t border-[#f0e8de]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d241e]">Style</h3>
            <div className="space-y-1 text-xs text-[#6b5b4e]">
              {['All', ...STYLES.map(s => s.name)].map((s) => (
                <label key={s} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="style" 
                    checked={selectedStyle === s} 
                    onChange={() => setSelectedStyle(s)}
                    className="accent-[#c89d7c]"
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-xl border border-[#e5ded4] gap-4 text-xs">
            <span className="text-[#8c7a6b]">
              Showing <strong className="text-[#2d241e]">{filteredProducts.length}</strong> products
            </span>

            <div className="flex items-center space-x-2">
              <span className="text-[#8c7a6b]">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#f8f5f0] border border-[#e5ded4] rounded px-3 py-1.5 focus:outline-none text-[#2d241e]"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.some(item => item.id === p.id)}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-xl text-center border border-[#e5ded4] space-y-3">
              <p className="text-base font-serif text-[#2d241e]">No products match your selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedRoom('All');
                  setSelectedStyle('All');
                  setPriceRange('All');
                }}
                className="text-xs bg-[#c89d7c] text-white px-4 py-2 rounded font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}