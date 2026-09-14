---
title: GitGlimpse
description: Retrieval and summarization for Git pull requests.
image: /projects/gitglimpse.png
report: /projects/gitglimpse-report.pdf
---
# GitGlimpse

GitGlimpse is a research project I built with Nathan Aldrich Wiryawan for SUTD’s Information Retrieval course. It searches pull requests and uses the retrieved material to answer questions with links back to the source.

[Read the report](/projects/gitglimpse-report.pdf) · [Source code](https://github.com/vinroger/git-glimpse-project) · [Demo video](https://youtu.be/dLWQdusPUeo)

## Why combine two kinds of search?

A developer’s question may use different words from the pull request that answers it. At the same time, an exact identifier such as a component name can be very useful.

The retrieval pipeline combines BM25 keyword search with embedding search. BM25 uses word matches and their frequency, while embeddings represent text numerically so that similar meanings can be compared. Combining them gives both signals a role.

The next step reranks the candidates using a cross-encoder, a model that considers the query and document together. This is more work per candidate, so it is applied after retrieval has narrowed the set.

<figure class="project-visual">
  <a href="/projects/screenshots/gitglimpse-retrieval.png" target="_blank" rel="noopener noreferrer" aria-label="Open image: Combining BM25 and vector-search results, Figure 5 from the project report."><img src="/projects/screenshots/gitglimpse-retrieval.png" alt="Combining BM25 and vector-search results, Figure 5 from the project report." width="1439" height="770" loading="lazy" /></a>
  <figcaption>Combining BM25 and vector-search results, Figure 5 from the project report. <a href="/projects/gitglimpse-report.pdf" target="_blank" rel="noopener noreferrer">Report</a>.</figcaption>
</figure>

## Improving the input to search

We compared ways of representing a pull request as searchable text, as well as query-expansion strategies and embedding models. For example, expanding a short question can provide useful context, but adding unrelated terms can also pull the search toward the wrong documents.

The experiments look at these choices separately instead of attributing every change to the model. In the report’s reranking comparison, mean average precision rose from 0.60 to 0.89 and nDCG from 0.76 to 0.94. These are the report’s measured ranking metrics, not a claim that every future query improves by the same amount.

## Building an answer

The project also explores an Incremental Chain-of-Thought loop. A model retrieves context, drafts an answer, and uses a judging step to decide whether another retrieval cycle is needed. The final answer includes references to the pull requests that support it.

For example, a first search might find a discussion of a component bug. A follow-up search can look for the change that resolved it. The question is whether that extra cycle contributes useful evidence, rather than merely generating more text.

<figure class="project-visual">
  <a href="/projects/screenshots/gitglimpse-answer.png" target="_blank" rel="noopener noreferrer" aria-label="Open image: The iterative answer-generation workflow, Figure 8 from the project report."><img src="/projects/screenshots/gitglimpse-answer.png" alt="The iterative answer-generation workflow, Figure 8 from the project report." width="1439" height="786" loading="lazy" /></a>
  <figcaption>The iterative answer-generation workflow, Figure 8 from the project report. <a href="/projects/gitglimpse-report.pdf" target="_blank" rel="noopener noreferrer">Report</a>.</figcaption>
</figure>

## Evaluation

The report compares retrieval settings and describes its LLM-based evaluation, including the Average-Max metric. Model-judged scores depend on the evaluation setup, so the report is linked alongside the implementation rather than presenting the numbers without context.
