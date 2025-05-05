// components/Capabilities.tsx
export default function Capabilities() {
  const industries = [
    {
      name: "Automotive Sector",
      description:
        "Luxury and exotic car dealers, service centers, and performance shops trust Linkova to automate:",
      listItems: [
        "Quoting & proposal generation",
        "Lead follow-up & CRM syncing",
        "Invoice & payment workflows",
        "Review generation & service updates",
        "VIP customer campaigns",
      ],
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      name: "Yacht & Marine Sector",
      description:
        "We help boat dealerships, charter services, and marinas increase revenue and streamline operations through:",
      listItems: [
        "Automated charter quoting & booking",
        "Lead capture from listings and inquiries",
        "Client onboarding and agreements",
        "Post-sale service reminders",
        "Upsell campaigns for VIP customers",
      ],
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
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
      ),
    },
    {
      name: "Private Aviation & Jet Sector",
      description:
        "For jet brokers, charter operators, and aircraft service firms, our AI systems:",
      listItems: [
        "Auto-generate flight quotes & purchase docs",
        "Handle client intake and compliance workflows",
        "Send pre-flight updates and post-service follow-ups",
        "Power intelligent lead routing and communication",
      ],
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
            d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
            <p className="text-xs font-medium text-[#892257]">Industries</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            We specialize in building AI-powered business solutions for
            high-value industries where speed, personalization, and efficiency
            drive revenue.
          </p>
          <div className="mt-2 h-1 w-16 bg-[#892257] mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col bg-gray-900 rounded-2xl p-8 relative overflow-hidden transition duration-300 hover:shadow-md hover:shadow-[#892257]/10 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {industry.name}
              </h3>
              <p className="mt-2 text-gray-400">{industry.description}</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                {industry.listItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#892257] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
