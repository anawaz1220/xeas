'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "location-intelligence",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Location Intelligence & Mapping",
    subtitle: "Transform location data into competitive advantage",
    description: "Advanced geospatial solutions that help businesses make smarter decisions through interactive maps, spatial analysis, and location-based insights.",
    features: [
      "Custom Interactive Maps",
      "Spatial Data Analysis",
      "Route Optimization",
      "Real-time Location Tracking",
      "Geofencing & Proximity Alerts",
      "Territory Management",
      "Location-based Analytics",
      "GIS Integration",
    ],
    technologies: ["Leaflet", "Mapbox", "OpenStreetMap", "PostGIS", "Turf.js"],
    useCases: [
      "Fleet management and logistics optimization",
      "Retail site selection and market analysis",
      "Field service management",
      "Asset tracking and monitoring",
    ],
  },
  {
    id: "custom-software",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Software Development",
    subtitle: "Tailored solutions for unique business challenges",
    description: "End-to-end software development services that transform your business requirements into robust, scalable applications built with modern technologies.",
    features: [
      "Web Application Development",
      "RESTful API Design & Development",
      "Database Architecture & Optimization",
      "Third-party System Integration",
      "Cloud Infrastructure Setup",
      "Microservices Architecture",
      "Progressive Web Apps (PWA)",
      "Real-time Applications",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    useCases: [
      "Enterprise resource planning systems",
      "Customer relationship management platforms",
      "E-commerce and marketplace solutions",
      "Internal business tools and dashboards",
    ],
  },
  {
    id: "data-platforms",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Data-Driven Platforms",
    subtitle: "Turn your data into actionable insights",
    description: "Comprehensive data solutions that collect, process, analyze, and visualize your business data to drive informed decision-making and automation.",
    features: [
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Interactive Dashboards",
      "Business Intelligence Tools",
      "Automated Reporting Systems",
      "Data Visualization",
      "Predictive Analytics",
      "Workflow Automation",
    ],
    technologies: ["Tableau", "Power BI", "Apache Airflow", "Pandas", "D3.js", "Chart.js"],
    useCases: [
      "Executive dashboards and KPI tracking",
      "Automated business reporting",
      "Data warehousing and ETL pipelines",
      "Operational analytics and monitoring",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesPage() {
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
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your business with cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-xl text-primary-400 font-semibold">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-400">
                    {service.description}
                  </p>

                  {/* Use Cases */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Perfect For:</h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES WE USE</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 glass rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-xl p-4 flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
              Let's Discuss Your <span className="gradient-text">Project</span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to transform your business with custom technology solutions?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
