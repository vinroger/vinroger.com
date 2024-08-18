import { ArrowLeft, ExternalLink } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0 text-wrap">
        <a
          className="text-neutral-500 flex space-x-2 text-sm items-center hover:underline mb-4"
          href="/projects"
        >
          <ArrowLeft className="w-4" />
          <p>Back to Project</p>
        </a>
        <h2 className="text-2xl font-bold mb-4">Team 10 Echolestia Project</h2>
        <p className="mb-4">
          This project is hosted on Google Sites. Click the button below to view
          and interact with the full project:
        </p>
        <a
          href="https://sites.google.com/view/team10-echolestia/home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-64 items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Open Project <ExternalLink className="w-4 ml-2" />
        </a>
      </div>
    </div>
  );
}

export default Page;
