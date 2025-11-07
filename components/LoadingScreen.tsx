"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 60 ? Math.random() * 10 : Math.random() * 20;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Wait for everything to load
    const handleLoad = () => {
      // Ensure minimum loading time of 2.5 seconds for smooth experience
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 2500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900"
        >
          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-gray-100/50 to-gray-200/30 dark:from-transparent dark:via-gray-900/50 dark:to-black/30" />

          {/* Background floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-gray-400/30 to-gray-600/30 dark:from-gray-600/30 dark:to-gray-800/30 blur-sm"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.1, 0.6, 0.1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Main loading container */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            {/* Logo/Initials with glass morphism */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2 
              }}
              className="relative"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-8 rounded-full bg-gradient-to-r from-gray-400/20 via-gray-500/30 to-gray-600/20 dark:from-gray-600/20 dark:via-gray-500/30 dark:to-gray-400/20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Glass container */}
                <div className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 p-8 rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl">
                  <motion.h1
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    RG
                  </motion.h1>
                </div>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-center mt-6"
              >
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-semibold tracking-[0.3em] uppercase">
                  Rahul Gupta
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 tracking-wider">
                  Full Stack & AI Developer
                </p>
              </motion.div>
            </motion.div>

            {/* Orbital loading rings */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative w-32 h-32 md:w-40 md:h-40"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `2px solid ${
                      i === 0 
                        ? "rgba(31, 41, 55, 0.3)" 
                        : i === 1 
                        ? "rgba(75, 85, 99, 0.3)" 
                        : "rgba(107, 114, 128, 0.3)"
                    }`,
                    borderTopColor: i === 0 ? "#1f2937" : i === 1 ? "#4b5563" : "#6b7280",
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 3 - i * 0.4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    },
                  }}
                />
              ))}
              
              {/* Center pulsing orb */}
              <motion.div
                className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    "0 0 20px rgba(107, 114, 128, 0.5)",
                    "0 0 40px rgba(107, 114, 128, 0.8)",
                    "0 0 20px rgba(107, 114, 128, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-72 md:w-96"
            >
              <div className="space-y-4">
                {/* Progress text and percentage */}
                <div className="flex justify-between items-center text-sm">
                  <motion.span
                    className="text-gray-600 dark:text-gray-400 font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {progress < 30 
                      ? "Initializing..." 
                      : progress < 60 
                      ? "Loading components..." 
                      : progress < 90 
                      ? "Almost there..." 
                      : "Ready!"}
                  </motion.span>
                  <motion.span
                    key={Math.floor(progress)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
                  >
                    {Math.min(Math.floor(progress), 100)}%
                  </motion.span>
                </div>

                {/* Glass progress bar container */}
                <div className="relative h-3 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-md border border-gray-300/50 dark:border-gray-700/50">
                  {/* Progress fill with gradient */}
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:via-gray-300 dark:to-gray-200 shadow-lg"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{ width: "30%" }}
                    animate={{
                      x: ["-100%", "400%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Bouncing dots indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex gap-3"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500"
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/10 dark:to-black/30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
