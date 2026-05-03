import { motion } from "motion/react";
import { Play, ArrowRight, Video, Zap, MessageSquare, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold opacity-70">7 Years of Visual Excellence</span>
        </motion.div>

        <motion.div 
          className="title-wrapper mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter title-skew uppercase">
            ABDIANNOR <br />
            <span className="text-accent italic">RAMADHAN</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Cinematic Video Editor & Motion Graphics Artist. Turning raw footage into 
          compelling stories that captivate your audience.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a 
            href="https://wa.me/+6288242981986" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-accent text-black font-bold uppercase transition-transform active:scale-95 flex items-center gap-2"
          >
            Start Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://wa.me/+6288242981986" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase transition-all active:scale-95 flex items-center gap-2"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};
