import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About({ onExploreClick, onConsultationClick }) {
  const stats = [
    { label: 'Completed Projects', value: '1,200+' },
    { label: 'Happy Families', value: '98%' },
    { label: 'Years of Excellence', value: '12+' },
    { label: 'Design Awards', value: '15+' }
  ];

  const values = [
    {
      icon: '✨',
      title: 'Timeless Elegance',
      description: 'We craft interiors that blend contemporary aesthetics with classic comfort, ensuring your home never goes out of style.'
    },
    {
      icon: '🌿',
      title: 'Sustainable Craftsmanship',
      description: 'From eco-friendly woods to non-toxic finishes, we prioritize sustainable materials sourced responsibly.'
    },
    {
      icon: '📐',
      title: 'Precision & Perfection',
      description: 'Every millimeter counts. Our master artisans and designers execute every project with architectural precision.'
    },
    {
      icon: '🤝',
      title: 'Transparent Collaboration',
      description: 'No hidden costs, no unexpected delays. We keep you updated at every milestone with 3D renders and clear timelines.'
    }
  ];

  return (
    <div className="bg-[#fbf9f5] text-[#2d241e] min-h-screen overflow-hidden">
      
      {/* Hero Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative py-20 px-4 text-center bg-[#f4eee6] border-b border-[#e5ded4]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#c89d7c] mb-3 block"
          >
            About ShreeInterio
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2d241e] leading-tight mb-6">
            Crafting Spaces That Tell Your Story
          </h1>
          <p className="text-base md:text-lg text-[#5c4d41] font-light leading-relaxed max-w-2xl mx-auto">
            At <strong className="font-semibold text-[#2d241e]">ShreeInterio</strong>, we believe every home is a canvas of your memories, lifestyle, and aspirations. We transform ordinary rooms into extraordinary living experiences.
          </p>
        </div>
      </motion.section>

      {/* Brand Story & Image Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89d7c]">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2d241e]">
              From Vision to Luxury Living Spaces
            </h2>
            <p className="text-[#5c4d41] text-sm md:text-base leading-relaxed">
              Founded over a decade ago, ShreeInterio started with a simple vision: to make world-class bespoke interior design and handcrafted furniture accessible without compromising on quality or aesthetics.
            </p>
            <p className="text-[#5c4d41] text-sm md:text-base leading-relaxed">
              Whether it’s a serene minimalist apartment, a sprawling luxury villa, or a high-end modular kitchen, our team of architects, interior stylists, and master carpenters work together to turn your vision into reality.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <button 
                onClick={onConsultationClick}
                className="bg-[#c89d7c] hover:bg-[#b08260] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                alt="ShreeInterio Luxury Living Room" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#2d241e] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
              <p className="font-serif text-2xl font-bold text-[#c89d7c]">100% Custom</p>
              <p className="text-xs text-stone-300 mt-1">Tailored specifically to your space, style, and budget requirements.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#2d241e] text-[#d9cdbf] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-2">
                <div className="text-3xl md:text-5xl font-serif font-bold text-[#c89d7c]">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-stone-300 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c89d7c] mb-2 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2d241e]">Why Choose ShreeInterio?</h2>
          <p className="text-xs md:text-sm text-[#5c4d41] mt-2">The pillars that define our commitment to your dream home.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl border border-[#e5ded4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 bg-[#fbf9f5] w-12 h-12 rounded-xl flex items-center justify-center border border-[#e5ded4]">
                  {val.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2d241e] mb-2">{val.title}</h3>
                <p className="text-xs text-[#5c4d41] leading-relaxed">{val.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#f4eee6] border-t border-[#e5ded4] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#2d241e]">Ready to Redefine Your Home?</h2>
          <p className="text-sm text-[#5c4d41]">
            Schedule a 1-on-1 consultation with our senior designers or explore our exclusive furniture collections.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button 
              onClick={onConsultationClick}
              className="bg-[#2d241e] hover:bg-[#c89d7c] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Get Free Design Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}