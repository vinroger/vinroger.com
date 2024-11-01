import Image from 'next/image';
import React from 'react';

function Details() {
  const internships = [
    {
      company: 'Singtel Singapore',
      logo: '/singtel.png',
      position:
        'Software Developer Intern, 2024 Management Associate Program Internship (MAPi)',
      duration: 'May 2024 - August 2024',
      location: 'Singapore',
      responsibilities: [
        'Pioneered Singtel GenAI SDK by initiating the development of an SDK to streamline AI application creation with reusable modules and services.',
        'Developed two reusable packages for platform migration from a low-code environment: React (npm) package for standardized UI components and data fetching hooks, and Python (pip) package for API & WebSocket handlers, logs & feedback layer, and an injectable ML service layer.',
        'Standardized 10+ APIs and enforced type-safety for 30+ functions across 4 AI applications.',
        'Implemented the SDK in the corporate HR chatbot, serving 12,000 daily users, receiving commendation from the Singtel CIO for its impact.',
        'Developed a performance-optimized wrapper to make legacy Python non-async libraries compatible with an async environment, using thread pools and thread-safe queues, achieving 20x increase in concurrent request handling capacity.',
        'Leveraged the SDK to realize a 10x performance boost and an 80% reduction in server crashes post-platform migration.',
        'Created an automated testing system with Selenium, saving 100+ hours monthly.',
        'Used IaC to provision production-grade Kubernetes clusters, configuring node pools for auto-scaling, improving deployment efficiency by 30% and reducing over-provisioning by 25%.',
        'Developed a robust data pipeline for phishing campaign monitoring using Kafka, achieving 99.99% data integrity with no data loss, handling over 100,000+ daily events.',
        'Collaborated with the ML team for integration with Apache Spark micro-batch processing, improving processing efficiency by 30%.',
        'Aggregated and stored key metrics leading to a 15% reduction in reported phishing incidents within three months.',
        'Won 1st Place “Best Project” team award for the Phishing Campaign Data Pipeline.',
      ],
      techStack: [
        'Apache Kafka',
        'Spark',
        'Multi-threading',
        'Async/Event loop Programming',
        'WebSocket',
        'Docker',
        'Kubernetes',
        'Node.js',
        'TailwindCSS',
        'Python',
        'React.js',
        'HTML5/CSS3/JavaScript',
        'TypeScript',
      ],
    },
    {
      company: 'Terrascope, Olam Group Singapore',
      logo: '/terrascope.png',
      position: 'Full-stack Developer Intern',
      duration: 'Jan 2024 - April 2024',
      location: 'Singapore',
      responsibilities: [
        'Migrated the PCF product backend service from monolithic architecture to a modular, N-layered architecture, enhancing scalability, maintainability, and performance.',
        'Developed and implemented role-based authorization backend services, achieving an 80% reduction in unwanted access.',
        'Developed front-end API and integrated backend services with a machine learning microservice for AI-assisted metrics analysis, reducing user analysis time by 30%.',
        'Developed a scalable data pipeline and designed the database schema in Amazon Redshift to process 20,000+ daily webhook events for SPACE analysis.',
        'Implemented data validation and aggregation, enhancing data accuracy by 15%.',
        'Implemented database indexing in AWS Redshift, reducing query times by 40%.',
        'Developed select, nested select, and autocomplete reusable components for In-house DLS.',
      ],
      techStack: [
        'GraphQL',
        'TypeScript',
        'Node.js',
        'AWS (Lambda, CloudWatch, Redshift)',
        'Custom data pipelines',
        'Database Indexing',
        'Microservices architecture',
        'React.js',
        'Storybook.js',
        'Trie algorithms',
      ],
    },
    {
      company: 'Datature Singapore',
      logo: '/datature.png',
      position: 'Full-stack Developer Intern',
      duration: 'May 2023 - August 2023',
      location: 'Singapore',
      responsibilities: [
        'Spearheaded the Data Sync feature, enabling asset import/export between Datature Cloud and external storage, facilitating 60% faster data transfer.',
        'Designed backend API interfaces for integration and established secure data access and synchronization.',
        'Created 15+ error-handling mechanisms, leading to a 40% reduction in integration setup issues.',
        'Integrated Mixpanel with Datature platform, implementing 15+ tracking events and designing dashboards for actionable visualizations.',
        'Developed an event-driven service to consolidate data, resulting in 50% faster insight generation.',
        'Led the front-end development for a single-classification annotation platform, enabling users to label images 3x faster.',
        'Integrated backend for data persistence and added multi-color CSS vignette effects for enhanced visibility.',
        'Developed confusion matrix visualization for model performance analysis, optimizing rendering with React’s useMemo hook.',
      ],
      techStack: [
        'MongoDB',
        'GCP (Compute Engine, Bucket)',
        'AWS S3',
        'Azure Bucket',
        'React.js',
        'Next.js Pages Router',
        'HTML5/CSS3/JavaScript',
        'Blueprint.js',
        'Nivo',
        'Mixpanel CDP',
      ],
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
              <div className="mt-4 max-w-full">
                <h3 className="font-semibold mb-2">Tech Stack:</h3>
                {/* Tech Stack */}
                <ul className="list-disc ml-5">
                  {internship.techStack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-primary-100 text-primary-500 text-sm rounded-lg mr-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {/* <p className="text-sm">{internship.techStack}</p> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
