'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Proven Expertise",
    description: "Years of experience delivering complex, mission-critical software solutions across industries.",
    stat: "100+",
    label: "Projects Delivered",
  },
  {
    title: "Modern Stack",
    description: "Leveraging cutting-edge technologies and best practices to build scalable, maintainable systems.",
    stat: "24/7",
    label: "Support Available",
  },
  {
    title: "Business Focus",
    description: "Solutions designed around real business needs, not just technical implementations.",
    stat: "99.9%",
    label: "Uptime Guarantee",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose <span className="gradient-text">XEAS</span>
            </h2>
            <p className="text-xl text-gray-400">
              We combine technical excellence with business acumen to deliver solutions that truly move the needle for your organization.
            </p>
            <div className="space-y-8 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-display font-bold gradient-text mb-2">
                  {feature.stat}
                </div>
                <div className="text-gray-300 font-medium">{feature.label}</div>
              </motion.div>
            ))}

            {/* Additional Feature Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 text-center sm:col-span-2"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold text-white">Rapid Development</div>
                  <div className="text-gray-400">From concept to deployment</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
