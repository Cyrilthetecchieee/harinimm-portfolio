"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            (window as any).preloaderFinished = true;
            window.dispatchEvent(new Event('preloaderFinished'));
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2
            } 
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative overflow-visible mb-8 h-20 md:h-28 flex items-center px-4">
            <h1 className="text-5xl md:text-8xl font-normal tracking-tighter text-white uppercase select-none flex">
              {"HARINI".split("").map((char, i) => ( // ✏️ CONTENT REPLACED
                <motion.span
                  key={`name-${i}`}
                  initial={{ y: "100%", skewY: 10, opacity: 0 }}
                  animate={{ y: 0, skewY: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.1 + (i * 0.05) 
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="w-[0.3em]" />
              {"m m".split("").map((char, i) => ( // ✏️ CONTENT REPLACED
                <motion.span
                  key={`subtitle-${i}`} // ✏️ CONTENT REPLACED
                  initial={{ y: "100%", skewY: 10, opacity: 0 }}
                  animate={{ y: 0, skewY: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: 0.4 + (i * 0.05) 
                  }}
                  className="text-accent italic font-accent lowercase tracking-normal inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Minimalist Progress Meter */}
          <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${counter}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Large dynamic counter */}
          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-6xl md:text-8xl font-normal text-white/10 tabular-nums">
              {counter.toString().padStart(3, '0')}
            </span>
            <span className="text-xs font-mono tracking-[0.5em] text-accent uppercase">
              Initializing
            </span>
          </div>

          {/* Staggered overlays for a premium exit */}
          <motion.div 
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-accent origin-bottom z-10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
