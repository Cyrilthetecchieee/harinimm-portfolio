"use client";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-[10px] font-medium  tracking-[0.3em] text-gray-400 hover:text-accent transition-colors"
        >
          <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <Projects 
        title={<>Complete <br /> <span className="text-accent font-accent lowercase tracking-normal italic font-normal">gallery</span></>}
      />
      
      <Contact />

      <style jsx font-accent>{`
        .font-accent {
          font-family: var(--font-accent);
          font-weight: 400;
        }
      `}</style>
    </main>
  );
}
