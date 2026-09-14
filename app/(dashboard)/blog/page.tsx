import ProjectCard from '@/components/projectcard';
import { projects } from '@/lib/portfolio';

export default function BlogPage() {
  const articles = projects.filter(project => ['query-guided-search', 'gitglimpse', 'quick-median', 'adswift'].includes(project.slug));
  return <div className="mx-auto max-w-[900px] px-5 pb-28 pt-14 md:px-8 md:pt-20">
    <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
    <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">Notes from building and experimenting. These project write-ups cover the ideas, implementation choices and results.</p>
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">{articles.map(project => <ProjectCard key={project.slug} title={project.title} description={project.description} category={project.category} imageSrc={project.image} link={'/projects/'+project.slug} noNewTab />)}</div>
  </div>;
}
