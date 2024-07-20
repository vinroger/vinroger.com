import { GraduationCap } from 'lucide-react';
import React from 'react';

function Details() {
  return (
    <>
      <div className="flex flex-col w-full mt-5">
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
      </div>
    </>
  );
}

export default Details;
