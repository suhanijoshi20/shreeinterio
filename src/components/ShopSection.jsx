import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Filter, RotateCcw, ChevronDown, ChevronUp, Star, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

// --- MASTER SHOP FILTER DATA (COMPLETELY INTEGRATED) ---
const MASTER_FILTER_DATA = {
  categories: [
    {
      name: "Furniture",
      subcategories: {
        "Living Room": ["Sofa", "2-Seater Sofa", "3-Seater Sofa", "4-Seater Sofa", "Sectional Sofa", "L-Shaped Sofa", "U-Shaped Sofa", "Modular Sofa", "Sofa Bed", "Sleeper Sofa", "Recliner Sofa", "Recliner", "Power Recliner", "Armchair", "Lounge Chair", "Accent Chair", "Rocking Chair", "Swivel Chair", "Chaise Lounge", "Loveseat", "Ottoman", "Pouf", "Footstool", "Bench", "Daybed", "Coffee Table", "Center Table", "Side Table", "End Table", "Nesting Table", "C-Shaped Table", "Console Table", "Sofa Table", "Drink Table", "TV Unit", "TV Stand", "Media Console", "Entertainment Center", "Wall-Mounted TV Unit", "Display Unit", "Bookshelf", "Bookcase", "Display Cabinet", "Storage Cabinet", "Sideboard", "Credenza", "Chest", "Bar Cabinet"],
        "Bedroom": ["Single Bed", "Twin Bed", "Double Bed", "Queen Bed", "King Bed", "California King", "Platform Bed", "Storage Bed", "Hydraulic Storage Bed", "Upholstered Bed", "Wooden Bed", "Metal Bed", "Canopy Bed", "Four Poster Bed", "Bunk Bed", "Loft Bed", "Day Bed", "Bedside Table", "Nightstand", "Chest of Drawers", "Dresser", "Wardrobe", "Sliding Wardrobe", "Hinged Wardrobe", "Walk-in Wardrobe Storage", "Trunk", "Dressing Table", "Vanity Table", "Makeup Table", "Dressing Stool", "Vanity Chair", "Jewelry Cabinet", "Bedroom Bench", "Blanket Chest", "Bed End Bench", "Valet Stand"],
        "Dining": ["Dining Table", "2-Seater Dining Table", "4-Seater Dining Table", "6-Seater Dining Table", "8-Seater Dining Table", "10-Seater Dining Table", "Extendable Dining Table", "Round Dining Table", "Square Dining Table", "Rectangular Dining Table", "Oval Dining Table", "Dining Chair", "Arm Dining Chair", "Side Dining Chair", "Upholstered Dining Chair", "Dining Bench", "Bar Table", "Bar Counter", "Bar Stool", "Counter Stool", "Sideboard", "Buffet", "Crockery Unit", "China Cabinet", "Dining Cabinet", "Serving Cart"],
        "Home Office / Study": ["Study Table", "Writing Desk", "Computer Desk", "Executive Desk", "L-Shaped Desk", "Standing Desk", "Adjustable Desk", "Reception Desk", "Office Chair", "Executive Chair", "Ergonomic Chair", "Visitor Chair", "Conference Chair", "Bookshelf", "Bookcase", "Filing Cabinet", "Storage Cabinet", "Drawer Unit", "Printer Stand", "Monitor Stand", "Desk Organizer"],
        "Kids Furniture": ["Kids Bed", "Toddler Bed", "Bunk Bed", "Loft Bed", "Kids Study Table", "Kids Chair", "Kids Desk", "Toy Storage", "Toy Chest", "Kids Wardrobe", "Kids Bookshelf", "Kids Table", "Kids Bench", "Kids Stool"],
        "Entryway": ["Console Table", "Entryway Bench", "Shoe Rack", "Shoe Cabinet", "Coat Rack", "Hall Tree", "Storage Bench", "Entryway Cabinet", "Umbrella Stand", "Key Cabinet"],
        "Outdoor": ["Outdoor Sofa", "Patio Sofa", "Outdoor Chair", "Lounge Chair", "Adirondack Chair", "Outdoor Dining Table", "Outdoor Dining Chair", "Balcony Chair", "Balcony Table", "Swing Chair", "Hanging Chair", "Hammock", "Outdoor Bench", "Sun Lounger", "Deck Chair", "Outdoor Stool", "Garden Bench"],
        "Storage Furniture": ["Storage Cabinet", "Display Cabinet", "Bookshelf", "Bookcase", "Sideboard", "Credenza", "Chest of Drawers", "Drawer Cabinet", "Shoe Rack", "Shoe Cabinet", "Utility Cabinet", "Tall Cabinet", "Wall Cabinet", "Modular Storage", "Open Shelving", "Closed Storage", "Storage Bench", "Trunk", "Basket Storage"]
      }
    },
    {
      name: "Lighting",
      subcategories: {
        "Ceiling Lighting": ["Chandeliers", "Pendant Lights", "Ceiling Lights", "Flush Mount Lights", "Semi-Flush Mount", "Track Lights", "Recessed Lights", "Downlights", "Spotlights", "Panel Lights", "Cove Lights"],
        "Wall Lighting": ["Wall Sconces", "Wall Lamps", "Picture Lights", "Reading Lights", "Up & Down Lights", "Bedside Wall Lights", "Mirror Lights"],
        "Table Lighting": ["Table Lamps", "Bedside Lamps", "Desk Lamps", "Study Lamps", "Accent Lamps", "Banker Lamps", "Touch Lamps"],
        "Floor Lighting": ["Floor Lamps", "Arc Lamps", "Tripod Lamps", "Reading Floor Lamps", "Torchiere Lamps"],
        "Decorative Lighting": ["Fairy Lights", "String Lights", "LED Strips", "Neon Lights", "Lanterns", "Candle Lights", "Decorative Lamps"],
        "Outdoor Lighting": ["Garden Lights", "Pathway Lights", "Bollard Lights", "Outdoor Wall Lights", "Porch Lights", "Step Lights", "Solar Lights", "Landscape Lights"]
      }
    },
    {
      name: "Wall Décor",
      subcategories: {
        "Wall Art": ["Canvas Art", "Paintings", "Abstract Art", "Modern Art", "Contemporary Art", "Traditional Art", "Landscape Art", "Botanical Art", "Floral Art", "Portrait Art", "Typography Art", "Photography", "Digital Art", "Line Art", "Minimal Art", "Religious Art"],
        "Frames": ["Photo Frames", "Picture Frames", "Gallery Wall Sets", "Collage Frames", "Certificate Frames", "Art Frames"],
        "Decorative Wall Pieces": ["Metal Wall Art", "Wooden Wall Art", "Wall Sculptures", "Wall Plates", "Decorative Panels", "3D Wall Art", "Macramé Wall Hanging", "Tapestries", "Baskets for Wall", "Dream Catchers"],
        "Functional Wall Décor": ["Wall Clocks", "Wall Shelves", "Floating Shelves", "Key Holders", "Coat Hooks", "Wall Organizers", "Memo Boards", "Notice Boards", "Chalk Boards"]
      }
    },
    {
      name: "Rugs & Carpets",
      subcategories: {
        "Rug Types": ["Area Rugs", "Runner Rugs", "Round Rugs", "Square Rugs", "Shag Rugs", "Flatweave Rugs", "Braided Rugs", "Tufted Rugs", "Hand-Knotted Rugs", "Handwoven Rugs", "Machine-Made Rugs", "Outdoor Rugs", "Kids Rugs", "Playroom Rugs", "Bath Rugs", "Door Mats"],
        "Carpet": ["Wall-to-Wall Carpet", "Carpet Tiles", "Custom Carpet", "Indoor Carpet", "Outdoor Carpet"],
        "Styles": ["Persian", "Oriental", "Moroccan", "Geometric", "Abstract", "Floral", "Traditional", "Modern", "Minimal", "Boho", "Vintage", "Scandinavian"],
        "Accessories": ["Rug Pads", "Anti-Slip Mats", "Rug Grippers"]
      }
    },
    {
      name: "Mirrors",
      subcategories: {
        "Mirror Types": ["Wall Mirror", "Floor Mirror", "Full-Length Mirror", "Leaner Mirror", "Dressing Mirror", "Vanity Mirror", "Decorative Mirror", "Bathroom Mirror", "Door Mirror"],
        "Shapes": ["Round", "Oval", "Square", "Rectangle", "Arch", "Pill Shape", "Irregular", "Organic", "Geometric"],
        "Special Mirrors": ["LED Mirror", "Backlit Mirror", "Smart Mirror", "Framed Mirror", "Frameless Mirror", "Mirrored Cabinet", "Jewelry Mirror"],
        "Styles": ["Modern", "Minimal", "Luxury", "Vintage", "Traditional", "Industrial", "Boho", "Contemporary"]
      }
    },
    {
      name: "Home Accessories",
      subcategories: {
        "Vases & Planters": ["Vase", "Flower Vase", "Floor Vase", "Ceramic Vase", "Glass Vase", "Metal Vase", "Planter", "Plant Pot", "Hanging Planter", "Plant Stand", "Plant Basket"],
        "Decorative Objects": ["Sculptures", "Figurines", "Showpieces", "Decorative Objects", "Miniatures", "Collectibles", "Bookends", "Decorative Boxes", "Decorative Bowls", "Decorative Plates", "Urns"],
        "Candles": ["Candles", "Scented Candles", "Pillar Candles", "Tealight Candles", "Candle Holders", "Candle Stands", "Lanterns"],
        "Soft Furnishings": ["Cushions", "Cushion Covers", "Throw Pillows", "Throws", "Blankets", "Quilts", "Bed Runners", "Poufs"],
        "Table Décor": ["Trays", "Serving Trays", "Centerpieces", "Table Runners", "Coasters", "Placemats", "Fruit Bowls", "Napkin Holders"],
        "Organization": ["Storage Baskets", "Fabric Baskets", "Magazine Holders", "Organizers", "Tissue Boxes", "Key Trays", "Storage Boxes"]
      }
    },
    {
      name: "Curtains & Window Décor",
      subcategories: {
        "Curtains": ["Blackout Curtains", "Sheer Curtains", "Linen Curtains", "Cotton Curtains", "Velvet Curtains", "Printed Curtains", "Plain Curtains", "Thermal Curtains", "Eyelet Curtains", "Pleated Curtains"],
        "Blinds": ["Roller Blinds", "Roman Blinds", "Venetian Blinds", "Vertical Blinds", "Bamboo Blinds", "Wooden Blinds"],
        "Accessories": ["Curtain Rods", "Curtain Tracks", "Tiebacks", "Curtain Rings", "Curtain Hooks", "Finials"]
      }
    },
    {
      name: "Bedding & Textiles",
      subcategories: {
        "Bedding": ["Bedsheets", "Fitted Sheets", "Flat Sheets", "Duvet Covers", "Comforters", "Quilts", "Bedspreads", "Blankets", "Bed Runners"],
        "Pillows": ["Sleeping Pillows", "Decorative Pillows", "Bolster Pillows", "Memory Foam Pillows", "Cushion Inserts", "Pillow Covers"],
        "Mattress": ["Memory Foam Mattress", "Spring Mattress", "Hybrid Mattress", "Latex Mattress", "Orthopedic Mattress", "Mattress Topper", "Mattress Protector"]
      }
    },
    {
      name: "Dining & Tableware",
      subcategories: {
        "Dinnerware": ["Dinner Plates", "Side Plates", "Bowls", "Serving Plates", "Serving Bowls"],
        "Drinkware": ["Glasses", "Wine Glasses", "Tumblers", "Mugs", "Cups", "Coffee Cups"],
        "Serving": ["Serving Trays", "Serving Platters", "Cutlery", "Spoons", "Forks", "Knives", "Serving Spoons"],
        "Table Décor": ["Placemats", "Table Runners", "Napkin Rings", "Napkins", "Table Centerpieces", "Salt & Pepper Sets"]
      }
    },
    {
      name: "Kitchen Storage & Accessories",
      subcategories: {
        "Storage & Organization": ["Storage Jars", "Spice Jars", "Spice Racks", "Kitchen Organizers", "Cutlery Organizers", "Drawer Organizers", "Shelf Organizers", "Bottle Holders", "Bread Boxes", "Food Storage Containers", "Baskets", "Kitchen Trays", "Utensil Holders", "Kitchen Trolleys"]
      }
    },
    {
      name: "Outdoor & Balcony Décor",
      subcategories: {
        "Outdoor Décor": ["Outdoor Furniture", "Planters", "Garden Pots", "Plant Stands", "Hanging Planters", "Garden Sculptures", "Garden Lanterns", "Outdoor Rugs", "Outdoor Cushions", "Outdoor Lighting", "Bird Feeders", "Garden Décor", "Balcony Décor", "Patio Décor"]
      }
    },
    {
      name: "Bathroom Décor & Accessories",
      subcategories: {
        "Bathroom Accessories": ["Bathroom Mirrors", "Vanity Units", "Bathroom Cabinets", "Storage Shelves", "Towel Racks", "Towel Hooks", "Soap Dispensers", "Soap Dishes", "Toothbrush Holders", "Tissue Holders", "Bathroom Baskets", "Bath Mats", "Shower Curtains", "Bathroom Accessories Sets"]
      }
    }
  ],
  rooms: [
    "Living Room", "Master Bedroom", "Guest Bedroom", "Kids Bedroom", "Dining Room", "Modular Kitchen", "Home Office", "Study Room", "Bathroom", "Entryway", "Hallway", "Balcony", "Terrace", "Patio", "Garden", "Outdoor", "Nursery", "Guest Room", "Dressing Room", "Home Theatre", "Pooja Room", "Utility Room"
  ],
  styles: [
    "Modern", "Minimal", "Contemporary", "Luxury", "Scandinavian", "Japandi", "Boho", "Industrial", "Rustic", "Traditional", "Classic", "Vintage", "Retro", "Mid-Century Modern", "Farmhouse", "Coastal", "Mediterranean", "French Country", "Art Deco", "Indian Contemporary", "Modern Indian", "Transitional", "Eclectic", "Urban", "Cottage", "Tropical"
  ],
  materials: {
    "Wood": ["Solid Wood", "Teak", "Oak", "Walnut", "Sheesham", "Mango Wood", "Acacia", "Pine", "Engineered Wood", "MDF", "Plywood", "Veneer"],
    "Metal": ["Iron", "Steel", "Stainless Steel", "Brass", "Copper", "Aluminium"],
    "Other": ["Glass", "Marble", "Granite", "Stone", "Ceramic", "Porcelain", "Acrylic", "Rattan", "Cane", "Wicker", "Bamboo"],
    "Upholstery": ["Cotton", "Linen", "Velvet", "Leather", "Faux Leather", "Polyester", "Chenille", "Suede"]
  },
  colors: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Off White", hex: "#F8F8F2" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Taupe", hex: "#483C32" },
    { name: "Greige", hex: "#B0A99F" },
    { name: "Black", hex: "#000000" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Dark Brown", hex: "#3B2F2F" },
    { name: "Navy", hex: "#000080" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Natural Wood", hex: "#D2B48C" },
    { name: "Light Wood", hex: "#E9D6AF" },
    { name: "Dark Wood", hex: "#654321" },
    { name: "Terracotta", hex: "#E2725B" },
    { name: "Grey", hex: "#808080" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Red", hex: "#FF0000" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Purple", hex: "#800080" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Rose Gold", hex: "#B76E79" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Copper", hex: "#B87333" },
    { name: "Brass", hex: "#E1C16E" }
  ],
  sizes: [
    "Small", "Medium", "Large", "Extra Large", "Custom",
    "1-Seater", "2-Seater", "3-Seater", "4-Seater", "5-Seater", "6-Seater", "8-Seater", "10-Seater",
    "Single", "Double", "Queen", "King", "California King",
    "2×3 ft", "3×5 ft", "4×6 ft", "5×7 ft", "6×9 ft", "8×10 ft", "9×12 ft"
  ],
  shapes: ["Round", "Oval", "Square", "Rectangle", "Arch", "Curved", "Geometric", "Hexagonal", "Organic", "Irregular"],
  finishes: ["Matte", "Glossy", "Satin", "Polished", "Brushed", "Textured", "Natural", "Distressed", "Antique", "Rustic", "Lacquered", "Powder Coated", "Handcrafted"],
  statuses: ["New Arrival", "Best Seller", "Trending", "Featured", "Limited Edition", "Exclusive", "Made to Order", "Customizable", "Pre-Order", "In Stock", "Out of Stock"],
  ratings: [5, 4, 3, 2, 1],
  priceRanges: [
    { label: "Under ₹2,500", min: 0, max: 2500 },
    { label: "₹2,500–₹5,000", min: 2500, max: 5000 },
    { label: "₹5,000–₹10,000", min: 5000, max: 10000 },
    { label: "₹10,000–₹25,000", min: 10000, max: 25000 },
    { label: "₹25,000–₹50,000", min: 25000, max: 50000 },
    { label: "₹50,000–₹1,00,000", min: 50000, max: 100000 },
    { label: "₹1,00,000–₹2,50,000", min: 100000, max: 250000 },
    { label: "₹2,50,000+", min: 250000, max: Infinity }
  ],
  offers: ["On Sale", "Discounted", "Buy 1 Get 1", "Combo Offers", "Clearance", "Festive Offers", "Limited Time Offer", "Free Shipping", "Bank Offer"],
  specialFeatures: ["Assembly Required", "No Assembly Required", "Foldable", "Stackable", "Extendable", "Adjustable", "Height Adjustable", "Waterproof", "Weather Resistant", "Scratch Resistant", "Stain Resistant", "Washable", "Easy to Clean", "Eco-Friendly", "Sustainable", "Handmade", "Handcrafted", "Customizable", "Made in India", "Imported"],
  collections: ["New Collection", "Bestseller Collection", "Luxury Collection", "Minimal Collection", "Modern Collection", "Small Space Collection", "Apartment Collection", "Premium Collection", "Designer Collection", "Sustainable Collection", "Kids Collection", "Outdoor Collection", "Festive Collection", "Wedding Collection"]
};

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ShopSection({ onAddToCart, onToggleWishlist, wishlist = [], onSelectProduct }) {
  // --- Checkbox Multi-Select Filter States ---
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedFinishes, setSelectedFinishes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState({
    category: true,
    room: false,
    price: false,
    style: false,
    material: false,
    color: false,
    size: false,
    shape: false,
    finish: false,
    status: false,
    rating: false,
    offers: false,
    features: false,
    collections: false
  });

  const toggleSection = (section) => {
    setExpandedSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Helper function to toggle checkboxes in arrays
  const toggleArrayFilter = (setter, currentArray, value) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter(item => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  // --- Reusable Custom Checkbox UI Component ---
  const CheckboxItem = ({ label, isChecked, onChange }) => (
    <label className="flex items-center gap-2 py-1 text-xs text-stone-600 hover:text-[#2d241e] cursor-pointer select-none group">
      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isChecked ? 'bg-[#2d241e] border-[#2d241e]' : 'bg-white border-stone-300 group-hover:border-stone-400'}`}>
        {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
      </div>
      <span className={isChecked ? 'font-bold text-[#2d241e]' : 'font-medium'}>{label}</span>
    </label>
  );

  // --- Multi-Select Filtering Logic ---
  const filteredProducts = useMemo(() => {
    let items = PRODUCTS || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q));
    }

    if (selectedCategories.length > 0) {
      items = items.filter(p => selectedCategories.some(cat => cat.toLowerCase() === p.category?.toLowerCase()));
    }

    if (selectedRooms.length > 0) {
      items = items.filter(p => selectedRooms.some(room => room.toLowerCase() === p.room?.toLowerCase()));
    }

    if (selectedStyles.length > 0) {
      items = items.filter(p => selectedStyles.some(style => style.toLowerCase() === p.style?.toLowerCase()));
    }

    if (selectedPrices.length > 0) {
      items = items.filter(p => {
        return selectedPrices.some(idx => {
          const range = MASTER_FILTER_DATA.priceRanges[idx];
          return p.price >= range.min && p.price <= range.max;
        });
      });
    }

    if (selectedRatings.length > 0) {
      const minRating = Math.min(...selectedRatings);
      items = items.filter(p => (p.rating || 4.5) >= minRating);
    }

    if (sortBy === 'price-low') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      items = [...items].sort((a, b) => b.price - a.price);
    }

    return items;
  }, [searchQuery, selectedCategories, selectedRooms, selectedStyles, selectedPrices, selectedRatings, sortBy]);

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedProductTypes([]);
    setSelectedRooms([]);
    setSelectedPrices([]);
    setSelectedStyles([]);
    setSelectedMaterials([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedShapes([]);
    setSelectedFinishes([]);
    setSelectedStatuses([]);
    setSelectedRatings([]);
    setSelectedOffers([]);
    setSelectedFeatures([]);
    setSelectedCollections([]);
    setSearchQuery('');
  };

  const isWishlisted = (productId) => wishlist.some(item => item.id === productId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Explore Collection</h1>
          <p className="text-stone-500 text-sm mt-1">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search furniture, lights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-stone-300 rounded-lg text-sm w-full bg-white text-[#2d241e] focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white text-[#2d241e] focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#2d241e] text-white rounded-lg text-sm font-medium"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* --- SIDEBAR FILTERS (CHECKBOX ACCORDION) --- */}
        <aside className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'} space-y-4 bg-[#fbf9f5] p-5 rounded-2xl border border-stone-200 h-fit max-h-[85vh] overflow-y-auto sticky top-24`}>
          <div className="flex justify-between items-center border-b border-stone-200 pb-3">
            <h2 className="font-bold text-[#2d241e] text-base uppercase tracking-wider">Filters</h2>
            <button 
              onClick={resetFilters} 
              className="text-xs text-[#c89d7c] hover:underline font-medium flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset All
            </button>
          </div>

          {/* 1. CATEGORY */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('category')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>CATEGORY</span>
              {expandedSection.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.category && (
              <div className="space-y-1 text-xs">
                {MASTER_FILTER_DATA.categories.map((cat) => (
                  <div key={cat.name} className="space-y-1">
                    <div onClick={() => toggleArrayFilter(setSelectedCategories, selectedCategories, cat.name)}>
                      <CheckboxItem
                        label={cat.name}
                        isChecked={selectedCategories.includes(cat.name)}
                      />
                    </div>

                    {selectedCategories.includes(cat.name) && (
                      <div className="pl-5 border-l-2 border-stone-200 my-1 space-y-2">
                        {Object.entries(cat.subcategories).map(([sub, items]) => (
                          <div key={sub} className="py-0.5">
                            <span className="text-[10px] font-bold text-stone-400 block uppercase mb-1">{sub}</span>
                            {items.map(item => (
                              <div key={item} onClick={() => toggleArrayFilter(setSelectedProductTypes, selectedProductTypes, item)}>
                                <CheckboxItem
                                  label={item}
                                  isChecked={selectedProductTypes.includes(item)}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. ROOM */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('room')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>ROOM</span>
              {expandedSection.room ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.room && (
              <div className="space-y-1 text-xs max-h-40 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.rooms.map(room => (
                  <div key={room} onClick={() => toggleArrayFilter(setSelectedRooms, selectedRooms, room)}>
                    <CheckboxItem
                      label={room}
                      isChecked={selectedRooms.includes(room)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. PRICE */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('price')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>PRICE</span>
              {expandedSection.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.price && (
              <div className="space-y-1 text-xs">
                {MASTER_FILTER_DATA.priceRanges.map((range, idx) => (
                  <div key={range.label} onClick={() => toggleArrayFilter(setSelectedPrices, selectedPrices, idx)}>
                    <CheckboxItem
                      label={range.label}
                      isChecked={selectedPrices.includes(idx)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. STYLE */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('style')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>STYLE</span>
              {expandedSection.style ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.style && (
              <div className="space-y-1 text-xs max-h-36 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.styles.map(style => (
                  <div key={style} onClick={() => toggleArrayFilter(setSelectedStyles, selectedStyles, style)}>
                    <CheckboxItem
                      label={style}
                      isChecked={selectedStyles.includes(style)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 5. MATERIAL */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('material')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>MATERIAL</span>
              {expandedSection.material ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.material && (
              <div className="space-y-2 text-xs max-h-40 overflow-y-auto pr-1">
                {Object.entries(MASTER_FILTER_DATA.materials).map(([matCat, mats]) => (
                  <div key={matCat}>
                    <span className="text-[10px] font-bold text-stone-400 block uppercase mb-1">{matCat}</span>
                    {mats.map(mat => (
                      <div key={mat} onClick={() => toggleArrayFilter(setSelectedMaterials, selectedMaterials, mat)}>
                        <CheckboxItem
                          label={mat}
                          isChecked={selectedMaterials.includes(mat)}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 6. COLOR */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('color')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>COLOR</span>
              {expandedSection.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.color && (
              <div className="mt-2 flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
                {MASTER_FILTER_DATA.colors.map(color => {
                  const isChecked = selectedColors.includes(color.name);
                  return (
                    <button
                      key={color.name}
                      onClick={() => toggleArrayFilter(setSelectedColors, selectedColors, color.name)}
                      title={color.name}
                      className={`w-5 h-5 rounded-full border border-stone-300 relative flex items-center justify-center transition-all ${isChecked ? 'ring-2 ring-[#2d241e] scale-110' : ''}`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {isChecked && <Check className={`w-3 h-3 ${['White', 'Off White', 'Ivory', 'Cream', 'Yellow'].includes(color.name) ? 'text-black' : 'text-white'}`} />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 7. SIZE */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('size')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>SIZE</span>
              {expandedSection.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.size && (
              <div className="mt-2 flex flex-wrap gap-1 max-h-32 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.sizes.map(size => {
                  const isChecked = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleArrayFilter(setSelectedSizes, selectedSizes, size)}
                      className={`px-2 py-0.5 border rounded text-[10px] transition-all ${isChecked ? 'bg-[#2d241e] text-white border-[#2d241e]' : 'bg-white text-stone-700 hover:border-stone-400'}`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 8. SHAPE */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('shape')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>SHAPE</span>
              {expandedSection.shape ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.shape && (
              <div className="space-y-1 text-xs">
                {MASTER_FILTER_DATA.shapes.map(shape => (
                  <div key={shape} onClick={() => toggleArrayFilter(setSelectedShapes, selectedShapes, shape)}>
                    <CheckboxItem
                      label={shape}
                      isChecked={selectedShapes.includes(shape)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 9. FINISH */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('finish')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>FINISH</span>
              {expandedSection.finish ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.finish && (
              <div className="space-y-1 text-xs max-h-32 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.finishes.map(finish => (
                  <div key={finish} onClick={() => toggleArrayFilter(setSelectedFinishes, selectedFinishes, finish)}>
                    <CheckboxItem
                      label={finish}
                      isChecked={selectedFinishes.includes(finish)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 10. PRODUCT STATUS */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('status')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>PRODUCT STATUS</span>
              {expandedSection.status ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.status && (
              <div className="space-y-1 text-xs max-h-32 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.statuses.map(st => (
                  <div key={st} onClick={() => toggleArrayFilter(setSelectedStatuses, selectedStatuses, st)}>
                    <CheckboxItem
                      label={st}
                      isChecked={selectedStatuses.includes(st)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 11. RATING */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('rating')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>CUSTOMER RATING</span>
              {expandedSection.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.rating && (
              <div className="space-y-1 text-xs">
                {MASTER_FILTER_DATA.ratings.map(stars => (
                  <div key={stars} onClick={() => toggleArrayFilter(setSelectedRatings, selectedRatings, stars)}>
                    <CheckboxItem
                      label={`⭐ ${stars} Star${stars > 1 ? 's' : ''} & Above`}
                      isChecked={selectedRatings.includes(stars)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 12. OFFERS */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('offers')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>OFFERS</span>
              {expandedSection.offers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.offers && (
              <div className="space-y-1 text-xs">
                {MASTER_FILTER_DATA.offers.map(offer => (
                  <div key={offer} onClick={() => toggleArrayFilter(setSelectedOffers, selectedOffers, offer)}>
                    <CheckboxItem
                      label={offer}
                      isChecked={selectedOffers.includes(offer)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 13. SPECIAL FEATURES */}
          <div className="border-b border-stone-200 pb-3">
            <button onClick={() => toggleSection('features')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>SPECIAL FEATURES</span>
              {expandedSection.features ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.features && (
              <div className="space-y-1 text-xs max-h-32 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.specialFeatures.map(feat => (
                  <div key={feat} onClick={() => toggleArrayFilter(setSelectedFeatures, selectedFeatures, feat)}>
                    <CheckboxItem
                      label={feat}
                      isChecked={selectedFeatures.includes(feat)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 14. COLLECTION */}
          <div>
            <button onClick={() => toggleSection('collections')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>COLLECTION</span>
              {expandedSection.collections ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection.collections && (
              <div className="space-y-1 text-xs max-h-32 overflow-y-auto pr-1">
                {MASTER_FILTER_DATA.collections.map(col => (
                  <div key={col} onClick={() => toggleArrayFilter(setSelectedCollections, selectedCollections, col)}>
                    <CheckboxItem
                      label={col}
                      isChecked={selectedCollections.includes(col)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* --- PRODUCT GRID WITH ANIMATIONS --- */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#fbf9f5] rounded-2xl border border-stone-200">
              <p className="text-stone-500 font-medium text-sm">No products match your selected filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-[#2d241e] hover:bg-[#c89d7c] text-white rounded-lg text-xs font-semibold transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-stone-100">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                      {product.tag && (
                        <span className="absolute top-3 left-3 bg-[#2d241e] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                          {product.tag}
                        </span>
                      )}

                      {/* Wishlist Button */}
                      {onToggleWishlist && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product);
                          }}
                          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-white transition"
                        >
                          <Heart 
                            className={`w-4 h-4 ${isWishlisted(product.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`} 
                          />
                        </button>
                      )}
                    </div>

                    <div className="p-4 space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-stone-400 uppercase tracking-wider">
                        <span>{product.category}</span>
                        {product.rating && (
                          <span className="text-[#c89d7c] font-semibold flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-[#c89d7c]" /> {product.rating}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif font-bold text-[#2d241e] text-base group-hover:text-[#c89d7c] transition">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-[#2d241e]">
                      ₹{product.price?.toLocaleString()}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart && onAddToCart(product);
                      }}
                      className="bg-[#2d241e] hover:bg-[#c89d7c] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}