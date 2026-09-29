// import React from 'react';
// import { CheckCircle2, ArrowRight } from 'lucide-react';

// export default function ModularKitchen({ setActiveTab }) {
//   return (
//     <div className="py-10 max-w-7xl mx-auto px-4 space-y-12">
      
//       {/* Header Banner */}
//       <div className="bg-[#2d241e] text-white p-8 md:p-12 rounded-2xl space-y-4">
//         <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">INDORE'S KITCHEN EXPERTS</span>
//         <h1 className="text-3xl md:text-5xl font-serif">Modular Kitchen Design in Indore</h1>
//         <p className="text-[#d9cdbf] text-xs md:text-sm max-w-2xl leading-relaxed">
//           Smart Kitchens Designed Around Your Lifestyle. At ShreeInterio, we design modular kitchens that combine functionality, storage, aesthetics and efficient space planning.
//         </p>
//       </div>

//       {/* Kitchen Types */}
//       <div className="space-y-6">
//         <h2 className="text-2xl font-serif text-[#2d241e]">Our Modular Kitchen Solutions</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//           {[
//             'L-Shaped Kitchen', 'U-Shaped Kitchen', 'Parallel Kitchen', 
//             'Straight Kitchen', 'Island Kitchen', 'Open Kitchen', 
//             'Modular Storage', 'Tall Units', 'Pantry Units', 'Kitchen Accessories'
//           ].map((type, idx) => (
//             <div key={idx} className="bg-white p-4 rounded-xl border border-[#e5dcd3] text-center space-y-2">
//               <span className="text-xs font-bold text-[#8c6d53] block">{type}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Why Choose */}
//       <div className="bg-[#f4eee8] p-8 rounded-2xl border border-[#e5dcd3] space-y-6">
//         <h2 className="text-2xl font-serif text-[#2d241e]">Why Choose a ShreeInterio Kitchen?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {[
//             'Customized layouts', 'Smart storage solutions', 'Modern finishes & Acrylic', 
//             'Functional work zones', 'Customized colours', '3D visualization', 
//             'Professional installation', 'Complete execution support'
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#2d241e]">
//               <CheckCircle2 size={16} className="text-[#8c6d53]" />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="text-center space-y-4 bg-white p-8 rounded-xl border border-[#e5dcd3]">
//         <h3 className="text-2xl font-serif text-[#2d241e]">Design Your Dream Kitchen</h3>
//         <p className="text-xs text-[#6b5a4e]">Share your kitchen dimensions or floor plan with us and our design team can help you create a practical and beautiful kitchen.</p>
//         <button onClick={() => setActiveTab('contact')} className="bg-[#8c6d53] text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
//           Get a Kitchen Design <ArrowRight size={14} />
//         </button>
//       </div>

//     </div>
//   );
// }