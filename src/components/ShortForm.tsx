import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Smartphone, Sparkles, TrendingUp } from "lucide-react";
import React, { useState } from "react";

const shortFormVideos = [
  {
    title: "AI Short Form Content",
    views: "1.2M",
    thumbnail: "https://img.youtube.com/vi/-bc_lv5zkXk/maxresdefault.jpg",
    link: "https://www.youtube.com/embed/-bc_lv5zkXk?autoplay=1",
    id: "-bc_lv5zkXk"
  },
  {
    title: "SHORT FORM CONTENT",
    views: "920K",
    thumbnail: "https://i.imgur.com/6Z93Ju8.jpeg",
    link: "https://drive.google.com/file/d/1oelWQD3_26297XhJWQ4fzZ3y5kpWxR-O/view?usp=drive_link",
    id: ""
  },
  {
    title: "MOTION GRAPHIC CONTENT",
    views: "2.5M",
    thumbnail: "https://img.youtube.com/vi/FVWGW_5TZnU/maxresdefault.jpg",
    link: "https://www.youtube.com/embed/FVWGW_5TZnU?autoplay=1",
    id: "FVWGW_5TZnU"
  },
];

export const ShortForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mouse 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleIndexChange = (idx: number) => {
    setActiveIndex(idx);
    setIsPlaying(false);
  };

  const handleNext = () => {
    handleIndexChange((activeIndex + 1) % shortFormVideos.length);
  };

  const handlePrev = () => {
    handleIndexChange((activeIndex - 1 + shortFormVideos.length) % shortFormVideos.length);
  };

  return (
    <section id="short-form" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Interaction Side */}
          <div className="order-2 lg:order-1 flex items-center justify-center gap-4 md:gap-12 perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            
            {/* Prev Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl hover:border-accent group transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-accent" />
            </motion.button>

            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[280px] h-[580px]"
            >
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#222] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl z-20" />
                
                {/* Screen Content */}
                <div className="relative w-full h-full">
                  {!isPlaying ? (
                    <>
                      <motion.img 
                        key={activeIndex}
                        src={shortFormVideos[activeIndex].thumbnail}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover contrast-[1.05] brightness-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                      
                      {/* UI Overlay - Simplified */}
                      <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                        <div className="relative z-10 space-y-4 pointer-events-auto">
                            <div className="flex items-center gap-2 text-accent">
                                <TrendingUp className="w-3 h-3" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{shortFormVideos[activeIndex].views} Views</span>
                            </div>
                            
                            <h4 className="text-xl font-display uppercase leading-tight tracking-tight text-white drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
                                {shortFormVideos[activeIndex].title}
                            </h4>
                            
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                if (shortFormVideos[activeIndex].id) {
                                  setIsPlaying(true);
                                } else {
                                  window.open(shortFormVideos[activeIndex].link, "_blank");
                                }
                              }}
                              className="w-full py-4 rounded-xl bg-accent text-black text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-accent/20"
                            >
                                <Play className="w-4 h-4 fill-black" /> Play Video
                            </motion.button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <iframe 
                      src={shortFormVideos[activeIndex].link}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>

              {/* Floaties for 3D depth */}
              <motion.div 
                style={{ translateZ: 50 }}
                className="absolute -top-10 -right-10 glass p-4 rounded-xl z-20 backdrop-blur-xl border-accent/20"
              >
                  <Sparkles className="w-6 h-6 text-accent mb-2" />
                  <p className="text-[10px] uppercase font-bold tracking-widest">Viral Ready</p>
              </motion.div>

              <motion.div 
                style={{ translateZ: 30 }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-xl z-20 backdrop-blur-xl border-white/10"
              >
                  <Smartphone className="w-6 h-6 text-white/50 mb-2" />
                  <p className="text-[10px] uppercase font-bold tracking-widest">9:16 Optimized</p>
              </motion.div>
            </motion.div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl hover:border-accent group transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-accent" />
            </motion.button>

          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-7xl lg:text-8xl uppercase mb-10 tracking-tighter leading-none whitespace-nowrap">
              SHORT <span className="text-accent italic">FORM.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              TikTok, Reels, and Shorts are the current kings of engagement. I specialize in high-retention editing that stops the scroll and keeps viewers watching until the loop.
            </p>

            <div className="space-y-4">
              {shortFormVideos.map((vid, idx) => (
                <button
                  key={idx}
                  onClick={() => handleIndexChange(idx)}
                  className={`w-full text-left p-6 flex items-center justify-between transition-all border ${
                    activeIndex === idx ? "bg-white/5 border-accent" : "bg-transparent border-white/5 hover:border-white/20"
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-accent mb-2 block tracking-widest">Sample 0{idx + 1}</span>
                    <h4 className="text-xl font-bold uppercase">{vid.title}</h4>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    activeIndex === idx ? "bg-accent border-accent text-black" : "border-white/10 text-white/30"
                  }`}>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 p-8 border border-accent/20 bg-accent/5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2">The Strategy:</p>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                    "Using rhythmic fast cuts, dynamic subtitles, and psychological hooks to maximize average watch time."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
