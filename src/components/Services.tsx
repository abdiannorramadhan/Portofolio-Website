import { motion } from "motion/react";
import { Video, Zap, Layers, Sparkles, MessageSquare, Clock } from "lucide-react";

const services = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Editing",
    desc: "From basic cuts to high-end cinematic post-production for YouTube, TVC, and Film.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Motion Graphics",
    desc: "Dynamic typography, 2D animations, and eye-catching visual elements that pop.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Color Grading",
    desc: "Professional color correction and creative grading to set the perfect mood for your visuals.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Visual Effects",
    desc: "Seamless VFX integration, green screen removal, and advanced digital compositing.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(242,125,38,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl uppercase mb-6 tracking-tighter">
            MY <span className="text-accent italic">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining 7 years of technical skill with a unique creative vision to provide 
            premium post-production services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 glass hover:border-accent/40 transition-all group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold uppercase mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Section */}
        <div className="bg-accent p-1 md:p-2 lg:p-4 rotate-1 md:rotate-2">
            <div className="bg-black py-16 px-8 md:px-20 -rotate-1 md:-rotate-2 border border-accent flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">Special Offer</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-display uppercase mb-6 leading-none">
                        Get Your First <span className="text-accent italic">Edit Free</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                        I'm so confident in my 7 years of expertise that I'll edit your first 
                        short-form video (up to 60s) for free. No commitment, just results.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="text-xs font-bold uppercase text-white/70">48h Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-accent" />
                            <span className="text-xs font-bold uppercase text-white/70">Unlimited Revisions</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <button className="w-full lg:w-auto px-12 py-6 bg-accent text-black font-bold uppercase text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(242,125,38,0.3)]">
                        Claim Offer Now
                    </button>
                    <p className="text-center mt-4 text-[10px] text-white/30 uppercase tracking-[0.3em]">Terms & conditions apply</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
