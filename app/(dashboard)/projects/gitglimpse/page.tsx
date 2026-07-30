import { ArrowLeft, Download, ExternalLink, Github, Play } from 'lucide-react';
import React from 'react';
import type { Metadata } from 'next';

const PDF_PATH = '/projects/gitglimpse-report.pdf';

export const metadata: Metadata = {
  title: 'GitGlimpse — RAG for Pull Request Retrieval and Summarization',
  description:
    'A Retrieval-Augmented Generation framework for efficient Git pull request retrieval and summarization. SUTD 50.045 Information Retrieval, 2024.',
};

function Page() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0 text-wrap">
        <a
          className="text-neutral-500 flex space-x-2 text-sm items-center hover:underline"
          href="/projects"
        >
          <ArrowLeft className="w-4" />
          <p>Back to Project</p>
        </a>

        <h1 className="text-3xl font-bold mb-2 mt-6">GitGlimpse</h1>
        <h2 className="text-xl text-neutral-700 mb-4">
          A Retrieval-Augmented Generation Framework for Efficient Git Pull
          Request Retrieval and Summarization
        </h2>
        <p className="text-sm text-neutral-500 mb-6">
          Vincentius Roger Kuswara, Nathan Aldrich Wiryawan · Singapore
          University of Technology and Design · 50.045 Information Retrieval ·
          Sep&nbsp;–&nbsp;Dec 2024
        </p>

        <p className="mb-4 leading-relaxed">
          GitHub&apos;s keyword search over pull requests returns too many false
          positives, leaving developers to sift through irrelevant results by
          hand. GitGlimpse is a RAG pipeline over 1,600 pull requests from the
          NextUI repository. It combines semantic embeddings, BM25, and
          cross-encoder re-ranking for retrieval, iterative refinement for
          summarization, and a novel Incremental Chain-of-Thought (ICoT) loop
          for answer generation, with post-hoc citations linking every claim
          back to its source PR.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-sm rounded hover:bg-neutral-700 transition duration-300"
          >
            Open full report <ExternalLink className="w-4 ml-2" />
          </a>
          <a
            href={PDF_PATH}
            download
            className="inline-flex items-center px-4 py-2 border border-neutral-300 text-neutral-800 text-sm rounded hover:bg-neutral-100 transition duration-300"
          >
            Download PDF <Download className="w-4 ml-2" />
          </a>
          <a
            href="https://github.com/vinroger/git-glimpse-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-neutral-300 text-neutral-800 text-sm rounded hover:bg-neutral-100 transition duration-300"
          >
            GitHub <Github className="w-4 ml-2" />
          </a>
          <a
            href="https://youtu.be/dLWQdusPUeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-neutral-300 text-neutral-800 text-sm rounded hover:bg-neutral-100 transition duration-300"
          >
            Demo video <Play className="w-4 ml-2" />
          </a>
        </div>

        {/* Inline viewer — desktop only. Mobile browsers refuse to render PDFs
            in an iframe, so small screens get the fallback card below. */}
        <div className="hidden md:block rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50">
          <iframe
            src={`${PDF_PATH}#view=FitH`}
            title="GitGlimpse research report"
            className="w-full h-[1100px]"
          />
        </div>

        <div className="md:hidden rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
          <p className="mb-4 text-neutral-600 text-sm">
            The 28-page report reads better full screen on mobile.
          </p>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white text-sm rounded hover:bg-neutral-700 transition duration-300"
          >
            Open full report <ExternalLink className="w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
