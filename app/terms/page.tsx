'use client';

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-gray-400">Last updated: February 3, 2026</p>
            </div>

            <div className="glass rounded-2xl p-8 md:p-12 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the XEAS Technologies website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Services Description</h2>
                <p className="mb-4">
                  XEAS Technologies provides custom software development, location intelligence solutions, and data-driven platform development services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom web and software application development</li>
                  <li>Map-based and geospatial solutions</li>
                  <li>Data analytics and visualization platforms</li>
                  <li>System integration and API development</li>
                  <li>Technical consultation and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. Use of Services</h2>
                <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services in any way that violates any applicable law or regulation</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Transmit any malicious code, viruses, or harmful materials</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                  <li>Reverse engineer or attempt to extract source code from our proprietary software</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                <p className="mb-4">
                  Unless otherwise stated in a separate written agreement, all intellectual property rights in custom work developed by XEAS Technologies shall be transferred to the client upon full payment. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>XEAS Technologies retains rights to general methodologies, tools, and frameworks used in development</li>
                  <li>Third-party software and libraries remain the property of their respective owners</li>
                  <li>Any pre-existing intellectual property of XEAS Technologies remains our property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Project Agreements</h2>
                <p>
                  Specific project terms, deliverables, timelines, and pricing will be outlined in separate project agreements or statements of work. These project-specific agreements shall supplement and, where conflicting, supersede these general Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment schedules are established based on project milestones</li>
                  <li>Invoices are typically due within 30 days of receipt</li>
                  <li>Late payments may incur interest charges as specified in project agreements</li>
                  <li>Work may be suspended for non-payment until accounts are brought current</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship. This includes technical information, business data, and any information marked as confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Warranties and Disclaimers</h2>
                <p className="mb-4">
                  XEAS Technologies warrants that services will be performed in a professional and workmanlike manner. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Services are provided "as is" without warranty of any kind beyond those explicitly stated</li>
                  <li>We do not guarantee uninterrupted or error-free operation</li>
                  <li>We are not liable for issues arising from client-provided materials or specifications</li>
                  <li>Specific warranties for custom work will be detailed in project agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, XEAS Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability shall not exceed the amount paid by the client for the specific services giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">10. Termination</h2>
                <p>
                  Either party may terminate services with written notice as specified in the project agreement. Upon termination, the client shall pay for all work completed and expenses incurred up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Pakistan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 p-4 glass rounded-lg">
                  <p className="text-white font-semibold">XEAS Technologies</p>
                  <p className="text-primary-400">Email: hello@xeas.net</p>
                  <p>Website: https://xeas.net</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
