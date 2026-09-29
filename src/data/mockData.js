export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Modern Velvet Lounge Chair',
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    reviewsCount: 126,
    category: 'Furniture',
    room: 'Living',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    description: 'Ergonomically designed luxury lounge chair crafted with premium velvet and solid teak legs.',
    isTrending: true,
    isNew: false,
    colors: ['#2b3a29', '#2d241e', '#c89d7c'],
    sizes: ['Standard']
  },
  {
    id: 'p2',
    name: 'Minimalist Walnut Coffee Table',
    price: 8499,
    originalPrice: 9999,
    rating: 4.9,
    reviewsCount: 94,
    category: 'Furniture',
    room: 'Living',
    style: 'Minimal',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Sleek solid walnut wood coffee table with matte black metal frame.',
    isTrending: true,
    isNew: true,
    colors: ['#3e2723'],
    sizes: ['Medium', 'Large']
  },
  {
    id: 'p3',
    name: 'Brass Finish Pendant Light',
    price: 5999,
    originalPrice: 7499,
    rating: 4.7,
    reviewsCount: 58,
    category: 'Lighting',
    room: 'Dining',
    style: 'Luxury',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'Handcrafted warm brass pendant lighting fixture for dining and kitchen islands.',
    isTrending: true,
    isNew: false,
    colors: ['#d4af37'],
    sizes: ['Single', 'Trio']
  },
  {
    id: 'p4',
    name: 'Arc Full-Length Luxury Mirror',
    price: 7499,
    originalPrice: 8999,
    rating: 4.9,
    reviewsCount: 210,
    category: 'Mirrors',
    room: 'Bedroom',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Arch-shaped floor standing mirror with brushed gold aluminum frame.',
    isTrending: true,
    isNew: true,
    colors: ['#d4af37', '#000000'],
    sizes: ['60x24 in']
  },
  {
    id: 'p5',
    name: 'Scandinavian King Size Bed',
    price: 34999,
    originalPrice: 42000,
    rating: 4.8,
    reviewsCount: 45,
    category: 'Furniture',
    room: 'Bedroom',
    style: 'Scandinavian',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    description: 'Clean oak wood finish king bed with cushioned linen headboard.',
    isTrending: false,
    isNew: true,
    colors: ['#d7ccc8', '#a1887f'],
    sizes: ['King', 'Queen']
  },
  {
    id: 'p6',
    name: 'Boho Handwoven Jute Rug',
    price: 4299,
    originalPrice: 5500,
    rating: 4.6,
    reviewsCount: 88,
    category: 'Rugs & Carpets',
    room: 'Living',
    style: 'Boho',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800',
    description: '100% eco-friendly natural jute woven area carpet with soft fringe accents.',
    isTrending: false,
    isNew: true,
    colors: ['#d7a15c'],
    sizes: ['5x7 ft', '6x9 ft']
  },
  {
    id: 'p7',
    name: 'Abstract Textured Canvas Art',
    price: 3800,
    originalPrice: 4800,
    rating: 4.7,
    reviewsCount: 39,
    category: 'Wall Décor',
    room: 'Living',
    style: 'Minimal',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-painted neutral minimalist 3D textured wall artwork in floating frame.',
    isTrending: false,
    isNew: true,
    colors: ['#f5f5f0'],
    sizes: ['24x36 in']
  },
  {
    id: 'p8',
    name: 'Ergonomic Executive Office Chair',
    price: 11499,
    originalPrice: 14999,
    rating: 4.9,
    reviewsCount: 77,
    category: 'Furniture',
    room: 'Home Office',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&q=80&w=800',
    description: 'Breathable mesh back executive desk chair with lumbar support and chrome base.',
    isTrending: true,
    isNew: false,
    colors: ['#111111', '#455a64'],
    sizes: ['Standard']
  }
];

export const ROOMS = [
  { id: 'living', name: 'Living Room', desc: 'Sofa, tables, TV units, décor', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
  { id: 'bedroom', name: 'Bedroom', desc: 'Beds, wardrobes, side tables', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800' },
  { id: 'dining', name: 'Dining Room', desc: 'Dining tables, chairs, lighting', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800' },
  { id: 'kitchen', name: 'Modular Kitchen', desc: 'Storage, accessories, décor', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
  { id: 'office', name: 'Home Office', desc: 'Desk, chair, shelves', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'outdoor', name: 'Outdoor', desc: 'Outdoor furniture & décor', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' }
];

export const CATEGORIES = [
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
  { name: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400' },
  { name: 'Wall Décor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400' },
  { name: 'Rugs & Carpets', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mirrors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400' },
  { name: 'Home Accessories', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' }
];

export const STYLES = [
  { name: 'Modern', desc: 'Clean lines & contemporary vibe', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { name: 'Minimal', desc: 'Uncluttered space & warm neutrals', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Luxury', desc: 'Opulent gold accents & rich velvets', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Scandinavian', desc: 'Light woods & functional cozy design', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800' },
  { name: 'Boho', desc: 'Earthy textures, woven rattan & plants', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800' },
  { name: 'Traditional', desc: 'Classic Indian woodwork & rich brass', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800' }
];

export const SERVICES = [
  { id: '01', title: 'Free Consultancy', desc: 'Discuss your space, requirements, and budget with our expert interior designers free of charge.' },
  { id: '02', title: 'Budget Designing', desc: 'Get stylish and functional interior solutions tailored to your specific budget limit.' },
  { id: '03', title: 'Project Execution', desc: 'From 3D plans to turn-key completion, we manage site work with strict quality checks.' },
  { id: '04', title: 'Interior Designing', desc: 'Custom 3D layout, material selection, customized furniture manufacturing & styling.' }
];

export const PROJECTS = [
  { id: 'proj1', title: 'The Royal Greens Villa', location: 'Vijay Nagar, Indore', category: 'Residential', style: 'Modern Luxury', area: '3,200 sq ft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', concept: 'Warm earthy luxury with Italian marble finishes.' },
  { id: 'proj2', title: 'Minimalist Penthouse', location: 'Super Corridor, Indore', category: 'Residential', style: 'Minimalist', area: '2,400 sq ft', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800', concept: 'Monochromatic palette with concealed smart storage.' },
  { id: 'proj3', title: 'TechSpire Innovation Office', location: 'AB Road, Indore', category: 'Commercial', style: 'Contemporary', area: '4,500 sq ft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', concept: 'Ergonomic open desk layout with acoustic phone booths.' },
  { id: 'proj4', title: 'Serene Haven Bedroom Suite', location: 'Saket Nagar, Indore', category: 'Residential', style: 'Scandinavian', area: '1,800 sq ft', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800', concept: 'Soothing sage green backdrop with fluted oak wall panels.' }
];

export const INSPIRATIONS = [
  {
    id: 'insp1',
    title: 'Earthy Modern Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    linkedProductIds: ['p1', 'p2', 'p6']
  },
  {
    id: 'insp2',
    title: 'Warm Amber Dining & Lighting',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800',
    linkedProductIds: ['p3']
  },
  {
    id: 'insp3',
    title: 'Nordic Serenity Master Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    linkedProductIds: ['p4', 'p5']
  }
];

export const REVIEWS = [
  { name: 'Ananya Sharma', rating: 5, comment: 'ShreeInterio transformed our 3BHK flat in Vijay Nagar seamlessly. The quality of custom furniture is top-notch!', city: 'Indore' },
  { name: 'Rajesh Verma', rating: 5, comment: 'Ordered their brass pendant lights and lounge chair. Fast delivery, superb packing, and luxury look.', city: 'Bhopal' },
  { name: 'Pooja Agarwal', rating: 5, comment: 'Budget designing service saved us almost 20% compared to other market quotes. Highly recommended!', city: 'Indore' }
];

export const BLOGS = [
  { id: 'b1', title: '10 Modern Living Room Ideas for Indian Homes', date: 'Sept 2026', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600', excerpt: 'Discover how to balance modern aesthetics with functional daily storage.' },
  { id: 'b2', title: 'How to Choose the Right Sofa Size for Small Spaces', date: 'Aug 2026', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600', excerpt: 'Key measurements and seating layouts to make your living area look bigger.' },
  { id: 'b3', title: 'Best Accent Lighting Solutions for Bedrooms', date: 'Jul 2026', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', excerpt: 'From cove lights to statement pendant fixtures for cozy bedtime vibes.' }
];