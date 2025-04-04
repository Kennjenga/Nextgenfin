"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-rose-50 py-20">
      {/* Abstract Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-red-200 rounded-full opacity-20 blur-3xl"></div>

        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="opacity-10"
          >
            <circle cx="60" cy="60" r="40" stroke="#B91C1C" strokeWidth="2" />
            <circle cx="60" cy="60" r="30" stroke="#B91C1C" strokeWidth="2" />
            <circle cx="60" cy="60" r="20" stroke="#B91C1C" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            className="opacity-10"
          >
            <rect
              x="20"
              y="20"
              width="80"
              height="80"
              stroke="#B91C1C"
              strokeWidth="2"
            />
            <rect
              x="35"
              y="35"
              width="50"
              height="50"
              stroke="#B91C1C"
              strokeWidth="2"
            />
            <rect
              x="50"
              y="50"
              width="20"
              height="20"
              stroke="#B91C1C"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="inline-block mb-4 relative">
                <span className="bg-red-800 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Financially Empowered
                </span>
                <div className="absolute -bottom-2 -right-2 w-16 h-16">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full fill-red-800 opacity-10"
                  >
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="text-gray-900">NextGen</span>
                <span className="text-red-800 ml-2">Finances</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                AI-Powered Solutions for the Financial Future
              </h2>

              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Empowering young adults to master their finances through
                intelligent budgeting, personalized education, and smart
                investment guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/dashboard">
                  <button className="bg-red-800 hover:bg-red-900 text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center group">
                    <span>Get Started</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </Link>
                {/* <button className="bg-white hover:bg-gray-50 text-red-800 border border-red-800 font-medium py-3 px-8 rounded-xl transition-all group">
                  <span>Watch Demo</span>
                  <svg
                    className="w-5 h-5 ml-2 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button> */}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="text-red-800">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Bank-Level Security
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-red-800">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    100% Transparent
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-red-800">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">AI Personalized</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Main Dashboard Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/dashboard.png"
                  alt="NextGen Finances Dashboard"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />

                {/* Highlight elements */}
                <div className="absolute top-4 right-4 bg-green-100 rounded-lg p-2 shadow-md flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-green-800">
                    Goal achieved!
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Monthly Savings
                    </p>
                    <p className="text-sm font-bold text-blue-600">
                      +Ksh248.50
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-800 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Smart Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg
                className="w-8 h-8 text-red-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
            title="Smart Budgeting"
            description="Our AI analyzes your spending patterns and suggests personalized budgets that work with your lifestyle"
          />
          <FeatureCard
            icon={
              <svg
                className="w-8 h-8 text-red-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="Financial Literacy"
            description="Learn at your own pace with bite-sized lessons and interactive simulations customized to your needs"
          />
          <FeatureCard
            icon={
              <svg
                className="w-8 h-8 text-red-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Future Planning"
            description="Set meaningful financial goals and track your progress with AI-powered insights and recommendations"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-b-4 border-red-800 group">
      <div className="mb-5 p-3 bg-red-50 inline-block rounded-xl group-hover:bg-red-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Hero;
