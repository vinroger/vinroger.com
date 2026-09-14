import { redirect, notFound } from 'next/navigation';
import { projects } from '@/lib/portfolio';

export default function BlogArticle({ params }: { params: { slug: string } }) {
  if (!projects.some(project => project.slug === params.slug)) notFound();
  redirect(`/projects/${params.slug}`);
}
