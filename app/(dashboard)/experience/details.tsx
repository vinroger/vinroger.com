import { experience } from '@/lib/portfolio';

export default function Details() {
  return <div className="mt-10 divide-y divide-neutral-200">{experience.map(job => <section key={job.company} className="grid gap-4 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
    <div><h2 className="text-xl font-semibold">{job.company}</h2><p className="mt-2 font-medium">Software Engineer</p><p className="mt-1 text-sm text-neutral-600">{job.type} · {job.location}</p><p className="mt-1 text-sm text-neutral-500">{job.period}</p></div>
    <div className="leading-relaxed text-neutral-700"><p>{job.description}</p>{job.project && <a href={job.project} className="mt-3 inline-block underline underline-offset-4">Read about HeroUI Chat</a>}</div>
  </section>)}</div>;
}
