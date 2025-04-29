// components/Methodology.tsx
export default function Methodology() {
  const methodologySteps = [
    {
      name: "Agent Requirements Analysis",
      description:
        "We analyze your business processes to identify the perfect AI agent architecture for your specific needs.",
      icon: (
        <svg
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      name: "Agent Design & Development",
      description:
        "Our engineers create custom AI agents with the right capabilities, integrations, and knowledge base for your organization.",
      icon: (
        <svg
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      name: "Deployment & Optimization",
      description:
        "We deploy your AI agents with continuous monitoring, refinement, and performance optimization for maximum business impact.",
      icon: (
        <svg
          className="h-6 w-6 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-purple-400">Our Approach</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Agent Development Methodology
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            A systematic approach to designing, building, and deploying
            autonomous AI agents for your enterprise.
          </p>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {methodologySteps.map((step) => (
            <div
              key={step.name}
              className="flex flex-col bg-gray-900 rounded-2xl p-8 relative overflow-hidden transition duration-300 hover:shadow-md hover:shadow-purple-900/10 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.name}</h3>
              <p className="mt-2 text-gray-400 flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
