"use client";

import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Terms of Service
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
          <div className="p-8 md:p-10 text-gray-300 terms-of-service-content">
            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Linkova.io. These Terms of Service
                (&ldquo;Terms&rdquo;) govern your access to and use of our
                website and services (&ldquo;Services&rdquo;). Please read these
                Terms carefully. By accessing or using our Services, you agree
                to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="mb-4">
                If you do not agree to these Terms, please do not access or use
                our Services. Linkova.io reserves the right to modify these
                Terms at any time. We will provide notice of any material
                changes through our Services or by other means. Your continued
                use of the Services after such modifications will constitute
                your acknowledgment and agreement to the modified Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                2. Access and Use of Services
              </h2>
              <p className="mb-4">
                You may only access and use our Services in compliance with
                these Terms and all applicable laws. The Services are not
                directed to individuals under the age of 18. If you are under
                18, you may not use our Services.
              </p>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable, and
                revocable license to access and use our Services for your
                personal or internal business purposes. You may not:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Use our Services in any way that could interfere with,
                  disrupt, negatively affect, or inhibit other users from fully
                  enjoying our Services
                </li>
                <li>
                  Attempt to circumvent any filtering, security measures, or
                  access restrictions that we put into place
                </li>
                <li>
                  Copy, modify, distribute, sell, or lease any part of our
                  Services
                </li>
                <li>
                  Use any automated means or interface not provided by us to
                  access our Services
                </li>
                <li>
                  Reverse engineer any aspect of our Services or do anything
                  that might discover source code
                </li>
                <li>
                  Use our Services for any illegal or unauthorized purpose
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                3. User Accounts
              </h2>
              <p className="mb-4">
                To access certain features of our Services, you may be required
                to create an account. When you create an account, you must
                provide accurate and complete information. You are solely
                responsible for the activity that occurs on your account, and
                you must keep your account password secure.
              </p>
              <p className="mb-4">
                You must notify us immediately of any breach of security or
                unauthorized use of your account. We will not be liable for any
                losses caused by any unauthorized use of your account.
              </p>
              <p className="mb-4">
                We reserve the right to disable any user account at any time in
                our sole discretion, including if you have violated these Terms
                or if we believe your account poses a security risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                4. Intellectual Property Rights
              </h2>
              <p className="mb-4">
                Linkova.io and its licensors exclusively own all right, title,
                and interest in and to the Services, including all associated
                intellectual property rights. You acknowledge that the Services
                are protected by copyright, trademark, and other laws of the
                United States and foreign countries.
              </p>
              <p className="mb-4">
                You may not remove, alter, or obscure any copyright, trademark,
                service mark, or other proprietary rights notices incorporated
                in or accompanying the Services. These Terms do not grant you
                any right, title, or interest in the Services, or any content in
                the Services, other than the limited license described above.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                5. User Content
              </h2>
              <p className="mb-4">
                Our Services may allow you to submit, store, send, or receive
                content (&ldquo;User Content&rdquo;). You retain all rights in
                and to your User Content, including any intellectual property
                rights that you may have.
              </p>
              <p className="mb-4">
                By submitting, posting, or displaying User Content on or through
                our Services, you grant us a worldwide, non-exclusive,
                royalty-free license to use, reproduce, modify, adapt, publish,
                translate, create derivative works from, distribute, and display
                such User Content in connection with providing and promoting our
                Services.
              </p>
              <p className="mb-4">
                You represent and warrant that you own or have all necessary
                rights to your User Content, and that the use of your User
                Content does not violate these Terms or any applicable law or
                infringe any intellectual property or other rights of any third
                party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                6. Prohibited Content
              </h2>
              <p className="mb-4">
                You may not submit, upload, or transmit any User Content that:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Infringes or violates the intellectual property or other
                  rights of any third party
                </li>
                <li>
                  Is unlawful, harmful, threatening, abusive, harassing,
                  defamatory, vulgar, obscene, or otherwise objectionable
                </li>
                <li>
                  Contains software viruses or any other code designed to
                  disrupt, damage, or limit the functioning of any computer
                  software or hardware
                </li>
                <li>
                  Involves commercial activities or sales without our prior
                  written consent
                </li>
                <li>Is false, misleading, or deceptive</li>
                <li>Violates any applicable law, regulation, or obligation</li>
              </ul>
              <p className="mb-4">
                We reserve the right, but are not obligated, to review, monitor,
                and remove User Content at our sole discretion and at any time
                without notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                7. Payment Terms
              </h2>
              <p className="mb-4">
                Some of our Services may require payment. By using our paid
                Services, you agree to pay all fees in accordance with the
                pricing and payment terms presented to you. All payments are
                non-refundable unless otherwise stated or required by law.
              </p>
              <p className="mb-4">
                We use third-party payment processors to bill you through a
                payment account linked to your account. These payment processors
                may collect certain financial information from you to process
                your payments, and your use of their services is subject to
                their terms of service and privacy policies.
              </p>
              <p className="mb-4">
                We reserve the right to change our pricing at any time. If we
                change pricing for a service you subscribe to, we will provide
                you with reasonable notice before the change goes into effect.
                Continued use of the service after the price change goes into
                effect constitutes your agreement to pay the changed amount.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                8. Termination
              </h2>
              <p className="mb-4">
                We may terminate or suspend your access to our Services
                immediately, without prior notice or liability, for any reason,
                including if you breach these Terms. Upon termination, your
                right to use the Services will immediately cease.
              </p>
              <p className="mb-4">
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
              <p className="mb-4">
                You may terminate your account at any time by contacting us or
                using the account deletion option in your account settings, if
                available.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                9. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES ARE ERROR
                FREE OR THAT ACCESS THERETO WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                10. Limitation of Liability
              </h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL LINKOVA.IO, ITS DIRECTORS, EMPLOYEES, AGENTS, LICENSORS,
                OR AFFILIATES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT
                LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR
                OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR
                INABILITY TO USE, THE SERVICES.
              </p>
              <p className="mb-4">
                IN NO EVENT WILL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU
                PAID TO US IN THE TWELVE (12) MONTH PERIOD PRECEDING THE EVENT
                GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100) IF
                YOU HAVE NOT MADE ANY PAYMENTS TO US.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                11. Indemnification
              </h2>
              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless Linkova.io,
                its directors, officers, employees, and agents, from and against
                any and all claims, damages, obligations, losses, liabilities,
                costs, and expenses (including attorney&apos;s fees) arising
                from: (i) your use of the Services; (ii) your violation of these
                Terms; (iii) your violation of any third party right, including
                without limitation any copyright, trademark, property, or
                privacy right; or (iv) any claim that your User Content caused
                damage to a third party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                12. Governing Law
              </h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with
                the laws of the State of New York, without regard to its
                conflict of law provisions. Our failure to enforce any right or
                provision of these Terms will not be considered a waiver of
                those rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                13. Changes to Terms
              </h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                changes by posting the new Terms on our website. Your continued
                use of the Services following the posting of any changes
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl text-white font-semibold mb-5">
                14. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us
                at:
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
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#892257] transition-colors"
            >
              Privacy Policy
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
