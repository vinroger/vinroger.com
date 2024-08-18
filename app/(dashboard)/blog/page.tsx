import ProjectCard from '@/components/projectcard';
import React from 'react';

function Index() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px] pb-[100px]">
      <div className="max-w-[850px] flex w-full flex-col  px-5 lg:px-0">
        <h1 className="font-semibold text-[40px] tracking-tight">Blog</h1>
        <h2 className="text-neutral-700 text-md mt-[10px]">
          Thoughts and ideas that I have written down.
        </h2>
        <p className=" text-lg font-semibold mt-10"> Stories</p>
        <div className="bg-neutral-300 h-[1px] mt-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <ProjectCard
            className="col-span-1"
            title="Singtel MAP Internship"
            description="Management Associate in a nutshell: Leadership, Presentation, Coding, Project Management and Teamwork."
            imageSrc="/blogs/singtel/singtel.png"
            link="/blogs/singtel"
            noNewTab
          />
          <ProjectCard
            className="col-span-1"
            title="Terrascope Internship"
            description="Full stack development in sustainability! Data pipeline, ML integration, Time-series, and front-end."
            imageSrc="/blogs/terrascope/terrascope2.png"
            link="/blogs/singtel"
            noNewTab
          />
          <ProjectCard
            className="col-span-1"
            title="Datature Internship"
            description="Front-end development in AI! Data annotation, ML model training, and React rendering stuff."
            imageSrc="/blogs/datature/datature.png"
            link="/blogs/singtel"
            noNewTab
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
