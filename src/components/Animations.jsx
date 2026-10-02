import React from 'react';
import { motion } from 'framer-motion';

// 1. GrowthKarts-style Infinite Marquee Ticker
export const InfiniteTicker = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative py-4 bg-[#fbf9f5] border-y border-stone-200">
      <motion.div
        className="inline-flex gap-12 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="text-xs font-bold text-stone-600 uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#c89d7c]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// 2. 3D Tilt Hover Effect for Cards
export const AnimatedCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        rotateX: -2, 
        rotateY: 2,
        boxShadow: "0px 20px 35px rgba(45, 36, 30, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`transition-all duration-300 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

// 3. Scroll Reveal Stagger Wrappers
export const AnimatedGrid = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 4. Smooth Fade-Up Text/Section Wrapper
export const FadeUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 5. GrowthKarts Ambient Floating Glowing Light (Background)
export const BackgroundGlow = () => {
  return (
    <motion.div 
      animate={{ 
        scale: [1, 1.25, 1],
        x: [0, 40, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-32 -left-32 w-96 h-96 bg-[#c89d7c]/20 rounded-full blur-3xl pointer-events-none"
    />
  );
};