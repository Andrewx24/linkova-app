"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate authentication
    try {
      // In a real app, this would be an API call to your auth endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, any email with a password longer than 5 chars works
      if (password.length > 5) {
        setIsAuthenticated(true);
      } else {
        setError("Invalid credentials. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17] py-24">
        <div className="mx-auto max-w-md w-full px-4 sm:px-6">
          <div className="text-center mb-10">
            <Image
              src="/Linkova.io.png"
              alt="Linkova"
              width={180}
              height={48}
              className="h-auto mx-auto mb-6"
              priority
            />
            <h1 className="text-2xl font-bold text-white">Client Portal</h1>
            <p className="text-gray-400 mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          <div className="bg-gray-900/70 rounded-xl shadow-xl backdrop-blur-sm p-8">
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-800 rounded-md text-sm text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#892257] focus:border-transparent"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#892257] hover:text-[#b42e6f]"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#892257] focus:border-transparent"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#892257] to-[#242425] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#892257] transition-all duration-200 relative"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <p className="text-xs text-center text-gray-500">
                By signing in, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-[#892257] hover:text-[#b42e6f]"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#892257] hover:text-[#b42e6f]"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Need assistance? Contact{" "}
              <a
                href="mailto:support@linkova.io"
                className="text-[#892257] hover:text-[#b42e6f]"
              >
                support@linkova.io
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, show portal dashboard
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17]">
      {/* Portal Header */}
      <div className="bg-gray-900/70 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/portal" className="flex-shrink-0">
                <Image
                  src="/Linkova.io.png"
                  alt="Linkova"
                  width={120}
                  height={30}
                  className="h-auto"
                  priority
                />
              </Link>
              <div className="ml-10 hidden space-x-8 lg:flex">
                <Link
                  href="/portal"
                  className="text-gray-300 hover:text-white text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/portal/projects"
                  className="text-gray-500 hover:text-gray-200 text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/portal/analytics"
                  className="text-gray-500 hover:text-gray-200 text-sm font-medium"
                >
                  Analytics
                </Link>
                <Link
                  href="/portal/support"
                  className="text-gray-500 hover:text-gray-200 text-sm font-medium"
                >
                  Support
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div className="flex items-center">
                  <div
                    className="flex cursor-pointer items-center rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-[#892257]/60 flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {email.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-300 hidden sm:block">
                    {email.split("@")[0]}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-white">Welcome back!</h1>
            <p className="text-gray-400 mt-1">
              Here&apos;s an overview of your AI solutions and performance.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-400 truncate">
                  Active Solutions
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">3</dd>
              </div>
            </div>
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-400 truncate">
                  Total Queries
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">
                  8,456
                </dd>
              </div>
            </div>
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-400 truncate">
                  Success Rate
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-green-500">
                  98.2%
                </dd>
              </div>
            </div>
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-400 truncate">
                  Time Saved
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-white">
                  287 hrs
                </dd>
              </div>
            </div>
          </div>

          {/* Your AI Solutions */}
          <h2 className="text-xl font-bold text-white mb-4">
            Your AI Solutions
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {/* Solution 1 */}
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm border border-gray-800 hover:border-[#892257]/50 transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Lead Generation Bot
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400 border border-green-800/50">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Automated lead qualification and follow-up for your sales
                  team.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Last activity: 2 hours ago</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-sm text-[#892257] hover:text-[#b42e6f] font-medium">
                    View details →
                  </button>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm border border-gray-800 hover:border-[#892257]/50 transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Customer Support AI
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400 border border-green-800/50">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  24/7 customer support automation with seamless human handoff.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Last activity: 28 minutes ago</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-sm text-[#892257] hover:text-[#b42e6f] font-medium">
                    View details →
                  </button>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm border border-gray-800 hover:border-[#892257]/50 transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Document Processing
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400 border border-green-800/50">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Automated document analysis, extraction and processing
                  pipeline.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Last activity: 3 days ago</span>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-sm text-[#892257] hover:text-[#b42e6f] font-medium">
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="bg-gray-900/70 overflow-hidden rounded-lg shadow backdrop-blur-sm border border-gray-800">
            <div className="px-4 py-5 sm:p-6">
              <ul className="divide-y divide-gray-800">
                <li className="py-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        Lead Generation Bot processed 12 new leads
                      </p>
                      <p className="text-sm text-gray-500">30 minutes ago</p>
                    </div>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-green-900/30 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        Customer Support AI successfully resolved 8 inquiries
                      </p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-purple-900/30 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">
                        System update completed successfully
                      </p>
                      <p className="text-sm text-gray-500">
                        Yesterday at 11:43 PM
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button className="text-sm text-[#892257] hover:text-[#b42e6f] font-medium">
                  View all activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
