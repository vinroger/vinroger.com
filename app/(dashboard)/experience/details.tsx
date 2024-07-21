import Image from 'next/image';
import React from 'react';

function Details() {
  const internships = [
    {
      company: 'Singapore Telecommunications',
      logo: '/singtel.png',
      position: 'Full-stack Developer Intern (Management Associate Program)',
      duration: 'May 2024 - August 2024',
      location: 'Singapore',
      responsibilities: [
        'Pioneered "common-baseline", a reusable module for GenAI apps, distributed in npm and pip package.',
        'Architected a versatile GenAI package suite (pip & npm) to standardize 10+ APIs and enforce type-safety to 30+ functions, simplifying installation, updates, and data schema consistency across 4 AI applications.',
        'Engineered a scalable full-stack architecture using Next.js and Python, allowing migration from a centralized WebSocket approach (h2o.ai wave framework) to support 20x more concurrent users and reduce server crashes by 80%.',
        'Developed a thread-safe, queue-based message passing system in FastAPI to support non-async library, enabling concurrent WebSocket communication and increasing performance by 10x.',
        'Created an automated testing system using Selenium, saving developers 100+ hours per month by automating the testing and reporting process to collect KPI data (delay, LLM latency).',
      ],
      techStack:
        'Multi-threading, Python Async, Python Event Loop, WebSocket, FastAPI, Typescript, Next.js/React.js, TailwindCSS, Azure OpenShift Container, Selenium, Bamboo CI/CD.',
    },
    {
      company: 'Terrascope',
      logo: '/terrascope.png',
      position: 'Full-stack Developer Intern',
      duration: 'Jan 2024 – April 2024',
      location: 'Singapore',
      responsibilities: [
        'Collaborated in building Terrascope PCF, an AI-powered platform for companies to calculate, analyze, and optimize product carbon footprints across their product range.',
        'Developed "nested dropdown with autocomplete" reusable component, contributing to Terrascope Design Library System (DLS) to standardize front-end components across 5+ products using Storybook.js.',
        'Integrated localization to support multiple languages for the PCF dashboard, allowing users to switch languages with a single click.',
        'Created a data pipeline integrating Linear and GitHub PR data for company development metrics (PR lifecycle time, feature ticket size, developer productivity).',
        'Maintained data freshness and efficiency by scheduling the CRON function to run daily using AWS Lambda and AWS CloudWatch, with the database stored in AWS Redshift.',
        'Designed & built a UI dashboard for data visualization, enabling C-suite executives to conduct SPACE analysis 50% faster, significantly improving observability of technical challenges.',
        'Overall, reduced manual data processing time by 90% and saved 90% of the cost compared to using a third-party service.',
      ],
      techStack:
        'Storybook, Express.js, Dependency Injection w/ InversifyJS, SOLID Methodology, React.js, Redux State Management, Material UI, CRON function, AWS Lambda, AWS CloudWatch, AWS RedShift.',
    },
    {
      company: 'Datature',
      logo: '/datature.png',
      position: 'Front-end Developer Intern',
      duration: 'May 2023 – August 2023',
      location: 'Singapore',
      responsibilities: [
        'Built a platform enabling users to assign images to single labels using mouse clicks and hotkeys, featuring a visually appealing vignette effect for label display.',
        'Created a multi-step form interface for configuring external bucket (S3, GCP, Azure) connections, streamlining asset synchronization with the Datature platform.',
        'Enhanced developer experience (DX) by refactoring the user behavior tracking script into a standardized & reusable module with custom React hooks support.',
        'Developed confusion matrix data visualization for observing model performance after training, increasing observability for users.',
        'Refactored 10+ react class-based components to functional-based components, creating a more modular codebase with full React hooks compatibility.',
        'Developed an automation script to convert 700+ inline CSS styles to Tailwind CSS, enhancing developer experience and code scalability while reducing migration time by 10x.',
      ],
      techStack:
        'React.js, Next.js Pages Router, BlueprintJS, Nivo, Mixpanel CDP, Google Compute Engine, S3 and GCP Bucket, Github Actions & SSH',
    },
  ];

  return (
    <div className="mt-10">
      {internships.map((internship, index) => (
        <div key={index}>
          <div className="bg-neutral-200 h-[1px]" />
          <div className="flex flex-col lg:flex-row p-5 w-full lg:space-x-4">
            <div className="flex w-full lg:w-2/5 flex-col mb-5 lg:mb-0">
              {/* Company Name and Logo */}
              <div className="flex flex-row w-full items-center pr-5">
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <Image
                    src={internship.logo}
                    alt={`${internship.company} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="font-semibold ml-5 flex-grow">
                  {internship.company}
                </p>
              </div>
              {/* Work Duration */}
              <div className="text-neutral-500 text-sm mt-2">
                {internship.duration}
              </div>
              <div className="text-neutral-700 text-sm mt-1">
                {internship.position}
              </div>
              <div className="text-neutral-700 text-sm">
                {internship.location}
              </div>
            </div>

            <div className="flex w-full lg:flex-1 flex-col">
              <h3 className="font-semibold mb-2">
                Responsibilities & Achievements:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {internship.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Tech Stack:</h3>
                <p className="text-sm">{internship.techStack}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
