import { GraduationCap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Details() {
  return (
    <>
      {/* <div className="flex flex-col w-full mt-5">
        <div className="flex flex-row items-start">
          <div className="rounded-lg bg-neutral-100 p-2 w-fit">
            <GraduationCap className="text-neutral-600" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-neutral-700 font-medium text-lg mb-2">
              Singapore University of Technology and Design (SUTD)
            </p>
            <p className="text-neutral-500 text-sm">
              Bachelor of Engineering in Computer Science and Design
            </p>
            <p className="text-neutral-500 text-sm">
              September 2021 - May 2025
            </p>
            <p className="text-neutral-500 text-sm">CGPA: 4.96/5.00</p>
            <p className="text-neutral-500 text-sm">
              Awards: ASEAN UG Scholarship, Honours List 2021/2022, Honours List
              2022/2023
            </p>
          </div>
        </div>

        <div className="flex flex-row items-start mt-4">
          <div className="rounded-lg bg-neutral-100 p-2 w-fit">
            <GraduationCap className="text-neutral-600" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-neutral-700 font-medium text-lg mb-2">
              The University of British Columbia (UBC)
            </p>
            <p className="text-neutral-500 text-sm">Exchange Program</p>
            <p className="text-neutral-500 text-sm">
              September 2023 - December 2023
            </p>
            <p className="text-neutral-500 text-sm">Semester GPA: 3.93/4</p>
            <p className="text-neutral-500 text-sm">
              Awards: Canada-Seed ASEAN Scholarship, $10,200 in stipend
            </p>
            <p className="text-neutral-500 text-sm">
              Courses: Applied Machine Learning, Machine Learning and Data
              Mining, Networks, Cybersecurity
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex items-start space-x-6 rounded-lg p-6 transition-all mb-10 mt-10">
        <div className="flex-shrink-0">
          <div className="rounded-lg bg-neutral-100 p-2 w-fit">
            <GraduationCap className="text-neutral-600" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Singapore University of Technology and Design (SUTD)
              </h3>
              <p className="text-neutral-700 font-medium mb-1">
                Bachelor of Engineering in Computer Science and Design
              </p>
              <p className="text-neutral-600 mb-1">September 2021 - May 2025</p>
              <p className="text-neutral-600 mb-1">CGPA: 4.96/5.00</p>
              <p className="text-neutral-600 mb-1">
                Awards: ASEAN UG Scholarship, Honours List 2021/2022, Honours
                List 2022/2023
              </p>
            </div>
            <div className="flex-shrink-0 w-20 h-20 relative ml-4">
              <Image
                src="/showcase/sutdlogo.png"
                alt="SUTD logo"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-row overflow-x-auto max-w-full space-x-5 mt-7 pb-2">
            {[
              '/showcase/clickbeat.png',
              '/showcase/singtel.png',
              '/showcase/kastogro.jpg',
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-60 h-40 relative">
                <Image
                  src={src}
                  alt={`Showcase image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UBC Education Item */}
      <div className="flex items-start space-x-6 rounded-lg p-6 transition-all">
        <div className="flex-shrink-0">
          <div className="rounded-lg bg-neutral-100 p-2 w-fit">
            <GraduationCap className="text-neutral-600" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                The University of British Columbia (UBC)
              </h3>
              <p className="text-neutral-700 font-medium mb-1">
                Exchange Program - Vancouver, Canada
              </p>
              <p className="text-neutral-600 mb-1">
                September 2023 - December 2023
              </p>
              <p className="text-neutral-600 mb-1">Semester GPA: 3.93/4</p>
              <p className="text-neutral-600 mb-1">
                Awards: Canada-Seed ASEAN Scholarship, $10,200 in stipend
              </p>
              <p className="text-neutral-600">
                Courses: Applied Machine Learning, Machine Learning and Data
                Mining, Networks, Cybersecurity
              </p>
            </div>
            <div className="flex-shrink-0 w-20 h-20 relative ml-4">
              <Image
                src="/showcase/ubclogo.png"
                alt="UBC logo"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-row overflow-x-auto max-w-full space-x-5 mt-7 pb-2">
            {[
              '/showcase/canada-lyn.png',
              '/showcase/canada-house.png',
              '/showcase/canada-ubc2.png',
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-60 h-40 relative">
                <Image
                  src={src}
                  alt={`Showcase image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
