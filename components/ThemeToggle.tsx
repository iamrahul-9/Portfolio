"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-card hover:glow-effect transition-all duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
      ) : (
        <Moon className="w-6 h-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
      )}
    </motion.button>
  );
}
