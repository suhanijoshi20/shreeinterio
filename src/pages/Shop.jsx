import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/mockData';

// --- Filter Data Hierarchy ---
const FILTER_DATA = {
  categories: [
    {
      name: "Furniture",
      subcategories: {
        "Living Room": ["Sofa", "Sectional Sofa", "Sofa Bed", "Recliner", "Armchair", "Lounge Chair", "Ottoman", "Pouf", "Coffee Table", "Side Table", "Console Table", "TV Unit", "Nesting Table"],
        "Bedroom": ["King Size Bed", "Queen Size Bed", "Single Bed", "Platform Bed", "Upholstered Bed", "Bedside Table", "Wardrobe", "Dresser", "Chest of Drawers", "Dressing Table", "Bedroom Bench"],
        "Dining": ["Dining Table", "Dining Chair", "Dining Bench", "Bar Table", "Bar Stool", "Sideboard", "Buffet Cabinet"],
        "Home Office": ["Study Table", "Office Desk", "Computer Desk", "Office Chair", "Bookshelf", "Storage Cabinet", "Filing Cabinet"],
        "Storage": ["Bookshelf", "Display Cabinet", "Storage Cabinet", "Shoe Rack", "Sideboard", "Chest", "Storage Bench"]
      }
    },
    {
      name: "Lighting",
      subcategories: {
        "Ceiling Lighting": ["Chandelier", "Pendant Light", "Ceiling Light", "Flush Mount", "Track Light"],
        "Table Lighting": ["Table Lamp", "Bedside Lamp", "Desk Lamp", "Reading Lamp"],
        "Floor Lighting": ["Floor Lamp", "Tripod Lamp", "Arc Lamp"],
        "Wall Lighting": ["Wall Sconce", "Picture Light", "Wall Reading Light"],
        "Decorative Lighting": ["LED Light", "String Light", "Fairy Light", "Candle Light"],
        "Outdoor Lighting": ["Garden Light", "Pathway Light", "Balcony Light", "Outdoor Wall Light"]
      }
    },
    {
      name: "Wall Décor",
      subcategories: {
        "Wall Art": ["Canvas Art", "Abstract Art", "Modern Art", "Landscape Art", "Botanical Art", "Floral Art", "Portrait Art", "Typography Art"],
        "Frames": ["Photo Frame", "Gallery Wall", "Collage Frame", "Art Frame"],
        "Decorative Wall Items": ["Wall Sculpture", "Metal Wall Art", "Wooden Wall Art", "Decorative Plates", "Wall Panels", "3D Wall Décor"],
        "Functional": ["Wall Clock", "Wall Shelf", "Floating Shelf", "Key Holder", "Decorative Hooks"]
      }
    },
    {
      name: "Rugs & Carpets",
      subcategories: {
        "Types": ["Area Rug", "Runner Rug", "Round Rug", "Square Rug", "Shag Rug", "Flatweave Rug", "Outdoor Rug", "Kids Rug", "Carpet"],
        "Styles": ["Modern", "Traditional", "Persian", "Geometric", "Abstract", "Boho", "Minimal"],
        "By Room": ["Living Room Rug", "Bedroom Rug", "Dining Room Rug", "Kids Room Rug", "Office Rug", "Outdoor Rug"]
      }
    },
    {
      name: "Mirrors",
      subcategories: {
        "Types": ["Full-Length Mirror", "Wall Mirror", "Floor Mirror", "Dressing Mirror", "Leaner Mirror", "Decorative Mirror"],
        "Shapes": ["Round", "Oval", "Square", "Rectangle", "Arch", "Irregular / Organic"],
        "Styles": ["Modern", "Minimal", "Luxury", "Vintage", "Decorative", "Frameless"]
      }
    },
    {
      name: "Home Accessories",
      subcategories: {
        "Decorative": ["Vase", "Showpiece", "Sculpture", "Figurine", "Decorative Bowl", "Decorative Tray", "Candle Holder", "Candle Stand"],
        "Plants & Planters": ["Indoor Plant", "Artificial Plant", "Plant Pot", "Decorative Planter", "Hanging Planter", "Plant Stand"],
        "Soft Décor": ["Cushion", "Cushion Cover", "Throw", "Blanket", "Decorative Pillow"],
        "Table Décor": ["Table Runner", "Coaster", "Centerpiece", "Serving Tray", "Fruit Bowl"],
        "Storage & Organization": ["Storage Basket", "Organizer", "Magazine Holder", "Bookend", "Decorative Box", "Tissue Box"]
      }
    }
  ],
  rooms: [
    "Living Room", "Bedroom", "Dining Room", "Modular Kitchen", 
    "Home Office", "Kids Room", "Bathroom", "Entryway", "Outdoor / Balcony"
  ],
  priceRanges: [
    { label: "Under ₹2,500", min: 0, max: 2500 },
    { label: "₹2,500 – ₹5,000", min: 2500, max: 5000 },
    { label: "₹5,000 – ₹10,000", min: 5000, max: 10000 },
    { label: "₹10,000 – ₹25,000", min: 10000, max: 25000 },
    { label: "₹25,000 – ₹50,000", min: 25000, max: 50000 },
    { label: "₹50,000 – ₹1,00,000", min: 50000, max: 100000 },
    { label: "₹1,00,000+", min: 100000, max: Infinity }
  ],
  styles: [
    "Modern", "Minimal", "Contemporary", "Luxury", "Scandinavian", 
    "Boho", "Industrial", "Rustic", "Traditional", "Vintage", 
    "Japandi", "Mid-Century Modern", "Classic", "Farmhouse", "Coastal", "Indian Contemporary"
  ],
  materials: [
    "Solid Wood", "Engineered Wood", "MDF", "Plywood", "Metal", "Glass", 
    "Marble", "Stone", "Ceramic", "Rattan", "Cane", "Fabric", "Velvet", "Leather"
  ],
  colors: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Brown", hex: "#8B4513" },
    { name: "Black", hex: "#000000" },
    { name: "Grey", hex: "#808080" },
    { name: "Green", hex: "#2E8B57" },
    { name: "Blue", hex: "#4682B4" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Natural Wood", hex: "#D2B48C" }
  ],
  sizes: ["Small", "Medium", "Large", "Extra Large", "Single", "Double", "Queen", "King"],
  availability: ["In Stock", "Pre-Order", "Made to Order", "Customizable"],
  ratings: [4, 3, 2],
  offers: ["On Sale", "New Arrival", "Best Seller", "Trending", "Limited Edition"]
};

export default function Shop({ onAddToCart }) {
  // --- Filter States ---
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [selectedItemType, setSelectedItemType] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Mobile drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Collapsible categories state
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    let items = PRODUCTS || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q));
    }

    if (selectedCategory !== 'All') {
      items = items.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedRoom !== 'All') {
      items = items.filter(p => p.room?.toLowerCase() === selectedRoom.toLowerCase());
    }

    if (selectedStyle !== 'All') {
      items = items.filter(p => p.style?.toLowerCase() === selectedStyle.toLowerCase());
    }

    if (selectedPriceIndex !== null) {
      const range = FILTER_DATA.priceRanges[selectedPriceIndex];
      items = items.filter(p => p.price >= range.min && p.price <= range.max);
    }

    if (selectedRating !== null) {
      items = items.filter(p => (p.rating || 4.5) >= selectedRating);
    }

    // Sort
    if (sortBy === 'price-low') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      items = [...items].sort((a, b) => b.price - a.price);
    }

    return items;
  }, [
    searchQuery, selectedCategory, selectedRoom, selectedStyle, 
    selectedPriceIndex, selectedRating, sortBy
  ]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedSubCategory('All');
    setSelectedItemType('All');
    setSelectedRoom('All');
    setSelectedPriceIndex(null);
    setSelectedStyle('All');
    setSelectedMaterial('All');
    setSelectedColor('All');
    setSelectedSize('All');
    setSelectedAvailability('All');
    setSelectedRating(null);
    setSelectedOffer('All');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">Explore Collection</h1>
          <p className="text-stone-500 text-sm mt-1">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search furniture, lights, decor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-800"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium"
          >
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* --- SIDEBAR FILTERS --- */}
        <aside className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'} space-y-6 bg-stone-50 p-6 rounded-2xl border border-stone-200 h-fit max-h-[85vh] overflow-y-auto sticky top-24`}>
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-stone-900 text-lg uppercase tracking-wider">Filters</h2>
            <button 
              onClick={resetFilters} 
              className="text-xs text-amber-800 hover:underline font-medium"
            >
              Reset All
            </button>
          </div>

          {/* 1. CATEGORY ACCORDION */}
          <div>
            <h3 className="font-semibold text-stone-800 text-sm mb-3">1. CATEGORY</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => { setSelectedCategory('All'); setOpenCategoryIndex(null); }}
                className={`block w-full text-left py-1 font-medium ${selectedCategory === 'All' ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
              >
                ○ All Categories
              </button>

              {FILTER_DATA.categories.map((cat, idx) => {
                const isOpen = openCategoryIndex === idx;
                const isSelected = selectedCategory === cat.name;

                return (
                  <div key={cat.name} className="border-b border-stone-200/60 pb-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setOpenCategoryIndex(isOpen ? null : idx);
                      }}
                      className={`flex justify-between items-center w-full text-left py-1 font-medium ${isSelected ? 'text-amber-800 font-bold' : 'text-stone-700'}`}
                    >
                      <span>○ {cat.name}</span>
                      <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {/* Subcategories */}
                    {isOpen && (
                      <div className="pl-4 mt-2 space-y-3 border-l-2 border-stone-300">
                        {Object.entries(cat.subcategories).map(([subName, items]) => (
                          <div key={subName}>
                            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{subName}</p>
                            <div className="pl-2 mt-1 space-y-1">
                              {items.map(item => (
                                <button
                                  key={item}
                                  onClick={() => setSelectedItemType(item)}
                                  className={`block text-xs py-0.5 text-left w-full hover:text-amber-800 ${selectedItemType === item ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                                >
                                  • {item}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. ROOM */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">2. ROOM</h3>
            <div className="space-y-1 text-sm">
              <button
                onClick={() => setSelectedRoom('All')}
                className={`block text-left w-full py-1 ${selectedRoom === 'All' ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
              >
                ○ All Rooms
              </button>
              {FILTER_DATA.rooms.map(room => (
                <button
                  key={room}
                  onClick={() => setSelectedRoom(room)}
                  className={`block text-left w-full py-1 ${selectedRoom === room ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {room}
                </button>
              ))}
            </div>
          </div>

          {/* 3. PRICE */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">3. PRICE</h3>
            <div className="space-y-1 text-sm">
              <button
                onClick={() => setSelectedPriceIndex(null)}
                className={`block text-left w-full py-1 ${selectedPriceIndex === null ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
              >
                ○ All Prices
              </button>
              {FILTER_DATA.priceRanges.map((range, idx) => (
                <button
                  key={range.label}
                  onClick={() => setSelectedPriceIndex(idx)}
                  className={`block text-left w-full py-1 ${selectedPriceIndex === idx ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. STYLE */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">4. STYLE</h3>
            <div className="space-y-1 text-sm max-h-40 overflow-y-auto">
              <button
                onClick={() => setSelectedStyle('All')}
                className={`block text-left w-full py-1 ${selectedStyle === 'All' ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
              >
                ○ All Styles
              </button>
              {FILTER_DATA.styles.map(style => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`block text-left w-full py-1 ${selectedStyle === style ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {style}
                </button>
              ))}
            </div>
          </div>

          {/* 5. MATERIAL */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">5. MATERIAL</h3>
            <div className="space-y-1 text-sm max-h-36 overflow-y-auto">
              {FILTER_DATA.materials.map(mat => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`block text-left w-full py-1 ${selectedMaterial === mat ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {mat}
                </button>
              ))}
            </div>
          </div>

          {/* 6. COLOR */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">6. COLOR</h3>
            <div className="flex flex-wrap gap-2">
              {FILTER_DATA.colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  className={`w-6 h-6 rounded-full border border-stone-300 ${selectedColor === color.name ? 'ring-2 ring-amber-800 scale-110' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* 7. SIZE */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">7. SIZE</h3>
            <div className="flex flex-wrap gap-2">
              {FILTER_DATA.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded text-xs ${selectedSize === size ? 'bg-stone-900 text-white' : 'bg-white text-stone-700'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 8. AVAILABILITY */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">8. AVAILABILITY</h3>
            <div className="space-y-1 text-sm">
              {FILTER_DATA.availability.map(status => (
                <button
                  key={status}
                  onClick={() => setSelectedAvailability(status)}
                  className={`block text-left w-full py-1 ${selectedAvailability === status ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {status}
                </button>
              ))}
            </div>
          </div>

          {/* 9. RATING */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">9. RATING</h3>
            <div className="space-y-1 text-sm">
              {FILTER_DATA.ratings.map(stars => (
                <button
                  key={stars}
                  onClick={() => setSelectedRating(stars)}
                  className={`block text-left w-full py-1 ${selectedRating === stars ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ ⭐ {stars}★ & Above
                </button>
              ))}
            </div>
          </div>

          {/* 10. OFFERS */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-stone-800 text-sm mb-3">10. OFFERS</h3>
            <div className="space-y-1 text-sm">
              {FILTER_DATA.offers.map(offer => (
                <button
                  key={offer}
                  onClick={() => setSelectedOffer(offer)}
                  className={`block text-left w-full py-1 ${selectedOffer === offer ? 'text-amber-800 font-bold' : 'text-stone-600'}`}
                >
                  ○ {offer}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- PRODUCT GRID --- */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-stone-50 rounded-2xl border">
              <p className="text-stone-500 font-medium">No products match your selected filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-stone-900 text-white rounded-lg text-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id || idx}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-64 overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      {product.tag && (
                        <span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-center text-xs text-stone-400 uppercase tracking-wider">
                        <span>{product.category}</span>
                        {product.rating && (
                          <span className="text-amber-600 font-semibold">★ {product.rating}</span>
                        )}
                      </div>

                      <h3 className="font-serif font-bold text-stone-800 text-lg group-hover:text-amber-800 transition">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-stone-900">
                      ₹{product.price?.toLocaleString()}
                    </span>
                    <button
                      onClick={() => onAddToCart && onAddToCart(product)}
                      className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg text-xs font-semibold transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}