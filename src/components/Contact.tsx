import { motion } from "motion/react";
import { Send, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Video Editing",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abdiannorramadhan@gmail.com?subject=Project Inquiry: ${formData.projectType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl uppercase mb-8 leading-[0.8] tracking-tighter">
              READY TO <br />
              <span className="text-accent italic">COLLABORATE?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              Have a project in mind? Let's turn your ideas into visual reality. 
              Fill out the form or reach out directly via my social channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Email Me</p>
                  <p className="text-xl font-bold uppercase tracking-wider">abdiannorramadhan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Location</p>
                  <p className="text-xl font-bold uppercase tracking-wider">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
               <a href="https://www.instagram.com/abdinity/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border border-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="https://www.linkedin.com/in/abdiannor-ramadhan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass border border-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="glass p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[80px]" />
             
             <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors uppercase font-bold text-xs tracking-widest" 
                      />
                   </div>
                   <div>
                      <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors uppercase font-bold text-xs tracking-widest" 
                      />
                   </div>
                </div>
                <div>
                   <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Project Type</label>
                   <select 
                     value={formData.projectType}
                     onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                     className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors uppercase font-bold text-xs tracking-widest appearance-none"
                   >
                      <option>Video Editing</option>
                      <option>Motion Graphics</option>
                      <option>Color Grading</option>
                      <option>Full Post-Production</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Message</label>
                   <textarea 
                     required
                     rows={4} 
                     placeholder="Describe your project..." 
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-white/5 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors uppercase font-bold text-xs tracking-widest resize-none"
                   ></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black py-6 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent transition-all">
                   Send Message
                   <Send className="w-4 h-4" />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-display uppercase tracking-widest mb-1">Abdiannor Ramadhan</p>
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">Visual Craftsman since 2017</p>
        </div>
        
        <p className="text-[10px] uppercase text-white/20 tracking-wider font-semibold">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED. CRAFTED BY ABDIANNOR.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-accent transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
