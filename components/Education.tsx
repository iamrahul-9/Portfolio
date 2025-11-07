"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Cloud Computing",
    level: "Postgraduate",
    school: "Durham College",
    period: "Sep 2023 - Apr 2024",
    location: "Oshawa, ON",
    description: "Specialized in cloud architecture, security, and DevOps practices with hands-on experience in modern cloud platforms.",
    coursework: [
      "Cloud Architecture & Infrastructure",
      "Cloud Security & Compliance",
      "DevOps & CI/CD Automation",
      "Docker & Containerization",
    ],
  },
  {
    degree: "Artificial Intelligence",
    level: "Postgraduate",
    school: "Durham College",
    period: "Sep 2022 - Apr 2023",
    location: "Oshawa, ON",
    description: "Focused on AI algorithms, data visualization, and expert systems with practical applications in machine learning.",
    coursework: [
      "AI Algorithms & Expert Systems",
      "Data Storytelling & Visualization",
      "Applied Mathematics for AI",
      "Machine Learning Applications",
    ],
  },
  {
    degree: "Bachelor of Computer Application",
    level: "Bachelor's Degree",
    school: "Tilak Maharashtra Vidyapeeth",
    period: "Aug 2018 - Apr 2021",
    location: "Pune, MH, India",
    description: "Comprehensive foundation in computer science fundamentals, programming, and software development practices.",
    coursework: [
      "Programming Languages & Data Structures",
      "Database Management Systems",
      "Advanced Web Designing",
      "Operating System & Networking",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-light-surface dark:bg-dark-surface/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic foundation in Cloud Computing, AI, and Computer Science
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 rounded-full opacity-30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-0 md:left-1/2 top-0 md:top-8 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 z-10 flex items-center justify-center shadow-lg"
                >
                  <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900" />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-500"
                  >
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? "md:flex md:flex-row-reverse md:items-start md:gap-3" : "md:flex md:items-start md:gap-3"}`}>
                      <div className={`p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg icon-glow inline-block mb-3 md:mb-0 ${index % 2 === 0 ? "" : ""}`}>
                        <GraduationCap className="w-5 h-5 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                      </div>
                      <div className={`flex-1`}>
                        <h3 className={`text-xl font-bold text-gray-800 dark:text-gray-100 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {edu.degree}
                        </h3>
                        <p className={`text-sm font-semibold gradient-text mb-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {edu.level}
                        </p>
                        <p className={`text-lg font-semibold text-gray-700 dark:text-gray-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {edu.school}
                        </p>
                        <div className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-gray-600 dark:text-gray-400 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <p className={`text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        Relevant Coursework:
                      </p>
                      <ul className={`space-y-2 text-sm text-gray-600 dark:text-gray-400`}>
                        {edu.coursework.map((course, idx) => (
                          <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                            <span className="text-gray-700 dark:text-gray-300 flex-shrink-0">
                              ✓
                            </span>
                            <span className="flex-1">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
