---
title: Query-guided Search
description: Exploring Bitplanes and Backward Walk for searching binary embeddings.
report: /projects/query-guided-search/report.pdf
---
# Reimagining Search Using the Query’s Ideal Bit Pattern

I started this project after reading [Exa’s description of its vector database](https://exa.ai/blog/building-web-scale-vector-db). The part I wanted to explore was the search inside a selected cluster: can we avoid some of the query-document dot product operations by using information we already have in the query?

[Read the report (PDF)](/projects/query-guided-search/report.pdf) · [Code and experiments](https://github.com/rgrexplore/query-guided-search-exploration)

## The observation

A floating-point query tells us which sign we would prefer for each document coordinate. For example, the query `[0.6, -0.2, 0.4]` prefers the binary pattern `101`. Matching a coordinate contributes its magnitude to the score; a mismatch contributes the negative of that magnitude. A mismatch on `0.6` therefore costs more than one on `0.2`.

That ideal pattern may not exist in the database. The question is how to use it to reach good documents without doing more work than a simple scan.

## Three ways to search

**A: Cluster, then scan.** Select nearby clusters, calculate the query-document dot product for every document in them, and keep the best results. This is the baseline used in the report, inspired by Exa’s public description rather than a reproduction of its production system.

**B: Bitplanes.** Store each bit position across the documents as a bitmap, a sequence of flags packed into machine words. Split the candidate set by one query bit at a time. Keep both branches, but explore the more promising one first. A bound on the best possible score lets us skip a branch when it cannot improve the current results.

**C: Backward Walk.** Sort documents by a fixed binary prefix. Begin with the query’s own prefix, then shorten it to expose a larger range. For example, `1011` broadens to `101*`, then `10**`. Only newly exposed documents receive a dot product operation. The search also needs a rule for deciding whether unseen documents could still improve the answer.

## Why fewer dot products may still take longer

A Bitplane split can traverse the cluster’s entire bitmap even when few documents remain. Backward Walk needs boundary searches to locate prefix ranges. Both methods add work in order to avoid other work.

I wrote out the time and memory costs, implemented the methods in C++ with Python bindings, and recorded the work each query performed. This makes it possible to compare an explanation with a measurement: how many rows were scored, how much bitmap data was visited, and how many prefix lookups were needed?

## The experiment

The report uses MS MARCO with Nomic embeddings and Quora with Qwen embeddings. Within each comparison, the methods use the same documents, queries, binary dimension, scoring function and requested result count. Each method can choose its own cluster and search settings.

The timer begins with an already computed query embedding. It includes cluster selection, local search and returned IDs. Embedding generation and later full-vector reranking are outside that timer.

Recall is measured against an exact scan of the same binary representation. For example, with one result per query, 99% recall means recovering the exact binary top result for 99% of the queries. It does not mean 99% agreement with human relevance judgments.

## What the report shows

Bitplanes have their clearest benefit when the requested result count is small. Strong results allow more branches to be skipped. When more results are required, more branches remain possible candidates and the bitmap work becomes harder to justify.

Backward Walk depends on how much useful information the prefix contains. A narrow prefix can make the initial search cheap, but repeated broadening can expose much of the selected clusters.

The report includes the derivations, examples, Python-style pseudocode, memory estimates and measured comparisons. The conclusion is conditional: avoiding a dot product helps only when doing so costs less than the dot product work we save.
