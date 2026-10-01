import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ShoppingBag, Star, X, Check, 
  ChevronDown, ChevronUp, SlidersHorizontal, RotateCcw,
  Sparkles, Tag, ShieldCheck, Truck, PhoneCall
} from 'lucide-react';

// --- MASTER DATA STRUCTURE ---
const FILTER_DATA = {
  categories: [
    {
      id: 'furniture',
      name: 'Furniture',
      icon: '🪑',
      subcategories: [
        {
          name: 'Living Room Furniture',
          types: ['Sofa', '2-Seater Sofa', '3-Seater Sofa', '4-Seater Sofa', 'Sectional Sofa', 'L-Shaped Sofa', 'U-Shaped Sofa', 'Modular Sofa', 'Sofa Bed', 'Sleeper Sofa', 'Recliner Sofa', 'Recliner', 'Power Recliner', 'Armchair', 'Lounge Chair', 'Accent Chair', 'Rocking Chair', 'Swivel Chair', 'Chaise Lounge', 'Loveseat', 'Ottoman', 'Pouf', 'Footstool', 'Bench', 'Daybed', 'Coffee Table', 'Center Table', 'Side Table', 'End Table', 'Nesting Table', 'C-Shaped Table', 'Console Table', 'Sofa Table', 'Drink Table', 'TV Unit', 'TV Stand', 'Media Console', 'Entertainment Center', 'Wall-Mounted TV Unit', 'Display Unit', 'Bookshelf', 'Bookcase', 'Display Cabinet', 'Storage Cabinet', 'Sideboard', 'Credenza', 'Chest', 'Bar Cabinet']
        },
        {
          name: 'Bedroom Furniture',
          types: ['Single Bed', 'Twin Bed', 'Double Bed', 'Queen Bed', 'King Bed', 'California King', 'Platform Bed', 'Storage Bed', 'Hydraulic Storage Bed', 'Upholstered Bed', 'Wooden Bed', 'Metal Bed', 'Canopy Bed', 'Four Poster Bed', 'Bunk Bed', 'Loft Bed', 'Day Bed', 'Bedside Table', 'Nightstand', 'Chest of Drawers', 'Dresser', 'Wardrobe', 'Sliding Wardrobe', 'Hinged Wardrobe', 'Walk-in Wardrobe Storage', 'Trunk', 'Dressing Table', 'Vanity Table', 'Makeup Table', 'Dressing Stool', 'Vanity Chair', 'Jewelry Cabinet', 'Bedroom Bench', 'Blanket Chest', 'Bed End Bench', 'Valet Stand']
        },
        {
          name: 'Dining Furniture',
          types: ['Dining Table', '2-Seater Dining Table', '4-Seater Dining Table', '6-Seater Dining Table', '8-Seater Dining Table', '10-Seater Dining Table', 'Extendable Dining Table', 'Round Dining Table', 'Square Dining Table', 'Rectangular Dining Table', 'Oval Dining Table', 'Dining Chair', 'Arm Dining Chair', 'Side Dining Chair', 'Upholstered Dining Chair', 'Dining Bench', 'Bar Table', 'Bar Counter', 'Bar Stool', 'Counter Stool', 'Sideboard', 'Buffet', 'Crockery Unit', 'China Cabinet', 'Dining Cabinet', 'Serving Cart']
        },
        {
          name: 'Home Office / Study',
          types: ['Study Table', 'Writing Desk', 'Computer Desk', 'Executive Desk', 'L-Shaped Desk', 'Standing Desk', 'Adjustable Desk', 'Reception Desk', 'Office Chair', 'Executive Chair', 'Ergonomic Chair', 'Visitor Chair', 'Conference Chair', 'Bookshelf', 'Filing Cabinet', 'Drawer Unit', 'Printer Stand', 'Monitor Stand', 'Desk Organizer']
        },
        {
          name: 'Kids Furniture',
          types: ['Kids Bed', 'Toddler Bed', 'Bunk Bed', 'Loft Bed', 'Kids Study Table', 'Kids Chair', 'Kids Desk', 'Toy Storage', 'Toy Chest', 'Kids Wardrobe', 'Kids Bookshelf', 'Kids Table', 'Kids Bench', 'Kids Stool']
        },
        {
          name: 'Entryway Furniture',
          types: ['Console Table', 'Entryway Bench', 'Shoe Rack', 'Shoe Cabinet', 'Coat Rack', 'Hall Tree', 'Storage Bench', 'Entryway Cabinet', 'Umbrella Stand', 'Key Cabinet']
        },
        {
          name: 'Outdoor Furniture',
          types: ['Outdoor Sofa', 'Patio Sofa', 'Outdoor Chair', 'Adirondack Chair', 'Outdoor Dining Table', 'Outdoor Dining Chair', 'Balcony Chair', 'Balcony Table', 'Swing Chair', 'Hanging Chair', 'Hammock', 'Outdoor Bench', 'Sun Lounger', 'Deck Chair', 'Outdoor Stool', 'Garden Bench']
        },
        {
          name: 'Storage Furniture',
          types: ['Storage Cabinet', 'Display Cabinet', 'Bookshelf', 'Bookcase', 'Sideboard', 'Credenza', 'Chest of Drawers', 'Drawer Cabinet', 'Shoe Rack', 'Utility Cabinet', 'Tall Cabinet', 'Wall Cabinet', 'Modular Storage', 'Open Shelving', 'Closed Storage', 'Storage Bench', 'Trunk', 'Basket Storage']
        }
      ]
    },
    {
      id: 'lighting',
      name: 'Lighting',
      icon: '💡',
      subcategories: [
        { name: 'Ceiling Lighting', types: ['Chandeliers', 'Pendant Lights', 'Ceiling Lights', 'Flush Mount Lights', 'Semi-Flush Mount', 'Track Lights', 'Recessed Lights', 'Downlights', 'Spotlights', 'Panel Lights', 'Cove Lights'] },
        { name: 'Wall Lighting', types: ['Wall Sconces', 'Wall Lamps', 'Picture Lights', 'Reading Lights', 'Up & Down Lights', 'Bedside Wall Lights', 'Mirror Lights'] },
        { name: 'Table Lighting', types: ['Table Lamps', 'Bedside Lamps', 'Desk Lamps', 'Study Lamps', 'Accent Lamps', 'Banker Lamps', 'Touch Lamps'] },
        { name: 'Floor Lighting', types: ['Floor Lamps', 'Arc Lamps', 'Tripod Lamps', 'Reading Floor Lamps', 'Torchiere Lamps'] },
        { name: 'Decorative Lighting', types: ['Fairy Lights', 'String Lights', 'LED Strips', 'Neon Lights', 'Lanterns', 'Candle Lights', 'Decorative Lamps'] },
        { name: 'Outdoor Lighting', types: ['Garden Lights', 'Pathway Lights', 'Bollard Lights', 'Outdoor Wall Lights', 'Porch Lights', 'Step Lights', 'Solar Lights', 'Landscape Lights'] }
      ]
    },
    {
      id: 'wall_decor',
      name: 'Wall Décor',
      icon: '🖼️',
      subcategories: [
        { name: 'Wall Art', types: ['Canvas Art', 'Paintings', 'Abstract Art', 'Modern Art', 'Contemporary Art', 'Traditional Art', 'Landscape Art', 'Botanical Art', 'Floral Art', 'Portrait Art', 'Typography Art', 'Photography', 'Digital Art', 'Line Art', 'Minimal Art', 'Religious Art'] },
        { name: 'Frames', types: ['Photo Frames', 'Picture Frames', 'Gallery Wall Sets', 'Collage Frames', 'Certificate Frames', 'Art Frames'] },
        { name: 'Decorative Wall Pieces', types: ['Metal Wall Art', 'Wooden Wall Art', 'Wall Sculptures', 'Wall Plates', 'Decorative Panels', '3D Wall Art', 'Macramé Wall Hanging', 'Tapestries', 'Baskets for Wall', 'Dream Catchers'] },
        { name: 'Functional Wall Décor', types: ['Wall Clocks', 'Wall Shelves', 'Floating Shelves', 'Key Holders', 'Coat Hooks', 'Wall Organizers', 'Memo Boards', 'Notice Boards', 'Chalk Boards'] }
      ]
    },
    {
      id: 'rugs_carpets',
      name: 'Rugs & Carpets',
      icon: '🧶',
      subcategories: [
        { name: 'Rug Types', types: ['Area Rugs', 'Runner Rugs', 'Round Rugs', 'Square Rugs', 'Shag Rugs', 'Flatweave Rugs', 'Braided Rugs', 'Tufted Rugs', 'Hand-Knotted Rugs', 'Handwoven Rugs', 'Machine-Made Rugs', 'Outdoor Rugs', 'Kids Rugs', 'Playroom Rugs', 'Bath Rugs', 'Door Mats'] },
        { name: 'Carpet', types: ['Wall-to-Wall Carpet', 'Carpet Tiles', 'Custom Carpet', 'Indoor Carpet', 'Outdoor Carpet'] },
        { name: 'Rug Styles', types: ['Persian', 'Oriental', 'Moroccan', 'Geometric', 'Abstract', 'Floral', 'Traditional', 'Modern', 'Minimal', 'Boho', 'Vintage', 'Scandinavian'] },
        { name: 'Rug Accessories', types: ['Rug Pads', 'Anti-Slip Mats', 'Rug Grippers'] }
      ]
    },
    {
      id: 'mirrors',
      name: 'Mirrors',
      icon: '🪞',
      subcategories: [
        { name: 'Mirror Types', types: ['Wall Mirror', 'Floor Mirror', 'Full-Length Mirror', 'Leaner Mirror', 'Dressing Mirror', 'Vanity Mirror', 'Decorative Mirror', 'Bathroom Mirror', 'Door Mirror'] },
        { name: 'Special Mirrors', types: ['LED Mirror', 'Backlit Mirror', 'Smart Mirror', 'Framed Mirror', 'Frameless Mirror', 'Mirrored Cabinet', 'Jewelry Mirror'] }
      ]
    },
    {
      id: 'home_accessories',
      name: 'Home Accessories',
      icon: '🌿',
      subcategories: [
        { name: 'Vases & Planters', types: ['Vase', 'Flower Vase', 'Floor Vase', 'Ceramic Vase', 'Glass Vase', 'Metal Vase', 'Planter', 'Plant Pot', 'Hanging Planter', 'Plant Stand', 'Plant Basket'] },
        { name: 'Decorative Objects', types: ['Sculptures', 'Figurines', 'Showpieces', 'Miniatures', 'Collectibles', 'Bookends', 'Decorative Boxes', 'Decorative Bowls', 'Decorative Plates', 'Urns'] },
        { name: 'Candles & Ambiance', types: ['Candles', 'Scented Candles', 'Pillar Candles', 'Tealight Candles', 'Candle Holders', 'Candle Stands', 'Lanterns'] },
        { name: 'Soft Furnishings', types: ['Cushions', 'Cushion Covers', 'Throw Pillows', 'Throws', 'Blankets', 'Quilts', 'Bed Runners', 'Poufs'] },
        { name: 'Table Décor', types: ['Trays', 'Serving Trays', 'Centerpieces', 'Table Runners', 'Coasters', 'Placemats', 'Fruit Bowls', 'Napkin Holders'] },
        { name: 'Organization', types: ['Storage Baskets', 'Fabric Baskets', 'Magazine Holders', 'Organizers', 'Tissue Boxes', 'Key Trays', 'Storage Boxes'] }
      ]
    },
    {
      id: 'curtains_window',
      name: 'Curtains & Window Décor',
      icon: '🪟',
      subcategories: [
        { name: 'Curtains', types: ['Blackout Curtains', 'Sheer Curtains', 'Linen Curtains', 'Cotton Curtains', 'Velvet Curtains', 'Printed Curtains', 'Plain Curtains', 'Thermal Curtains', 'Eyelet Curtains', 'Pleated Curtains'] },
        { name: 'Blinds', types: ['Roller Blinds', 'Roman Blinds', 'Venetian Blinds', 'Vertical Blinds', 'Bamboo Blinds', 'Wooden Blinds'] },
        { name: 'Curtain Accessories', types: ['Curtain Rods', 'Curtain Tracks', 'Tiebacks', 'Curtain Rings', 'Curtain Hooks', 'Finials'] }
      ]
    },
    {
      id: 'bedding_textiles',
      name: 'Bedding & Textiles',
      icon: '🛏️',
      subcategories: [
        { name: 'Bedding', types: ['Bedsheets', 'Fitted Sheets', 'Flat Sheets', 'Duvet Covers', 'Comforters', 'Quilts', 'Bedspreads', 'Blankets', 'Bed Runners'] },
        { name: 'Pillows', types: ['Sleeping Pillows', 'Decorative Pillows', 'Bolster Pillows', 'Memory Foam Pillows', 'Cushion Inserts', 'Pillow Covers'] },
        { name: 'Mattress & Accessories', types: ['Memory Foam Mattress', 'Spring Mattress', 'Hybrid Mattress', 'Latex Mattress', 'Orthopedic Mattress', 'Mattress Topper', 'Mattress Protector'] }
      ]
    },
    {
      id: 'dining_tableware',
      name: 'Dining & Tableware',
      icon: '🍽️',
      subcategories: [
        { name: 'Dinnerware', types: ['Dinner Plates', 'Side Plates', 'Bowls', 'Serving Plates', 'Serving Bowls'] },
        { name: 'Drinkware', types: ['Glasses', 'Wine Glasses', 'Tumblers', 'Mugs', 'Cups', 'Coffee Cups'] },
        { name: 'Serving Essentials', types: ['Serving Trays', 'Serving Platters', 'Cutlery', 'Spoons', 'Forks', 'Knives', 'Serving Spoons'] },
        { name: 'Table Setting', types: ['Placemats', 'Table Runners', 'Napkin Rings', 'Napkins', 'Table Centerpieces', 'Salt & Pepper Sets'] }
      ]
    },
    {
      id: 'kitchen_storage',
      name: 'Kitchen Accessories',
      icon: '🍳',
      subcategories: [
        { name: 'Kitchen Storage', types: ['Storage Jars', 'Spice Jars', 'Spice Racks', 'Kitchen Organizers', 'Cutlery Organizers', 'Drawer Organizers', 'Shelf Organizers', 'Bottle Holders', 'Bread Boxes', 'Food Storage Containers', 'Baskets', 'Kitchen Trays', 'Utensil Holders', 'Kitchen Trolleys'] }
      ]
    },
    {
      id: 'outdoor_balcony',
      name: 'Outdoor & Balcony',
      icon: '🌱',
      subcategories: [
        { name: 'Balcony & Garden', types: ['Outdoor Furniture', 'Planters', 'Garden Pots', 'Plant Stands', 'Hanging Planters', 'Garden Sculptures', 'Garden Lanterns', 'Outdoor Rugs', 'Outdoor Cushions', 'Outdoor Lighting', 'Bird Feeders', 'Garden Décor', 'Balcony Décor', 'Patio Décor'] }
      ]
    },
    {
      id: 'bathroom_accessories',
      name: 'Bathroom Accessories',
      icon: '🛁',
      subcategories: [
        { name: 'Bath Essentials', types: ['Bathroom Mirrors', 'Vanity Units', 'Bathroom Cabinets', 'Storage Shelves', 'Towel Racks', 'Towel Hooks', 'Soap Dispensers', 'Soap Dishes', 'Toothbrush Holders', 'Tissue Holders', 'Bathroom Baskets', 'Bath Mats', 'Shower Curtains', 'Bathroom Accessories Sets'] }
      ]
    }
  ],
  rooms: [
    'All', 'Living Room', 'Master Bedroom', 'Guest Bedroom', 'Kids Bedroom', 'Dining Room', 
    'Modular Kitchen', 'Home Office', 'Study Room', 'Bathroom', 'Entryway', 'Hallway', 
    'Balcony', 'Terrace', 'Patio', 'Garden', 'Outdoor', 'Nursery', 'Dressing Room', 
    'Home Theatre', 'Pooja Room', 'Utility Room'
  ],
  styles: [
    'Modern', 'Minimal', 'Contemporary', 'Luxury', 'Scandinavian', 'Japandi', 'Boho', 
    'Industrial', 'Rustic', 'Traditional', 'Classic', 'Vintage', 'Retro', 'Mid-Century Modern', 
    'Farmhouse', 'Coastal', 'Mediterranean', 'French Country', 'Art Deco', 'Indian Contemporary', 
    'Modern Indian', 'Transitional', 'Eclectic', 'Urban', 'Cottage', 'Tropical'
  ],
  materials: {
    Wood: ['Solid Wood', 'Teak', 'Oak', 'Walnut', 'Sheesham', 'Mango Wood', 'Acacia', 'Pine', 'Engineered Wood', 'MDF', 'Plywood', 'Veneer'],
    Metal: ['Iron', 'Steel', 'Stainless Steel', 'Brass', 'Copper', 'Aluminium'],
    Other: ['Glass', 'Marble', 'Granite', 'Stone', 'Ceramic', 'Porcelain', 'Acrylic', 'Rattan', 'Cane', 'Wicker', 'Bamboo'],
    Upholstery: ['Cotton', 'Linen', 'Velvet', 'Leather', 'Faux Leather', 'Polyester', 'Chenille', 'Suede']
  },
  colors: {
    Neutrals: ['White', 'Off White', 'Ivory', 'Cream', 'Beige', 'Taupe', 'Greige'],
    Dark: ['Black', 'Charcoal', 'Dark Brown', 'Navy', 'Forest Green', 'Burgundy'],
    Natural: ['Natural Wood', 'Light Wood', 'Dark Wood', 'Terracotta'],
    Colors: ['Grey', 'Blue', 'Green', 'Yellow', 'Orange', 'Red', 'Pink', 'Purple'],
    Metallic: ['Gold', 'Rose Gold', 'Silver', 'Copper', 'Brass']
  },
  sizes: [
    'Small', 'Medium', 'Large', 'Extra Large', '1-Seater', '2-Seater', '3-Seater', '4-Seater', 
    '5-Seater', '6-Seater', 'Single', 'Double', 'Queen', 'King', 'California King',
    '2x3 ft', '3x5 ft', '4x6 ft', '5x7 ft', '6x9 ft', '8x10 ft', '9x12 ft', 'Custom'
  ],
  shapes: ['Round', 'Oval', 'Square', 'Rectangle', 'Arch', 'Curved', 'Geometric', 'Hexagonal', 'Organic', 'Irregular'],
  finishes: ['Matte', 'Glossy', 'Satin', 'Polished', 'Brushed', 'Textured', 'Natural', 'Distressed', 'Antique', 'Rustic', 'Lacquered', 'Powder Coated', 'Handcrafted'],
  productStatus: ['New Arrival', 'Best Seller', 'Trending', 'Featured', 'Limited Edition', 'Exclusive', 'Made to Order', 'Customizable', 'Pre-Order', 'In Stock', 'Out of Stock'],
  ratings: ['5 Stars', '4 Stars & Above', '3 Stars & Above', '2 Stars & Above', '1 Star & Above'],
  priceRanges: [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under ₹2,500', min: 0, max: 2500 },
    { label: '₹2,500–₹5,000', min: 2500, max: 5000 },
    { label: '₹5,000–₹10,000', min: 5000, max: 10000 },
    { label: '₹10,000–₹25,000', min: 10000, max: 25000 },
    { label: '₹25,000–₹50,000', min: 25000, max: 50000 },
    { label: '₹50,000–₹1,00,000', min: 50000, max: 100000 },
    { label: '₹1,00,000–₹2,50,000', min: 100000, max: 250000 },
    { label: '₹2,50,000+', min: 250000, max: Infinity }
  ],
  offers: ['On Sale', 'Discounted', 'Buy 1 Get 1', 'Combo Offers', 'Clearance', 'Festive Offers', 'Limited Time Offer', 'Free Shipping', 'Bank Offer'],
  specialFeatures: ['Assembly Required', 'No Assembly Required', 'Foldable', 'Stackable', 'Extendable', 'Adjustable', 'Height Adjustable', 'Waterproof', 'Weather Resistant', 'Scratch Resistant', 'Stain Resistant', 'Washable', 'Easy to Clean', 'Eco-Friendly', 'Sustainable', 'Handmade', 'Handcrafted', 'Customizable', 'Made in India', 'Imported'],
  collections: ['New Collection', 'Bestseller Collection', 'Luxury Collection', 'Minimal Collection', 'Modern Collection', 'Small Space Collection', 'Apartment Collection', 'Premium Collection', 'Designer Collection', 'Sustainable Collection', 'Kids Collection', 'Outdoor Collection', 'Festive Collection', 'Wedding Collection']
};

// --- INITIAL PRODUCTS DATA (WITH FULL METADATA FOR FILTERS) ---
const INITIAL_PRODUCTS = [
  {
    id: 1,
    title: 'Velvet Curved 3-Seater Sofa',
    category: 'furniture',
    productType: '3-Seater Sofa',
    room: 'Living Room',
    style: 'Modern',
    material: 'Velvet',
    color: 'Beige',
    size: '3-Seater',
    shape: 'Curved',
    finish: 'Matte',
    price: 42999,
    rating: 4.9,
    status: 'Best Seller',
    offers: ['Free Shipping', 'Bank Offer'],
    features: ['Customizable', 'Made in India'],
    collection: 'Modern Collection',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Nordic Oak Dining Set (6-Seater)',
    category: 'furniture',
    productType: '6-Seater Dining Table',
    room: 'Dining Room',
    style: 'Scandinavian',
    material: 'Oak',
    color: 'Natural Wood',
    size: '6-Seater',
    shape: 'Rectangle',
    finish: 'Natural',
    price: 68500,
    rating: 4.8,
    status: 'Featured',
    offers: ['On Sale', 'Free Shipping'],
    features: ['Eco-Friendly', 'Handcrafted'],
    collection: 'Premium Collection',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Minimalist Brass Chandelier Light',
    category: 'lighting',
    productType: 'Chandeliers',
    room: 'Living Room',
    style: 'Luxury',
    material: 'Brass',
    color: 'Gold',
    size: 'Medium',
    shape: 'Round',
    finish: 'Polished',
    price: 18499,
    rating: 4.7,
    status: 'New Arrival',
    offers: ['Discounted'],
    features: ['Easy to Clean'],
    collection: 'Luxury Collection',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Hand-Knotted Moroccan Area Rug',
    category: 'rugs_carpets',
    productType: 'Area Rugs',
    room: 'Master Bedroom',
    style: 'Moroccan',
    material: 'Cotton',
    color: 'Cream',
    size: '6x9 ft',
    shape: 'Rectangle',
    finish: 'Textured',
    price: 28999,
    rating: 4.9,
    status: 'Trending',
    offers: ['Free Shipping'],
    features: ['Handmade', 'Washable'],
    collection: 'Designer Collection',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Arched Full-Length LED Mirror',
    category: 'mirrors',
    productType: 'Full-Length Mirror',
    room: 'Dressing Room',
    style: 'Contemporary',
    material: 'Glass',
    color: 'Black',
    size: 'Large',
    shape: 'Arch',
    finish: 'Matte',
    price: 14500,
    rating: 4.6,
    status: 'Best Seller',
    offers: ['Combo Offers'],
    features: ['No Assembly Required'],
    collection: 'Bestseller Collection',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Handcrafted Ceramic Textured Vase',
    category: 'home_accessories',
    productType: 'Ceramic Vase',
    room: 'Entryway',
    style: 'Japandi',
    material: 'Ceramic',
    color: 'Off White',
    size: 'Small',
    shape: 'Organic',
    finish: 'Handcrafted',
    price: 2199,
    rating: 4.5,
    status: 'In Stock',
    offers: ['Buy 1 Get 1'],
    features: ['Handmade'],
    collection: 'Minimal Collection',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ShopSection() {
  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedOffer, setSelectedOffer] = useState('All');
  const [selectedFeature, setSelectedFeature] = useState('All');

  // Accordion Sidebar Collapsible Toggle State
  const [openSections, setOpenSections] = useState({
    category: true,
    room: false,
    price: true,
    style: false,
    material: false,
    color: false,
    size: false,
    productStatus: false,
    offers: false,
    specialFeatures: false
  });

  const toggleAccordion = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Cart & Drawer State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Reset Function
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('');
    setSelectedProductType('');
    setSelectedRoom('All');
    setSelectedStyle('All');
    setSelectedMaterial('All');
    setSelectedColor('All');
    setSelectedPriceRange('All Prices');
    setSelectedStatus('All');
    setSelectedOffer('All');
    setSelectedFeature('All');
    setSearchTerm('');
  };

  // Filter Logic (Calculated Dynamically)
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter(product => {
      // Search
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.productType.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category & Product Type
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesProductType = !selectedProductType || product.productType === selectedProductType;

      // Room
      const matchesRoom = selectedRoom === 'All' || product.room === selectedRoom;

      // Style
      const matchesStyle = selectedStyle === 'All' || product.style === selectedStyle;

      // Material
      const matchesMaterial = selectedMaterial === 'All' || product.material === selectedMaterial;

      // Color
      const matchesColor = selectedColor === 'All' || product.color === selectedColor;

      // Price Range
      const rangeObj = FILTER_DATA.priceRanges.find(r => r.label === selectedPriceRange);
      const matchesPrice = !rangeObj || (product.price >= rangeObj.min && product.price <= rangeObj.max);

      // Status
      const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;

      // Offers
      const matchesOffer = selectedOffer === 'All' || (product.offers && product.offers.includes(selectedOffer));

      // Special Features
      const matchesFeature = selectedFeature === 'All' || (product.features && product.features.includes(selectedFeature));

      return matchesSearch && matchesCategory && matchesProductType && matchesRoom && 
             matchesStyle && matchesMaterial && matchesColor && matchesPrice && 
             matchesStatus && matchesOffer && matchesFeature;
    });
  }, [
    searchTerm, selectedCategory, selectedProductType, selectedRoom, 
    selectedStyle, selectedMaterial, selectedColor, selectedPriceRange, 
    selectedStatus, selectedOffer, selectedFeature
  ]);

  // Cart Functions
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalCartValue = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // WhatsApp Checkout Integration
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    let message = "Hello ShreeInterio! I would like to place an order for:\n\n";
    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.title}*\n   Qty: ${item.quantity} | Price: ₹${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n*Total Amount:* ₹${totalCartValue.toLocaleString()}\n\nPlease confirm availability and payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans pb-16">
      
      {/* HEADER / BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-slate-800 py-10 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <Sparkles size={14} /> Premium Interior Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Curated Home & Interior Store
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore handcrafted furniture, modern lighting, luxury rugs, and custom decor designed for sophisticated spaces.
          </p>
        </div>
      </div>

      {/* TOP BAR: SEARCH & TRIGGER MOBILE FILTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800/80">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search sofas, lamps, tables..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={handleResetFilters}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors py-2 px-3"
            >
              <RotateCcw size={14} /> Clear All
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20"
            >
              <ShoppingBag size={18} />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="bg-white text-indigo-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT: ACCORDION SIDEBAR + PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex gap-8">

        {/* DESKTOP ACCORDION FILTER SIDEBAR */}
        <aside className="hidden lg:block w-72 flex-shrink-0 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Filter size={16} className="text-indigo-400" /> Master Filters
            </h2>
            <button onClick={handleResetFilters} className="text-xs text-indigo-400 hover:underline">
              Reset
            </button>
          </div>

          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">

            {/* 1. CATEGORY & SUBCATEGORY ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('category')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>CATEGORY</span>
                {openSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.category && (
                <div className="p-3 space-y-2 border-t border-slate-800/60 bg-slate-950/40">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubCategory('');
                      setSelectedProductType('');
                    }}
                    className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors ${
                      selectedCategory === 'all' ? 'bg-indigo-600/20 text-indigo-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All Categories
                  </button>

                  {FILTER_DATA.categories.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedSubCategory('');
                          setSelectedProductType('');
                        }}
                        className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                          selectedCategory === cat.id ? 'bg-indigo-600/20 text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <span>{cat.icon} {cat.name}</span>
                      </button>

                      {/* Subcategories (if Category selected) */}
                      {selectedCategory === cat.id && (
                        <div className="pl-4 space-y-1.5 my-1 border-l-2 border-indigo-500/30">
                          {cat.subcategories.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-1">
                              <span className="block text-[11px] font-semibold text-slate-400 pt-1">
                                {sub.name}
                              </span>
                              <div className="flex flex-wrap gap-1 pt-0.5">
                                {sub.types.map((type, tIdx) => (
                                  <button
                                    key={tIdx}
                                    onClick={() => setSelectedProductType(selectedProductType === type ? '' : type)}
                                    className={`text-[10px] px-2 py-0.5 rounded transition-colors ${
                                      selectedProductType === type
                                        ? 'bg-indigo-500 text-white font-medium'
                                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. ROOM FILTER ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('room')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>ROOM</span>
                {openSections.room ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.room && (
                <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 flex flex-wrap gap-1.5">
                  {FILTER_DATA.rooms.map((room) => (
                    <button
                      key={room}
                      onClick={() => setSelectedRoom(room)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                        selectedRoom === room
                          ? 'bg-indigo-600 border-indigo-500 text-white font-medium'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. PRICE RANGE ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('price')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>PRICE</span>
                {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.price && (
                <div className="p-3 space-y-1 border-t border-slate-800/60 bg-slate-950/40">
                  {FILTER_DATA.priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(range.label)}
                      className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors ${
                        selectedPriceRange === range.label
                          ? 'bg-indigo-600/20 text-indigo-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. STYLE FILTER ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('style')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>STYLE</span>
                {openSections.style ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.style && (
                <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedStyle('All')}
                    className={`text-xs px-2 py-1 rounded border ${
                      selectedStyle === 'All' ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-800 text-slate-400'
                    }`}
                  >
                    All Styles
                  </button>
                  {FILTER_DATA.styles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                        selectedStyle === style
                          ? 'bg-indigo-600 border-indigo-500 text-white font-medium'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. MATERIAL FILTER ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('material')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>MATERIAL</span>
                {openSections.material ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.material && (
                <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 space-y-2">
                  {Object.entries(FILTER_DATA.materials).map(([group, items]) => (
                    <div key={group} className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{group}</span>
                      <div className="flex flex-wrap gap-1">
                        {items.map((mat) => (
                          <button
                            key={mat}
                            onClick={() => setSelectedMaterial(selectedMaterial === mat ? 'All' : mat)}
                            className={`text-xs px-2 py-0.5 rounded transition-colors ${
                              selectedMaterial === mat
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6. COLOR FILTER ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('color')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>COLOR</span>
                {openSections.color ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.color && (
                <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 space-y-2">
                  {Object.entries(FILTER_DATA.colors).map(([group, items]) => (
                    <div key={group} className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{group}</span>
                      <div className="flex flex-wrap gap-1">
                        {items.map((col) => (
                          <button
                            key={col}
                            onClick={() => setSelectedColor(selectedColor === col ? 'All' : col)}
                            className={`text-xs px-2 py-0.5 rounded transition-colors ${
                              selectedColor === col
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 7. OFFERS & SPECIAL FEATURES ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('offers')}
                className="w-full flex items-center justify-between p-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800/60 transition-colors"
              >
                <span>OFFERS & FEATURES</span>
                {openSections.offers ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {openSections.offers && (
                <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Offers</span>
                    <div className="flex flex-wrap gap-1">
                      {FILTER_DATA.offers.map((off) => (
                        <button
                          key={off}
                          onClick={() => setSelectedOffer(selectedOffer === off ? 'All' : off)}
                          className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                            selectedOffer === off
                              ? 'bg-emerald-600 border-emerald-500 text-white'
                              : 'border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {off}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Features</span>
                    <div className="flex flex-wrap gap-1">
                      {FILTER_DATA.specialFeatures.slice(0, 8).map((feat) => (
                        <button
                          key={feat}
                          onClick={() => setSelectedFeature(selectedFeature === feat ? 'All' : feat)}
                          className={`text-xs px-2 py-0.5 rounded transition-colors ${
                            selectedFeature === feat
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {feat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* PRODUCTS LISTING AREA */}
        <main className="flex-1">
          
          {/* ACTIVE FILTER BADGES DISPLAY */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-slate-500 font-medium">Active Filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-full">
                Cat: {selectedCategory}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedCategory('all')} />
              </span>
            )}
            {selectedProductType && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-full">
                Type: {selectedProductType}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedProductType('')} />
              </span>
            )}
            {selectedRoom !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-full">
                Room: {selectedRoom}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedRoom('All')} />
              </span>
            )}
            {selectedStyle !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-full">
                Style: {selectedStyle}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedStyle('All')} />
              </span>
            )}
            {selectedPriceRange !== 'All Prices' && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-full">
                Price: {selectedPriceRange}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedPriceRange('All Prices')} />
              </span>
            )}
            <span className="ml-auto text-xs text-slate-400 font-medium">
              Showing <strong className="text-white">{filteredProducts.length}</strong> items
            </span>
          </div>

          {/* PRODUCTS GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md border border-slate-700">
                        {product.status}
                      </span>
                      {product.offers && product.offers[0] && (
                        <span className="bg-emerald-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-md">
                          {product.offers[0]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>{product.room} • {product.style}</span>
                        <div className="flex items-center text-amber-400 font-semibold gap-1">
                          <Star size={12} fill="currentColor" /> {product.rating}
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2">
                        {product.title}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {product.material}
                        </span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {product.color}
                        </span>
                        {product.size && (
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            {product.size}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 mt-auto">
                      <div>
                        <span className="text-xs text-slate-400 block">Price</span>
                        <span className="text-lg font-extrabold text-white">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                      >
                        <ShoppingBag size={14} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/30 border border-slate-800/60 rounded-2xl">
              <p className="text-slate-400 text-base mb-3">No products match your selected filters.</p>
              <button
                onClick={handleResetFilters}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-indigo-500 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* CART MODAL / DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 w-full max-w-md h-full flex flex-col p-6 shadow-2xl border-l border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShoppingBag size={20} className="text-indigo-400" /> Your Shopping Cart
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length > 0 ? (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                      <span className="text-xs text-indigo-400 font-semibold">₹{item.price.toLocaleString()}</span>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-slate-300 hover:bg-slate-700 text-xs">-</button>
                        <span className="text-xs font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-slate-300 hover:bg-slate-700 text-xs">+</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 text-slate-500 text-sm">Your cart is currently empty.</div>
              )}
            </div>

            {/* Checkout Footer */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex justify-between text-slate-300 font-semibold text-base">
                  <span>Total Amount:</span>
                  <span className="text-white font-extrabold">₹{totalCartValue.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20 text-sm"
                >
                  <PhoneCall size={18} /> Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE FILTER MODAL */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950 p-6 overflow-y-auto lg:hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <h2 className="text-base font-bold text-white">Filter Products</h2>
            <button onClick={() => setIsMobileFilterOpen(false)} className="text-slate-400">
              <X size={20} />
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-4">Select categories, styles, room types or budget from options.</p>
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm"
          >
            Apply Filters
          </button>
        </div>
      )}

    </div>
  );
}