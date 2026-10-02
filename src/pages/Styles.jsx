import React from 'react';

const ALL_STYLES = [
  { id: 'modern', name: 'Modern', desc: 'Clean lines, sleek surfaces, and crisp geometric shapes with high functionality.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 'minimal', name: 'Minimal', desc: 'Neutral palettes, uncluttered spaces, and essential furniture focusing on simplicity.', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' },
  { id: 'contemporary', name: 'Contemporary', desc: 'Fluid, current design trends blending soft curves with sophisticated textures.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 'luxury', name: 'Luxury', desc: 'Opulent materials like marble, brass, velvet, and bespoke craftsmanship.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800' },
  { id: 'scandinavian', name: 'Scandinavian', desc: 'Light wooden tones, cozy hygge vibes, functional forms, and airy aesthetics.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800' },
  { id: 'japandi', name: 'Japandi', desc: 'A serene fusion of Japanese wabi-sabi minimalism and Scandinavian warmth.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' },
  { id: 'boho', name: 'Boho', desc: 'Eclectic textures, woven rattan, lush indoor plants, and relaxed artistic layers.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { id: 'industrial', name: 'Industrial', desc: 'Exposed brickwork, raw metal accents, distressed wood, and warehouse aesthetics.', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800' },
  { id: 'rustic', name: 'Rustic', desc: 'Earthy textures, reclaimed wood, raw stone, and rugged natural warmth.', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&q=80&w=800' },
  { id: 'traditional', name: 'Traditional', desc: 'Classic woodwork, ornate moldings, rich color tones, and timeless symmetry.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800' },
  { id: 'classic', name: 'Classic', desc: 'Refined elegance, balanced proportions, luxurious fabrics, and heritage charm.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 'vintage', name: 'Vintage', desc: 'Nostalgic antique pieces, distressed finishes, and storytelling decor from past eras.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
  { id: 'retro', name: 'Retro', desc: 'Bold geometric patterns, pop colors, and playful mid-20th-century silhouettes.', image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&q=80&w=800' },
  { id: 'mid-century-modern', name: 'Mid-Century Modern', desc: 'Organic curves, tapered legs, teak wood, and iconic 1950s architectural appeal.', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800' },
  { id: 'farmhouse', name: 'Farmhouse', desc: 'Cozy country vibes, apron sinks, sliding barn doors, and warm slipcovered seating.', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800' },
  { id: 'coastal', name: 'Coastal', desc: 'Breezy white linens, soft ocean blues, sea-grass rugs, and sun-drenched lighting.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 'mediterranean', name: 'Mediterranean', desc: 'Arched doorways, terracotta tiles, wrought iron details, and warm sunny hues.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 'french-country', name: 'French Country', desc: 'Soft muted tones, distressed whitewashed wood, floral linens, and graceful furniture.', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800' },
  { id: 'art-deco', name: 'Art Deco', desc: 'Glamorous motifs, bold metallics, rich velvet upholstery, and high-contrast luxury.', image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800' },
  { id: 'indian-contemporary', name: 'Indian Contemporary', desc: 'Modern layouts seamlessly integrated with traditional Indian craft and brass accents.', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800' },
  { id: 'modern-indian', name: 'Modern Indian', desc: 'Ethnic block prints, solid Sheesham wood, cane weaves, and vibrant cultural palettes.', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 'transitional', name: 'Transitional', desc: 'A harmonized bridge between traditional warmth and modern clean-lined minimalism.', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800' },
  { id: 'eclectic', name: 'Eclectic', desc: 'A curated mix of contrasting time periods, textures, colors, and artful curation.', image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=800' },
  { id: 'urban', name: 'Urban', desc: 'Loft-style modern design featuring architectural elements and cosmopolitan finishes.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'cottage', name: 'Cottage', desc: 'Charming beadboard walls, cozy nooks, pastel colors, and vintage comfort.', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800' },
  { id: 'tropical', name: 'Tropical', desc: 'Lush botanicals, rattan materials, teak finishes, and breezy resort-like relaxation.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800' }
];

export default function Styles({ setActiveTab, setSelectedStyle }) {
  const handleStyleClick = (styleName) => {
    if (setSelectedStyle) {
      setSelectedStyle(styleName);
    }
    if (setActiveTab) {
      setActiveTab('shop');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Shop By Style</h1>
        <p className="text-xs text-[#8c7a6b]">Filter curated interior concepts and furniture by your favorite design aesthetic.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_STYLES.map((style) => (
          <div 
            key={style.id}
            onClick={() => handleStyleClick(style.name)}
            className="group bg-white rounded-xl overflow-hidden border border-[#e5ded4] cursor-pointer shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-serif font-bold text-[#2d241e]">{style.name}</h2>
                <p className="text-xs text-[#8c7a6b]">{style.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button className="text-xs font-bold text-[#c89d7c] group-hover:underline inline-flex items-center gap-1">
                Explore {style.name} Collection →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}