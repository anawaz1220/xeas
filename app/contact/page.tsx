'use client';

import { motion } from "framer-motion";

export default function ContactPage() {
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Ready to transform your business with innovative technology solutions?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <motion.a
              href="mailto:hello@xeas.net"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Email</h3>
              <p className="text-primary-400 text-xl mb-2">hello@xeas.net</p>
              <p className="text-gray-400">We respond within 24 hours</p>
            </motion.a>

            {/* Website */}
            <motion.a
              href="https://xeas.net"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Website</h3>
              <p className="text-primary-400 text-xl mb-2">xeas.net</p>
              <p className="text-gray-400">Visit our online presence</p>
            </motion.a>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 mt-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  All times in UTC (Universal Time)
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Drop us an email and let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <motion.a
              href="mailto:hello@xeas.net"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
            >
              Send Us an Email
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
