import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface PostProps {
  params: { slug: string };
}

export default async function Post({ params }: PostProps) {
  const { slug } = params;
  const markdownPath = path.join(
    process.cwd(),
    '/app/(dashboard)/projects/markdown/',
    `${slug}.md`
  );
  const markdownWithMeta = fs.readFileSync(markdownPath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const components = {
    h1: ({ node, ...props }: any) => (
      <h1 className="text-3xl font-bold mb-4 mt-6" {...props} />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 className="text-2xl font-semibold mb-3 mt-5" {...props} />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 className="text-xl font-medium mb-2 mt-4" {...props} />
    ),
    p: ({ node, ...props }: any) => (
      <p className="mb-4 leading-relaxed" {...props} />
    ),
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc pl-5 mb-4" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal pl-5 mb-4" {...props} />
    ),
    li: ({ node, ...props }: any) => <li className="mb-2" {...props} />,
    blockquote: ({ node, ...props }: any) => (
      <blockquote
        className="border-l-4 border-neutral-300 pl-4 italic my-4"
        {...props}
      />
    ),
    code: ({ node, inline, ...props }: any) =>
      inline ? (
        <code className="bg-neutral-100 rounded px-1 py-0.5" {...props} />
      ) : (
        <code
          className="block bg-neutral-100 rounded p-2 my-2 overflow-x-auto"
          {...props}
        />
      ),
    a: ({ node, ...props }: any) => (
      <a className="text-blue-600 hover:underline" {...props} />
    ),
    // img: ({ node, ...props }: any) => (
    //   <Image
    //     src={props.src || ''}
    //     alt={props.alt || ''}
    //     width={500}
    //     height={300}
    //     layout="responsive"
    //     className="rounded-lg"
    //   />
    // ),
  };

  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0 text-wrap overflow-scroll">
        {/* <h1 className="text-4xl font-bold mb-6">{frontmatter.title}</h1> */}
        <a
          className="text-neutral-500 flex space-x-2 text-sm items-center hover:underline"
          href="/projects"
        >
          <ArrowLeft className="w-4" />
          <p>Back to Project</p>
        </a>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={components}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), '/app/(dashboard)/projects/markdown/')
  );
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
