import React from 'react';
import ShopSection from '../components/ShopSection';

export default function Shop({ onAddToCart, onToggleWishlist, wishlist, onSelectProduct }) {
  return (
    <div className="w-full">
      <ShopSection 
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
}