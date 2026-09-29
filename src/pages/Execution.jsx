// import React, { useState } from 'react';
// import { Search, MapPin, Calendar, Camera, CheckCircle2, Clock, Image as ImageIcon, X } from 'lucide-react';

// const projectsData = [
//   {
//     id: 'IND-2026-088',
//     clientName: 'Er. Rajesh Sharma',
//     location: 'Vijay Nagar, Indore',
//     projectType: '3 BHK Complete Home Interior',
//     designer: 'Ar. Bhargava',
//     currentStage: 'Woodwork & Modular Assembly',
//     progress: 70,
//     targetDate: '30 Mar 2026',
//     status: 'In Progress',
//     category: 'Woodwork',
//     recentPhotos: [
//       {
//         id: 1,
//         url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
//         caption: 'Living Room TV Unit & Paneling Work',
//         date: '26 Sep 2026',
//         stage: 'Woodwork'
//       },
//       {
//         id: 2,
//         url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
//         caption: 'Modular Kitchen Carcass Fitting',
//         date: '24 Sep 2026',
//         stage: 'Kitchen Installation'
//       },
//       {
//         id: 3,
//         url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
//         caption: 'False Ceiling & Cove Lighting Wiring',
//         date: '20 Sep 2026',
//         stage: 'Electrical & Ceiling'
//       }
//     ]
//   },
//   {
//     id: 'IND-2026-092',
//     clientName: 'Dr. Ananya Verma',
//     location: 'Bicholi Mardana, Indore',
//     projectType: 'Luxury Modular Kitchen & Dining',
//     designer: 'Interior Expert Neha',
//     currentStage: 'Civil & Tile Installation',
//     progress: 35,
//     targetDate: '15 Apr 2026',
//     status: 'Civil & Electric Work',
//     category: 'Civil',
//     recentPhotos: [
//       {
//         id: 4,
//         url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
//         caption: 'Dado Tiles & Plumbing Point Markings',
//         date: '25 Sep 2026',
//         stage: 'Civil Work'
//       },
//       {
//         id: 5,
//         url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
//         caption: 'Electrical Conduit Pipes Layout',
//         date: '21 Sep 2026',
//         stage: 'Electrical'
//       }
//     ]
//   },
//   {
//     id: 'IND-2026-075',
//     clientName: 'Vikram & Swati Jain',
//     location: 'Super Corridor, Indore',
//     projectType: '4 BHK Duplex Turnkey Interior',
//     designer: 'Ar. Bhargava',
//     currentStage: 'Final Polish & Deep Cleaning',
//     progress: 95,
//     targetDate: '05 Oct 2026',
//     status: 'Finishing Phase',
//     category: 'Finishing',
//     recentPhotos: [
//       {
//         id: 6,
//         url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
//         caption: 'Master Bedroom Wardrobe & PU Finish Check',
//         date: '27 Sep 2026',
//         stage: 'Finishing'
//       },
//       {
//         id: 7,
//         url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
//         caption: 'Custom Sofa & Lighting Setup',
//         date: '25 Sep 2026',
//         stage: 'Decor & Furniture'
//       }
//     ]
//   }
// ];

// export default function Execution() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('All');
//   const [activePhotoModal, setActivePhotoModal] = useState(null);

//   const filteredProjects = projectsData.filter(project => {
//     const matchesSearch = 
//       project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.location.toLowerCase().includes(searchTerm.toLowerCase());

//     if (selectedFilter === 'All') return matchesSearch;
//     if (selectedFilter === 'Civil & Electric Work') return matchesSearch && project.category === 'Civil';
//     if (selectedFilter === 'In Progress') return matchesSearch && project.category === 'Woodwork';
//     if (selectedFilter === 'Finishing Phase') return matchesSearch && project.category === 'Finishing';
    
//     return matchesSearch;
//   });

//   return (
//     <div className="py-8 max-w-7xl mx-auto px-4 space-y-8">
      
//       {/* Banner */}
//       <div className="bg-[#2d241e] text-white p-8 md:p-12 rounded-2xl shadow-md relative overflow-hidden">
//         <div className="relative z-10 max-w-3xl space-y-3">
//           <div className="inline-flex items-center gap-2 bg-[#8c6d53]/30 text-[#e5dcd3] text-xs px-3 py-1 rounded-full font-semibold border border-[#8c6d53]/50">
//             <Camera size={14} /> LIVE ON-SITE EXECUTION & PHOTO TRACKER
//           </div>
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
//             Turnkey Project Execution in Indore
//           </h1>
//           <p className="text-sm text-[#d9cdbf] leading-relaxed">
//             At ShreeInterio, transparency is key. Track ongoing interior site progress, material installations, quality checks, and real-time site photos updated directly by our site engineers and project managers.
//           </p>
//         </div>
//       </div>

//       {/* Filter and Search Bar */}
//       <div className="bg-white p-6 rounded-2xl border border-[#e5dcd3] shadow-sm space-y-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h2 className="text-lg font-serif font-bold text-[#2d241e]">Track Site Progress & Live Photos</h2>
//             <p className="text-xs text-[#6b5a4e]">Enter Project ID (e.g., IND-2026-088) or Client Name / Location</p>
//           </div>

//           <div className="relative w-full md:w-80">
//             <input
//               type="text"
//               placeholder="Search Project ID or Area..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-9 pr-4 py-2 text-xs border border-[#e5dcd3] rounded-lg focus:outline-none focus:border-[#8c6d53] bg-[#faf7f5]"
//             />
//             <Search size={16} className="absolute left-3 top-2.5 text-[#8c7a6b]" />
//           </div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f4eee8]">
//           {['All', 'Civil & Electric Work', 'In Progress', 'Finishing Phase'].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${
//                 selectedFilter === filter
//                   ? 'bg-[#8c6d53] text-white'
//                   : 'bg-[#f4eee8] text-[#523d2e] hover:bg-[#e5dcd3]'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Projects List with Live Photos */}
//       <div className="space-y-6">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project) => (
//             <div key={project.id} className="bg-white rounded-2xl border border-[#e5dcd3] p-6 shadow-sm hover:shadow-md transition-shadow space-y-6">
              
//               {/* Header Info */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#f4eee8] pb-4 gap-2">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs font-bold bg-[#8c6d53] text-white px-2.5 py-0.5 rounded">
//                       {project.id}
//                     </span>
//                     <h3 className="text-lg font-serif font-bold text-[#2d241e]">{project.clientName}</h3>
//                   </div>
//                   <p className="text-xs text-[#6b5a4e] flex items-center gap-1 mt-1">
//                     <MapPin size={13} className="text-[#8c6d53]" /> {project.location} • <span className="font-semibold">{project.projectType}</span>
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#f4eee8] text-[#8c6d53]">
//                     {project.status}
//                   </span>
//                   <span className="text-xs text-[#6b5a4e] flex items-center gap-1">
//                     <Calendar size={13} /> Target: {project.targetDate}
//                   </span>
//                 </div>
//               </div>

//               {/* Progress & Stage */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#faf7f5] p-4 rounded-xl border border-[#e5dcd3]/60 text-xs text-[#523d2e]">
//                 <div>
//                   <p className="text-[#8c7a6b] font-medium">Lead Designer</p>
//                   <p className="font-bold text-[#2d241e]">{project.designer}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#8c7a6b] font-medium">Current Active Stage</p>
//                   <p className="font-bold text-[#8c6d53] flex items-center gap-1">
//                     <Clock size={13} /> {project.currentStage}
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between font-bold mb-1">
//                     <span>Overall Progress</span>
//                     <span className="text-[#8c6d53]">{project.progress}%</span>
//                   </div>
//                   <div className="w-full bg-[#e5dcd3] rounded-full h-2">
//                     <div
//                       className="bg-[#8c6d53] h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${project.progress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Live Site Photos Gallery */}
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <h4 className="text-xs font-bold uppercase tracking-wider text-[#42352b] flex items-center gap-1.5">
//                     <Camera size={15} className="text-[#8c6d53]" /> Recent Live On-Site Photos
//                   </h4>
//                   <span className="text-[11px] text-[#8c7a6b]">Click photo to enlarge</span>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {project.recentPhotos.map((photo) => (
//                     <div
//                       key={photo.id}
//                       onClick={() => setActivePhotoModal(photo)}
//                       className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#e5dcd3] bg-[#f4eee8]"
//                     >
//                       <img
//                         src={photo.url}
//                         alt={photo.caption}
//                         className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
//                         <span className="text-[10px] font-bold uppercase bg-[#8c6d53] px-1.5 py-0.5 rounded w-fit mb-1">
//                           {photo.stage}
//                         </span>
//                         <p className="text-xs font-semibold leading-snug">{photo.caption}</p>
//                         <p className="text-[10px] text-gray-300 mt-1 flex items-center gap-1">
//                           <Calendar size={10} /> Updated on {photo.date}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           ))
//         ) : (
//           <div className="text-center py-12 bg-white rounded-2xl border border-[#e5dcd3]">
//             <ImageIcon size={36} className="mx-auto text-[#8c7a6b] mb-2" />
//             <p className="text-sm font-bold text-[#2d241e]">No Project Found</p>
//             <p className="text-xs text-[#6b5a4e]">Try searching with a different Project ID or Client Name.</p>
//           </div>
//         )}
//       </div>

//       {/* Modal for Photo Preview */}
//       {activePhotoModal && (
//         <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
//             <button
//               onClick={() => setActivePhotoModal(null)}
//               className="absolute top-3 right-3 bg-black/50 hover:bg-black text-white p-1.5 rounded-full z-10 transition-colors"
//             >
//               <X size={18} />
//             </button>
//             <img
//               src={activePhotoModal.url}
//               alt={activePhotoModal.caption}
//               className="w-full h-80 object-cover"
//             />
//             <div className="p-5 space-y-2">
//               <span className="text-xs font-bold uppercase bg-[#8c6d53] text-white px-2 py-0.5 rounded">
//                 {activePhotoModal.stage}
//               </span>
//               <h3 className="text-base font-serif font-bold text-[#2d241e]">{activePhotoModal.caption}</h3>
//               <p className="text-xs text-[#6b5a4e]">Captured & Verified by Site Engineer on {activePhotoModal.date}</p>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }