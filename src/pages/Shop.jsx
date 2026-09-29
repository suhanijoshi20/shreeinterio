import React, { useState } from 'react';
import { SHOP_FILTERS } from '../data/mockData';

export default function Shop() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (catId) => {
    setOpenCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const handleFilterChange = (filterKey, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  // Safe checks to avoid undefined map errors
  const categories = SHOP_FILTERS?.categories || [];
  const rooms = SHOP_FILTERS?.rooms || [];
  const priceRanges = SHOP_FILTERS?.priceRanges || [];
  const styles = SHOP_FILTERS?.styles || [];
  const materials = SHOP_FILTERS?.materials || [];
  const colors = SHOP_FILTERS?.colors || [];
  const sizes = SHOP_FILTERS?.sizes || [];
  const availability = SHOP_FILTERS?.availability || [];
  const ratings = SHOP_FILTERS?.ratings || [];
  const offers = SHOP_FILTERS?.offers || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-serif font-bold text-gray-800 mb-6">Shop Collections</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SIDEBAR FILTERS */}
        <aside className="w-full md:w-72 bg-white p-4 border border-gray-200 rounded-lg text-sm space-y-6 shrink-0 h-fit">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-base text-gray-800 tracking-wide uppercase">Filters</h2>
            <button 
              onClick={() => setSelectedFilters({})}
              className="text-xs text-amber-700 hover:underline font-medium"
            >
              Reset All
            </button>
          </div>

          {/* 1. CATEGORY */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">CATEGORY</h3>
            <div className="space-y-2 pl-1">
              {categories.map((cat) => (
                <div key={cat.id} className="border-b border-gray-100 pb-1">
                  <button 
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex justify-between items-center py-1 font-medium text-gray-700 hover:text-amber-800 text-left"
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs text-gray-400">{openCategories[cat.id] ? '−' : '+'}</span>
                  </button>

                  {openCategories[cat.id] && (
                    <div className="pl-3 py-1 space-y-2 text-xs text-gray-600 bg-gray-50 rounded mt-1">
                      {cat.subcategories?.map((sub, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="font-semibold text-gray-800 pt-1">{sub.name}</p>
                          <ul className="pl-2 space-y-1 border-l border-gray-200">
                            {sub.items?.map((item) => (
                              <li key={item}>
                                <button
                                  onClick={() => handleFilterChange('itemType', item)}
                                  className={`hover:text-amber-700 text-left w-full ${
                                    selectedFilters.itemType === item ? 'font-bold text-amber-800' : ''
                                  }`}
                                >
                                  • {item}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. ROOM */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">ROOM</h3>
            <div className="space-y-1 max-h-40 overflow-y-auto pl-1 pr-1">
              {rooms.map((room) => (
                <label key={room} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="roomFilter"
                    checked={selectedFilters.room === room}
                    onChange={() => handleFilterChange('room', room)}
                    className="accent-amber-800"
                  />
                  <span>{room}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 3. PRICE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">PRICE</h3>
            <div className="space-y-1 pl-1">
              {priceRanges.map((price) => (
                <label key={price} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="priceFilter"
                    checked={selectedFilters.price === price}
                    onChange={() => handleFilterChange('price', price)}
                    className="accent-amber-800"
                  />
                  <span>{price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. STYLE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">STYLE</h3>
            <div className="space-y-1 max-h-36 overflow-y-auto pl-1 pr-1">
              {styles.map((style) => (
                <label key={style} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="styleFilter"
                    checked={selectedFilters.style === style}
                    onChange={() => handleFilterChange('style', style)}
                    className="accent-amber-800"
                  />
                  <span>{style}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. MATERIAL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">MATERIAL</h3>
            <div className="space-y-1 max-h-36 overflow-y-auto pl-1 pr-1">
              {materials.map((mat) => (
                <label key={mat} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="materialFilter"
                    checked={selectedFilters.material === mat}
                    onChange={() => handleFilterChange('material', mat)}
                    className="accent-amber-800"
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. COLOR */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">COLOR</h3>
            <div className="space-y-1 max-h-36 overflow-y-auto pl-1 pr-1">
              {colors.map((color) => (
                <label key={color} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="colorFilter"
                    checked={selectedFilters.color === color}
                    onChange={() => handleFilterChange('color', color)}
                    className="accent-amber-800"
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 7. SIZE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">SIZE</h3>
            <div className="space-y-1 max-h-36 overflow-y-auto pl-1 pr-1">
              {sizes.map((sz) => (
                <label key={sz} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="sizeFilter"
                    checked={selectedFilters.size === sz}
                    onChange={() => handleFilterChange('size', sz)}
                    className="accent-amber-800"
                  />
                  <span>{sz}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 8. AVAILABILITY */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">AVAILABILITY</h3>
            <div className="space-y-1 pl-1">
              {availability.map((avail) => (
                <label key={avail} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="availFilter"
                    checked={selectedFilters.availability === avail}
                    onChange={() => handleFilterChange('availability', avail)}
                    className="accent-amber-800"
                  />
                  <span>{avail}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 9. RATING */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">RATING</h3>
            <div className="space-y-1 pl-1">
              {ratings.map((rate) => (
                <label key={rate} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="ratingFilter"
                    checked={selectedFilters.rating === rate}
                    onChange={() => handleFilterChange('rating', rate)}
                    className="accent-amber-800"
                  />
                  <span>{rate}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 10. OFFERS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">OFFERS</h3>
            <div className="space-y-1 pl-1">
              {offers.map((offer) => (
                <label key={offer} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="offerFilter"
                    checked={selectedFilters.offer === offer}
                    onChange={() => handleFilterChange('offer', offer)}
                    className="accent-amber-800"
                  />
                  <span>{offer}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID AREA */}
        <main className="flex-1">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center text-gray-500">
            <p className="font-medium text-lg">Products will be filtered here.</p>
            <p className="text-xs text-gray-400 mt-1">
              Selected Filters: {JSON.stringify(selectedFilters)}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}