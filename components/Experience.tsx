"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "IT & Digital Solutions Specialist",
    company: "Suntronics – Fire Fighting Panels",
    period: "October 2025 – Present",
    location: "Mumbai, MH, India (Remote)",
    description:
      "Spearheading digital transformation initiatives, including the development of the FireEye safety inspection platform and internal inventory systems.",
    achievements: [
      "Developed 'Fire Eye', a role-based fire safety inspection platform using Next.js and Supabase",
      "Building an internal inventory system to streamline stock management and order processing",
      "Automating manual workflows for customer and supplier lead generation, improving operational efficiency",
    ],
  },
  {
    title: "Warehouse Supervisor & Technology Solutions Lead",
    company: "Jessy Fashions Inc. (MINKAS)",
    period: "July 2024 – October 2025",
    location: "York, ON, Canada",
    description:
      "Led warehouse operations and technology initiatives for a 20+ year wholesale brand. Built internal tools and automated processes to improve efficiency and reliability.",
    achievements: [
      "Built a Line Sheet Manager application that reduced manual data entry time by ~50%",
      "Implemented Virtual Try-On (VTON) AI solutions, replacing photoshoot operations and saving ~$15K annually",
      "Designed backup and disaster recovery routines achieving 99.9% uptime",
    ],
  },
  {
    title: "Python Developer",
    company: "Gajshield Infotech Pvt Ltd",
    period: "August 2021 – August 2022",
    location: "Navi Mumbai, MH, India",
    description:
      "Worked on security firewall development and web framework implementations, contributing to product features and testing automation.",
    achievements: [
      "Contributed to security firewall development that reduced network breaches",
      "Built features and automated tests across multiple projects, improving delivery velocity",
      "Participated in code reviews and mentoring junior engineers",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey building innovative solutions and leading development teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 rounded-full opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                    className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-300"
                  >
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? "md:flex md:flex-row-reverse md:items-start md:gap-3" : "md:flex md:items-start md:gap-3"}`}>
                      <div className={`p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg icon-glow inline-block mb-3 md:mb-0 ${index % 2 === 0 ? "" : ""}`}>
                        <Briefcase className="w-5 h-5 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                      </div>
                      <div className={`flex-1`}>
                        <h3 className={`text-xl font-bold text-gray-800 dark:text-gray-100 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {exp.title}
                        </h3>
                        <p className={`text-lg font-semibold gradient-text ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {exp.company}
                        </p>
                        <div className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-gray-600 dark:text-gray-400 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className={`space-y-2 text-sm text-gray-600 dark:text-gray-400`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <span className="text-gray-700 dark:text-gray-300 flex-shrink-0">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
