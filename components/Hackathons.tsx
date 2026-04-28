"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Plus, Minus } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    id: "01",
    title: "FINALIST — SMART INDIA HACKATHON 2025",
    venue: "Smart India Hackathon (National Level)",
    award: "HACKATHON",
    description: "Selected nationally from thousands of teams; built an IoT-based smart agriculture system chosen for final evaluation round.",
    tech: "IoT • Agriculture",
    date: "2025",
  },
  {
    id: "02",
    title: "NOMINEE — NASA SPACE APPS CHALLENGE",
    venue: "NASA Space Apps Challenge (Global)",
    award: "HACKATHON",
    description: "Nominated to represent college at the global NASA hackathon; designed a space-data driven solution.",
    tech: "NASA • Space Data",
    date: "2024",
  },
  {
    id: "03",
    title: "3RD PRIZE — TECHNICAL PAPER PRESENTATION",
    venue: "TechSpectrum 2024, SRM Trichy",
    award: "COMPETITION",
    description: "Presented original research paper; awarded 3rd place among 40+ competing teams at SRM Trichy.",
    tech: "Research • SRM",
    date: "2024",
  },
  {
    id: "04",
    title: "MONGODB CERTIFIED",
    venue: "MongoDB University",
    award: "CERTIFICATION",
    description: "Completed Introduction to MongoDB certification from MongoDB University.",
    tech: "MongoDB • NoSQL",
    date: "2024",
  },
  {
    id: "05",
    title: "JAVA — ACE ACADEMY CERTIFIED",
    venue: "ACE Academy",
    award: "CERTIFICATION",
    description: "Certified in Java programming from ACE Academy.",
    tech: "Java • OOP",
    date: "2025",
  },
  {
    id: "06",
    title: "RPA & AUTOMATION — UIPATH CERTIFIED",
    venue: "UiPath Academy",
    award: "CERTIFICATION",
    description: "Completed Introduction to RPA and Automation certification from UiPath Academy.",
    tech: "UiPath • RPA",
    date: "2024",
  },
];

export default function Hackathons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="hackathons" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden ">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl lg:text-[clamp(5rem,7vw,8rem)] font-normal tracking-tighter text-black leading-none">
                Achievements <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-6xl lg:text-[clamp(4rem,6vw,7rem)]">impact</span>
              </h2>
              <div className="w-16 h-px bg-accent/40 mt-10" />
            </motion.div>
           <div className="hidden md:block text-right">
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em]">Recognition & Impact</p>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              layout
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-black/[0.03] bg-black/[0.01] transition-all duration-700 hover:border-accent/30 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03]"
            >
              <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6 xl:gap-12 flex-1">
                   <div className="text-4xl xl:text-5xl font-normal font-mono text-black/[0.12] group-hover:text-accent/20 transition-colors duration-700">{item.id}</div>
                   <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                         <span className="text-accent font-medium text-[10px] uppercase tracking-widest">{item.award}</span>
                      </div>
                      <h3 className="text-3xl xl:text-5xl font-normal uppercase text-black leading-tight group-hover:tracking-tight transition-all duration-700">{item.title}</h3>
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] mt-3">{item.venue}</p>
                   </div>
                </div>
                <div className="flex items-center gap-10">
                   <div className="hidden lg:block text-right space-y-2">
                      <div className="text-[15px] text-black uppercase tracking-widest">{item.date}</div>
                      <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{item.tech.split('•')[0]}</div>
                   </div>
                   <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-700">
                      {hoveredIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                   </div>
                </div>
              </div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 md:px-14 pb-14 pt-10 border-t border-black/5 bg-black/[0.01]">
                      <div className="flex flex-col gap-6">
                         <p className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                            <Trophy size={14} /> Description
                         </p>
                         <p className="text-gray-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl">
                            {item.description}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
