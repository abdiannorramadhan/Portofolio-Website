import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Play, Laptop, Monitor, Film, ExternalLink } from "lucide-react";
import React, { useState } from "react";

const longFormVideos = [
  {
    title: "DOCUMENTARY VIDEO",
    duration: "13:00",
    thumbnail: "https://img.youtube.com/vi/pvTxRtA2Lb0/maxresdefault.jpg",
    desc: "A behind-the-scenes documentary exploring the creative process and daily life of a high-end video editor.",
    id: "pvTxRtA2Lb0"
  },
  {
    title: "FACELESS DOCUMENTARY",
    duration: "14:12",
    thumbnail: "https://img.youtube.com/vi/t4BMdcCfOS8/maxresdefault.jpg",
    desc: "Faceless documentary storytelling focusing on deep research-driven narratives and high-end visual communication.",
    id: "t4BMdcCfOS8"
  }
];

export const LongForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mouse 3D effect for Laptop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 20 });

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

  return (
    <section id="long-form" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl md:text-8xl uppercase mb-6 tracking-tighter">
            LONG <span className="text-accent italic">FORM.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Cinematic storytelling that requires breadth and depth. From documentaries 
            to long-form commercials, I handle the complex narratives with precision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
          
          {/* 3D Laptop Mockup Side */}
          <div 
            className="perspective-2000 w-full max-w-[800px]" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative aspect-[16/10] w-full"
            >
              {/* Screen Base (Bottom) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-[#222] rounded-b-xl shadow-2xl z-0" />
              
              {/* Laptop Screen (Top) */}
              <div className="absolute inset-0 bg-[#111] rounded-2xl border-[12px] border-[#222] p-1 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <div className="relative w-full h-full bg-black overflow-hidden group">
                  {!isPlaying ? (
                    <>
                      <motion.img 
                        key={activeIndex}
                        src={longFormVideos[activeIndex].thumbnail}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      
                      {/* Play Interface */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            if ((longFormVideos[activeIndex] as any).id) {
                              setIsPlaying(true);
                            }
                          }}
                          className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center cursor-pointer glass backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors pointer-events-auto"
                        >
                          <Play className="w-8 h-8 text-white fill-white ml-2" />
                        </motion.button>
                      </div>

                      {/* Scrub Bar Mockup */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="h-1 w-full bg-white/20 rounded-full mb-3">
                           <div className="h-full w-[45%] bg-accent rounded-full" />
                        </div>
                        <div className="flex justify-between items-center text-[10px] uppercase font-bold text-white/50 tracking-widest">
                           <span>{longFormVideos[activeIndex].title}</span>
                           <span>04:12 / {longFormVideos[activeIndex].duration}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <iframe 
                      src={`https://www.youtube.com/embed/${(longFormVideos[activeIndex] as any).id}?autoplay=1`}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>

              {/* Floating 3D Detail */}
              <motion.div 
                style={{ translateZ: 80 }}
                className="absolute -top-10 -left-6 glass px-6 py-3 border-accent/30 hidden md:block"
              >
                 <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest">4K Resolution</span>
                 </div>
              </motion.div>

              <motion.div 
                style={{ translateZ: 40 }}
                className="absolute -bottom-6 -right-10 glass px-6 py-3 border-white/10 hidden md:block"
              >
                 <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest">Cinematic Color</span>
                 </div>
              </motion.div>
            </motion.div>
          </div>

          {/* List Selection Side */}
          <div className="w-full lg:w-[400px] space-y-6">
            {longFormVideos.map((vid, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                onClick={() => handleIndexChange(idx)}
                className={`p-8 cursor-pointer border transition-all ${
                  activeIndex === idx ? "bg-white/5 border-accent shadow-[0_0_30px_rgba(242,125,38,0.1)]" : "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                   <h4 className={`text-2xl font-display uppercase tracking-tight ${activeIndex === idx ? "text-white" : "text-white/40"}`}>
                      {vid.title}
                   </h4>
                   <ExternalLink className={`w-4 h-4 ${activeIndex === idx ? "text-accent" : "text-white/20"}`} />
                </div>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                   {vid.desc}
                </p>
                <div className="flex items-center justify-between">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Duration: {vid.duration}</span>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                   </div>
                </div>
              </motion.div>
            ))}

            <div className="p-8 border border-white/5 glass">
               <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 mb-4">Editing Suite</p>
               <div className="flex flex-wrap gap-4 opacity-50">
                  <span className="text-xs font-bold uppercase border-b border-white/20">Premiere Pro</span>
                  <span className="text-xs font-bold uppercase border-b border-white/20">After Effects</span>
                  <span className="text-xs font-bold uppercase border-b border-white/20">Davinci Resolve</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
