import React from 'react';
import { motion } from 'framer-motion';

// 1. Page Load & Section Scroll Reveal (Section & Pages)
export const FadeReveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 2. Navbar Slide/Fade
export const NavbarAnimation = ({ children, className = '' }) => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.nav>
);

// 3. Hero Text Reveal & Image Zoom
export const HeroImageZoom = ({ children, className = '' }) => (
  <motion.div
    initial={{ scale: 1.1, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 4. Hover Zoom Container (Shop by Room, Products, Styles)
export const HoverZoomCard = ({ children, className = '' }) => (
  <motion.div
    whileHover="hover"
    initial="initial"
    className={`overflow-hidden cursor-pointer relative group ${className}`}
  >
    {children}
  </motion.div>
);

export const HoverZoomImage = ({ src, alt, className = '' }) => (
  <motion.img
    src={src}
    alt={alt}
    variants={{
      initial: { scale: 1 },
      hover: { scale: 1.08 }
    }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={`w-full h-full object-cover ${className}`}
  />
);

// 5. Product Add-to-Cart Slide Reveal
export const AddToCartReveal = ({ children, className = '' }) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: 15 },
      hover: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

// 6. Scale Hover (Categories)
export const ScaleHoverCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

// 7. Projects Image Overlay Reveal
export const ProjectOverlay = ({ children, className = '' }) => (
  <motion.div
    variants={{
      initial: { opacity: 0 },
      hover: { opacity: 1 }
    }}
    transition={{ duration: 0.3 }}
    className={`absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white ${className}`}
  >
    {children}
  </motion.div>
);

// 8. Page Transition Wrapper (Page Change)
export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// 9. Add To Cart Button Micro-Animation
export const CartButtonAnimation = ({ children, onClick, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.92 }}
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);

// --- Missing Components for Services.jsx & Other Pages ---

// 1. Background Glow Effect
export const BackgroundGlow = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#c89d7c]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
);

// 2. Infinite Ticker Ticker / Marquee
export const InfiniteTicker = ({ items = [] }) => (
  <div className="overflow-hidden whitespace-nowrap py-3 bg-[#fbf9f5] border-y border-stone-200">
    <div className="inline-block animate-marquee">
      {items.concat(items).map((item, idx) => (
        <span key={idx} className="mx-6 text-xs font-bold text-[#2d241e] tracking-wider uppercase">
          ✦ {item}
        </span>
      ))}
    </div>
  </div>
);

// 3. FadeUp Helper
export const FadeUp = ({ children, delay = 0, className = '' }) => (
  <FadeReveal delay={delay} className={className}>
    {children}
  </FadeReveal>
);

// 4. Animated Grid Helpers
export const AnimatedGrid = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

export const AnimatedItem = ({ children, className = '' }) => (
  <FadeReveal className={className}>{children}</FadeReveal>
);

export const AnimatedCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={className}
  >
    {children}
  </motion.div>
);