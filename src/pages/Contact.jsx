import React, { useState } from 'react';
import { MapPin, Phone, Mail, Camera, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    mobile: '', 
    email: '', 
    city: 'Indore', 
    projectType: 'Buy Furniture', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 space-y-10">
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-serif text-[#2d241e]">Let's Create Your Dream Space</h1>
        <p className="text-xs text-[#6b5a4e]">
          Have a home interior project, furniture requirement or customization request? Our team would love to understand your requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Address Info */}
        <div className="bg-[#f4eee8] p-8 rounded-2xl border border-[#e5dcd3] space-y-6">
          <h2 className="text-2xl font-serif text-[#2d241e]">Get In Touch</h2>
          
          <div className="space-y-4 text-xs text-[#42352b]">
            <p className="flex items-start gap-3">
              <MapPin className="text-[#8c6d53] shrink-0 mt-0.5" size={18} />
              <span><strong>ShreeInterio</strong><br />B-57, LIG Colony, RSS Nagar, Indore – 452011</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-[#8c6d53] shrink-0" size={18} />
              <span>8435299100</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-[#8c6d53] shrink-0" size={18} />
              <span>sbaindore@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <Camera className="text-[#8c6d53] shrink-0" size={18} />
              <span>@architectbhargava</span>
            </p>
          </div>

          <div className="pt-4 border-t border-[#e5dcd3] flex flex-wrap gap-3">
            <a href="https://wa.me/918435299100" target="_blank" rel="noreferrer" className="bg-emerald-700 text-white px-4 py-2 rounded text-xs font-bold">
              WhatsApp Us
            </a>
            <a href="tel:8435299100" className="bg-[#8c6d53] text-white px-4 py-2 rounded text-xs font-bold">
              Call Now
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl border border-[#e5dcd3] shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-2">
              <h3 className="text-xl font-serif text-emerald-700">Thank You!</h3>
              <p className="text-xs text-[#6b5a4e]">Your enquiry has been submitted. Our designer will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#2d241e] block mb-1">What Are You Looking For?</label>
                <select 
                  value={formData.projectType} 
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full border border-[#e5dcd3] rounded p-2 text-xs bg-white"
                >
                  <option>Buy Furniture</option>
                  <option>Home Interior Design</option>
                  <option>Modular Kitchen</option>
                  <option>Customized Furniture</option>
                  <option>Commercial Interior</option>
                  <option>Turnkey Interior</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2d241e] block mb-1">Mobile Number</label>
                  <input type="tel" required value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2d241e] block mb-1">Message</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full border border-[#e5dcd3] rounded p-2 text-xs" placeholder="Tell us about your requirements..." />
              </div>

              <button type="submit" className="w-full bg-[#8c6d53] hover:bg-[#735740] text-white py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                <Send size={14} /> Submit Enquiry
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}