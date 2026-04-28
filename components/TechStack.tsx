"use client";

import { motion } from "framer-motion";

const techGroups = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "HTML5", "CSS", "Embedded C"],
  },
  {
    category: "Frontend",
    skills: ["Responsive Design", "Figma (Beginner)", "Wireframing (Beginner)", "Canva"],
  },
  {
    category: "Backend",
    skills: ["REST APIs", "Spring Boot (Fundamentals)"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "IoT & Hardware",
    skills: ["Arduino", "ESP32", "IoT Sensors"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Postman", "VS Code", "UiPath (RPA)"],
  },
  {
    category: "Concepts",
    skills: ["OOP", "Data Structures", "Agile", "SDLC", "Anomaly Detection", "Automation"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl lg:text-[clamp(4rem,6vw,7rem)] font-normal tracking-tighter text-black">
                Stack <span className="font-accent italic text-accent lowercase tracking-normal text-5xl lg:text-[clamp(3.5rem,5vw,6rem)] font-normal">tools</span>
              </h2>
              <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em] mt-6 max-w-xs mx-auto">High-performance weapons of choice for digital construction.</p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-black/[0.01] backdrop-blur-sm border border-black/5 rounded-[2.5rem] hover:border-accent/40 hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-700 group cursor-default h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-black/[0.05] font-normal text-6xl pointer-events-none group-hover:text-accent/10 transition-colors">
                 {index + 1}
              </div>
              
              <h3 className="text-lg font-medium uppercase tracking-tighter mb-10 group-hover:text-accent transition-colors text-black">{group.category}</h3>
              <ul className="space-y-4 relative z-10">
                {group.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-gray-500 group-hover:text-black transition-colors">
                     <span className="w-1 h-1 bg-accent/30 group-hover:bg-accent rounded-full transition-colors" />
                     <span className="text-[11px] font-medium uppercase tracking-widest">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
