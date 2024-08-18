import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

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

  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0">
        <h1>{frontmatter.title}</h1>
        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
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
