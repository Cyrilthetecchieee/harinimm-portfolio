"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail, Globe, Linkedin, FileText, Download } from "lucide-react";

import { SpinningText } from "@/components/ui/basic";
import BlurText from "@/components/ui/BlurText";
import TextType from "@/components/ui/TextType";

export default function Hero() {
  const [startAnim, setStartAnim] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleExit = () => setStartAnim(true);
    if ((window as any).preloaderFinished) {
      handleExit();
    }
    window.addEventListener('preloaderFinished', handleExit);
    return () => window.removeEventListener('preloaderFinished', handleExit);
  }, []);

  // Delay the subtitle appearance so the animation is visible after the preloader exits
  useEffect(() => {
    if (!startAnim) return;
    const timer = setTimeout(() => setShowSubtext(true), 1200);
    return () => clearTimeout(timer);
  }, [startAnim]);

  useEffect(() => {
    if (!startAnim) return;

    // Small delay to ensure the preloader exit animation has started
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(
          title1Ref.current,
          { y: 150, skewY: 7, opacity: 0 },
          { y: 0, skewY: 0, opacity: 1, duration: 1.8 }
        )
          .fromTo(
            ".hero-ui-stagger",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
            "-=0.8"
          )
          .fromTo(
            ".hero-line-decorator",
            { scaleX: 0 },
            { scaleX: 1, duration: 2, ease: "expo.inOut" },
            "-=1.5"
          );
      }, containerRef);

      return () => ctx.revert();
    }, 400);

    return () => clearTimeout(timeout);
  }, [startAnim]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-white"
    >
      {/* Premium Design Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-black/[0.005] skew-x-[-15deg] origin-top translate-x-1/4" />
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 opacity-[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-black h-full last:border-0" />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 py-20">
        <div className="flex flex-col gap-16 md:gap-24">

          <div className="hero-ui-stagger flex items-center gap-4">
            <TextType
              text={["Full Stack Developer", "SDE Candidate", "Problem Solver", "CS & Business Systems"]} // ✏️ CONTENT REPLACED
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-400 mt-15"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
            <div className="h-px flex-1 bg-black/5 hero-line-decorator origin-left" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="leading-[0.8] tracking-tighter uppercase relative">
              <span className="overflow-visible block py-4 mb-2 px-2 -ml-2">
                <span ref={title1Ref} className="block text-[12vw] lg:text-[clamp(6rem,9vw,10rem)] font-normal text-black whitespace-nowrap" style={{ opacity: 0 }}>
                  HARINI <span className="text-accent italic font-accent lowercase tracking-normal inline-block pr-[0.1em]">M M</span> {/* ✏️ CONTENT REPLACED */}
                </span>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            <div className="lg:col-span-4">
              {showSubtext ? (
                <div className="flex flex-wrap gap-x-[0.3em] text-xl md:text-3xl text-gray-400 leading-tight font-medium max-w-2xl">
                  <BlurText text="Building" delay={50} className="inline-block" />
                  <BlurText text="full-stack" delay={50} className="text-black inline-block" />
                  <BlurText text="applications" delay={50} className="text-accent italic font-accent inline-block" />
                  <BlurText text="with" delay={50} className="inline-block" />
                  <BlurText text="FRONTEND" delay={50} className="text-black inline-block" />
                  <BlurText text="integration." delay={50} className="text-accent italic font-accent inline-block" />
                  <BlurText text="Seeking an SDE role." delay={50} className="inline-block" />
                </div>
              ) : (
                <div className="h-20" /> /* Placeholder to maintain layout */
              )}
            </div>

            <div className="lg:col-span-4 flex justify-center items-center py-24 lg:py-16 xl:py-20 hero-ui-stagger overflow-visible">
              <div id="hero-text-anchor" className="w-8 h-8 pointer-events-none opacity-0" />
            </div>


            <div className="lg:col-span-4 flex flex-col gap-10 items-start lg:items-end">
              <div className="flex flex-wrap gap-4 hero-ui-stagger">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-3 md:gap-4 text-sm font-medium bg-black text-white px-7 py-4 md:px-10 md:py-5 rounded-full hover:bg-black/90 transition-all duration-700 shadow-2xl shadow-black/10 overflow-hidden"
                >
                  <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-widest">Explore Works</span>
                  <ArrowDownRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                </motion.a>

                <motion.a
                  href="/HARINIMM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-3 md:gap-4 text-sm font-medium border border-black/30 px-7 py-4 md:px-10 md:py-5 rounded-full hover:border-accent transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-accent group-hover:h-full transition-all duration-500 ease-out opacity-[0.03] pointer-events-none" />
                  <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-widest text-gray-700 group-hover:text-accent transition-colors">Download CV</span>
                  <div className="relative z-10 p-2 bg-gray-50 group-hover:bg-accent/10 rounded-full transition-all duration-500 overflow-hidden">
                    <motion.div
                      whileHover={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Download size={14} className="text-gray-400 group-hover:text-accent transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>

                <div className="flex gap-2">
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="https://github.com/Harinimaheshbabu" target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent" title="GitHub"><Github size={18} /></motion.a> {/* ✏️ CONTENT REPLACED */}
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com/in/harini-mahesh-32155a2ba" target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent" title="LinkedIn"><Linkedin size={18} /></motion.a> {/* ✏️ CONTENT REPLACED */}
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="mailto:hariniii1405@gmail.com" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent" title="Mail"><Mail size={18} /></motion.a> {/* ✏️ CONTENT REPLACED */}
                  <motion.a whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} href="/HARINIMM.pdf" target="_blank" className="p-5 rounded-full border border-black/5 hover:border-accent transition-colors bg-white shadow-sm flex items-center justify-center text-black hover:text-accent" title="Resume"><FileText size={18} /></motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-black/5 grid grid-cols-2 md:grid-cols-4 gap-12 hero-ui-stagger">
          {[
            { label: "Location", val: "Madurai, India", icon: <Globe size={10} className="text-accent" /> },
            { label: "Specialization", val: "Frontend Developer" },
            { label: "Status", val: "Open to SDE Roles" },
            { label: "Focus", val: "Production-grade Software" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                {item.icon} {item.label}
              </span>
              <span className="text-xs font-normal uppercase tracking-tight text-black">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
