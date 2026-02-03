'use client';

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-400">Last updated: February 3, 2026</p>
            </div>

            <div className="glass rounded-2xl p-8 md:p-12 space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  XEAS Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>

                <h3 className="text-xl font-semibold text-white mt-4 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-4 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and navigation patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about projects and services</li>
                  <li>To process payments and send invoices</li>
                  <li>To improve our website and services</li>
                  <li>To send you technical updates and promotional materials (with your consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraud and unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our business (hosting, payment processing, etc.)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our company</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Project-related data may be retained for the duration of the project and a reasonable period thereafter for support and warranty purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Your Rights</h2>
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another party</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at hello@xeas.net
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">11. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-white mb-4">13. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-4 glass rounded-lg">
                  <p className="text-white font-semibold">XEAS Technologies</p>
                  <p className="text-primary-400">Email: hello@xeas.net</p>
                  <p>Website: https://xeas.net</p>
                </div>
              </section>

              <section className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">
                  By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
