import ProjectCard from '@/components/projectcard';
import { projects } from '@/lib/portfolio';

export default function ProjectsPage() {
  const categories = ['Research', 'Built at HeroUI', 'Personal products', 'Open source', 'University projects'];
  return <div className="mx-auto max-w-[900px] px-5 pb-28 pt-14 md:px-8 md:pt-20">
    <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
    <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">Products I’ve built, experiments I’ve run, and the details behind them. Each project covers the problem, the implementation and what came out of it.</p>
    <nav aria-label="Project categories" className="my-8 flex flex-wrap gap-2">
      {categories.map(category => <a key={category} href={'#'+category.toLowerCase().replaceAll(' ', '-')} className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-100">{category}</a>)}
    </nav>
    {categories.map(category => <section key={category} id={category.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-8 mt-9">
      <h2 className="mb-4 border-b border-neutral-200 pb-3 text-xl font-semibold">{category}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.filter(project => project.category === category).map(project => <ProjectCard key={project.slug} title={project.title} description={project.description} imageSrc={project.image} category={project.category} link={'/projects/'+project.slug} noNewTab />)}
      </div>
    </section>)}
  </div>;
}
