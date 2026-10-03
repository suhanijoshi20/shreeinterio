import React from 'react';

// 1. Cart Drawer
export function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity }) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="bg-[#fbf9f5] w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#e5ded4]">
            <h2 className="font-serif font-bold text-lg text-[#2d241e]">Your Shopping Cart ({cartItems.length})</h2>
            <button onClick={onClose} className="text-xl font-bold">✕</button>
          </div>

          <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-xs text-[#8c7a6b] text-center py-8">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-[#e5ded4]">
                  <img src={item.image || item.img || item.photo} alt={item.name || item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 text-xs">
                    <h3 className="font-bold text-[#2d241e]">{item.name || item.title}</h3>
                    <p className="text-[#8c7a6b]">₹{item.price}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemoveFromCart(item.id)} className="text-xs text-red-500 font-bold">✕</button>
                </div>
              ))
            )}
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#e5ded4] space-y-3">
            <div className="flex justify-between font-serif font-bold text-base text-[#2d241e]">
              <span>Total Amount:</span>
              <span>₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={() => alert('Proceeding to Checkout!')} className="w-full bg-[#2d241e] text-white py-3 rounded text-xs font-bold uppercase tracking-wider">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 2. Wishlist Drawer (YE MISSING THA)
export function WishlistModal({ isOpen, onClose, wishlistItems = [], onToggleWishlist, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="bg-[#fbf9f5] w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#e5ded4]">
            <h2 className="font-serif font-bold text-lg text-[#2d241e]">Your Wishlist ({wishlistItems.length})</h2>
            <button onClick={onClose} className="text-xl font-bold">✕</button>
          </div>

          <div className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-12 text-[#8c7a6b]">
                <p className="text-3xl mb-2">♡</p>
                <p className="text-xs">Your wishlist is currently empty.</p>
              </div>
            ) : (
              wishlistItems.map((item) => {
                const img = item.image || item.img || item.photo || item.src;
                const title = item.title || item.name || 'Saved Item';

                return (
                  <div key={item.id} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-[#e5ded4]">
                    <img src={img} alt={title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 text-xs">
                      <h3 className="font-bold text-[#2d241e] line-clamp-1">{title}</h3>
                      {item.price && <p className="text-[#8c7a6b]">₹{item.price}</p>}
                      <button 
                        onClick={() => onAddToCart(item)}
                        className="mt-1.5 px-2 py-1 bg-[#c89d7c] text-white rounded text-[10px] font-bold"
                      >
                        Move to Cart
                      </button>
                    </div>
                    <button onClick={() => onToggleWishlist(item)} className="text-xs text-red-500 font-bold">
                      ✕
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Book Consultation Modal
export function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-[#e5ded4] space-y-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">✕</button>
        <div className="text-center space-y-1">
          <h2 className="text-xl font-serif font-bold text-[#2d241e]">Book Free Consultation</h2>
          <p className="text-xs text-[#8c7a6b]">Discuss your layout & design requirements with our experts.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Consultation booked successfully! We will call you soon.'); onClose(); }} className="space-y-3 pt-2">
          <input type="text" placeholder="Full Name" required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5]" />
          <input type="tel" placeholder="Mobile Number" required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5]" />
          <select required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5] text-[#2d241e]">
            <option value="">Select Service Needed</option>
            <option value="Free Consultancy">Free Consultancy</option>
            <option value="Budget Designing">Budget Designing</option>
            <option value="Turn-key Project Execution">Turn-key Project Execution</option>
            <option value="Full Interior Designing">Full Interior Designing</option>
          </select>
          <button type="submit" className="w-full bg-[#c89d7c] text-white py-3 rounded text-xs font-bold uppercase tracking-wider">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}