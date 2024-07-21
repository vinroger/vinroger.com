'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Make sure to install lucide-react
import { useRouter } from 'next/navigation';

interface ExperienceRowProps {
  companyName: string;
  experience: string;
  imageSrc: string;
  link: string;
}

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  companyName,
  experience,
  imageSrc,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(link)}
      className="flex items-center p-3 rounded-lg transition-all duration-200 hover:shadow-sm border-[1px] border-transparent hover:border-neutral-300 box-border cursor-pointer relative"
    >
      <div className="flex-shrink-0 w-12 h-12 mr-4 justify-center items-center flex">
        <Image
          src={imageSrc}
          alt={companyName}
          width={48}
          height={48}
          className="rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-[15px]">{experience}</h3>
        <p className="text-neutral-600 text-sm">{companyName}</p>
      </div>
      <div
        className={`transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowRight className="text-neutral-500" size={20} />
      </div>
    </div>
  );
};

function Experience() {
  return (
    <div className="mt-10">
      <div className="border-[1px] border-neutral-200 rounded-lg p-5">
        <p className="font-semibold mb-4 text-lg">Work Experience</p>
        <div className="space-y-4">
          <ExperienceRow
            companyName="Singtel"
            experience="Full-stack Engineer Intern (Management Associate Program)"
            imageSrc="/singtel.png"
            link="/experience"
          />
          <ExperienceRow
            companyName="Terrascope"
            experience="Full-stack Engineer Intern"
            imageSrc="/terrascope.png"
            link="/experience"
          />
          <ExperienceRow
            companyName="Datature"
            experience="Front-end Engineer Intern"
            imageSrc="/datature.png"
            link="/experience"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
