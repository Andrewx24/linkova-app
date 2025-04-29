// components/Capabilities.tsx
export default function Capabilities() {
  const capabilities = [
    {
      name: "Natural Language Processing",
      description:
        "Agents that understand and respond to natural language, enabling human-like interactions with your systems.",
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
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      ),
    },
    {
      name: "Tool Integration",
      description:
        "AI agents that can interact with your existing software tools, websites, and APIs to accomplish complex tasks.",
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
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Autonomous Decision Making",
      description:
        "Advanced reasoning capabilities that enable agents to make decisions and solve problems independently.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
            <p className="text-xs font-medium text-purple-400">
              Agent Capabilities
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Advanced Agent Technologies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Cutting-edge capabilities that power our autonomous AI agents.
          </p>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.name}
              className="flex flex-col bg-gray-900 rounded-2xl p-8 relative overflow-hidden transition duration-300 hover:shadow-md hover:shadow-purple-900/10 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {capability.name}
              </h3>
              <p className="mt-2 text-gray-400 flex-grow">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
