"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Globe, TrendingUp, Settings, Cloud } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-light-surface dark:bg-dark-surface/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Gradient divider */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 rounded-full opacity-50 hidden lg:block" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card p-4">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image src="/images/Vector.png" alt="Rahul Gupta" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-full text-sm font-semibold"
              >
                10+ Projects
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m Rahul Gupta — a Full Stack Developer and AI Engineer building production-ready web applications with Next.js and Supabase. I focus on practical ML, automation, and reliable deployments.
              </p>

              <p>
                I&apos;ve built internal tools like <strong>Line Sheet Manager</strong> (Flask + Pandas + Cloudinary) and fire safety platforms like Fire Eye (Next.js + Supabase). My stack: Next.js, Python/Flask, and PostgreSQL.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">What I Do</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, text: "Full-Stack Web apps (Next.js, Flask)" },
                    { icon: TrendingUp, text: "Data & ML pipelines (Pandas, scikit-learn)" },
                    { icon: Settings, text: "Automation & integrations (APIs, Excel)" },
                    { icon: Cloud, text: "Deployment & ops (Docker, Heroku, AWS, Vercel)" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                        className="glass-card p-3 rounded-lg hover:scale-105 transition-transform"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 flex-shrink-0 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
