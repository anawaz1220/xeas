'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    description: "We leverage cutting-edge technologies to build solutions that push boundaries and create competitive advantages.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality",
    description: "Every line of code is crafted with precision, tested rigorously, and built to last.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Partnership",
    description: "We work alongside our clients as true partners, invested in their long-term success.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agility",
    description: "We adapt quickly to changing requirements and market conditions, delivering value iteratively.",
  },
];

const expertise = [
  "Full-stack Web Development",
  "Geospatial & GIS Solutions",
  "Cloud Architecture (AWS, Azure, GCP)",
  "Database Design & Optimization",
  "API Development & Integration",
  "Real-time Systems",
  "Data Analytics & Visualization",
  "Mobile-Responsive Design",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              About <span className="gradient-text">XEAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              We're a technology company on a mission to help businesses harness the power of location intelligence and custom software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p>
              XEAS Technologies was founded on the belief that{" "}
              <span className="text-white font-semibold">location data is one of the most underutilized assets</span>{" "}
              in modern business. While companies collect vast amounts of spatial information, few know how to transform it into actionable insights.
            </p>
            <p>
              We specialize in building{" "}
              <span className="text-white font-semibold">map-based applications, geospatial platforms, and data-driven systems</span>{" "}
              that help organizations make smarter decisions. From fleet management to site selection, from territory planning to asset tracking—we turn location into a competitive advantage.
            </p>
            <p>
              Beyond mapping, we're full-stack developers who build{" "}
              <span className="text-white font-semibold">custom software solutions tailored to unique business needs</span>.
              Whether you need a complex web application, an API integration, or a complete data platform, we bring the technical expertise and business acumen to deliver solutions that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Our <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400">
                We bring deep technical knowledge across the full technology stack, with special expertise in location-based systems and data platforms.
              </p>
              <p className="text-gray-300">
                Our team has built everything from real-time mapping applications handling millions of data points to complex enterprise systems integrating multiple data sources. We understand both the technical challenges and business requirements of modern software development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 flex items-center space-x-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Let's Build Something <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-gray-400">
              Whether you have a clear vision or just an idea, we're here to help turn it into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 w-full sm:w-auto"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-full text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
