// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-600/20 to-transparent transform-gpu"></div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="text-center">
          <div className="py-2 px-4 mb-6 inline-block rounded-full bg-gray-800/80 backdrop-blur-sm">
            <p className="text-sm font-medium text-gray-200">
              Autonomous AI Agents
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
              AI Agents
            </span>{" "}
            for Enterprise
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Custom autonomous AI agents that work 24/7 to solve complex
            problems, automate workflows, and drive business growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 relative z-10">
  <Link
    href="/contact"
    role="button"
    aria-label="Contact Us"
    className="inline-block rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 relative z-20"
  >
    Contact Us
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}
