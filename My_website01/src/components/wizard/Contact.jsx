// src/components/wizard/Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // ⚠️ REPLACE 'your_form_id' WITH YOUR ACTUAL FORMSPREE ID KEY FROM YOUR DASHBOARD
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojoezbn";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to deliver message.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 pb-16 bg-[#0F0C1B]">
      
      {/* Title Header Section */}
      <div className="mb-10 border-b border-[#31255C] pb-6">
        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">Get In Touch</h1>
        <p className="text-[#94A3B8] text-base">Let's discuss full-stack engineering contracts, open roles, or system architecture deployments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Side Channels Column */}
        <div className="space-y-4 md:col-span-1">
          <div className="bg-[#1D153A] p-5 rounded-lg border border-[#31255C] hover:border-[#C084FC] transition-colors duration-300">
            <h3 className="text-sm font-bold text-[#A78BFA] uppercase tracking-wider mb-2">📍 Address</h3>
            <p className="text-[#94A3B8] text-xs leading-relaxed">Port Moresby, Papua New Guinea</p>
            <p className="text-[#94A3B8] text-xs leading-relaxed">P.O. Box 749</p>
            <p className ="text-[#94A3B8] text-xs leading-relaxed">NCD 111</p>
        
          </div>
          
        </div>

        {/* Right Side Form Column */}
        <form onSubmit={handleSubmit} className="bg-[#1D153A] p-6 rounded-lg border border-[#31255C] md:col-span-2 space-y-4 shadow-xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                className="w-full bg-[#120E24] border border-[#31255C] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C084FC] transition"
                placeholder="Joe Blow"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                className="w-full bg-[#120E24] border border-[#31255C] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C084FC] transition"
                placeholder="joeblow@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">Message Content *</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              value={formData.message} 
              onChange={handleChange}
              className="w-full bg-[#120E24] border border-[#31255C] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#C084FC] transition resize-none"
              placeholder="Type down your message here..."
            />
          </div>

          {/* Feedback Status Alert Windows */}
          {status.success && (
            <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              ✓ Message Received successfully! I will reach out to you shortly.
            </div>
          )}
          {status.error && (
            <div className="p-3 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              𐄂 {status.error}
            </div>
          )}
          {/* Rechapter - Robot Security Test points API */}


          <button 
            type="submit" 
            disabled={status.loading}
            className={`w-full text-white py-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-300 flex justify-center items-center gap-2 ${
              status.loading 
                ? 'bg-[#4c1d95] cursor-not-allowed text-[#94A3B8]' 
                : 'bg-[#6D28D9] hover:bg-[#7C3AED] shadow-[0_0_15px_rgba(109,40,217,0.4)] active:scale-98'
            }`}
          >
            {status.loading ? "Processing Transmission..." : "✉ Send Secure Message"}
          </button>
        </form>

      </div>
    </div>
  );
}
