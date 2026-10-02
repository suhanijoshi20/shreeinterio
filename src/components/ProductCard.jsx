// import React from 'react';

// export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted, onSelectProduct }) {
//   return (
//     <div className="group bg-white rounded-lg overflow-hidden border border-[#e5ded4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
//       {/* Image container */}
//       <div className="relative aspect-square overflow-hidden bg-[#f5f1eb] cursor-pointer" onClick={() => onSelectProduct(product)}>
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//         {/* Wishlist Button */}
//         <button 
//           onClick={(e) => {
//             e.stopPropagation();
//             onToggleWishlist(product);
//           }}
//           className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm text-sm transition-colors"
//         >
//           {isWishlisted ? '❤️' : '♡'}
//         </button>

//         {/* Tags */}
//         {product.isTrending && (
//           <span className="absolute top-3 left-3 bg-[#2d241e] text-white text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
//             Trending
//           </span>
//         )}
//         {product.isNew && (
//           <span className="absolute top-3 left-3 bg-[#c89d7c] text-white text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider">
//             New
//           </span>
//         )}
//       </div>

//       {/* Info */}
//       <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
//         <div>
//           <div className="text-[11px] text-[#8c7a6b] uppercase tracking-wider">{product.category} • {product.style}</div>
//           <h3 
//             onClick={() => onSelectProduct(product)}
//             className="font-serif font-semibold text-sm text-[#2d241e] hover:text-[#c89d7c] cursor-pointer line-clamp-1 transition-colors"
//           >
//             {product.name}
//           </h3>
//         </div>

//         {/* Rating */}
//         <div className="flex items-center space-x-1 text-xs text-amber-500">
//           <span>★</span>
//           <span className="font-semibold text-[#2d241e]">{product.rating}</span>
//           <span className="text-[#a39487] text-[10px]">({product.reviewsCount})</span>
//         </div>

//         {/* Price & Action */}
//         <div className="pt-2 border-t border-[#f0e8de] flex items-center justify-between">
//           <div>
//             <span className="font-bold text-sm text-[#2d241e]">₹{product.price.toLocaleString('en-IN')}</span>
//             {product.originalPrice && (
//               <span className="text-xs text-[#a39487] line-through ml-1.5">
//                 ₹{product.originalPrice.toLocaleString('en-IN')}
//               </span>
//             )}
//           </div>
//           <button
//             onClick={() => onAddToCart(product)}
//             className="bg-[#f0e8de] hover:bg-[#2d241e] text-[#2d241e] hover:text-white text-xs font-medium px-3 py-1.5 rounded transition-all"
//           >
//             + Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct
}) {
  const [added, setAdded] = useState(false);

  const add = (e) => {
    e?.stopPropagation();

    onAddToCart(product);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <motion.article
      layout
      whileHover={{ y: -7 }}
      transition={{
        duration: 0.28,
        ease: 'easeOut'
      }}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border border-[#e5ded4]
        shadow-[0_6px_24px_rgba(45,36,30,0.05)]
        hover:shadow-[0_20px_50px_rgba(45,36,30,0.14)]
        flex flex-col
        transition-shadow duration-300
      "
    >
      {/* PRODUCT IMAGE */}
      <div
        className="
          relative
          aspect-square
          overflow-hidden
          bg-[#f5f1eb]
          cursor-pointer
        "
        onClick={() => onSelectProduct(product)}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          whileHover={{
            scale: 1.08
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* IMAGE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            pointer-events-none
          "
        />

        {/* WISHLIST */}
        <motion.button
          whileHover={{
            scale: 1.08
          }}
          whileTap={{
            scale: 0.82
          }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={
            isWishlisted
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
          className={`
            absolute
            top-3
            right-3
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            shadow-md
            backdrop-blur-sm
            transition-all
            duration-300
            z-10

            ${
              isWishlisted
                ? 'bg-[#2d241e] text-white'
                : 'bg-white/90 text-[#2d241e] hover:bg-white'
            }
          `}
        >
          <motion.span
            key={isWishlisted ? 'filled' : 'empty'}
            initial={{
              scale: 0.4,
              rotate: -15
            }}
            animate={{
              scale: 1,
              rotate: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 15
            }}
            className="
              text-xl
              leading-none
            "
          >
            {isWishlisted ? '♥' : '♡'}
          </motion.span>
        </motion.button>

        {/* PRODUCT BADGES */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {product.isTrending && (
            <span
              className="
                bg-[#2d241e]
                text-white
                text-[10px]
                font-semibold
                px-2.5
                py-1
                rounded-full
                uppercase
                tracking-wider
                shadow-sm
              "
            >
              Trending
            </span>
          )}

          {!product.isTrending && product.isNew && (
            <span
              className="
                bg-[#c89d7c]
                text-white
                text-[10px]
                font-semibold
                px-2.5
                py-1
                rounded-full
                uppercase
                tracking-wider
                shadow-sm
              "
            >
              New
            </span>
          )}
        </div>

        {/* QUICK VIEW */}
        <motion.button
          initial={{
            opacity: 0,
            y: 12
          }}
          whileHover={{
            backgroundColor: '#2d241e',
            color: '#ffffff'
          }}
          className="
            absolute
            bottom-3
            left-3
            right-3
            bg-white/95
            backdrop-blur-sm
            text-[#2d241e]
            text-[11px]
            font-semibold
            uppercase
            tracking-wider
            py-2.5
            rounded-xl
            shadow-lg
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
            z-10
          "
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
        >
          Quick View
        </motion.button>
      </div>

      {/* PRODUCT DETAILS */}
      <div
        className="
          p-4
          sm:p-5
          flex-1
          flex
          flex-col
          justify-between
          gap-3
        "
      >
        {/* NAME */}
        <div>
          <div
            className="
              text-[10px]
              text-[#8c7a6b]
              uppercase
              tracking-[0.14em]
              mb-1.5
            "
          >
            {product.category} • {product.style}
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="
              font-serif
              font-semibold
              text-[15px]
              text-[#2d241e]
              hover:text-[#c89d7c]
              cursor-pointer
              line-clamp-2
              leading-snug
              transition-colors
              duration-200
            "
          >
            {product.name}
          </h3>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-[#c89d7c]">
            ★
          </span>

          <span className="font-semibold text-[#2d241e]">
            {product.rating}
          </span>

          <span className="text-[#a39487]">
            ({product.reviewsCount})
          </span>
        </div>

        {/* PRICE + CART */}
        <div
          className="
            pt-3
            border-t
            border-[#f0e8de]
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <div className="min-w-0">
            <span
              className="
                font-bold
                text-sm
                text-[#2d241e]
              "
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>

            {product.originalPrice && (
              <span
                className="
                  text-xs
                  text-[#a39487]
                  line-through
                  ml-1.5
                "
              >
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* ADD TO CART */}
          <motion.button
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              scale: 0.93
            }}
            onClick={add}
            className={`
              shrink-0
              text-xs
              font-semibold
              px-3.5
              py-2
              rounded-xl
              transition-all
              duration-300

              ${
                added
                  ? 'bg-[#2d241e] text-white'
                  : 'bg-[#f0e8de] hover:bg-[#c89d7c] hover:text-white text-[#2d241e]'
              }
            `}
          >
            {added ? '✓ Added' : '+ Add'}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}