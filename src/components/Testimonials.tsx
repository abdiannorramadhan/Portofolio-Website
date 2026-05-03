import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Marketing Director at FlowState",
    text: "Abdiannor transformed our brand video into a masterpiece. His sense of rhythm and timing is unparalleled. 7 years of experience really shows in every frame.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Sarah Chen",
    role: "Independent Filmmaker",
    text: "Working with Abdiannor was a breeze. He took my messy footage and created a coherent, emotionally resonant story. The motion graphics were top-notch!",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "James Wilson",
    role: "YouTube Creator (2M+ Subs)",
    text: "He's my go-to guy for high-octane edits. Fast turnaround, great communication, and always brings something creative to the table.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const stats = [
  { label: "Years Experience", value: "07", suffix: "+" },
  { label: "Projects Completed", value: "450", suffix: "+" },
  { label: "Happy Clients", value: "120", suffix: "" },
  { label: "Retainers", value: "15", suffix: "+" },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white/5 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-b border-white/10 pb-20">
          {stats.map((s, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-center"
            >
              <h4 className="text-6xl md:text-8xl font-display text-accent leading-none mb-4">
                {s.value}<span className="text-3xl text-white/20 align-top ml-1">{s.suffix}</span>
              </h4>
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl uppercase mb-6 tracking-tighter">
             CLIENT <span className="text-accent italic">FEEDBACK</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-black border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="font-bold uppercase text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase text-white/40 tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-400 italic leading-relaxed text-sm">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
