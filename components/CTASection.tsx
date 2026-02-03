'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 md:p-16 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Ready to Build Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful, scalable solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 w-full sm:w-auto"
              >
                Get in Touch
              </motion.button>
            </Link>
            <a href="mailto:hello@xeas.net">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                hello@xeas.net
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
