import { GraduationCap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Details() {
  const educationData = [
    {
      institution: 'Singapore University of Technology and Design (SUTD)',
      degree: 'Bachelor of Engineering in Computer Science and Design',
      duration: 'September 2021 - May 2025',
      gpa: 'CGPA: 4.96/5.00',
      awards:
        'ASEAN UG Scholarship, Honours List 2021/2022, Honours List 2022/2023',
      logo: '/showcase/sutdlogo.png',
      showcaseImages: [
        '/showcase/clickbeat.png',
        '/showcase/singtel.png',
        '/showcase/kastogro.jpg',
      ],
    },
    {
      institution: 'The University of British Columbia (UBC)',
      degree: 'Exchange Program - Vancouver, Canada',
      duration: 'September 2023 - December 2023',
      gpa: 'Semester GPA: 3.93/4',
      awards: 'Canada-Seed ASEAN Scholarship, $10,200 in stipend',
      courses:
        'Applied Machine Learning, Machine Learning and Data Mining, Networks, Cybersecurity',
      logo: '/showcase/ubclogo.png',
      showcaseImages: [
        '/showcase/canada-lyn.png',
        '/showcase/canada-house.png',
        '/showcase/canada-ubc2.png',
      ],
    },
  ];

  return (
    <>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start lg:space-x-6 rounded-lg p-4 lg:p-6 transition-all mb-8 lg:mb-10 mt-5"
        >
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <div className="rounded-lg bg-neutral-100 p-2 w-fit">
              <GraduationCap className="text-neutral-600" />
            </div>
          </div>
          <div className="flex-grow w-full">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-4">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-neutral-700 font-medium mb-1">
                  {edu.degree}
                </p>
                <p className="text-neutral-600 mb-1 mt-3">{edu.duration}</p>
                <p className="text-neutral-600 mb-1">{edu.gpa}</p>
                <p className="text-neutral-600 mb-1">Awards: {edu.awards}</p>
                {edu.courses && (
                  <p className="text-neutral-600">Courses: {edu.courses}</p>
                )}
              </div>
              <div className="flex-shrink-0 w-20 h-20 relative">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row overflow-x-auto max-w-full sm:space-x-5 space-y-4 sm:space-y-0 mt-4 lg:mt-7 pb-2">
              {edu.showcaseImages.map((src, imgIndex) => (
                <div
                  key={imgIndex}
                  className="flex-shrink-0 w-full sm:w-60 h-40 relative"
                >
                  <Image
                    src={src}
                    alt={`Showcase image ${imgIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Details;
