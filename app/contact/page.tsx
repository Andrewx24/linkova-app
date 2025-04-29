"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show success message
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="py-1 px-3 mb-4 inline-block rounded-full bg-gray-800">
            <p className="text-xs font-medium text-blue-400">Get In Touch</p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Have questions about our AI agents or services? Fill out the form
            below and our team will get back to you shortly.
          </p>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-purple-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-purple-500 sm:text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border-0 bg-gray-800 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-purple-500 sm:text-sm"
                placeholder="Your phone number (optional)"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border-0 bg-gray-800 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-purple-500 sm:text-sm"
                placeholder="Tell us about your project or inquiry"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            You can also reach us directly at{" "}
            <a
              href="mailto:info@linkova.io"
              className="text-blue-400 hover:text-blue-300"
            >
              info@linkova.io
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
