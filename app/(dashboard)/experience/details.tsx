import Image from 'next/image';
import { experience } from '@/lib/portfolio';

const logos: Record<string, string> = {
  TikTok: '/tiktok-color.png', HeroUI: '/heroui.png', Singtel: '/singtel.png',
  Terrascope: '/terrascope.png', Datature: '/datature.png',
};

export default function Details() {
  return <div className="mt-10">{experience.map(job => <section key={job.company}>
    <div className="bg-neutral-200 h-[1px]" />
    <div className="flex flex-col lg:flex-row p-5 w-full lg:space-x-4">
      <div className="flex w-full lg:w-2/5 flex-col mb-5 lg:mb-0">
        <div className="flex flex-row w-full items-center pr-5">
          <Image src={logos[job.company]} alt={`${job.company} logo`} width={64} height={64} className="h-16 w-16 shrink-0 rounded-lg bg-white object-contain" />
          <p className="font-semibold ml-5 flex-grow">{job.company}</p>
        </div>
        <p className="text-neutral-500 text-sm mt-2">{job.period}</p>
        <p className="text-neutral-700 text-sm mt-1">Software Engineer</p>
        <p className="text-neutral-700 text-sm">{job.type} · {job.location}</p>
      </div>
      <div className="flex w-full lg:flex-1 flex-col">
        <h3 className="font-semibold mb-2">Responsibilities</h3>
        <p className="text-sm leading-relaxed">{job.description}</p>
        {job.project && <a href={job.project} className="mt-3 text-sm underline underline-offset-4">Read about HeroUI Chat</a>}
      </div>
    </div>
  </section>)}</div>;
}
