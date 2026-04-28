"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { SpinningText } from "./ui/basic";

type ScreenSize = "mobile" | "laptop-sm" | "laptop-md" | "laptop-lg" | "desktop";

function getScreenSize(width: number): ScreenSize {
  if (width < 768) return "mobile";
  if (width < 1440) return "laptop-sm";    // 1366×768 typical Windows laptop
  if (width < 1536) return "laptop-md";    // 1440×900 MacBook
  if (width < 1920) return "laptop-lg";    // 1536×864 large laptop
  return "desktop";
}

const SPINNING_CONFIG: Record<ScreenSize, { radius: number; fontSize: string; size: string }> = {
  "mobile":     { radius: 26, fontSize: "5px",   size: "w-[240px] h-[240px]" },
  "laptop-sm":  { radius: 28, fontSize: "6px",   size: "w-[260px] h-[260px]" }, // 1366
  "laptop-md":  { radius: 30, fontSize: "6.5px", size: "w-[280px] h-[280px]" }, // 1440
  "laptop-lg":  { radius: 34, fontSize: "7px",   size: "w-[320px] h-[320px]" }, // 1536
  "desktop":    { radius: 34, fontSize: "6.5px", size: "w-[320px] h-[320px]" },
};

export default function TravellingText() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");
  const [isReady, setIsReady] = useState(false);
  
  const hasAnimatedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const currentAnchorX = useMotionValue(0);
  const currentAnchorY = useMotionValue(0);

  const getAnchorPosition = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    return {
      x: Math.round(rect.left + scrollLeft + rect.width / 2),
      y: Math.round(rect.top + scrollTop + rect.height / 2),
    };
  }, []);

  useEffect(() => {
    setScreenSize(getScreenSize(window.innerWidth));

    // Initial positioning
    const initPositions = () => {
      const heroPos = getAnchorPosition("hero-text-anchor");
      if (heroPos) {
        currentAnchorX.set(heroPos.x);
        currentAnchorY.set(heroPos.y);
        setIsReady(true);
      }
    };

    initPositions();
    const timer = setTimeout(initPositions, 1000);

    // Scroll-based detection (Lenis smooth scroll compatible)
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (isAnimatingRef.current) return;

      const aboutAnchor = document.getElementById("about-text-anchor");
      if (!aboutAnchor) return;

      const rect = aboutAnchor.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // About anchor is visible in the viewport
      const aboutIsVisible = rect.top < viewportHeight * 0.7 && rect.bottom > 0;
      // About anchor is fully below viewport (user scrolled back up)
      const aboutIsBelowViewport = rect.top > viewportHeight;

      if (aboutIsVisible && !hasAnimatedRef.current) {
        triggerMove(true);
      } else if (aboutIsBelowViewport && hasAnimatedRef.current) {
        triggerMove(false);
      }
    };

    const triggerMove = (toTarget: boolean) => {
      if (window.innerWidth < 768) return;

      const targetId = toTarget ? "about-text-anchor" : "hero-text-anchor";
      const pos = getAnchorPosition(targetId);
      if (!pos) return;

      hasAnimatedRef.current = toTarget;
      isAnimatingRef.current = true;

      animate(currentAnchorX, pos.x, { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
      });
      animate(currentAnchorY, pos.y, { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => { isAnimatingRef.current = false; }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      setScreenSize(getScreenSize(w));

      const targetId = hasAnimatedRef.current ? "about-text-anchor" : "hero-text-anchor";
      const pos = getAnchorPosition(w < 768 ? "hero-text-anchor" : targetId);
      if (pos) {
        currentAnchorX.set(pos.x);
        currentAnchorY.set(pos.y);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [currentAnchorX, currentAnchorY, getAnchorPosition]);

  if (!isReady) return null;

  const config = SPINNING_CONFIG[screenSize];

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        x: currentAnchorX,
        y: currentAnchorY,
        zIndex: 100,
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <SpinningText
        text="FULL STACK · SDE CANDIDATE · PROBLEM SOLVER · JAVA · FULL STACK · SDE CANDIDATE · PROBLEM SOLVER · JAVA · " // ✏️ CONTENT REPLACED
        radius={config.radius}
        fontSize={config.fontSize}
        textClassName="tracking-[0.15em] font-semibold fill-gray-500"
        speed={25}
        className={config.size}
      />
    </motion.div>
  );
}
