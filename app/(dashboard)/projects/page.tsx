import ProjectCard from '@/components/projectcard';
import React from 'react';

function Index() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px] pb-[100px]">
      <div className="max-w-[850px] flex w-full flex-col  px-5 lg:px-0">
        <h1 className="font-semibold text-[40px] tracking-tight">Projects</h1>
        <h2 className="text-neutral-700 text-md mt-[10px]">
          My collection of startup projects or hobby projects that I am proud
          of.
        </h2>
        <p className=" text-lg font-semibold mt-10"> Startup Projects 🚀</p>
        <div className="bg-neutral-300 h-[1px] mt-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <ProjectCard
            className="col-span-1"
            title="UImagine.io"
            description="Transform ideas to design and code in seconds."
            imageSrc="/uimagine.png"
            link="https://uimagine.io"
          />
          <ProjectCard
            className="col-span-1"
            title="OneLLM.co"
            description="End-to-end no-code LLM fine-tuning studio."
            imageSrc="/onellm.png"
            link="https://onellm.co"
          />
        </div>
        <p className=" text-lg font-semibold mt-20"> Hobby Projects ✨</p>
        <div className="bg-neutral-300 h-[1px] mt-2 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            className="col-span-1"
            title="AdSwift"
            description="Data analytics collection and platform for outdoor advertising."
            imageSrc="/projects/adswift.png"
            link="/projects/adswift"
            noNewTab
          />
          <ProjectCard
            className="col-span-1"
            title="Hungrybees"
            description="Connecting people to group-buy together, splitting delivery costs."
            imageSrc="/projects/hungrybees.png"
            link="/projects/hungrybees"
            noNewTab
          />
          <ProjectCard
            className="col-span-1"
            title="The Guiding Hand"
            description="Client-Counselor portal for Gebirah Org with AI features."
            imageSrc="/projects/guidinghand2.png"
            link="/projects/the-guiding-hand"
            noNewTab
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
