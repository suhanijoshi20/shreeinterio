import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function BudgetDesigning({ setActiveTab }) {
  const [selectedBudgetRange, setSelectedBudgetRange] = useState('5L - 8L');
  const [selectedHomeType, setSelectedHomeType] = useState('3 BHK');

  const budgetPackages = [
    {
      range: '3L - 5L',
      tag: 'Essential Smart Package',
      idealFor: '2 BHK / Compact Apartments',
      features: [
        'Modular Kitchen (HDMR with High Gloss Laminate)',
        'Master Bedroom Sliding Wardrobe (Commercial Ply)',
        'TV Unit & Shoe Rack Layout',
        'Basic Gypsum False Ceiling in Living Room',
        'Warm LED COB Spot Lighting setup',
        'Standard Hardware (Ebco / Hettich basic)'
      ]
    },
    {
      range: '5L - 8L',
      tag: 'Most Popular Premium Package',
      idealFor: '3 BHK Apartments / Townhouses',
      features: [
        'Modular Kitchen (Tandem Drawers + Acrylic shutters)',
        'Wardrobes in 2 Bedrooms (Lofts included)',
        'Full Living Room False Ceiling with Cove Lighting',
        'Designer Accent Wall Paneling (Fluted / WPC)',
        'Bathroom Vanity Units & Mirrors',
        'Hettich / Hafele Soft-Close Hardware'
      ]
    },
    {
      range: '8L - 12L+',
      tag: 'Luxury Turnkey Experience',
      idealFor: '4 BHK / Luxury Villas / Penthouse',
      features: [
        'Island Modular Kitchen (PU / Acrylic + Quartz top)',
        'Custom Walk-in Wardrobes with Tinted Glass',
        'Magnetic Track & Layered Architectural Lighting',
        'HVAC Ducting & Concealed AC Layouts',
        'Italian Marble / Veneer Wall Paneling',
        'Complete Soft Furnishing & Custom Sofa Set'
      ]
    }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="bg-[#f4eee8] text-[#8c6d53] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#e5dcd3]">
          Smart Interior Costing
        </span>
        <h1 className="text-3xl md:text-5xl font-serif text-[#2d241e]">Budget-Based Interior Designing</h1>
        <p className="text-xs md:text-sm text-[#6b5a4e] leading-relaxed">
          No hidden charges. We tailor luxury interior design and modular execution precisely engineered around your specified financial budget without compromising material quality.
        </p>
      </div>

      {/* Package Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {budgetPackages.map((pkg, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl p-6 border transition-all space-y-5 flex flex-col justify-between ${
              selectedBudgetRange === pkg.range 
                ? 'border-[#8c6d53] shadow-lg ring-2 ring-[#8c6d53]/20' 
                : 'border-[#e5dcd3] hover:border-[#8c6d53]'
            }`}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f4eee8] text-[#8c6d53] px-2.5 py-1 rounded">
                  {pkg.tag}
                </span>
                <Sparkles size={16} className="text-[#8c6d53]" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2d241e]">₹ {pkg.range}</h3>
                <p className="text-xs text-[#8c7a6b] font-medium">{pkg.idealFor}</p>
              </div>

              <div className="border-t border-[#e5dcd3] pt-3 space-y-2.5 text-xs text-[#42352b]">
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <Check size={14} className="text-[#8c6d53] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setSelectedBudgetRange(pkg.range)}
              className={`w-full py-2.5 rounded text-xs font-bold uppercase transition ${
                selectedBudgetRange === pkg.range
                  ? 'bg-[#8c6d53] text-white'
                  : 'bg-[#f4eee8] text-[#2d241e] hover:bg-[#e5dcd3]'
              }`}
            >
              {selectedBudgetRange === pkg.range ? 'Selected Plan' : 'Choose This Budget'}
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Budget Estimator Box */}
      <div className="bg-[#2d241e] text-white p-8 md:p-10 rounded-2xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#42352b] pb-6">
          <div>
            <h3 className="text-2xl font-serif">Quick Budget Estimator</h3>
            <p className="text-xs text-[#d9cdbf]">Select your configuration to get a instant estimated cost range.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-[#3d322a] p-1.5 rounded-lg border border-[#523d2e] text-xs">
            {['2 BHK', '3 BHK', '4 BHK / Villa'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedHomeType(type)}
                className={`px-3 py-1.5 rounded transition font-bold ${
                  selectedHomeType === type ? 'bg-[#8c6d53] text-white' : 'text-[#d9cdbf] hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs">
          <div className="space-y-1 bg-[#3d322a] p-4 rounded-xl border border-[#523d2e]">
            <span className="text-[#d9cdbf]">Estimated Timeline:</span>
            <p className="text-sm font-bold text-white">35 to 45 Days</p>
          </div>

          <div className="space-y-1 bg-[#3d322a] p-4 rounded-xl border border-[#523d2e]">
            <span className="text-[#d9cdbf]">Material Guarantee:</span>
            <p className="text-sm font-bold text-white">10 Years Warranty (BWP Ply)</p>
          </div>

          <div className="space-y-1 bg-[#3d322a] p-4 rounded-xl border border-[#523d2e]">
            <span className="text-[#d9cdbf]">Approx. Complete Cost:</span>
            <p className="text-base font-bold text-amber-400">
              {selectedHomeType === '2 BHK' && '₹ 3.5 Lakhs - ₹ 5.5 Lakhs'}
              {selectedHomeType === '3 BHK' && '₹ 5.5 Lakhs - ₹ 8.5 Lakhs'}
              {selectedHomeType === '4 BHK / Villa' && '₹ 9.0 Lakhs - ₹ 15+ Lakhs'}
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button 
            onClick={() => setActiveTab('contact')} 
            className="bg-[#8c6d53] hover:bg-[#735740] text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            Get Custom Quote For My Budget <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}