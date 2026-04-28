"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech – Computer Science & Business Systems",
    institution: "PSNA College of Engineering and Technology, Dindigul",
    grade: "8.23 CGPA (upto 5th Sem)",
    period: "2023 – 2027",
    location: "Dindigul, India",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Vikaasa Heritage Campus, Madurai",
    grade: "77%",
    period: "2023",
    location: "Madurai, India",
  },
  {
    degree: "Secondary School (X)",
    institution: "Vikaasa Heritage Campus",
    grade: "87%",
    period: "2021",
    location: "Madurai, India",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col mb-24 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-normal tracking-tighter text-black leading-none">
              Education <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-5xl md:text-8xl font-normal">journey</span>
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-20 bg-accent/30" />
              <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.5em]">Academic background</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 md:p-12 rounded-[3rem] border border-black/5 hover:border-accent/30 bg-black/[0.01] hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] transition-all duration-1000 overflow-hidden"
            >
              {/* Accent blob */}
              <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 text-accent mb-6">
                  <GraduationCap size={18} />
                  <span className="text-[11px] font-medium tracking-widest uppercase">{edu.period}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-normal text-black leading-tight group-hover:text-accent transition-colors duration-700 mb-4">
                  {edu.degree}
                </h3>

                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] mb-8 italic">
                  {edu.institution}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-2xl font-normal text-black">{edu.grade}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={12} />
                    <span className="text-[10px] font-medium uppercase tracking-widest">{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
