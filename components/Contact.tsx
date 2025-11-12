"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append the access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Web3Forms API Error:", responseData);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // Local Instagram SVG icon (lucide-react doesn't include Instagram)
  const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.2" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );

  return (
    <section id="contact" className="section-padding bg-light-surface dark:bg-dark-surface/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-500 to-gray-700 dark:from-gray-700 dark:to-gray-900 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I&apos;m currently available for freelance work and collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:rahulbgupta24@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg icon-glow">
                  <Mail className="w-6 h-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-lg font-semibold hover:gradient-text transition-all">
                    rahulbgupta24@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+19057824254"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg icon-glow">
                  <Phone className="w-6 h-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-lg font-semibold hover:gradient-text transition-all">
                    +1 905-782-4254
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg icon-glow">
                  <MapPin className="w-6 h-6 text-gray-900 dark:text-gray-100" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-lg font-semibold">Toronto, ON, Canada</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow me on</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/iamrahul-9", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-gupta-7b528718b/", label: "LinkedIn" },
                  { icon: InstagramIcon, href: "https://www.instagram.com/_i.m.rahul_", label: "Instagram" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card rounded-full hover:glow-effect transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-2 focus:ring-gray-900/20 dark:focus:ring-gray-100/20 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-2 focus:ring-gray-900/20 dark:focus:ring-gray-100/20 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-2 focus:ring-gray-900/20 dark:focus:ring-gray-100/20 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-300"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                className="w-full sm:w-auto inline-flex items-center gap-3 px-4 py-3 sm:px-3 sm:py-1.5 rounded-full bg-white/6 dark:bg-white/6 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200/40 dark:focus-visible:ring-white/20 transition text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/8 dark:bg-white/8 border border-gray-200 dark:border-white/10 shadow-sm">
                      <Send className="w-3.5 h-3.5" />
                    </span>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
