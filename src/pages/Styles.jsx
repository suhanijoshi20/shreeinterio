import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, RotateCcw, ChevronDown, ChevronUp, Star, ShoppingBag, Check, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const STYLE_OPTIONS = [
  "Modern", "Minimal", "Contemporary", "Luxury", "Scandinavian", "Japandi",
  "Boho", "Industrial", "Rustic", "Traditional", "Classic", "Vintage",
  "Retro", "Mid-Century Modern", "Farmhouse", "Coastal", "Mediterranean",
  "French Country", "Art Deco", "Indian Contemporary", "Modern Indian",
  "Transitional", "Eclectic", "Urban", "Cottage", "Tropical"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function ShopByStyleSection({ onAddToCart, onToggleWishlist, wishlist = [], onSelectProduct }) {
  const [selectedStyles, setSelectedStyles] = useState([]); // Empty array = "All Styles"
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isStyleAccordionOpen, setIsStyleAccordionOpen] = useState(true);

  // Toggle Style Selection
  const handleStyleToggle = (style) => {
    if (style === 'All Styles') {
      setSelectedStyles([]);
      return;
    }
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const filteredProducts = useMemo(() => {
    let items = PRODUCTS || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name?.toLowerCase().includes(q) || p.style?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q));
    }

    if (selectedStyles.length > 0) {
      items = items.filter(p => selectedStyles.some(s => s.toLowerCase() === p.style?.toLowerCase()));
    }

    if (sortBy === 'price-low') items = [...items].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') items = [...items].sort((a, b) => b.price - a.price);

    return items;
  }, [searchQuery, selectedStyles, sortBy]);

  const isWishlisted = (id) => wishlist.some(item => item.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-6 border-b border-stone-200 pb-6">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Shop By Style</h1>
        <p className="text-stone-500 text-sm mt-1">Filter designs by aesthetics — from Minimalist Japandi to Luxury Art Deco.</p>
      </div>

      {/* Quick Navigation Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        <button
          onClick={() => handleStyleToggle('All Styles')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            selectedStyles.length === 0 ? 'bg-[#2d241e] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          All Styles ({STYLE_OPTIONS.length})
        </button>
        {STYLE_OPTIONS.map(style => {
          const isSelected = selectedStyles.includes(style);
          return (
            <button
              key={style}
              onClick={() => handleStyleToggle(style)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#2d241e] text-white border-[#2d241e]'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
              }`}
            >
              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              {style}
            </button>
          );
        })}
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <p className="text-stone-500 text-xs">
          Showing <span className="font-bold text-[#2d241e]">{filteredProducts.length}</span> items
        </p>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by style or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-stone-300 rounded-lg text-sm w-full bg-white text-[#2d241e] focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white text-[#2d241e] focus:outline-none"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#2d241e] text-white rounded-lg text-sm"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'} bg-[#fbf9f5] p-5 rounded-2xl border border-stone-200 h-fit sticky top-24`}>
          <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-4">
            <h2 className="font-bold text-[#2d241e] text-xs uppercase tracking-wider">Shop By Style</h2>
            <button
              onClick={() => setSelectedStyles([])}
              className="text-xs text-[#c89d7c] hover:underline font-medium flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Clear Filter
            </button>
          </div>

          <div>
            <button
              onClick={() => setIsStyleAccordionOpen(!isStyleAccordionOpen)}
              className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-3"
            >
              <span>SELECT STYLES</span>
              {isStyleAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isStyleAccordionOpen && (
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {/* All Option */}
                <label
                  onClick={() => handleStyleToggle('All Styles')}
                  className="flex items-center gap-2.5 py-1 text-xs text-stone-700 hover:text-[#2d241e] cursor-pointer"
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedStyles.length === 0 ? 'bg-[#2d241e] border-[#2d241e]' : 'bg-white border-stone-300'}`}>
                    {selectedStyles.length === 0 && <Check className="w-3 h-3 text-white stroke-[3]" />}
                  </div>
                  <span className={selectedStyles.length === 0 ? 'font-bold text-[#2d241e]' : 'font-medium'}>All Styles</span>
                </label>

                {/* All Style Options */}
                {STYLE_OPTIONS.map(style => {
                  const isChecked = selectedStyles.includes(style);
                  return (
                    <label
                      key={style}
                      onClick={() => handleStyleToggle(style)}
                      className="flex items-center gap-2.5 py-1 text-xs text-stone-700 hover:text-[#2d241e] cursor-pointer"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isChecked ? 'bg-[#2d241e] border-[#2d241e]' : 'bg-white border-stone-300'}`}>
                        {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                      </div>
                      <span className={isChecked ? 'font-bold text-[#2d241e]' : 'font-medium'}>{style}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        {/* Product Display */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#fbf9f5] rounded-2xl border border-stone-200">
              <p className="text-stone-500 font-medium text-sm">No products found for the selected styles.</p>
              <button
                onClick={() => setSelectedStyles([])}
                className="mt-4 px-6 py-2 bg-[#2d241e] text-white rounded-lg text-xs font-semibold"
              >
                Show All Styles
              </button>
            </div>
          ) : (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                >
                  <div>
                    <div className="relative h-56 bg-stone-100 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      {product.style && (
                        <span className="absolute top-3 left-3 bg-[#2d241e] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                          {product.style}
                        </span>
                      )}
                      {onToggleWishlist && (
                        <button
                          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
                          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow hover:bg-white"
                        >
                          <Heart className={`w-4 h-4 ${isWishlisted(product.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`} />
                        </button>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between text-[10px] text-stone-400 uppercase tracking-wider mb-1">
                        <span>{product.category}</span>
                        {product.rating && <span className="text-[#c89d7c] font-bold flex items-center gap-0.5"><Star className="w-3 h-3 fill-[#c89d7c]" /> {product.rating}</span>}
                      </div>
                      <h3 className="font-serif font-bold text-[#2d241e] text-base">{product.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-base font-bold text-[#2d241e]">₹{product.price?.toLocaleString()}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(product); }}
                      className="bg-[#2d241e] hover:bg-[#c89d7c] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}