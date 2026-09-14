import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const directory = path.join(process.cwd(), 'app/(dashboard)/projects/markdown');

function readProject(slug: string) {
  // Only load an article that exists in this directory.
  const filename = `${slug}.md`;
  if (!fs.readdirSync(directory).includes(filename)) notFound();
  return matter(fs.readFileSync(path.join(directory, filename), 'utf8'));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { data } = readProject(params.slug);
  return { title: `${data.title || params.slug} | Vincentius Roger Kuswara`, description: data.description };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { data, content } = readProject(params.slug);
  return <article className="mx-auto max-w-[850px] px-5 pb-28 pt-12 md:px-8 md:pt-20">
    <a href="/projects" className="mb-7 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900"><ArrowLeft className="h-4 w-4" />All projects</a>
    {data.image && <img src={data.image} alt={`${data.title} project`} className="mb-8 max-h-[420px] w-full rounded-xl border border-neutral-200 object-contain bg-neutral-50" />}
    <div className="project-article">
      <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
    {data.report && <section className="mt-12 border-t border-neutral-200 pt-8">
      <h2 className="text-2xl font-semibold">Full report</h2>
      <p className="mt-3 text-neutral-600">Read the complete methods, experiments and results in the PDF.</p>
      <div className="my-5 flex flex-wrap gap-3">
        <a href={data.report} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-3 text-sm text-white hover:bg-neutral-700">Open report<ExternalLink className="h-4 w-4" /></a>
        <a href={data.report} download className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-3 text-sm hover:bg-neutral-50">Download PDF<Download className="h-4 w-4" /></a>
      </div>
      <iframe src={`${data.report}#view=FitH`} title={`${data.title} full report`} className="hidden h-[900px] w-full rounded-xl border border-neutral-200 md:block" loading="lazy" />
      <p className="text-sm text-neutral-500 md:hidden">Use “Open report” for a full-screen view on your phone.</p>
    </section>}
  </article>;
}

export function generateStaticParams() {
  return fs.readdirSync(directory).filter(filename => filename.endsWith('.md') && filename !== 'gitglimpse.md' && filename !== 'the-guiding-hand.md').map(filename => ({ slug: filename.slice(0, -3) }));
}
