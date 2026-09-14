import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link: string;
  category?: string;
  className?: string;
  noNewTab?: boolean;
}

export default function ProjectCard({ title, description, imageSrc, link, category, className, noNewTab }: ProjectCardProps) {
  return (
    <a href={link} target={noNewTab ? undefined : '_blank'} rel="noopener noreferrer"
      className={cn('group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-800', className)}>
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
        {imageSrc ? <Image src={imageSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" /> :
          <div className="flex h-full flex-col justify-between p-7" aria-hidden="true">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{category}</span>
            <span className="max-w-[14ch] text-3xl font-semibold tracking-tight text-neutral-800">{title}</span>
          </div>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {category && <p className="mb-2 text-xs text-neutral-500">{category}</p>}
        <h3 className="flex items-start justify-between gap-3 font-semibold text-lg">{title}<ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-neutral-500" /></h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
    </a>
  );
}
