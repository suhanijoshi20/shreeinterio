import React from 'react';

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted, onSelectProduct }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-[#e5ded4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-[#f5f1eb] cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm text-sm transition-colors"
        >
          {isWishlisted ? '❤️' : '♡'}
        </button>

        {/* Tags */}
        {product.isTrending && (
          <span className="absolute top-3 left-3 bg-[#2d241e] text-white text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
            Trending
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#c89d7c] text-white text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <div className="text-[11px] text-[#8c7a6b] uppercase tracking-wider">{product.category} • {product.style}</div>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif font-semibold text-sm text-[#2d241e] hover:text-[#c89d7c] cursor-pointer line-clamp-1 transition-colors"
          >
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 text-xs text-amber-500">
          <span>★</span>
          <span className="font-semibold text-[#2d241e]">{product.rating}</span>
          <span className="text-[#a39487] text-[10px]">({product.reviewsCount})</span>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-[#f0e8de] flex items-center justify-between">
          <div>
            <span className="font-bold text-sm text-[#2d241e]">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-xs text-[#a39487] line-through ml-1.5">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#f0e8de] hover:bg-[#2d241e] text-[#2d241e] hover:text-white text-xs font-medium px-3 py-1.5 rounded transition-all"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}