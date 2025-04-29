// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0b12] border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://www.linkedin.com/company/linkova-io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <span className="sr-only">Connect with us on LinkedIn</span>
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
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; 2025 Linkova. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-3">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-center text-sm leading-5 text-gray-500 mt-3">
            <a
              href="mailto:info@linkova.io"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              info@linkova.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
