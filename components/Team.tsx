// components/Team.tsx
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const people = [
    {
      name: "Anthony Ivanov",
      role: "Founder & CEO",
      image: "/anthonyivanov.jpeg",
      linkedin: "https://www.linkedin.com/in/anthony-ivanov/",
    },
    {
      name: "Andrew Aliaj",
      role: "CTO",
      image: "/andrewaliaj.jpeg",
      linkedin: "https://www.linkedin.com/in/andrewaliaj/",
    },
  ];

  return (
    <div id="team" className="py-24 sm:py-32 bg-[#0a0b12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-[#892257]">Our Team</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The experts behind our enterprise AI solutions.
          </p>
          <div className="mt-2 h-1 w-16 bg-[#892257] mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-gray-900 rounded-2xl p-8 text-center relative overflow-hidden transition duration-300 hover:shadow-md hover:shadow-[#892257]/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900"></div>
              <div className="relative">
                <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-6 relative">
                  <Image
                    src={person.image}
                    alt={`${person.name} profile`}
                    fill
                    className="object-cover"
                    sizes="128px"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {person.name}
                </h3>
                <p className="text-sm text-[#892257] mb-4">{person.role}</p>
                <div className="flex justify-center mt-4">
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#892257] transition-colors duration-300"
                    aria-label={`${person.name}'s LinkedIn`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
