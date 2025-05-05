// components/Features.tsx
import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: "autonomous-solutions",
      name: "Autonomous Solutions",
      description:
        "AI-powered systems that independently execute complex workflows and tasks unlocking efficiency and boosting profits by cutting manual labor.",
      icon: (
        <svg
          className="h-6 w-6 text-[#892257]"
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
      color: "from-[#892257]/20 to-[#892257]/5",
      textColor: "text-[#892257]",
      learnMoreColor: "text-[#892257] hover:text-[#b42e6f]",
    },
    {
      id: "integrated-workflows",
      name: "Integrated AI Workflows",
      description:
        "Smart solutions that connect across your tools and teams, streamlining communication and automating multi-step business processes.",
      icon: (
        <svg
          className="h-6 w-6 text-[#892257]"
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
      color: "from-[#892257]/20 to-[#892257]/5",
      textColor: "text-[#892257]",
      learnMoreColor: "text-[#892257] hover:text-[#b42e6f]",
    },
    {
      id: "self-optimizing",
      name: "Self-Optimizing Intelligence",
      description:
        "AI solutions that learn and improve over time using real-world feedback, optimizing outcomes with every interaction.",
      icon: (
        <svg
          className="h-6 w-6 text-[#892257]"
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
      color: "from-[#892257]/20 to-[#892257]/5",
      textColor: "text-[#892257]",
      learnMoreColor: "text-[#892257] hover:text-[#b42e6f]",
    },
  ];

  return (
    <div id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-[#892257]">
              Our AI Solutions
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Intelligent AI Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Advanced autonomous solutions designed to solve complex business
            challenges.
          </p>
          <div className="mt-2 h-1 w-16 bg-[#892257] mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-8 shadow transition duration-300 hover:shadow-md hover:shadow-[#892257]/10 hover:-translate-y-1"
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
