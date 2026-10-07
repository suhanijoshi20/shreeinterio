import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ALL_ROOMS = [
  { id: 'living-room', name: 'Living Room', desc: 'Sofa sets, coffee tables, TV units & ambient lighting.', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 'master-bedroom', name: 'Master Bedroom', desc: 'King size beds, wardrobes, nightstands & dressing tables.', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800' },
  { id: 'guest-bedroom', name: 'Guest Bedroom', desc: 'Cozy queen beds, luggage racks & welcoming decor.', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' },
  { id: 'kids-bedroom', name: 'Kids Bedroom', desc: 'Bunk beds, playful storage units & vibrant study desks.', image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80&w=800' },
  { id: 'dining-room', name: 'Dining Room', desc: 'Dining tables, crockery cabinets & comfortable seating.', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800' },
  { id: 'modular-kitchen', name: 'Modular Kitchen', desc: 'Smart kitchen cabinets, islands & space-saving storage.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
  { id: 'home-office', name: 'Home Office', desc: 'Ergonomic chairs, executive desks & filing cabinets.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'study-room', name: 'Study Room', desc: 'Bookshelves, study tables & distraction-free setups.', image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800' },
  { id: 'bathroom', name: 'Bathroom', desc: 'Vanity units, mirrors, storage cabinets & accessories.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 'entryway', name: 'Entryway', desc: 'Console tables, shoe racks, coat hangers & mirrors.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
  { id: 'hallway', name: 'Hallway', desc: 'Runner rugs, wall art, accent tables & slim cabinets.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 'balcony', name: 'Balcony', desc: 'Balcony chairs, small bistro sets, planters & swings.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 'terrace', name: 'Terrace', desc: 'Outdoor lounge sets, pergolas & weatherproof seating.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 'patio', name: 'Patio', desc: 'Patio dining tables, umbrellas & fire pit seating.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 'garden', name: 'Garden', desc: 'Garden benches, outdoor decor & planter stands.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800' },
  { id: 'outdoor', name: 'Outdoor', desc: 'All-weather furniture, sun loungers & outdoor lights.', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800' },
  { id: 'nursery', name: 'Nursery', desc: 'Cribs, nursing chairs, changing tables & soft decor.', image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=800' },
  { id: 'guest-room', name: 'Guest Room', desc: 'Comfortable daybeds, side tables & minimalist wardrobes.', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800' },
  { id: 'dressing-room', name: 'Dressing Room', desc: 'Full-length mirrors, vanity desks & walk-in closets.', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800' },
  { id: 'home-theatre', name: 'Home Theatre', desc: 'Recliners, acoustic wall panels & media consoles.', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800' },
  { id: 'pooja-room', name: 'Pooja Room', desc: 'Wooden mandirs, marble altars & spiritual storage.', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800' },
  { id: 'utility-room', name: 'Utility Room', desc: 'Laundry organizers, ironing stations & utility racks.', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800' }
];

export default function Rooms({ setActiveTab, setSelectedRoom }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleRoomClick = (roomName) => {
    if (setSelectedRoom) setSelectedRoom(roomName);
    if (setActiveTab) setActiveTab('shop');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10 overflow-hidden">
      {/* Header Section with Fade Down */}
      <div 
        className="text-center max-w-xl mx-auto space-y-2"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Shop Your Space</h1>
        <p className="text-xs text-[#8c7a6b]">Explore customized interior concepts and furniture organized by room type.</p>
      </div>

      {/* Cards Grid with Fade Up & Staggered Delays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_ROOMS.map((room, index) => (
          <div 
            key={room.id}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100} // Stagger effect per row
            onClick={() => handleRoomClick(room.name)}
            className="group bg-white rounded-xl overflow-hidden border border-[#e5ded4] cursor-pointer shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-serif font-bold text-[#2d241e]">{room.name}</h2>
                <p className="text-xs text-[#8c7a6b]">{room.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button className="text-xs font-bold text-[#c89d7c] group-hover:underline inline-flex items-center gap-1">
                View Room Collection →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}