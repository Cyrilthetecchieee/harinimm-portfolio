"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Eye, Activity } from "lucide-react";

function NumberCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    Math.round(latest).toLocaleString('en-IN')
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span className="font-semibold font-accent italic">{rounded}</motion.span>;
}

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch("/api/views");
        const data = await response.json();
        if (data.views !== null) {
          setViews(data.views);
        }
      } catch (error) {
        console.error("Error fetching views:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-24 mb-12">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.6em] text-white/20"
          >
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
            Syncing
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="flex items-center gap-3">
              <Eye size={18} className="text-accent/90" />
              
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-normal tracking-tight text-white leading-none">
                  <NumberCounter value={views || 1200} />
                </span>
                <span className="font-accent italic text-accent lowercase tracking-normal text-xl leading-none">
                  digital impressions
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
