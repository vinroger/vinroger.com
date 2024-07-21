import Image from 'next/image';
import React from 'react';

function Details() {
  return (
    <div className="mt-10">
      <div className="bg-neutral-200 h-[1px]" />
      <div className="flex flex-col md:flex-row p-5 w-full md:space-x-4">
        <div className="flex w-full md:w-2/5 flex-col mb-5 md:mb-0">
          {/* Company Name and Logo */}
          <div className="flex flex-row w-full items-center">
            <div className="flex-shrink-0 w-20 h-20 relative">
              <Image
                src="/singtel.png"
                alt="Singtel logo"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <p className="font-semibold ml-5 flex-grow">
              Singapore Telecommunications
            </p>
          </div>
          {/* Work Duration */}
          <div className="text-neutral-500 text-sm mt-2">
            May 2024 - August 2024
          </div>
          <div className="text-neutral-700 text-sm mt-1">
            Full-stack Developer Intern (Management Associate Program)
          </div>
          <div className="text-neutral-700 text-sm">Singapore</div>
        </div>

        <div className="flex w-full md:flex-1 flex-col">
          <h3 className="font-semibold mb-2">
            Responsibilities & Achievements:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Pioneered &quot;common-baseline&quot;, a reusable module for GenAI
              apps, distributed in npm and pip package.
            </li>
            <li>
              Architected a versatile GenAI package suite (pip & npm) to
              standardize 10+ APIs and enforce type-safety to 30+ functions,
              simplifying installation, updates, and data schema consistency
              across 4 AI applications.
            </li>
            <li>
              Engineered a scalable full-stack architecture using Next.js and
              Python, allowing migration from a centralized WebSocket approach
              (h2o.ai wave framework) to support 20x more concurrent users and
              reduce server crashes by 80%.
            </li>
            <li>
              Developed a thread-safe, queue-based message passing system in
              FastAPI to support non-async library, enabling concurrent
              WebSocket communication and increasing performance by 10x.
            </li>
            <li>
              Created an automated testing system using Selenium, saving
              developers 100+ hours per month by automating the testing and
              reporting process to collect KPI data (delay, LLM latency).
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Tech Stack:</h3>
            <p className="text-sm">
              Multi-threading, Python Async, Python Event Loop, WebSocket,
              FastAPI, Typescript, Next.js/React.js, TailwindCSS, Azure
              OpenShift Container, Selenium, Bamboo CI/CD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
