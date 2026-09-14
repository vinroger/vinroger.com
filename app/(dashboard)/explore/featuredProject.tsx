import ProjectCard from '@/components/projectcard';
import { projects } from '@/lib/portfolio';

export default function FeaturedProjects() {
  return <section className="mt-12">
    <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-semibold">Selected projects</h2><a href="/projects" className="text-sm text-neutral-600 underline underline-offset-4">All projects</a></div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{projects.filter(project => project.featured).map(project => <ProjectCard key={project.slug} title={project.title} description={project.description} imageSrc={project.image} category={project.category} link={'/projects/'+project.slug} noNewTab />)}</div>
  </section>;
}
