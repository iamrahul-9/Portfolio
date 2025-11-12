"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    {name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    // close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 640 && open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    const prev = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (open) document.body.style.overflow = "hidden";
    else if (typeof document !== "undefined") document.body.style.overflow = prev;
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className="flex items-center gap-2">
        {/* Desktop links */}
        <div
          className={`hidden sm:flex items-center gap-1 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
            scrolled
              ? "bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 shadow-lg"
              : "bg-white/60 dark:bg-gray-900/60 border-gray-200/50 dark:border-gray-700/50 shadow-md"
          }`}
        >
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile toggle - fixed left, mirror ThemeToggle size/style */}
        <motion.button
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed top-6 left-6 z-50 p-3 rounded-full glass-card hover:glow-effect transition-all duration-300 sm:hidden ${
            scrolled ? "bg-white/80 dark:bg-gray-900/80" : "bg-white/60 dark:bg-gray-900/60"
          }`}
        >
          {open ? <X className="w-6 h-6 text-gray-900 dark:text-gray-100" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-gray-100" />}
        </motion.button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl p-4 shadow-lg sm:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg text-base text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
