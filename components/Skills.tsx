"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Cloud, Layers, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Python", "Node.js", "NestJS", "Flask", "Django"],
    color: "from-violet-500 to-purple-500",
  },
  {
    category: "Data & AI/ML",
    icon: Brain,
    items: ["NumPy", "Pandas", "Matplotlib", "Sklearn", "PyTorch", "TensorFlow"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"],
    color: "from-teal-500 to-green-500",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Linux", "Git", "CI/CD"],
    color: "from-orange-500 to-amber-500",
  },
  {
    category: "Other",
    icon: Layers,
    items: ["Digital Marketing", "Process Automation", "System Admin", "Apache"],
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Icon with gradient background */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg mb-4 icon-glow">
                  <Icon className="w-8 h-8 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                </div>

                {/* Category name */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {skill.category}
                </h3>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-200 dark:hover:to-gray-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 glass-card p-8 rounded-2xl text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Fluent in <span className="gradient-text font-semibold">English & Hindi</span>, conversational in{" "}
            <span className="gradient-text font-semibold">Marathi & Gujarati</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
