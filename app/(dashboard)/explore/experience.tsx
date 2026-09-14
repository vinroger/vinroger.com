import { experience } from '@/lib/portfolio';

export default function Experience() {
  return <section className="mt-12">
    <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold">Work experience</h2><a href="/experience" className="text-sm text-neutral-600 underline underline-offset-4">View all</a></div>
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">{experience.map(job => <a key={job.company} href="/experience" className="flex flex-wrap items-start justify-between gap-2 py-4 hover:text-neutral-500">
      <div><h3 className="font-semibold">{job.company}</h3><p className="mt-1 text-sm text-neutral-600">Software Engineer · {job.type}</p></div>
      <p className="text-sm text-neutral-500">{job.period}</p>
    </a>)}</div>
  </section>;
}
