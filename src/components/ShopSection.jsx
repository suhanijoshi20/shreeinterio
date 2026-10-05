import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Filter, RotateCcw, ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Star, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

// --- MASTER SHOP FILTER DATA (COMPLETE WITH ALL 14 FURNITURE CATEGORIES, SUB-SUBCATEGORIES & ALL ORIGINAL FILTERS) ---
const MASTER_FILTER_DATA = {
  categories: [
    {
      name: "Furniture",
      subcategories: {
        "1. Bathroom Furniture": {
          subSubcategories: {
            "Bathroom Cabinets": [
              "Floor Cabinets",
              "Mirror Cabinets",
              "Over the Toilet Storage",
              "Tall Cupboards",
              "Wall Cabinets"
            ],
            "Bathroom Shelves": [
              "Glass Shelves",
              "Wooden Shelves",
              "Metal Shelves",
              "Floating Shelves"
            ],
            "Towel Holders": [
              "Towel Bars", 
              "Towel Rings", 
              "Towel Stands"
            ],
            "Vanity Units": [
              "Wall Hung Vanities",
              "Floor Standing Vanities",
              "Double Sink Vanities"
            ],
            "Towel Racks": [
              "Wall Mounted Racks",
              "Standing Towel Racks",
              "Over the Door Racks"
            ]
          },
          items: [
            "Bathroom Furniture Sets",
            "Bathroom Mirrors",
            "Bathroom Stools",
            "Corner Shelves"
          ]
        },
        "2. Bedroom Furniture": {
          subSubcategories: {
            "Beds, Frames & Bases": [
              "Beds", 
              "Bed Slats", 
              "Box Springs", 
              "Footboards", 
              "Headboards", 
              "Bases", 
              "Frames", 
              "Platform Beds",
              "Storage Beds",
              "Upholstered Beds",
              "Wooden Beds"
            ],
            "Dressers & Chests of Drawers": [
              "3-Drawer Chests",
              "5-Drawer Chests",
              "Wide Dressers"
            ], 
            "Futons": [
              "Futon Frames", 
              "Futon Mattresses", 
              "Mattress Nonslip Pads"
            ], 
            "Mattresses & Box Springs": [
              "Box Springs", 
              "Folding Foam Pads",
              "Japanese Futon Mattresses", 
              "Mattress & Box Spring Sets", 
              "Mattress Toppers", 
              "Mattresses", 
              "Overlays", 
              "Waterbed Mattresses"
            ], 
            "Storage Trunks & Chests": [
              "Storage Chests", 
              "Storage Trunks"
            ]
          },
          items: [
            "Bedroom Sets",
            "Bedroom Wardrobes",
            "Bedside Tables",
            "Dressing Tables",
            "Quilt Stands",
            "Vanity Benches",
            "Bed End Benches",
            "Partitions"
          ]
        },
        "3. Dining Room Furniture": {
          subSubcategories: {
            "Dining Tables": [
              "Extendable Dining Tables",
              "Round Dining Tables",
              "Rectangular Dining Tables"
            ]
          },
          items: [
            "Benches",
            "Cabinets & Sideboards",
            "Dining Chairs",
            "Dining Room Sets",
            "Serving Trolleys",
            "Wine Racks and Cabinets"
          ]
        },
        "4. Garden & Outdoor Furniture": {
          subSubcategories: {
            "Patio Furniture Sets": [
              "Dining Sets",
              "Bar Sets", 
              "Conversation Sets",
              "Lounge Sets",
              "Bistro Sets"
            ], 
            "Hammocks, Swing Chairs & Accessories": [
              "Accessories", 
              "Hammocks", 
              "Swing Chairs"
            ], 
            "Patio Cushions": [
              "Benches", 
              "Canopy Swings", 
              "Loveseats", 
              "Sofas"
            ], 
            "Patio Furniture Covers" : [
               "Patio Canopy Swings", 
               "Patio Chair Covers",
               "Patio Furniture Covers",
               "Patio Ottoman Covers",
               "Patio Sofa Covers",
               "Patio Table Covers",
               "Patio Umbrella Covers",
               "Roofed Wicker Beach Chairs"
            ], 
            "Patio Seating": [
                "Bean Bag Chairs",
                "Canopy Swings",
                "Patio Benches",
                "Patio Chairs",
                "Patio Loveseats",
                "Patio Ottomans",
                "Patio Sofas",
                "Patio Stools",
                "Porch Swings",
                "Sunloungers"
            ], 
            "Privacy Screens & Protection": [
              "Balcony Privacy & Protective Screens"
            ], 
            "Tables": [
              "Patio Coffee Tables",
              "Patio Dining Tables",
              "Patio Side Tables",
              "Picnic Tables"
            ], 
            "Umbrellas & Shade": [
              "Patio Umbrella Stands & Bases",
              "Patio Umbrellas",
              "Shade Sails",
              "Sunscreen Fabric"
            ]
          },
          items: [
            "Canopies",
            "Cushion Covers",
            "Cushion Storage Bags",
            "Decorative Pillows",
            "Gazebos",
            "Serving Carts",
            "Storage Containers",
            "Tablecloths"
          ]
        },
        "5. Hallway Furniture": {
          subSubcategories: {
            "Shoe Organizers": [
              "Shoe Cabinets",
              "Shoe Racks",
              "Shoe Benches", 
              "Collapsible Shoe Racks",
              "Hanging Shoe Racks",
              "Over the Door Shoe Organizers",
              "Shoe Boxes",
              "Shoe Slots"
            ], 
            "Mirrors": [
              "Wall Mirrors"
            ]
          },
          items: [
            "Cabinets",
            "Chest of Drawers",
            "Coat Racks",
            "Doormats",
            "Hallway Furniture Sets",
            "Key Cabinets",
            "Slipper Racks",
            "Storage Benches",
            "Umbrella Holders",
            "Wall Coat Racks"
          ]
        },
        "6. Home Bar Furniture": {
          subSubcategories: {
            "Bar Cabinets": [
              "Corner Bar Cabinets",
              "Mini Bar Cabinets"
            ], 
            "Wine Racks": [
              "Tabletop Wine Racks",
              "Wall-Mounted Wine Racks"
            ]
          },
          items: [
            "Bar Sets",
            "Barstools",
            "Bar Tables",
            "Wine Cabinets",
            "Wine Trolleys",
            "Portable Bars"
          ]
        },
        "7. Home Entertainment Furniture": {
          subSubcategories: {
            "CD & DVD Racks": [
              "CD Racks",
              "Combined CD & DVD Racks"
            ],
            "TV Stands & Multimedia Centres": [
              "Lowboard TV Stands",
              "Corner TV Stands",
              "Floating TV Units"
            ]
          },
          items: [
            "Audio-Visual Shelving",
            "Game Tables",
            "Home Theatre Seating",
            "Media Storage",
            "TV Trays",
            "Video Game Chairs"
          ]
        },
        "8. Home Office Furniture": {
          subSubcategories: {},
          items: []
        },
        "9. Kids' Furniture": {
          subSubcategories: {
            "Beds": [
              "Toddler Beds",
              "Bunk Beds",
              "Loft Beds"
            ], 
            "Chairs": [
              "Armchairs",
              "Bean Bags",
              "Desk Chairs",
              "Folding Chairs",
              "Rocking Chairs"
            ]
          },
          items: [
            "Bedroom Sets",
            "Bookcases",
            "Cabinets",
            "Chairs",
            "Desk Sets",
            "Desks",
            "Dressing Tables",
            "Poufs",
            "Shelves",
            "Sofas",
            "Step Stools",
            "Stools",
            "Table & Chair Sets",
            "Tables",
            "Toy Bags & Nets",
            "Toy Chests",
            "Wardrobes"
          ]
        },
        "10. Kitchen Furniture": {
          subSubcategories: {
             "Baker's Racks": [
              "Corner Baker's Racks",
              "Standing Baker's Racks"
             ],
             "Cabinet Cases": [
              "Floor Cabinets",
              "Kitchen Units",
              "Tall Cupboards & Pantries",
              "Wall Cabinets"
             ],
            "Storage Islands & Carts": [
              "Rolling Kitchen Carts",
              "Mobile Storage Islands",
              "Stationary Storage Islands","Storage Carts",
              "Kitchen Islands with Seating"
            ]
          },
          items: [
            "Benches",
            "Dining Chairs",
            "Dining Room Sets",
            "Dining Tables"
          ]
        },
        "11. Living Room Furniture": {
          subSubcategories: {
            "Bean Bags, Covers & Refills": [
              "Bean Bag Covers",
              "Bean Bag Refills",
              "Filled Bean Bags"
             ],
            "Cabinets": [
              "Cabinets & Sideboards",
              "Highboards"
             ],
             "Chairs": [
              "Armchairs",
              "Floor Chairs",
              "Folding Chairs",
              "Recliners",
              "Relax Armchairs & Chaise Longues",
              "Rocking Chairs",
              "Stacking Chairs",
              "Tub Chairs"
             ],
             "Stools": [
              "Folding Stools"
             ],
            "Sofas & Couches": [
              "Sectional Sofas",
              "L-Shaped Sofas",
              "Sofa Beds",
              "Recliner Sofas"
            ],
            "Tables": [
              "Chabudai",
              "Coffee Tables",
              "Console & Sofa Tables",
              "End Tables",
              "Folding Tables",
              "Nesting Tables",
              "Pedestal Tables"
            ]
          },
          items: [
            "Bookcases",
            "Chairs",
            "Gliders",
            "Inflatable Sofas",
            "Ladder Shelves",
            "Living Room Sets",
            "Magazine Racks",
            "Ottomans",
            "Poufs",
            "Sofa Sets",
            "Stools",
            "TV & Entertainment Units",
            "Wall Shelves"
          ]
        },
        "12. Seating Furniture": {
          subSubcategories: {
             "Bean Bags, Covers & Refills": [
              "Bean Bag Covers",
              "Bean Bag Refills",
              "Filled Bean Bags"
             ]
          },
          items: []
        },
        "13. Storage Furniture": {
          subSubcategories: {},
          items: []
        },
        "14. Study & Home Office Furniture": {
          subSubcategories: {
            "Cabinets & Cupboards": [
              "Bookcases",
              "Cupboards",
              "Drawers",
              "File Cabinets",
              "Key Cabinets",
              "Storage Cabinets"
            ],
             "Carts": [
              "Book Carts",
              "Storage Drawer Carts",
              "Utility Carts"
             ],
             "Chairs & Sofas": [
              "Computer Gaming Chairs",
              "Desk Chairs",
              "Reception Chairs",
              "Stools"
             ],
            "Desks & Workstations": [
              "Computer Workstations",
              "Desks",
              "Writing Desks",
              "Computer Desks",
              "Standing Desks",
              "L-Shaped Desks"
            ],
            "Furniture Accessories": [
              "Back & Seat Cushions",
              "Casters",
              "Chair Armrests, Parts & Accessories",
              "Chair Mats",
              "Footrests",
              "Hutch Attachments",
              "Partitions"
            ],
            "Platforms, Stands & Shelves": [
              "Desktop & Off-Surface Shelves",
              "Desktop Book Stands",
              "Lap Desks",
              "Monitor Stands",
             " Notebook Computer Stands",
              "Presentation Stands",
              "Printer Desktop Stands",
              "Telephone Stands"
            ],
            "Tables": [
              "Bureaus",
              "Conference Room Tables",
             " Drafting Tables",
              "Table & Chair Sets",
              "Utility Tables"
            ]
          },
          items: [
            "Chairs & Sofas",
            "Furniture Sets",
            "Lecterns & Podiums"
          ]
        }
      }
    },
    {
      name: "Lighting",
      subcategories: {
        "Ceiling Lighting": { items: ["Chandeliers", "Pendant Lights", "Ceiling Lights", "Flush Mount Lights", "Semi-Flush Mount", "Track Lights", "Recessed Lights", "Downlights", "Spotlights", "Panel Lights", "Cove Lights"] },
        "Wall Lighting": { items: ["Wall Sconces", "Wall Lamps", "Picture Lights", "Reading Lights", "Up & Down Lights", "Bedside Wall Lights", "Mirror Lights"] },
        "Table Lighting": { items: ["Table Lamps", "Bedside Lamps", "Desk Lamps", "Study Lamps", "Accent Lamps", "Banker Lamps", "Touch Lamps"] },
        "Floor Lighting": { items: ["Floor Lamps", "Arc Lamps", "Tripod Lamps", "Reading Floor Lamps", "Torchiere Lamps"] },
        "Decorative Lighting": { items: ["Fairy Lights", "String Lights", "LED Strips", "Neon Lights", "Lanterns", "Candle Lights", "Decorative Lamps"] },
        "Outdoor Lighting": { items: ["Garden Lights", "Pathway Lights", "Bollard Lights", "Outdoor Wall Lights", "Porch Lights", "Step Lights", "Solar Lights", "Landscape Lights"] }
      }
    },
    {
      name: "Wall Décor",
      subcategories: {
        "Wall Art": { items: ["Canvas Art", "Paintings", "Abstract Art", "Modern Art", "Contemporary Art", "Traditional Art", "Landscape Art", "Botanical Art", "Floral Art", "Portrait Art", "Typography Art", "Photography", "Digital Art", "Line Art", "Minimal Art", "Religious Art"] },
        "Frames": { items: ["Photo Frames", "Picture Frames", "Gallery Wall Sets", "Collage Frames", "Certificate Frames", "Art Frames"] },
        "Decorative Wall Pieces": { items: ["Metal Wall Art", "Wooden Wall Art", "Wall Sculptures", "Wall Plates", "Decorative Panels", "3D Wall Art", "Macramé Wall Hanging", "Tapestries", "Baskets for Wall", "Dream Catchers"] },
        "Functional Wall Décor": { items: ["Wall Clocks", "Wall Shelves", "Floating Shelves", "Key Holders", "Coat Hooks", "Wall Organizers", "Memo Boards", "Notice Boards", "Chalk Boards"] }
      }
    },
    {
      name: "Rugs & Carpets",
      subcategories: {
        "Rug Types": { items: ["Area Rugs", "Runner Rugs", "Round Rugs", "Square Rugs", "Shag Rugs", "Flatweave Rugs", "Braided Rugs", "Tufted Rugs", "Hand-Knotted Rugs", "Handwoven Rugs", "Machine-Made Rugs", "Outdoor Rugs", "Kids Rugs", "Playroom Rugs", "Bath Rugs", "Door Mats"] },
        "Carpet": { items: ["Wall-to-Wall Carpet", "Carpet Tiles", "Custom Carpet", "Indoor Carpet", "Outdoor Carpet"] },
        "Styles": { items: ["Persian", "Oriental", "Moroccan", "Geometric", "Abstract", "Floral", "Traditional", "Modern", "Minimal", "Boho", "Vintage", "Scandinavian"] },
        "Accessories": { items: ["Rug Pads", "Anti-Slip Mats", "Rug Grippers"] }
      }
    },
    {
      name: "Mirrors",
      subcategories: {
        "Mirror Types": { items: ["Wall Mirror", "Floor Mirror", "Full-Length Mirror", "Leaner Mirror", "Dressing Mirror", "Vanity Mirror", "Decorative Mirror", "Bathroom Mirror", "Door Mirror"] },
        "Shapes": { items: ["Round", "Oval", "Square", "Rectangle", "Arch", "Pill Shape", "Irregular", "Organic", "Geometric"] },
        "Special Mirrors": { items: ["LED Mirror", "Backlit Mirror", "Smart Mirror", "Framed Mirror", "Frameless Mirror", "Mirrored Cabinet", "Jewelry Mirror"] },
        "Styles": { items: ["Modern", "Minimal", "Luxury", "Vintage", "Traditional", "Industrial", "Boho", "Contemporary"] }
      }
    },
    {
      name: "Home Accessories",
      subcategories: {
        "Vases & Planters": { items: ["Vase", "Flower Vase", "Floor Vase", "Ceramic Vase", "Glass Vase", "Metal Vase", "Planter", "Plant Pot", "Hanging Planter", "Plant Stand", "Plant Basket"] },
        "Decorative Objects": { items: ["Sculptures", "Figurines", "Showpieces", "Decorative Objects", "Miniatures", "Collectibles", "Bookends", "Decorative Boxes", "Decorative Bowls", "Decorative Plates", "Urns"] },
        "Candles": { items: ["Candles", "Scented Candles", "Pillar Candles", "Tealight Candles", "Candle Holders", "Candle Stands", "Lanterns"] },
        "Soft Furnishings": { items: ["Cushions", "Cushion Covers", "Throw Pillows", "Throws", "Blankets", "Quilts", "Bed Runners", "Poufs"] },
        "Table Décor": { items: ["Trays", "Serving Trays", "Centerpieces", "Table Runners", "Coasters", "Placemats", "Fruit Bowls", "Napkin Holders"] },
        "Organization": { items: ["Storage Baskets", "Fabric Baskets", "Magazine Holders", "Organizers", "Tissue Boxes", "Key Trays", "Storage Boxes"] }
      }
    },
    {
      name: "Curtains & Window Décor",
      subcategories: {
        "Curtains": { items: ["Blackout Curtains", "Sheer Curtains", "Linen Curtains", "Cotton Curtains", "Velvet Curtains", "Printed Curtains", "Plain Curtains", "Thermal Curtains", "Eyelet Curtains", "Pleated Curtains"] },
        "Blinds": { items: ["Roller Blinds", "Roman Blinds", "Venetian Blinds", "Vertical Blinds", "Bamboo Blinds", "Wooden Blinds"] },
        "Accessories": { items: ["Curtain Rods", "Curtain Tracks", "Tiebacks", "Curtain Rings", "Curtain Hooks", "Finials"] }
      }
    },
    {
      name: "Bedding & Textiles",
      subcategories: {
        "Bedding": { items: ["Bedsheets", "Fitted Sheets", "Flat Sheets", "Duvet Covers", "Comforters", "Quilts", "Bedspreads", "Blankets", "Bed Runners"] },
        "Pillows": { items: ["Sleeping Pillows", "Decorative Pillows", "Bolster Pillows", "Memory Foam Pillows", "Cushion Inserts", "Pillow Covers"] },
        "Mattress": { items: ["Memory Foam Mattress", "Spring Mattress", "Hybrid Mattress", "Latex Mattress", "Orthopedic Mattress", "Mattress Topper", "Mattress Protector"] }
      }
    },
    {
      name: "Dining & Tableware",
      subcategories: {
        "Dinnerware": { items: ["Dinner Plates", "Side Plates", "Bowls", "Serving Plates", "Serving Bowls"] },
        "Drinkware": { items: ["Glasses", "Wine Glasses", "Tumblers", "Mugs", "Cups", "Coffee Cups"] },
        "Serving": { items: ["Serving Trays", "Serving Platters", "Cutlery", "Spoons", "Forks", "Knives", "Serving Spoons"] },
        "Table Décor": { items: ["Placemats", "Table Runners", "Napkin Rings", "Napkins", "Table Centerpieces", "Salt & Pepper Sets"] }
      }
    },
    {
      name: "Kitchen Storage & Accessories",
      subcategories: {
        "Storage & Organization": { items: ["Storage Jars", "Spice Jars", "Spice Racks", "Kitchen Organizers", "Cutlery Organizers", "Drawer Organizers", "Shelf Organizers", "Bottle Holders", "Bread Boxes", "Food Storage Containers", "Baskets", "Kitchen Trays", "Utensil Holders", "Kitchen Trolleys"] }
      }
    },
    {
      name: "Outdoor & Balcony Décor",
      subcategories: {
        "Outdoor Décor": { items: ["Outdoor Furniture", "Planters", "Garden Pots", "Plant Stands", "Hanging Planters", "Garden Sculptures", "Garden Lanterns", "Outdoor Rugs", "Outdoor Cushions", "Outdoor Lighting", "Bird Feeders", "Garden Décor", "Balcony Décor", "Patio Décor"] }
      }
    },
    {
      name: "Bathroom Décor & Accessories",
      subcategories: {
        "Bathroom Accessories": { items: ["Bathroom Mirrors", "Vanity Units", "Bathroom Cabinets", "Storage Shelves", "Towel Racks", "Towel Hooks", "Soap Dispensers", "Soap Dishes", "Toothbrush Holders", "Tissue Holders", "Bathroom Baskets", "Bath Mats", "Shower Curtains", "Bathroom Accessories Sets"] }
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
    room: true,
    price: true,
    style: true,
    material: true,
    color: true,
    size: true,
    shape: true,
    finish: true,
    status: true,
    rating: true,
    offers: true,
    features: true,
    collections: true
  });

  // Drill-down navigation state (Amazon style)
  const [drillLevel, setDrillLevel] = useState(null);
  const [selectedSubItemForSubSub, setSelectedSubItemForSubSub] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleArrayFilter = (setter, currentArray, value) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter(item => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  const filteredProducts = useMemo(() => {
    let items = PRODUCTS || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q));
    }

    if (selectedCategories.length > 0) {
      items = items.filter(p => selectedCategories.some(cat => cat.toLowerCase() === p.category?.toLowerCase()));
    }

    if (selectedProductTypes.length > 0) {
      items = items.filter(p => selectedProductTypes.some(type => type.toLowerCase() === p.subCategory?.toLowerCase() || p.name?.toLowerCase().includes(type.toLowerCase())));
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
  }, [searchQuery, selectedCategories, selectedProductTypes, selectedRooms, selectedStyles, selectedPrices, selectedRatings, sortBy]);

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
    setDrillLevel(null);
    setSelectedSubItemForSubSub(null);
  };

  const isWishlisted = (productId) => wishlist.some(item => item.id === productId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Explore Collection</h1>
          <p className="text-stone-500 text-sm mt-1">Showing {filteredProducts.length} results</p>
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
        {/* --- SIDEBAR FILTERS (ALL ORIGINAL FILTERS & AMAZON DRILL-DOWN INCLUDED) --- */}
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

          {/* 1. CATEGORY WITH AMAZON STYLE DRILL-DOWN FLOW */}
          <div className="border-b border-stone-200 pb-3 overflow-hidden relative min-h-[220px]">
            <button onClick={() => toggleSection('category')} className="flex justify-between items-center w-full font-semibold text-[#2d241e] text-xs uppercase tracking-wider mb-2">
              <span>CATEGORY</span>
              {expandedSection.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedSection.category && (
              <div className="relative text-xs">
                {/* LEVEL 0: Main Categories List */}
                {!drillLevel && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-1">
                    {MASTER_FILTER_DATA.categories.map((cat) => (
                      <div 
                        key={cat.name}
                        onClick={() => {
                          toggleArrayFilter(setSelectedCategories, selectedCategories, cat.name);
                          setDrillLevel({ type: 'subcat', categoryName: cat.name });
                        }}
                        className="py-1.5 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 flex items-center justify-between text-stone-700 font-medium group"
                      >
                        <span className={selectedCategories.includes(cat.name) ? 'font-bold text-[#c89d7c]' : ''}>{cat.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#c89d7c]" />
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* LEVEL 1: Subcategories List */}
                {drillLevel?.type === 'subcat' && (() => {
                  const currentCat = MASTER_FILTER_DATA.categories.find(c => c.name === drillLevel.categoryName);
                  if (!currentCat) return null;

                  const subcategoriesObj = currentCat.subcategories;

                  return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-1">
                      <button 
                        onClick={() => setDrillLevel(null)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#c89d7c] mb-2 pb-2 border-b border-stone-200 w-full hover:underline"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Categories
                      </button>

                      <div className="font-bold text-[#2d241e] text-xs pb-1 uppercase tracking-wider">{currentCat.name}</div>

                      {Object.keys(subcategoriesObj).map((subName) => (
                        <div 
                          key={subName}
                          onClick={() => {
                            toggleArrayFilter(setSelectedProductTypes, selectedProductTypes, subName);
                            setDrillLevel({ type: 'subSubcat', categoryName: currentCat.name, subName: subName });
                            setSelectedSubItemForSubSub(null);
                          }}
                          className="py-1.5 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 flex items-center justify-between text-stone-600 group"
                        >
                          <span className={selectedProductTypes.includes(subName) ? 'font-bold text-[#c89d7c]' : ''}>{subName}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#c89d7c]" />
                        </div>
                      ))}
                    </motion.div>
                  );
                })()}

                {/* LEVEL 2: Sub-subcategories (Jispar click karoge sirf usi ka sub-sub open hoga) */}
                {drillLevel?.type === 'subSubcat' && (() => {
                  const currentCat = MASTER_FILTER_DATA.categories.find(c => c.name === drillLevel.categoryName);
                  const subData = currentCat?.subcategories[drillLevel.subName];
                  if (!subData) return null;

                  const subSubMap = subData.subSubcategories || {};
                  const regularItems = subData.items || [];

                  return (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-1">
                      <button 
                        onClick={() => {
                          if (selectedSubItemForSubSub) {
                            setSelectedSubItemForSubSub(null);
                          } else {
                            setDrillLevel({ type: 'subcat', categoryName: drillLevel.categoryName });
                          }
                        }}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#c89d7c] mb-2 pb-2 border-b border-stone-200 w-full hover:underline"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> {selectedSubItemForSubSub ? `Back to ${drillLevel.subName}` : `Back to ${drillLevel.categoryName}`}
                      </button>

                      <div className="font-bold text-[#2d241e] text-xs pb-1 uppercase tracking-wider">{drillLevel.subName}</div>

                      {/* Agar koi specific sub-item open kiya hai jiski sub-sub categories hain */}
                      {selectedSubItemForSubSub ? (
                        <div className="space-y-1">
                          <div className="font-bold text-[#c89d7c] text-xs py-1">{selectedSubItemForSubSub}</div>
                          {subSubMap[selectedSubItemForSubSub]?.map(subItem => (
                            <div 
                              key={subItem}
                              onClick={() => toggleArrayFilter(setSelectedProductTypes, selectedProductTypes, subItem)}
                              className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedProductTypes.includes(subItem) ? 'font-bold text-[#c89d7c]' : 'text-stone-500'}`}
                            >
                              {subItem}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          {/* List of items that have sub-subcategories */}
                          {Object.keys(subSubMap).map(itemWithSub => (
                            <div 
                              key={itemWithSub}
                              onClick={() => setSelectedSubItemForSubSub(itemWithSub)}
                              className="py-1.5 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 flex items-center justify-between text-stone-700 font-medium group"
                            >
                              <span>{itemWithSub}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#c89d7c]" />
                            </div>
                          ))}

                          {/* Regular Items without sub-subcategories */}
                          {regularItems.map(item => (
                            <div 
                              key={item}
                              onClick={() => toggleArrayFilter(setSelectedProductTypes, selectedProductTypes, item)}
                              className={`py-1.5 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedProductTypes.includes(item) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                            >
                              {item}
                            </div>
                          ))}
                        </>
                      )}
                    </motion.div>
                  );
                })()}
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
                  <div 
                    key={room} 
                    onClick={() => toggleArrayFilter(setSelectedRooms, selectedRooms, room)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedRooms.includes(room) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {room}
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
                  <div 
                    key={range.label} 
                    onClick={() => toggleArrayFilter(setSelectedPrices, selectedPrices, idx)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedPrices.includes(idx) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {range.label}
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
                  <div 
                    key={style} 
                    onClick={() => toggleArrayFilter(setSelectedStyles, selectedStyles, style)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedStyles.includes(style) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {style}
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
                      <div 
                        key={mat} 
                        onClick={() => toggleArrayFilter(setSelectedMaterials, selectedMaterials, mat)}
                        className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedMaterials.includes(mat) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                      >
                        {mat}
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
                    />
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
                  <div 
                    key={shape} 
                    onClick={() => toggleArrayFilter(setSelectedShapes, selectedShapes, shape)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedShapes.includes(shape) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {shape}
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
                  <div 
                    key={finish} 
                    onClick={() => toggleArrayFilter(setSelectedFinishes, selectedFinishes, finish)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedFinishes.includes(finish) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {finish}
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
                  <div 
                    key={st} 
                    onClick={() => toggleArrayFilter(setSelectedStatuses, selectedStatuses, st)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedStatuses.includes(st) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {st}
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
                  <div 
                    key={stars} 
                    onClick={() => toggleArrayFilter(setSelectedRatings, selectedRatings, stars)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedRatings.includes(stars) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    ⭐ {stars} Star{stars > 1 ? 's' : ''} & Above
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
                  <div 
                    key={offer} 
                    onClick={() => toggleArrayFilter(setSelectedOffers, selectedOffers, offer)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedOffers.includes(offer) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {offer}
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
                  <div 
                    key={feat} 
                    onClick={() => toggleArrayFilter(setSelectedFeatures, selectedFeatures, feat)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedFeatures.includes(feat) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {feat}
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
                  <div 
                    key={col} 
                    onClick={() => toggleArrayFilter(setSelectedCollections, selectedCollections, col)}
                    className={`py-1 px-2 rounded cursor-pointer transition-colors duration-200 hover:text-[#c89d7c] hover:bg-stone-100 ${selectedCollections.includes(col) ? 'font-bold text-[#c89d7c]' : 'text-stone-600'}`}
                  >
                    {col}
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* --- PRODUCT GRID --- */}
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