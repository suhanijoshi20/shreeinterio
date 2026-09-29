// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function Categories({ subTab, setActiveTab }) {
//   return (
//     <div className="py-12 max-w-5xl mx-auto px-4 space-y-8">
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Design Services & Categories</h1>
//         <p className="text-stone-600 text-xs md:text-sm">Explore our customized interior solutions tailored for Indore homes.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className={`p-6 rounded-xl border transition ${subTab === 'kitchen' ? 'border-amber-700 bg-amber-50/50' : 'border-stone-200 bg-white'}`}>
//           <h3 className="text-lg font-bold font-serif mb-2">Modular Kitchen Design</h3>
//           <p className="text-xs text-stone-600 mb-4">Acrylic, PU polish, soft-close hardware & quartz countertops.</p>
//           <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-amber-700 flex items-center gap-1">
//             Get Quote <ArrowRight size={12} />
//           </button>
//         </div>

//         <div className={`p-6 rounded-xl border transition ${subTab === 'homeInteriors' ? 'border-amber-700 bg-amber-50/50' : 'border-stone-200 bg-white'}`}>
//           <h3 className="text-lg font-bold font-serif mb-2">Home Interior Design</h3>
//           <p className="text-xs text-stone-600 mb-4">Complete residential turn-key interior design & execution.</p>
//           <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-amber-700 flex items-center gap-1">
//             Get Quote <ArrowRight size={12} />
//           </button>
//         </div>

//         <div className={`p-6 rounded-xl border transition ${subTab === 'customFurniture' ? 'border-amber-700 bg-amber-50/50' : 'border-stone-200 bg-white'}`}>
//           <h3 className="text-lg font-bold font-serif mb-2">Customized Furniture</h3>
//           <p className="text-xs text-stone-600 mb-4">Bespoke Sheesham, Teak wood and velvet upholstered furniture.</p>
//           <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-amber-700 flex items-center gap-1">
//             Get Quote <ArrowRight size={12} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }