"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-800/20">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 dark:via-gray-400 to-transparent animate-gradient" />

      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200" />
            </motion.div>
            <span>by Rahul Gupta</span>
            <span className="mx-1">•</span>
            <span>© {currentYear}</span>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            This portfolio was built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
