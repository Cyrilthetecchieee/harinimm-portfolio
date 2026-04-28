"use client";

import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectsProps {
  limit?: number;
  title?: React.ReactNode;
}

export default function Projects({ limit, title }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-32 px-4 md:px-12  bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24 gap-6">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
              <h2 className="text-[10vw] lg:text-[clamp(6rem,8vw,10rem)] font-normal tracking-tighter leading-[0.85] mb-8 text-black">
                {title || (
                  <>Project <br /> <span className="text-accent font-accent lowercase tracking-normal italic font-normal">gallery</span></>
                )}
              </h2>
              <div className="flex items-center justify-center gap-2">
                 <span className="h-px w-12 bg-accent/20" />
                 <p className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em] leading-relaxed">
                   Handpicked selection
                 </p>
                 <span className="h-px w-12 bg-accent/20" />
              </div>
           </motion.div>
        </div>

        <div className="flex flex-col gap-[10vw]">
          {displayedProjects.map((project, index) => (
            <article key={project.id} className="group relative">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-1 hidden lg:block">
                     <span className="text-[8vw] font-normal text-black/[0.04] leading-none transition-colors group-hover:text-accent/6">
                        {project.id}
                     </span>
                  </div>
                  
                  <div className="lg:col-span-11 flex flex-col justify-center p-10 md:p-16 rounded-[3rem] border border-black/5 hover:border-accent/30 bg-black/[0.01] hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] transition-all duration-1000">
                     <motion.p 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       className="text-accent font-medium text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center gap-3"
                     >
                        <span className="w-1 h-1 bg-accent rounded-full" /> {project.category}
                     </motion.p>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl xl:text-5xl font-normal mb-8 group-hover:text-accent transition-colors duration-500 text-black leading-tight"
                       >
                        {project.title}
                      </motion.h3>
                     <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg leading-relaxed mb-6 max-w-2xl font-medium"
                      >
                        {project.description}
                     </motion.p>

                     <div className="mb-8">
                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-3 underline decoration-accent/20">Main Portions</p>
                        <p className="text-sm font-normal text-black/80">{project.mainPortion}</p>
                     </div>
                     
                     <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map(tag => (
                           <span key={tag} className="px-4 py-1.5 border border-black/[0.03] rounded-full text-[9px] font-medium font-mono text-gray-400 uppercase tracking-widest bg-black/[0.01]">
                              {tag}
                           </span>
                        ))}
                     </div>
  
                     <div className="flex gap-8">
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href={project.githubUrl} target="_blank" className="flex items-center gap-3 text-sm font-normal uppercase tracking-widest text-black/40 hover:text-accent transition-colors">
                              <Github size={25} /> <span className="text-[10px] tracking-widest">View Code</span>
                          </motion.a>
                        )}
                      </div>
                  </div>
               </div>
               
               {/* Decorative separator */}
               {index !== displayedProjects.length - 1 && (
                  <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
               )}
            </article>
          ))}
        </div>
      </div>
      
    </section>
  );
}
