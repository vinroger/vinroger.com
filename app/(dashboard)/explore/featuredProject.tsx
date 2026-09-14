import ProjectCard from '@/components/projectcard';
import { projects } from '@/lib/portfolio';

export default function FeaturedProjects() {
  return <div className="mt-10">
    <p className="font-semibold text-lg mb-4">Featured Projects</p>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {projects.filter(project => project.featured).map(project => <ProjectCard key={project.slug} title={project.title} description={project.description} imageSrc={project.image} category={project.category} link={'/projects/'+project.slug} noNewTab />)}
    </div>
  </div>;
}
