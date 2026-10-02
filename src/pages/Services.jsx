import React, { useState } from 'react';
import { 
  Compass as CompassIcon, 
  Palette as PaletteIcon, 
  Calculator as CalculatorIcon, 
  Hammer as HammerIcon, 
  Eye as EyeIcon, 
  LayoutGrid as LayoutGridIcon, 
  Armchair as ArmchairIcon, 
  ChefHat as ChefHatIcon, 
  DoorClosed as DoorClosedIcon, 
  Lightbulb as LightbulbIcon, 
  SwatchBook as SwatchBookIcon, 
  Sparkles as SparklesIcon, 
  RefreshCw as RefreshCwIcon, 
  Building2 as Building2Icon, 
  KeyRound as KeyRoundIcon,
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export default function Services({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const coreServices = [
    {
      id: 1,
      title: "Free Consultancy",
      subtitle: "Client ki requirement, space aur budget samajhna.",
      icon: <CompassIcon className="w-6 h-6 text-[#c89d7c]" />,
      badge: "Core Service",
      includes: [
        "Requirement Discussion",
        "Space Discussion",
        "Budget Discussion",
        "Initial Design Guidance"
      ],
      expertiseBreakdown: {
        title: "Our Expertise: Architecture | Interior Designer | Planner",
        items: [
          "Interior Layout", "Interior Design", "False Ceiling Design", 
          "Light Design", "HVAC Design", "Wall Decor"
        ]
      }
    },
    {
      id: 2,
      title: "Interior Designing",
      subtitle: "Complete customized interior design.",
      icon: <PaletteIcon className="w-6 h-6 text-[#c89d7c]" />,
      badge: "Core Service",
      includes: [
        "Concept Design", "Space Planning", "Furniture Layout", 
        "Color Selection", "Material Selection", "Lighting Planning", "Décor Planning"
      ]
    },
    {
      id: 3,
      title: "Budget Designing",
      subtitle: "Budget ke according practical design solutions.",
      icon: <CalculatorIcon className="w-6 h-6 text-[#c89d7c]" />,
      badge: "Core Service",
      includes: [
        "Budget Planning", "Cost-Conscious Design", "Material Alternatives", 
        "Furniture Selection", "Décor Selection", "Budget Optimization"
      ]
    },
    {
      id: 4,
      title: "Project Execution",
      subtitle: "Design ko actual space mein implement karna.",
      icon: <HammerIcon className="w-6 h-6 text-[#c89d7c]" />,
      badge: "Core Service",
      includes: [
        "Site Management", "Civil Work", "Carpentry", "Electrical Work", 
        "Plumbing", "Painting", "False Ceiling", "Flooring", 
        "Furniture Installation", "Final Finishing"
      ]
    }
  ];

  const designServices = [
    {
      id: 5,
      title: "3D Interior Visualization",
      subtitle: "Client ko design banne se pehle visualise karwana.",
      icon: <EyeIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["3D Room Design", "Photorealistic Renders", "Furniture Placement", "Material Visualization", "Lighting Visualization"]
    },
    {
      id: 6,
      title: "Space Planning",
      subtitle: "Available space ka maximum practical use.",
      icon: <LayoutGridIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Furniture Layout", "Room Planning", "Space Optimization", "Circulation Planning", "Storage Planning"]
    },
    {
      id: 7,
      title: "Furniture Design",
      subtitle: "Custom furniture design karna.",
      icon: <ArmchairIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Custom Sofa", "Wardrobe", "TV Unit", "Kitchen Cabinets", "Bed", "Study Table", "Storage Units", "Custom Furniture"]
    },
    {
      id: 10,
      title: "Lighting Design",
      subtitle: "Aesthetic aur functional light setup.",
      icon: <LightbulbIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Decorative Lighting", "Ceiling Lighting", "Wall Lighting", "Smart Lighting Planning"]
    },
    {
      id: 11,
      title: "Color & Material Consultation",
      subtitle: "Interior ke liye complete material palette.",
      icon: <SwatchBookIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Wall Colors", "Flooring", "Tiles", "Wood Finishes", "Fabrics", "Countertops", "Hardware", "Textures"]
    }
  ];

  const specializedServices = [
    {
      id: 8,
      title: "Modular Kitchen Design",
      subtitle: "Kitchen ke liye dedicated customized service.",
      icon: <ChefHatIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["L-Shaped Kitchen", "U-Shaped Kitchen", "Parallel Kitchen", "Island Kitchen", "Straight Kitchen", "Kitchen Storage", "Cabinet Design", "Countertop Selection"]
    },
    {
      id: 9,
      title: "Wardrobe & Storage Design",
      subtitle: "Smart & space-saving storage solutions.",
      icon: <DoorClosedIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Sliding Wardrobe", "Hinged Wardrobe", "Walk-in Wardrobe", "Modular Storage", "Shoe Storage", "Custom Cabinets", "Space-Saving Storage"]
    },
    {
      id: 12,
      title: "Home Décor Styling",
      subtitle: "Final space ko professionally style karna.",
      icon: <SparklesIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Curtains", "Rugs", "Cushions", "Mirrors", "Wall Art", "Plants", "Decorative Accessories", "Lighting Décor"]
    },
    {
      id: 13,
      title: "Renovation & Remodeling",
      subtitle: "Existing space ko transform karna.",
      icon: <RefreshCwIcon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Room Renovation", "Kitchen Renovation", "Bathroom Renovation", "Living Room Makeover", "Flooring Upgrade", "Wall Makeover", "Ceiling Upgrade"]
    }
  ];

  const completeSolutions = [
    {
      id: 14,
      title: "Commercial Interior Design",
      subtitle: "Sirf residential nahi, commercial clients ke liye bhi.",
      icon: <Building2Icon className="w-6 h-6 text-[#c89d7c]" />,
      includes: ["Office", "Retail Store", "Café", "Restaurant", "Salon", "Studio", "Showroom", "Workspace"]
    },
    {
      id: 15,
      title: "Turnkey Interior Solutions",
      subtitle: "Client ko design se execution tak complete solution.",
      icon: <KeyRoundIcon className="w-6 h-6 text-[#c89d7c]" />,
      isPremium: true,
      flow: ["Concept", "Design", "Material", "Procurement", "Execution", "Installation", "Final Handover"],
      includes: ["Single Point Contact", "End-to-End Execution", "Quality Assurance", "On-Time Handover"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c89d7c] bg-[#c89d7c]/10 px-3 py-1 rounded-full">
          Complete Interior Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2d241e]">Our Interior Services</h1>
        <p className="text-stone-600 text-sm md:text-base">
          From concept design to final turnkey execution — explore our 15 comprehensive interior design and architectural services.
        </p>
      </div>

      {/* CORE SERVICES */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xl font-serif font-bold text-[#2d241e] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#2d241e] rounded-full inline-block"></span> CORE SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-stone-100">{service.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2d241e] text-white px-2.5 py-1 rounded-md">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2d241e]">{service.title}</h3>
                <p className="text-xs text-stone-500 mt-1 mb-4">{service.subtitle}</p>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-bold text-[#2d241e] uppercase tracking-wider">Includes:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c89d7c] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Free Consultancy Special Expertise Box */}
                {service.expertiseBreakdown && (
                  <div className="mt-4 p-4 bg-[#fbf9f5] rounded-xl border border-stone-200 space-y-2">
                    <p className="text-xs font-bold text-[#c89d7c]">{service.expertiseBreakdown.title}</p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {service.expertiseBreakdown.items.map((exp, idx) => (
                        <div key={idx} className="text-[11px] text-stone-600 bg-white px-2 py-1 rounded border border-stone-200">
                          • {exp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN SERVICES */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xl font-serif font-bold text-[#2d241e] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#c89d7c] rounded-full inline-block"></span> DESIGN SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div className="p-2.5 bg-[#fbf9f5] rounded-xl border border-stone-100 w-fit mb-3">{service.icon}</div>
              <h3 className="text-lg font-serif font-bold text-[#2d241e]">{service.title}</h3>
              <p className="text-xs text-stone-500 mt-1 mb-3">{service.subtitle}</p>

              <div className="space-y-1.5 border-t border-stone-100 pt-3">
                {service.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c89d7c]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALIZED INTERIOR SERVICES */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xl font-serif font-bold text-[#2d241e] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#2d241e] rounded-full inline-block"></span> SPECIALIZED INTERIOR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializedServices.map(service => (
            <div key={service.id} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div className="p-2.5 bg-[#fbf9f5] rounded-xl border border-stone-100 w-fit mb-3">{service.icon}</div>
              <h3 className="text-base font-serif font-bold text-[#2d241e]">{service.title}</h3>
              <p className="text-xs text-stone-500 mt-1 mb-3">{service.subtitle}</p>

              <div className="space-y-1.5 border-t border-stone-100 pt-3">
                {service.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-600">
                    <CheckCircle2 className="w-3 h-3 text-[#c89d7c] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE SOLUTIONS & TURNKEY */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xl font-serif font-bold text-[#2d241e] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#c89d7c] rounded-full inline-block"></span> COMPLETE & TURNKEY SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {completeSolutions.map(service => (
            <div 
              key={service.id} 
              className={`rounded-2xl border p-6 transition-all ${
                service.isPremium 
                  ? 'bg-[#2d241e] text-white border-[#2d241e] shadow-lg' 
                  : 'bg-white text-[#2d241e] border-stone-200 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl border ${service.isPremium ? 'bg-white/10 border-white/20' : 'bg-[#fbf9f5] border-stone-100'}`}>
                  {service.icon}
                </div>
                {service.isPremium && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c89d7c] text-white px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Premium Service
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-serif font-bold">{service.title}</h3>
              <p className={`text-xs mt-1 mb-6 ${service.isPremium ? 'text-stone-300' : 'text-stone-500'}`}>{service.subtitle}</p>

              {/* Turnkey Process Workflow */}
              {service.flow && (
                <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase font-bold text-[#c89d7c] tracking-widest mb-3">Turnkey Execution Flow</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {service.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded bg-white/10 font-medium text-stone-200">{step}</span>
                        {idx < service.flow.length - 1 && <ArrowRight className="w-3 h-3 text-[#c89d7c]" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                {service.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c89d7c]" />
                    <span className={service.isPremium ? 'text-stone-200' : 'text-stone-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-[#fbf9f5] rounded-3xl p-8 text-center border border-stone-200 space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#2d241e]">Ready to Transform Your Space?</h3>
        <p className="text-xs text-stone-600 max-w-md mx-auto">
          Book a Free Consultation session with our interior designers and architects today.
        </p>
        <a 
          href="https://wa.me/919000000000?text=Hello%20ShreeInterio,%20I%20want%20to%20book%20a%20Free%20Consultancy%20session." 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#2d241e] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#c89d7c] transition-all"
        >
          Book Free Consultation via WhatsApp <ArrowRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}