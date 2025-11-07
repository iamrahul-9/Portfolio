"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fire Eye - Fire Safety Inspection System",
    description: "Cloud-based fire safety panel inspection platform with role-based dashboards, real-time data sync, and mobile-responsive design for field inspections.",
    tech: ["Next.js", "NestJS", "Supabase", "PostgreSQL", "JWT"],
    image: "🔥",
    github: "https://github.com/iamrahul-9",
    live: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Line Sheet Manager",
    description: "Full-stack inventory automation tool for fashion wholesale operations. Reduced manual admin tasks by 50% and improved data accuracy.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    image: "�",
    github: "https://github.com/iamrahul-9/Line-Sheet-Manager",
    live: "https://minkas.onrender.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Teckypedia - E-Commerce Platform",
    description: "AWS-powered e-commerce platform for computer parts with AI chatbot integration (Amazon Lex) for customer support.",
    tech: ["AWS ECS", "Python", "Amazon Lex", "MySQL"],
    image: "�",
    github: "https://github.com/iamrahul-9/Teckypedia",
    live: "#",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Movie Recommendation System",
    description: "Advanced recommendation engine using content-based, collaborative, and hybrid filtering techniques. Improved accuracy by 30%.",
    tech: ["Python", "Pandas", "NumPy", "Sklearn"],
    image: "🎬",
    github: "https://github.com/iamrahul-9/Movie-Recommendation-System",
    live: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "COVID-19 Vaccine Slot Tracker",
    description: "Real-time vaccine slot tracker using the APIsetu platform. Improved public access to vaccination slots with timely and accurate information.",
    tech: ["Python", "REST APIs", "Flask"],
    image: "�",
    github: "https://github.com/iamrahul-9/Covid-19-Vaccine-slot",
    live: "#",
    gradient: "from-teal-500 to-green-500",
  },
  {
    title: "Virtual Try-On (VTON) Solution",
    description: "AI-powered virtual try-on system replacing traditional photoshoots. Saved $15K+ annually and accelerated product launches by 60%.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    image: "�",
    github: "#",
    live: "#",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-light-surface dark:bg-dark-surface/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, from AI-powered applications to scalable web platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-effect transition-all duration-500"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-7xl">
                <span className="filter drop-shadow-lg">{project.image}</span>
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/iamrahul-9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
