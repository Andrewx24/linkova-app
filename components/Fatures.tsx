// components/Features.tsx
import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: "autonomous-agents",
      name: "Autonomous Agents",
      description:
        "AI agents that operate independently to complete complex tasks and workflows without human intervention.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-purple-500/20 to-purple-500/5",
      textColor: "text-purple-400",
      learnMoreColor: "text-purple-400 hover:text-purple-300",
    },
    {
      id: "multi-agent-systems",
      name: "Multi-Agent Systems",
      description:
        "Collaborative agent networks that communicate and coordinate to solve complex enterprise problems.",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-blue-500/20 to-blue-500/5",
      textColor: "text-blue-400",
      learnMoreColor: "text-blue-400 hover:text-blue-300",
    },
    {
      id: "adaptive-learning",
      name: "Adaptive Learning",
      description:
        "Agents that continuously improve through feedback loops and self-optimization based on real-world interactions.",
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
      color: "from-pink-500/20 to-pink-500/5",
      textColor: "text-pink-400",
      learnMoreColor: "text-pink-400 hover:text-pink-300",
    },
  ];

  return (
    <div id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-purple-400">
              Our Agent Solutions
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Intelligent AI Agents
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Advanced autonomous agents designed to solve complex business
            challenges.
          </p>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-8 shadow transition duration-300 hover:shadow-md hover:shadow-purple-900/10 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${feature.color}`}
              ></div>
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-semibold leading-7 ${feature.textColor}`}
                >
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/solutions/${feature.id}`}
                    className={`text-sm font-medium ${feature.learnMoreColor} inline-flex items-center`}
                  >
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
