"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Client-side only import of the animation component
const DatabaseClusterBackground = dynamic(
  () => import('@/app/components/DatabaseClusterBackground'),
  { ssr: false }
);

interface HeroSectionProps {
  title: string;
  description: string;
  subText: string;
  demoText: string;
  docsText: string;
  lang: string;
}

export default function HeroSection({
  title,
  description,
  subText,
  demoText,
  docsText,
  lang
}: HeroSectionProps) {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Database Cluster Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <DatabaseClusterBackground />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <Image
                src="/clustereye_logo.png"
                alt="ClusterEye Logo"
                width={72}
                height={72}
                className="mr-4"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {title}
              </h1>
            </div>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              {description}
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              {subText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang}/demo`}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition duration-300 font-medium"
              >
                {demoText}
              </Link>
              <Link
                href={`/${lang}/docs`}
                className="px-8 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 font-medium border border-gray-700"
              >
                {docsText}
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full aspect-video flex items-center justify-center p-4">
              {/* MacBook Mockup */}
              <div className="relative w-full max-w-3xl group transition-all duration-500 hover:scale-[1.02]">
                {/* MacBook Body */}
                <div className="relative w-full bg-gray-900 rounded-t-xl pt-[5%] pb-[4%] px-[5%] border-[8px] border-gray-800 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                  {/* MacBook Screen */}
                  <div className="relative aspect-[16/10] rounded-md overflow-hidden border border-gray-700">
                    <Image
                      src="/images/dashboard_new.png"
                      alt="ClusterEye Desktop Application Interface"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  {/* Camera */}
                  <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 w-[2%] h-[1.5%] bg-gray-700 rounded-full"></div>
                </div>
                {/* MacBook Base */}
                <div className="relative w-full h-4 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-xl"></div>
                {/* MacBook Bottom Line */}
                <div className="relative w-[90%] h-[1px] mx-auto bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 