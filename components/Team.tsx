// components/Team.tsx
import Image from "next/image";

export default function Team() {
  const people = [
    {
      name: "Anthony Ivanov",
      role: "Co-Founder & CEO",
      bio: "Driven entrepreneur with a strong foundation and passion in a wide array of fields, including B2B SaaS, B2B sales, B2C e-commerce.",
      image: "/anthonyivanov.jpeg",
    },
    {
      name: "Andrew Aliaj",
      role: "Co-Founder & CTO",
      bio: "Technology expert and software engineer expert in AI and extensive experience in enterprise solutions.",
      image: "/andrewaliaj.jpeg",
    },
  ];

  return (
    <div id="team" className="py-24 sm:py-32 bg-[#0a0b12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-blue-400">Our Team</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The experts behind our enterprise AI solutions.
          </p>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-gray-900 rounded-2xl p-8 text-center relative overflow-hidden transition duration-300 hover:shadow-md hover:shadow-blue-900/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900"></div>
              <div className="relative">
                <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-8 relative">
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
                <p className="text-sm text-purple-400 mb-4">{person.role}</p>
                <p className="text-gray-400">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
