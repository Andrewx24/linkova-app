// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0b12] to-[#111218] border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer content with columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-36 overflow-hidden">
                <Image
                  src="/Linkovalogo.png"
                  alt="Linkova Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-5 max-w-xs">
              New York City, New York 10021
            </p>
            <div className="flex space-x-5 mt-7">
              <a
                href="https://www.linkedin.com/company/linkova-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Expertise column */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Expertise
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/expertise/ai-services"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  AI Services
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise/management-services"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Management Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties column */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Specialties
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/specialties/automotive"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  href="/specialties/aviation"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Aviation
                </Link>
              </li>
              <li>
                <Link
                  href="/specialties/marine"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Marine
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Outcomes column */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Client Outcomes
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/outcomes/case-studies"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/outcomes/testimonials"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/company/our-story"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/company/news-blog"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  News & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/company/careers"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/company/resources"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-flex"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer section */}
        <div className="mt-14 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Linkova. All rights reserved.
            </p>

            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <a
                href="mailto:support@linkova.io"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                support@linkova.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
