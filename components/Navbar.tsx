"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ABOUT", href: "/#about" },
  { name: "EDUCATION", href: "/#education" },
  { name: "AWARDS", href: "/#hackathons" },
  { name: "WORKS", href: "/#projects" },
  { name: "JOURNEY", href: "/#experience" },
  { name: "STACK", href: "/#tech-stack" },
  { name: "RESUME", href: "/HARINIMM.pdf", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] lg:w-[85%] xl:w-[75%] max-w-5xl rounded-full",
        scrolled
          ? "bg-white/20 backdrop-blur-xl border border-black/5 py-3 lg:py-5 px-6 lg:px-10 shadow-xl shadow-black/[0.03]"
          : "bg-transparent py-4 lg:py-6 px-6 lg:px-10"
      )}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl text-gray-400 font-normal tracking-tighter hover:text-accent transition-colors flex items-center gap-1">
          HM<span className="text-accent italic font-accent">.</span> {/* ✏️ CONTENT REPLACED */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => !link.external && handleSmoothScroll(e, link.href)}
              className="text-[10px] font-medium tracking-[0.2em] text-gray-500 hover:text-black transition-colors relative group"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all"
              />
            </Link>
          ))}
          <motion.a
            href="mailto:hariniii1405@gmail.com" // ✏️ CONTENT REPLACED
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-black text-white text-[9px] font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-all duration-500 shadow-sm"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-black/5 rounded-3xl p-8 lg:hidden flex flex-col gap-6 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => !link.external ? handleSmoothScroll(e, link.href) : setIsOpen(false)}
                  className="text-2xl font-normal uppercase tracking-tighter text-black hover:text-accent transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
