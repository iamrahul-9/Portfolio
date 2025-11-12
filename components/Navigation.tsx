"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`flex items-center gap-1 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
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
    </motion.nav>
  );
}
