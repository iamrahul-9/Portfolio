"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";

// Local Fire icon to match the dual-tone stroke style used in Skills
function FireIcon(props: React.SVGProps<SVGSVGElement>) {
  // Variant 1: slightly taller flame with a flowing stroke and inner negative space
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 3c1.8 2.2 4 4 4 7 0 4-3.5 6.5-4 9-.8-2.6-4-4.5-4-8 0-2.5 1.5-5.5 4-8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M12 8.5c.6-.9 1.6-1 2-1.8.4-.9 0-1.6-.8-1.6-.4 0-.8.8-.9 1.1-.1.3-.6-.2-1-.2-.5 0-1 1-1 1.8 0 1 1 1.2 1.7 1.7z"
      />
    </svg>
  );
}

const projects = [
  {
    title: "Fire Eye - Fire Safety Inspection System",
    description:
      "Cloud-based fire safety inspection platform with role-based dashboards, real-time data sync, calender timeline with scheduling and mobile-responsive design for field inspections.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "JWT", "Tailwind CSS"],
    screenshot: "/images/projects/fire-eye-dashboard.png",
    github: "https://github.com/iamrahul-9/FireEye-BE",
    live: "https://fire-eye-xi.vercel.app/",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Line Sheet Manager",
    description:
      "Flask-based line sheet manager for fashion wholesale: Excel import & processing (Pandas), image uploads (Cloudinary), dynamic line-sheet generation, user auth and admin workflows. Templates use Jinja2 and Tailwind CSS.",
    tech: ["Python", "Flask", "SQLite", "Pandas", "Jinja2", "Tailwind CSS"],
    screenshot: "/images/projects/line-sheet-manager.png",
    github: "https://github.com/iamrahul-9/Line-Sheet-Manager",
    live: "https://minkas.onrender.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Teckypedia - E-Commerce Platform",
    description:
      "Flask + Tailwind e‑commerce platform for computer spare parts featuring user auth, product listings, shopping cart and an admin panel; SQLite backend and JS for UI interactions.",
    tech: ["Python", "Flask", "Tailwind CSS", "SQLite", "JavaScript"],
    screenshot: "/images/projects/teckypedia.jpeg",
    github: "https://github.com/iamrahul-9/Teckypedia",
    live: "#",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Streamlit demo of a movie recommender using bag-of-words content features and cosine similarity (content-based). README links to dataset and model artifacts for offline evaluation.",
    tech: ["Python", "Streamlit", "NLP", "Scikit-learn"],
    screenshot: "/images/projects/movie-recommendation-system.png",
    github: "https://github.com/iamrahul-9/Movie-Recommendation-System",
    live: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "COVID-19 Vaccine Slot Tracker",
    description:
      "Lightweight Python utility that queries the CoWIN (APISetu) endpoints to find available vaccine slots by pincode and date. Uses requests for API integration.",
    tech: ["Python", "API Integration", "Requests"],
    screenshot: "/images/projects/covid-vaccine-slot-tracker.png",
    github: "https://github.com/iamrahul-9/Covid-19-Vaccine-slot",
    live: "#",
    gradient: "from-teal-500 to-green-500",
  },
  {
    title: "House Price Prediction",
    description:
      "Flask web app that uses a regression model to predict house prices. Includes a web UI (area, BHK, bathrooms, location inputs), model artifacts and a deployable site (Heroku preview available).",
    tech: ["Python", "Flask", "Scikit-learn", "HTML/CSS", "JavaScript"],
    screenshot: "/images/projects/house-price-prediction.gif",
    github: "https://github.com/iamrahul-9/House-Price-Prediction",
    live: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Close on Escape and lock body scroll when modal is open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSrc(null);
    }

    const prevOverflow =
      typeof document !== "undefined" ? document.body.style.overflow : "";
    if (openSrc) {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (typeof document !== "undefined")
        document.body.style.overflow = prevOverflow;
    };
  }, [openSrc]);

  return (
    <section
      id="projects"
      className="section-padding bg-light-surface dark:bg-dark-surface/50"
    >
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
            A showcase of my recent work, from AI-powered applications to
            scalable web platforms
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
              className="relative glass-card rounded-2xl overflow-hidden group hover:glow-effect transition-all duration-500"
            >
              {/* Ribbon badge (top-right) for status */}
              {project.status ? (
                <div className="absolute top-3 right-3 z-30 transform rotate-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/6 dark:bg-white/6 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 text-xs font-semibold backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
              ) : null}
              {/* Project Image/Icon */}
              <div
                className={`relative aspect-video bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden ${
                  project.status ? "" : "cursor-pointer"
                }`}
                onClick={
                  project.status
                    ? undefined
                    : () => project.screenshot && setOpenSrc(project.screenshot)
                }
                role={
                  project.status
                    ? undefined
                    : project.screenshot
                    ? "button"
                    : undefined
                }
                tabIndex={project.status ? -1 : project.screenshot ? 0 : -1}
                onKeyDown={(e) => {
                  // open on Enter or Space when interactive
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (
                    !project.status &&
                    project.screenshot &&
                    (e.key === "Enter" || e.key === " ")
                  )
                    setOpenSrc(project.screenshot);
                }}
              >
                {/* If project is in development (has status), show Coming Soon placeholder and disable click */}
                {project.status ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative px-6 py-6 rounded-2xl bg-white/6 dark:bg-white/6 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-center w-11/12 max-w-sm">
                      <div className="flex items-center justify-center mb-3">
                        {/* Show a flame icon specifically for Fire Eye, otherwise show neutral icon */}
                        {project.title.toLowerCase().includes("fire eye") ? (
                          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg mb-4 icon-glow">
                            <FireIcon className="w-8 h-8 text-gray-900 dark:text-gray-100" />
                          </div>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-8 h-8 text-gray-800 dark:text-gray-100"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 3c1.5 2 4 5 6 7 2 2 2 5 0 7s-5 2-7 0c-2-2-5-4.5-7-6C3 10 6 6.5 8 4"
                            />
                          </svg>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Coming Soon
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Launching soon — currently in development.
                      </p>
                    </div>
                  </div>
                ) : project.screenshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-7xl filter drop-shadow-lg">
                    {project.title.charAt(0)}
                  </span>
                )}

                {/* subtle overlay retained for aesthetics (no action buttons here) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>

                {/* Dual-tone CTAs shown immediately after the title */}
                <div className="flex flex-wrap gap-3 mb-3 items-center">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center gap-3 px-4 py-3 sm:px-3 sm:py-1.5 rounded-full bg-white/6 dark:bg-white/6 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200/40 dark:focus-visible:ring-white/20 transition text-sm font-medium justify-center sm:justify-start"
                      aria-label="View on GitHub"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/8 dark:bg-white/8 border border-gray-200 dark:border-white/10 shadow-sm">
                        <Github className="w-3 h-3" />
                      </span>
                      <span>GitHub</span>
                    </a>
                  ) : null}

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center gap-3 px-4 py-3 sm:px-3 sm:py-1.5 rounded-full bg-white/6 dark:bg-white/6 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200/40 dark:focus-visible:ring-white/20 transition text-sm font-medium justify-center sm:justify-start"
                      aria-label="Live Preview"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/8 dark:bg-white/8 border border-gray-200 dark:border-white/10 shadow-sm">
                        <ExternalLink className="w-3 h-3" />
                      </span>
                      <span>Live Preview</span>
                    </a>
                  ) : null}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
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

        {/* Lightbox modal for full-screen image preview */}
        {openSrc ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpenSrc(null)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative max-w-[96vw] max-h-[96vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenSrc(null)}
                className="absolute right-2 top-2 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openSrc}
                alt="Project preview full"
                className="mx-auto block max-w-full max-h-[90vh] object-contain rounded"
              />
            </div>
          </motion.div>
        ) : null}

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
