export const PRODUCTS = [
  {
    id: '1',
    name: 'Modern Velvet Sofa',
    price: 45000,
    category: 'Furniture',
    room: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious velvet sofa for contemporary living spaces.'
  },
  {
    id: '2',
    name: 'Nordic Floor Lamp',
    price: 8500,
    category: 'Lighting',
    room: 'Living Room',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist lighting with warm ambient output.'
  }
];

export const ROOMS = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600' }
];

export const CATEGORIES = ['Furniture', 'Lighting', 'Wall Décor', 'Rugs & Carpets', 'Mirrors', 'Home Accessories'];

export const STYLES = ['Modern', 'Minimal', 'Contemporary', 'Luxury', 'Scandinavian', 'Boho', 'Industrial'];

export const SERVICES = [
  { id: '1', title: 'Interior Design', description: 'Full space planning and execution.' }
];

export const PROJECTS = [
  { id: '1', title: 'Luxury Apartment', location: 'Indore' }
];

export const INSPIRATIONS = [
  { id: '1', title: 'Minimalist Setup', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600' }
];

export const REVIEWS = [
  { id: '1', name: 'Rahul Sharma', comment: 'Great quality interior products!' }
];

export const SHOP_FILTERS = {
  categories: [
    {
      id: 'furniture',
      label: '🛋️ Furniture',
      subcategories: [
        { name: 'Living Room', items: ['Sofa', 'Sectional Sofa', 'Sofa Bed', 'Recliner', 'Armchair', 'Lounge Chair', 'Ottoman', 'Pouf', 'Coffee Table', 'Side Table', 'Console Table', 'TV Unit', 'Nesting Table'] },
        { name: 'Bedroom', items: ['King Size Bed', 'Queen Size Bed', 'Single Bed', 'Platform Bed', 'Upholstered Bed', 'Bedside Table', 'Wardrobe', 'Dresser', 'Chest of Drawers', 'Dressing Table', 'Bedroom Bench'] },
        { name: 'Dining', items: ['Dining Table', 'Dining Chair', 'Dining Bench', 'Bar Table', 'Bar Stool', 'Sideboard', 'Buffet Cabinet'] },
        { name: 'Home Office', items: ['Study Table', 'Office Desk', 'Computer Desk', 'Office Chair', 'Bookshelf', 'Storage Cabinet', 'Filing Cabinet'] },
        { name: 'Storage', items: ['Bookshelf', 'Display Cabinet', 'Storage Cabinet', 'Shoe Rack', 'Sideboard', 'Chest', 'Storage Bench'] }
      ]
    },
    {
      id: 'lighting',
      label: '💡 Lighting',
      subcategories: [
        { name: 'Ceiling Lighting', items: ['Chandelier', 'Pendant Light', 'Ceiling Light', 'Flush Mount', 'Track Light'] },
        { name: 'Table Lighting', items: ['Table Lamp', 'Bedside Lamp', 'Desk Lamp', 'Reading Lamp'] },
        { name: 'Floor Lighting', items: ['Floor Lamp', 'Tripod Lamp', 'Arc Lamp'] },
        { name: 'Wall Lighting', items: ['Wall Sconce', 'Picture Light', 'Wall Reading Light'] },
        { name: 'Decorative Lighting', items: ['LED Light', 'String Light', 'Fairy Light', 'Candle Light'] },
        { name: 'Outdoor Lighting', items: ['Garden Light', 'Pathway Light', 'Balcony Light', 'Outdoor Wall Light'] }
      ]
    },
    {
      id: 'wall-decor',
      label: '🖼️ Wall Décor',
      subcategories: [
        { name: 'Wall Art', items: ['Canvas Art', 'Abstract Art', 'Modern Art', 'Landscape Art', 'Botanical Art', 'Floral Art', 'Portrait Art', 'Typography Art'] },
        { name: 'Frames', items: ['Photo Frame', 'Gallery Wall', 'Collage Frame', 'Art Frame'] },
        { name: 'Decorative Items', items: ['Wall Sculpture', 'Metal Wall Art', 'Wooden Wall Art', 'Decorative Plates', 'Wall Panels', '3D Wall Décor'] },
        { name: 'Functional', items: ['Wall Clock', 'Wall Shelf', 'Floating Shelf', 'Key Holder', 'Decorative Hooks'] }
      ]
    },
    {
      id: 'rugs',
      label: '🧶 Rugs & Carpets',
      subcategories: [
        { name: 'Types', items: ['Area Rug', 'Runner Rug', 'Round Rug', 'Square Rug', 'Shag Rug', 'Flatweave Rug', 'Outdoor Rug', 'Kids Rug', 'Carpet'] },
        { name: 'Styles', items: ['Modern', 'Traditional', 'Persian', 'Geometric', 'Abstract', 'Boho', 'Minimal'] },
        { name: 'By Room', items: ['Living Room Rug', 'Bedroom Rug', 'Dining Room Rug', 'Kids Room Rug', 'Office Rug', 'Outdoor Rug'] }
      ]
    },
    {
      id: 'mirrors',
      label: '🪞 Mirrors',
      subcategories: [
        { name: 'Types', items: ['Full-Length Mirror', 'Wall Mirror', 'Floor Mirror', 'Dressing Mirror', 'Leaner Mirror', 'Decorative Mirror'] },
        { name: 'Shapes', items: ['Round', 'Oval', 'Square', 'Rectangle', 'Arch', 'Irregular / Organic'] },
        { name: 'Styles', items: ['Modern', 'Minimal', 'Luxury', 'Vintage', 'Decorative', 'Frameless'] }
      ]
    },
    {
      id: 'accessories',
      label: '🌿 Home Accessories',
      subcategories: [
        { name: 'Decorative', items: ['Vase', 'Showpiece', 'Sculpture', 'Figurine', 'Decorative Bowl', 'Decorative Tray', 'Candle Holder', 'Candle Stand'] },
        { name: 'Plants & Planters', items: ['Indoor Plant', 'Artificial Plant', 'Plant Pot', 'Decorative Planter', 'Hanging Planter', 'Plant Stand'] },
        { name: 'Soft Décor', items: ['Cushion', 'Cushion Cover', 'Throw', 'Blanket', 'Decorative Pillow'] },
        { name: 'Table Décor', items: ['Table Runner', 'Coaster', 'Centerpiece', 'Serving Tray', 'Fruit Bowl'] },
        { name: 'Storage & Organization', items: ['Storage Basket', 'Organizer', 'Magazine Holder', 'Bookend', 'Decorative Box', 'Tissue Box'] }
      ]
    }
  ],
  rooms: [
    'All', 'Living Room', 'Bedroom', 'Dining Room', 'Modular Kitchen', 
    'Home Office', 'Kids Room', 'Bathroom', 'Entryway', 'Outdoor / Balcony'
  ],
  priceRanges: [
    'All Prices', 'Under ₹2,500', '₹2,500 – ₹5,000', '₹5,000 – ₹10,000', 
    '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+'
  ],
  styles: [
    'All', 'Modern', 'Minimal', 'Contemporary', 'Luxury', 'Scandinavian', 
    'Boho', 'Industrial', 'Rustic', 'Traditional', 'Vintage', 'Japandi', 
    'Mid-Century Modern', 'Classic', 'Farmhouse', 'Coastal', 'Indian Contemporary'
  ],
  materials: [
    'All', 'Solid Wood', 'Engineered Wood', 'MDF', 'Plywood', 'Metal', 'Glass', 
    'Marble', 'Stone', 'Ceramic', 'Rattan', 'Cane', 'Wicker', 'Fabric', 'Velvet', 
    'Leather', 'Faux Leather', 'Acrylic'
  ],
  colors: [
    'All', 'White', 'Beige', 'Cream', 'Brown', 'Black', 'Grey', 
    'Green', 'Blue', 'Yellow', 'Pink', 'Red', 'Gold', 'Silver', 'Natural Wood'
  ],
  sizes: [
    'All', 'Small', 'Medium', 'Large', 'Extra Large', 
    'Single', 'Double', 'Queen', 'King', 'California King',
    '3 × 5 ft', '5 × 7 ft', '6 × 9 ft', '8 × 10 ft', '9 × 12 ft', 'Custom'
  ],
  availability: ['All', 'In Stock', 'Out of Stock', 'Pre-Order', 'Made to Order', 'Customizable'],
  ratings: ['All Ratings', '4★ & Above', '3★ & Above', '2★ & Above'],
  offers: ['All Offers', 'On Sale', 'New Arrival', 'Best Seller', 'Trending', 'Limited Edition', 'Combo / Set']
};


export const BLOGS = [
  {
    id: '1',
    title: '10 Tips for Modern Interior Design',
    date: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Transform your home with these simple interior design ideas.'
  }
];

