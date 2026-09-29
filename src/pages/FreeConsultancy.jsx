import React, { useState } from 'react';
import { 
  Building2, Compass, Layout, Sparkles, Lightbulb, Wind, Palette, 
  CheckCircle2, Send, Clock, UserCheck, ShieldCheck 
} from 'lucide-react';

export default function FreeConsultancy({ setActiveTab }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Indore',
    service: 'Interior Layout & Space Planning',
    propertyType: '3 BHK Flat',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: 'Interior Layout & Space Planning',
      icon: Layout,
      desc: 'Optimal furniture placement, circulation flow, and space utilization customized to your floor plan.'
    },
    {
      title: 'Interior Design & Themes',
      icon: Sparkles,
      desc: '3D mood boards, color palettes, material selection (veneer, laminate, acrylic), and luxury aesthetic mapping.'
    },
    {
      title: 'False Ceiling & Cove Design',
      icon: Compass,
      desc: 'Gypsum & wooden ceiling layouts, drop details, curtain coves, and acoustic treatment planning.'
    },
    {
      title: 'Architectural Lighting Design',
      icon: Lightbulb,
      desc: 'Layered lighting plans (Ambient, Task, Accent, Magnetic Track Lights, and COB LED setups).'
    },
    {
      title: 'HVAC & Ducting Layout',
      icon: Wind,
      desc: 'Air conditioning ducting, VRV/VRF unit positioning, linear diffuser placement, and ventilation planning.'
    },
    {
      title: 'Wall Décor & Paneling',
      icon: Palette,
      desc: 'WPC louvers, fluted panels, marble wallpaper, accent texture paints, and CNC cut wall accents.'
    }
  ];

  const experts = [
    {
      title: 'Architectural Planning',
      role: 'Principal Architect',
      desc: 'Structural feasibility, Vastu compliance, window-door placement, and elevation synchronization.'
    },
    {
      title: 'Interior Design',
      role: 'Senior Interior Stylist',
      desc: 'Luxury aesthetics, custom woodwork, modular kitchen ergonomics, and soft furnishings.'
    },
    {
      title: 'Technical & HVAC Planner',
      role: 'Services & Layout Engineer',
      desc: 'Precision MEP drawings, electrical wiring loops, HVAC ducting, and false ceiling grid design.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 space-y-12">
      
      {/* Banner */}
      <div className="bg-[#2d241e] text-white p-8 md:p-12 rounded-2xl space-y-4 shadow-lg text-center md:text-left relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="bg-[#8c6d53] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Free • No Obligation Session
          </span>
          <h1 className="text-3xl md:text-5xl font-serif">Book a Free Interior & Architecture Consultancy</h1>
          <p className="text-[#d9cdbf] text-xs md:text-sm leading-relaxed">
            Get expert guidance from certified Architects, Interior Designers, and MEP Planners in Indore. Get personalized layouts, lighting plans, and material recommendations for your home.
          </p>
        </div>
      </div>

      {/* Our Expertise Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#8c6d53] text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e]">3-Pillar Design Mastery</h2>
          <p className="text-xs text-[#6b5a4e] max-w-xl mx-auto">
            We combine architectural strength with artistic interiors and technical engineering accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((exp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e5dcd3] space-y-3 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-[#f4eee8] text-[#8c6d53] flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2d241e]">{exp.title}</h3>
              <span className="inline-block text-[10px] font-bold bg-[#f4eee8] text-[#8c6d53] px-2 py-0.5 rounded">
                {exp.role}
              </span>
              <p className="text-xs text-[#6b5a4e] leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Covered in Consultancy */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#8c6d53] text-xs font-bold uppercase tracking-widest">What We Plan For You</span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d241e]">Comprehensive Design Scope</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div key={idx} className="bg-[#faf7f5] p-6 rounded-2xl border border-[#e5dcd3] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#8c6d53] text-white flex items-center justify-center">
                  <IconComponent size={20} />
                </div>
                <h3 className="font-serif font-bold text-base text-[#2d241e]">{srv.title}</h3>
                <p className="text-xs text-[#6b5a4e] leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form & Consultation Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side Perks */}
        <div className="bg-[#f4eee8] p-8 rounded-2xl border border-[#e5dcd3] space-y-6">
          <h3 className="text-2xl font-serif text-[#2d241e]">Why Book Your Free Slot Today?</h3>
          
          <div className="space-y-4 text-xs text-[#42352b]">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#8c6d53] shrink-0 mt-0.5" />
              <div>
                <strong>1-on-1 Session with Ar. Bhargava & Senior Team</strong>
                <p className="text-[#6b5a4e]">Discuss floor plans, material options, and execution timelines in detail.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#8c6d53] shrink-0 mt-0.5" />
              <div>
                <strong>3D Conceptual Layout Insights</strong>
                <p className="text-[#6b5a4e]">Understand furniture clearances, electrical points, and lighting loops.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#8c6d53] shrink-0 mt-0.5" />
              <div>
                <strong>Budget Estimate Assistance</strong>
                <p className="text-[#6b5a4e]">Get an instant cost breakdown according to your preferred materials and layout.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#e5dcd3] flex items-center justify-between text-xs text-[#8c6d53] font-bold">
            <span className="flex items-center gap-1"><Clock size={14} /> Duration: 45 Minutes</span>
            <span className="flex items-center gap-1"><UserCheck size={14} /> Online or In-Person (Indore)</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl border border-[#e5dcd3] shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-serif text-[#2d241e] font-bold">Consultancy Slot Requested!</h3>
              <p className="text-xs text-[#6b5a4e]">
                Thank you <strong>{formData.name}</strong>. Our senior interior consultant will reach out on <strong>{formData.phone}</strong> to confirm your slot time.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-xs text-[#8c6d53] font-bold underline pt-2">
                Book Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-serif text-[#2d241e] font-bold">Schedule Free Consultation</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Your Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Mobile Number</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" placeholder="10-digit number" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Primary Scope</label>
                  <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs bg-white">
                    <option>Interior Layout & Space Planning</option>
                    <option>Interior Design & Themes</option>
                    <option>False Ceiling & Cove Design</option>
                    <option>Architectural Lighting Design</option>
                    <option>HVAC & Ducting Layout</option>
                    <option>Wall Décor & Paneling</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Property Type</label>
                  <select value={formData.propertyType} onChange={(e) => setFormData({...formData, propertyType: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs bg-white">
                    <option>2 BHK Flat</option>
                    <option>3 BHK Flat</option>
                    <option>4 BHK / Duplex</option>
                    <option>Independent Villa</option>
                    <option>Commercial Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2d241e] block mb-1">Preferred Time Slot</label>
                <select value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs bg-white">
                  <option>Morning (10 AM - 1 PM)</option>
                  <option>Afternoon (2 PM - 5 PM)</option>
                  <option>Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2d241e] block mb-1">Notes / Specific Requirements (Optional)</label>
                <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" placeholder="Tell us about your home size or specific layout goals..." />
              </div>

              <button type="submit" className="w-full bg-[#8c6d53] hover:bg-[#735740] text-white py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                <Send size={14} /> Confirm Free Appointment
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}