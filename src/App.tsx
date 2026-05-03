import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ShortForm } from "./components/ShortForm";
import { LongForm } from "./components/LongForm";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact, Footer } from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left" 
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle decoration lines throughout */}
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
          
          <ShortForm />
          <LongForm />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
