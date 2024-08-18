'use client';

import Link from 'next/link';
import BottomNavbar from '@/components/bottomnavbar';
import { Navbar } from '@/components/navbar';
import { Toaster } from 'sonner';
import { ArrowLeft, RefreshCw, Code, Briefcase, FileText } from 'lucide-react';

const NAVBAR_WIDTH = '250px';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-row w-screen max-h-screen min-h-screen">
      <div style={{ width: NAVBAR_WIDTH }} className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden fixed bottom-0 w-full z-10">
        <BottomNavbar />
      </div>
      <Toaster />
      <div className="flex-1 overflow-scroll">
        <div className="flex justify-center items-center flex-col pt-[90px] pb-[100px]">
          <div className="max-w-[850px] flex w-full flex-col px-5 lg:px-0">
            <h1 className="font-semibold text-[40px] tracking-tight">
              Oops! This part of my portfolio is still in progress 😅
            </h1>
            <h2 className="text-neutral-700 text-md mt-[10px]">
              I&apos;m constantly updating and improving my portfolio. This
              section is coming soon!
            </h2>
            <div className="mt-10 p-6 bg-neutral-100 rounded-lg shadow-sm">
              <p className="text-lg font-semibold mb-4">Under Construction</p>
              <p className="text-neutral-600 mb-6">
                I&apos;m working hard to bring you something amazing. In the
                meantime, why not explore other parts of my portfolio?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/explore"
                  className="inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-800 rounded hover:bg-neutral-300 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Explore
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-800 transition-colors"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Page
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-50 rounded-lg shadow-sm border border-neutral-200">
                <Code className="h-8 w-8 text-neutral-700 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Latest Projects</h3>
                <p className="text-neutral-600">
                  Check out some of my recent work and ongoing projects.
                </p>
                <Link
                  href="/projects"
                  className="mt-4 inline-block text-neutral-700 hover:underline"
                >
                  View Projects →
                </Link>
              </div>
              <div className="p-6 bg-neutral-50 rounded-lg shadow-sm border border-neutral-200">
                <Briefcase className="h-8 w-8 text-neutral-700 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                <p className="text-neutral-600">
                  Learn about my professional background and skills.
                </p>
                <Link
                  href="/experience"
                  className="mt-4 inline-block text-neutral-700 hover:underline"
                >
                  See Experience →
                </Link>
              </div>
              <div className="p-6 bg-neutral-50 rounded-lg shadow-sm border border-neutral-200 md:col-span-2">
                <FileText className="h-8 w-8 text-neutral-700 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Blog & Thoughts</h3>
                <p className="text-neutral-600">
                  Read my latest articles and insights on technology and
                  development.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 inline-block text-neutral-700 hover:underline"
                >
                  Read Blog →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
