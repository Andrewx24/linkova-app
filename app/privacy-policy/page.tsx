"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: June 2024</p>
          </div>
          <Link
            href="/"
            className="mt-4 sm:mt-0 flex items-center text-sm text-[#892257] hover:text-[#b42e6f] transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="bg-gray-900/70 rounded-lg shadow-xl backdrop-blur-sm overflow-hidden">
          <div className="p-8 md:p-10 text-gray-300 privacy-policy-content">
            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Linkova.io (&ldquo;Company&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;). This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services. We
                respect your privacy and are committed to protecting personally
                identifiable information you may share with us.
              </p>
              <p className="mb-4">
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access our
                website or use our services. By accessing our website and using
                our services, you consent to the collection, use, and disclosure
                of information in accordance with this policy.
              </p>
              <p className="mb-4">
                We reserve the right to make changes to this Privacy Policy at
                any time and for any reason. We will alert you about any changes
                by updating the &ldquo;Last Updated&rdquo; date of this Privacy
                Policy. Any changes or modifications will be effective
                immediately upon posting the updated Privacy Policy on the
                website. You are encouraged to periodically review this Privacy
                Policy to stay informed of updates.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                2. Collection of Your Information
              </h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect includes:
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                Personal Data
              </h3>
              <p className="mb-4">
                Personally identifiable information, such as your name, email
                address, telephone number, and other similar contact data that
                you voluntarily give to us when you choose to participate in
                various activities related to our website and services. These
                activities include registering for an account, subscribing to a
                newsletter, submitting feedback, or sending us an email.
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                Financial Data
              </h3>
              <p className="mb-4">
                Financial information, such as data related to your payment
                method (e.g., valid credit card number, card brand, expiration
                date) that we may collect when you purchase services from us. We
                store only very limited financial information that we need to
                process payments through our payment processors. All payment
                data is securely stored by our payment processors, and you are
                encouraged to review their privacy policies and contact them
                directly for responses to your questions.
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                Technical Data
              </h3>
              <p className="mb-4">
                Information our servers automatically collect when you access
                our website, such as your IP address, browser type, operating
                system, access times, and the pages you have viewed directly
                before and after accessing the website. This information is used
                primarily for internal analytics and reporting purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                3. Use of Your Information
              </h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Create and manage your account.</li>
                <li>Process transactions and send transaction receipts.</li>
                <li>
                  Deliver targeted advertising, newsletters, and other
                  information regarding our services.
                </li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage your orders, payments, and refunds.</li>
                <li>
                  Generate a personal profile about you to make future visits to
                  the website more personalized.
                </li>
                <li>
                  Increase the efficiency and operation of the website and
                  services.
                </li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience with the website and services.
                </li>
                <li>Notify you of updates to the website and services.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-4">
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                By Law or to Protect Rights
              </h3>
              <p className="mb-4">
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                Third-Party Service Providers
              </h3>
              <p className="mb-4">
                We may share your information with third parties that perform
                services for us or on our behalf, including payment processing,
                data analysis, email delivery, hosting services, customer
                service, and marketing assistance.
              </p>

              <h3 className="text-xl text-white font-medium mb-3 mt-6">
                Business Transfers
              </h3>
              <p className="mb-4">
                If we or our subsidiaries are involved in a merger, acquisition,
                or asset sale, your information may be transferred. We will
                provide notice before your personal information is transferred
                and becomes subject to a different Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                5. Security of Your Information
              </h2>
              <p className="mb-4">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                6. Your Rights and Choices
              </h2>
              <p className="mb-4">
                You may at any time review or change the information in your
                account or terminate your account by:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Logging into your account settings and updating your account.
                </li>
                <li>
                  Contacting us using the contact information provided below.
                </li>
              </ul>
              <p className="mb-4">
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, some information may be retained in our
                files to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use, or comply with legal
                requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                7. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mb-4">
                Linkova
                <br />
                New York City, New York 10021
                <br />
                <a
                  href="mailto:support@linkova.io"
                  className="text-[#892257] hover:text-[#b42e6f]"
                >
                  support@linkova.io
                </a>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/Linkova.io.png"
              alt="Linkova"
              width={100}
              height={30}
              className="h-auto"
            />
          </div>
          <div className="space-x-6">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#892257] transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:support@linkova.io"
              className="text-gray-400 hover:text-[#892257] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
