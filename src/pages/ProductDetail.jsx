import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';

export default function ProductDetail({ product, onClose, onAddToCart, onToggleWishlist, isWishlisted, onSelectProduct }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.room === product.room)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-4">
      <div className="bg-[#fbf9f5] rounded-2xl max-w-4xl w-full p-6 md:p-8 relative shadow-2xl border border-[#e5ded4] my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2d241e] hover:text-[#c89d7c] text-xl font-bold bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Large Image */}
          <div className="aspect-square rounded-xl overflow-hidden bg-white border border-[#e5ded4]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Right: Info */}
          <div className="space-y-4">
            <div>
              <span className="text-xs text-[#8c7a6b] uppercase tracking-wider">{product.category} • {product.room}</span>
              <h1 className="text-2xl font-serif font-bold text-[#2d241e] mt-1">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-amber-500 text-sm">★ {product.rating}</span>
                <span className="text-xs text-[#8c7a6b]">({product.reviewsCount} customer reviews)</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-[#2d241e]">
              ₹{product.price.toLocaleString('en-IN')}
              {product.originalPrice && (
                <span className="text-sm text-[#8c7a6b] line-through ml-2 font-normal">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-xs text-[#6b5b4e] leading-relaxed">{product.description}</p>

            {/* Colors */}
            {product.colors && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#2d241e]">Color Option:</span>
                <div className="flex space-x-2">
                  {product.colors.map((c, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedColor(c)}
                      className={`w-6 h-6 rounded-full border-2 ${selectedColor === c ? 'ring-2 ring-[#c89d7c]' : 'border-gray-300'}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#2d241e]">Size:</span>
                <div className="flex space-x-2">
                  {product.sizes.map((s, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedSize(s)}
                      className={`text-xs px-3 py-1 rounded border ${selectedSize === s ? 'bg-[#2d241e] text-white' : 'bg-white text-[#2d241e]'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center border border-[#e5ded4] rounded bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#2d241e]"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#2d241e]"
                >
                  +
                </button>
              </div>

              <button 
                onClick={() => onToggleWishlist(product)}
                className="p-2 border border-[#e5ded4] rounded bg-white hover:text-red-500 text-sm"
              >
                {isWishlisted ? '❤️ Saved' : '♡ Wishlist'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => {
                  onAddToCart({ ...product, quantity });
                  onClose();
                }}
                className="flex-1 bg-[#2d241e] hover:bg-[#42352b] text-white py-3 rounded text-xs uppercase font-bold tracking-wider"
              >
                Add to Cart
              </button>
            </div>

            <div className="text-[11px] text-[#8c7a6b] space-y-1 pt-4 border-t border-[#e5ded4]">
              <p>🚚 Fast Delivery across Indore & MP</p>
              <p>🛡️ 1 Year Warranty on Solid Wood Frame</p>
              <p>🔄 7 Days Easy Replacement Policy</p>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#e5ded4]">
            <h3 className="font-serif font-bold text-lg text-[#2d241e] mb-4">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={false}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}