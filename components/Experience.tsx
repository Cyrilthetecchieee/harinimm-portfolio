"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "B.Tech Computer Science & Business Systems", // ✏️ CONTENT REPLACED
    company: "PSNA College of Engineering and Technology, Dindigul", // ✏️ CONTENT REPLACED
    status: "Student", // ✏️ CONTENT REPLACED
    period: "2023 – 2027", // ✏️ CONTENT REPLACED
    description: "Pre-final year CS student with 8.23 CGPA. Focused on full-stack development, IoT systems, and machine learning integration. Proficient in Java, JavaScript, REST APIs.", // ✏️ CONTENT REPLACED
    highlights: ["CSBS", "8.23 CGPA", "IoT & ML"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
  {
    role: "Secretary", // ✏️ CONTENT REPLACED
    company: "PSNACET — Automation Club", // ✏️ CONTENT REPLACED
    status: "Secretary", // ✏️ CONTENT REPLACED
    period: "2024 – 2025", // ✏️ CONTENT REPLACED
    description: "Mentored 30+ peers on RPA and automation concepts; guided 5+ teams through end-to-end UiPath project development. Organised 3 hands-on automation workshops; managed end-to-end event logistics for club activities.", // ✏️ CONTENT REPLACED
    highlights: ["RPA", "UiPath", "Mentoring"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
  {
    role: "SIH 2025 Finalist", // ✏️ CONTENT REPLACED
    company: "Smart India Hackathon", // ✏️ CONTENT REPLACED
    status: "National Finalist", // ✏️ CONTENT REPLACED
    period: "2025", // ✏️ CONTENT REPLACED
    description: "Selected nationally from thousands of teams; built IoT-based smart agriculture system chosen for final evaluation round.", // ✏️ CONTENT REPLACED
    highlights: ["SIH", "IoT", "National Level"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
  {
    role: "NASA Space Apps Nominee", // ✏️ CONTENT REPLACED
    company: "NASA Space Apps Challenge", // ✏️ CONTENT REPLACED
    status: "College Nominee", // ✏️ CONTENT REPLACED
    period: "2024", // ✏️ CONTENT REPLACED
    description: "Nominated to represent college at the global NASA hackathon; designed a space-data driven solution.", // ✏️ CONTENT REPLACED
    highlights: ["NASA", "Space Data", "Hackathon"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
  {
    role: "3rd Prize — Technical Paper Presentation", // ✏️ CONTENT REPLACED
    company: "TechSpectrum 2024, SRM Trichy", // ✏️ CONTENT REPLACED
    status: "Award Winner", // ✏️ CONTENT REPLACED
    period: "2024", // ✏️ CONTENT REPLACED
    description: "Presented original research paper; awarded 3rd place among 40+ competing teams.", // ✏️ CONTENT REPLACED
    highlights: ["Research", "SRM", "Award"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
  {
    role: "Advanced Java Programming", // ✏️ CONTENT REPLACED
    company: "Certified Course Completion", // ✏️ CONTENT REPLACED
    status: "Certified", // ✏️ CONTENT REPLACED
    period: "2025", // ✏️ CONTENT REPLACED
    description: "Completed Advanced Java Programming Course. Also holds certifications in MongoDB (MongoDB University, 2024), Java (ACE Academy, 2025), and Introduction to RPA and Automation (UiPath Academy, 2024).", // ✏️ CONTENT REPLACED
    highlights: ["Java", "MongoDB", "UiPath"], // ✏️ CONTENT REPLACED
    logo: null // ✏️ CONTENT REPLACED
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden ">
      {/* Editorial Grid Base */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-x-0 h-px bg-black top-1/4" />
        <div className="absolute inset-x-0 h-px bg-black top-2/4" />
        <div className="absolute inset-x-0 h-px bg-black top-3/4" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col mb-24 gap-4">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-6xl md:text-9xl font-normal  tracking-tighter text-black leading-none">
                Journey <br /> <span className="font-accent italic text-accent lowercase tracking-normal text-5xl md:text-8xl font-normal">milestone</span>
              </h2>
              <div className="flex items-center gap-4 mt-8">
                 <div className="h-px w-20 bg-accent/30" />
                 <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.5em]">Professional path & impact</p>
              </div>
           </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 md:p-16 rounded-[3rem] border border-black/5 hover:border-accent/30 bg-black/[0.01] hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] transition-all duration-1000 overflow-hidden"
            >
              {/* Interaction accent blob */}
              <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000" />
              
              <div className="lg:col-span-3 flex flex-col justify-start">
                 <div className="flex items-center gap-3 text-accent mb-4">
                    <Calendar size={14} />
                    <span className="text-[11px] font-medium tracking-widest">{exp.period}</span>
                 </div>
                 <div className="mt-auto hidden lg:block">
                    <div className="flex flex-wrap gap-2">
                       {exp.highlights.map(h => (
                         <span key={h} className="text-[9px] font-semibold text-gray-300 tracking-tighter border border-black/[0.03] px-3 py-1 rounded-full group-hover:text-black group-hover:border-black/5 transition-colors">
                            {h}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-6">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center overflow-hidden">
                       {exp.logo ? (
                         <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
                       ) : (
                         <div className="w-full h-full bg-black text-white flex items-center justify-center font-accent italic text-xl">
                            {exp.company[0]} {/* ✏️ CONTENT REPLACED */}
                         </div>
                       )}
                    </div>
                    <div>
                       <h3 className="text-4xl md:text-5xl font-normal  text-black leading-tight group-hover:text-accent transition-colors duration-700">{exp.role}</h3>
                       <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em] mt-2 italic">{exp.company}</p>
                    </div>
                 </div>
                 <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed group-hover:text-black transition-colors duration-700 whitespace-pre-line">
                    {exp.description}
                 </p>
              </div>

              <div className="lg:col-span-3 flex flex-col lg:items-end justify-center gap-8">
                 <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/60 group-hover:text-black transition-colors">{exp.status}</span>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                    <Briefcase size={20} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
