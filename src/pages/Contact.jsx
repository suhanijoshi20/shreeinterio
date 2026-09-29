// src/pages/Contact.jsx
export function Contact({ openConsultationModal }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-serif font-bold text-[#2d241e]">Get in Touch</h1>
        <p className="text-xs text-[#8c7a6b]">Visit our studio or drop an enquiry for your upcoming project.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl border border-[#e5ded4]">
        <div className="space-y-4 text-xs text-[#2d241e]">
          <h2 className="font-serif font-bold text-lg">Indore Experience Center</h2>
          <p>📍 B-57, LIG Colony, RSS Nagar, Indore – 452011</p>
          <p>📞 +91 84352 99100</p>
          <p>✉️ sbaindore@gmail.com</p>
          <p>🕒 Mon - Sat: 10:00 AM - 8:00 PM</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry submitted successfully!'); }} className="space-y-3">
          <input type="text" placeholder="Your Name" required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5]" />
          <input type="tel" placeholder="Phone Number" required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5]" />
          <textarea placeholder="Message / Requirement" rows={3} required className="w-full p-2.5 text-xs border border-[#e5ded4] rounded bg-[#fbf9f5]"></textarea>
          <button type="submit" className="w-full bg-[#2d241e] text-white py-2.5 rounded text-xs font-bold uppercase">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;