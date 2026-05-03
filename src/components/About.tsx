import { motion } from "motion/react";
import { User, Award, Camera, Monitor } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <img 
                src="https://i.imgur.com/DuLdyJk.jpeg" 
                alt="Abdiannor Ramadhan" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r border-b border-accent/30 pointer-events-none hidden md:block" />
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-40 h-[120%] border-l border-white/5 pointer-events-none" />
            
            <div className="absolute -top-6 -right-6 glass p-6 z-20 hidden md:block">
               <p className="text-4xl font-display text-accent leading-none">22</p>
               <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Years Old</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
              <User className="w-4 h-4 text-accent" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70">The Craftsman</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl uppercase mb-8 tracking-tighter leading-none">
              WHO IS <br />
              <span className="text-accent italic">ABDIANNOR?</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p>
                I am <span className="text-white font-bold">Abdiannor Ramadhan</span>, a 22-year-old Video Editor and Motion Graphic Artist based in Indonesia. My journey in the world of post-production started 7 years ago, driven by a passion for visual storytelling and rhythmic precision.
              </p>
              <p>
                Over the years, I've honed my skills in transforming raw footage into high-impact cinematic experiences. Whether it's a dynamic music video, a polish corporate commercial, or high-energy social media content, I focus on the "soul" of the footage to ensure it resonates with the audience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="flex gap-4">
                  <Monitor className="w-6 h-6 text-accent shrink-0" />
                  <div>
                     <h4 className="font-bold uppercase text-xs mb-1">State-of-the-art Gear</h4>
                     <p className="text-[10px] text-white/40 uppercase tracking-wider leading-tight">Industry-standard software & hardware for 4K workflows.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <Award className="w-6 h-6 text-accent shrink-0" />
                  <div>
                     <h4 className="font-bold uppercase text-xs mb-1">Creative Vision</h4>
                     <p className="text-[10px] text-white/40 uppercase tracking-wider leading-tight">More than just cuts; I build narratives that stay with viewers.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
