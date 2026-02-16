'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Custom Software", href: "/services#custom-software" },
      { label: "Location Intelligence", href: "/services#location-intelligence" },
      { label: "Data Platforms", href: "/services#data-platforms" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-display font-bold gradient-text"
              >
                XEAS
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Building innovative, data-driven solutions that transform how businesses leverage location intelligence and custom software.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@xeas.net"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                hello@xeas.net
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} XEAS Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Developer Attribution */}
          <div className="pt-4 border-t border-white/5 w-full flex justify-center">
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Crafted by{" "}
              <a
                href="mailto:asifnawaz1220@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors font-medium"
                title="Contact Asif Nawaz"
              >
                Asif Nawaz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
