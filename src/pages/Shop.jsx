import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Eye, ShoppingCart, Sparkles, ChevronRight } from 'lucide-react';

// Main Categories & Subcategories Config
const categoriesData = [
  {
    id: 'sofa',
    name: 'Sofa & Seating',
    subcategories: ['All Sofas', '3 Seater Sofa', 'L-Shape Corner Sofa', 'Recliners', 'Sofa Cum Beds', 'Wooden Sofas']
  },
  {
    id: 'bed',
    name: 'Beds & Bedroom',
    subcategories: ['All Beds', 'King Size Beds', 'Queen Size Beds', 'Storage Beds', 'Hydraulic Beds', 'Bedside Tables']
  },
  {
    id: 'dining',
    name: 'Dining Furniture',
    subcategories: ['All Dining', '4 Seater Dining Sets', '6 Seater Dining Sets', 'Marble Top Dining', 'Dining Chairs']
  },
  {
    id: 'wardrobe',
    name: 'Wardrobes & Storage',
    subcategories: ['All Wardrobes', '2 Door Wardrobe', '3 Door Wardrobe', 'Sliding Wardrobes', 'Walk-in Closets']
  },
  {
    id: 'table',
    name: 'Tables & Desks',
    subcategories: ['All Tables', 'Coffee & Center Tables', 'Study & Work Desks', 'Console Tables', 'Side Tables']
  },
  {
    id: 'lighting',
    name: 'Lighting & Decor',
    subcategories: ['All Lighting', 'Pendant Ceiling Lights', 'Chandeliers', 'Floor Lamps', 'Wall Sconces & LED']
  }
];

// Sample Product Database with Subcategories
const shopProducts = [
  // SOFAS
  {
    id: 101,
    name: 'Velvet Royal 3 Seater Luxury Sofa',
    mainCategory: 'sofa',
    subcategory: '3 Seater Sofa',
    price: 42999,
    mrp: 58000,
    rating: 4.8,
    reviews: 24,
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 102,
    name: 'Indore L-Shape Corner Leatherette Sofa',
    mainCategory: 'sofa',
    subcategory: 'L-Shape Corner Sofa',
    price: 64999,
    mrp: 85000,
    rating: 4.9,
    reviews: 19,
    badge: 'Trending',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 103,
    name: 'Motorized Fabric Recliner Chair',
    mainCategory: 'sofa',
    subcategory: 'Recliners',
    price: 28999,
    mrp: 38000,
    rating: 4.7,
    reviews: 15,
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 104,
    name: 'Sheesham Wood Foldable Sofa Cum Bed',
    mainCategory: 'sofa',
    subcategory: 'Sofa Cum Beds',
    price: 34999,
    mrp: 46000,
    rating: 4.6,
    reviews: 31,
    badge: 'Smart Space',
    img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800'
  },

  // BEDS
  {
    id: 201,
    name: 'King Size Hydraulic Storage Bed in Teak Wood',
    mainCategory: 'bed',
    subcategory: 'Hydraulic Beds',
    price: 52999,
    mrp: 72000,
    rating: 4.9,
    reviews: 42,
    badge: 'Top Rated',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 202,
    name: 'Modern Upholstered Queen Size Bed',
    mainCategory: 'bed',
    subcategory: 'Queen Size Beds',
    price: 38999,
    mrp: 49000,
    rating: 4.7,
    reviews: 18,
    badge: 'New Arrival',
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800'
  },

  // DINING
  {
    id: 301,
    name: '6 Seater Solid Wood Dining Set with Cushioned Chairs',
    mainCategory: 'dining',
    subcategory: '6 Seater Dining Sets',
    price: 48999,
    mrp: 65000,
    rating: 4.8,
    reviews: 29,
    badge: 'Premium',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 302,
    name: 'Italian White Marble Top 4 Seater Dining Table',
    mainCategory: 'dining',
    subcategory: 'Marble Top Dining',
    price: 59999,
    mrp: 78000,
    rating: 4.9,
    reviews: 11,
    badge: 'Luxury',
    img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800'
  },

  // WARDROBE
  {
    id: 401,
    name: 'Modern High Gloss 3-Door Wardrobe with Mirror',
    mainCategory: 'wardrobe',
    subcategory: '3 Door Wardrobe',
    price: 41999,
    mrp: 55000,
    rating: 4.6,
    reviews: 33,
    badge: 'Spacious',
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 402,
    name: 'Premium Glass Sliding Door Wardrobe',
    mainCategory: 'wardrobe',
    subcategory: 'Sliding Wardrobes',
    price: 68999,
    mrp: 89000,
    rating: 4.9,
    reviews: 16,
    badge: 'Ultra Modern',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
  },

  // TABLES
  {
    id: 501,
    name: 'Geometric Marble Top Coffee Table Set',
    mainCategory: 'table',
    subcategory: 'Coffee & Center Tables',
    price: 18999,
    mrp: 26000,
    rating: 4.8,
    reviews: 27,
    badge: 'Hot Seller',
    img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 502,
    name: 'Ergonomic Wooden Study Desk with Bookshelf',
    mainCategory: 'table',
    subcategory: 'Study & Work Desks',
    price: 14999,
    mrp: 21000,
    rating: 4.7,
    reviews: 22,
    badge: 'Work From Home',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800'
  },

  // LIGHTING
  {
    id: 601,
    name: 'Nordic Warm Gold Chandelier Ceiling Lamp',
    mainCategory: 'lighting',
    subcategory: 'Chandeliers',
    price: 12999,
    mrp: 18000,
    rating: 4.9,
    reviews: 38,
    badge: 'Elegance',
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 602,
    name: 'Minimalist Brass Standing Floor Lamp',
    mainCategory: 'lighting',
    subcategory: 'Floor Lamps',
    price: 7999,
    mrp: 11500,
    rating: 4.7,
    reviews: 14,
    badge: 'Minimalist',
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Shop({ onProductSelect }) {
  const [selectedMainCat, setSelectedMainCat] = useState('sofa');
  const [selectedSubCat, setSelectedSubCat] = useState('All Sofas');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceSort, setPriceSort] = useState('default');

  const currentCategoryObj = categoriesData.find(c => c.id === selectedMainCat);

  // Main Category change handler
  const handleMainCategoryChange = (catId) => {
    setSelectedMainCat(catId);
    const firstSub = categoriesData.find(c => c.id === catId)?.subcategories[0];
    setSelectedSubCat(firstSub || 'All');
  };

  // Filter Products
  const filteredProducts = useMemo(() => {
    return shopProducts
      .filter(item => item.mainCategory === selectedMainCat)
      .filter(item => {
        if (selectedSubCat.startsWith('All')) return true;
        return item.subcategory === selectedSubCat;
      })
      .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (priceSort === 'lowToHigh') return a.price - b.price;
        if (priceSort === 'highToLow') return b.price - a.price;
        return 0;
      });
  }, [selectedMainCat, selectedSubCat, searchQuery, priceSort]);

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 space-y-8 animate-fadeIn">
      
      {/* Banner with CSS Glow Animation */}
      <div className="relative bg-gradient-to-r from-[#2d241e] via-[#42352b] to-[#2d241e] text-white p-6 sm:p-10 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#8c6d53]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase bg-[#8c6d53]/40 border border-[#8c6d53] px-3 py-1 rounded-full text-[#e5dcd3]">
            <Sparkles size={12} /> Exclusive Interior Store
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            Handcrafted Furniture & Home Decor
          </h1>
          <p className="text-xs sm:text-sm text-[#d9cdbf] leading-relaxed">
            Explore curated collections of premium Sofas, Beds, Dining Sets, Wardrobes, Desks & Decorative Lightings designed for luxury living in Indore.
          </p>
        </div>
      </div>

      {/* Main Categories Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-serif font-bold text-[#2d241e]">Browse Categories</h2>
          <span className="text-xs text-[#8c7a6b] font-medium hidden sm:inline">Select a category to view varieties</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {categoriesData.map((cat) => {
            const isActive = selectedMainCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleMainCategoryChange(cat.id)}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all duration-300 transform active:scale-95 flex flex-col items-center justify-center gap-1 border ${
                  isActive
                    ? 'bg-[#8c6d53] text-white border-[#8c6d53] shadow-md scale-105'
                    : 'bg-white text-[#523d2e] border-[#e5dcd3] hover:border-[#8c6d53] hover:bg-[#faf7f5]'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subcategory Pills Bar */}
      {currentCategoryObj && (
        <div className="bg-white p-4 rounded-xl border border-[#e5dcd3] shadow-sm space-y-3 transition-all duration-300">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8c6d53] uppercase tracking-wider">
            <Filter size={14} /> Filter {currentCategoryObj.name} Types:
          </div>
          <div className="flex flex-wrap gap-2">
            {currentCategoryObj.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCat(sub)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  selectedSubCat === sub
                    ? 'bg-[#2d241e] text-white shadow-sm'
                    : 'bg-[#f4eee8] text-[#523d2e] hover:bg-[#e5dcd3]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search & Sort Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-[#e5dcd3]">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder={`Search in ${currentCategoryObj?.name}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#8c6d53] bg-[#faf7f5]"
          />
          <Search size={15} className="absolute left-3 top-2.5 text-[#8c7a6b]" />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-[#6b5a4e] font-medium">{filteredProducts.length} Products Found</span>
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="text-xs border border-[#e5dcd3] rounded-lg px-3 py-2 bg-[#faf7f5] text-[#2d241e] focus:outline-none focus:border-[#8c6d53]"
          >
            <option value="default">Sort by: Featured</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid with Hover & Entrance Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#e5dcd3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden h-52 bg-[#f4eee8]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 bg-[#8c6d53] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase shadow">
                  {product.badge}
                </span>

                {/* Quick View Button Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onProductSelect(product)}
                    className="bg-white text-[#2d241e] text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8c6d53] hover:text-white"
                  >
                    <Eye size={14} /> View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#8c7a6b] uppercase font-bold tracking-wide">
                    {product.subcategory}
                  </span>
                  <h3 className="text-xs sm:text-sm font-serif font-bold text-[#2d241e] line-clamp-2 mt-0.5 group-hover:text-[#8c6d53] transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#f4eee8]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-[#8c6d53]">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-[#8c7a6b] line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">
                      <Star size={12} fill="currentColor" /> {product.rating}
                    </div>
                  </div>

                  <button
                    onClick={() => onProductSelect(product)}
                    className="w-full bg-[#faf7f5] hover:bg-[#8c6d53] text-[#2d241e] hover:text-white border border-[#e5dcd3] hover:border-[#8c6d53] text-xs font-bold py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={14} /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-[#e5dcd3] space-y-2">
            <p className="text-base font-bold text-[#2d241e]">No Furniture Found</p>
            <p className="text-xs text-[#6b5a4e]">Try clearing search or choosing another category.</p>
          </div>
        )}
      </div>

    </div>
  );
}