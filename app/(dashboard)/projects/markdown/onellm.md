---
title: OneLLM
description: Dataset building, language model fine-tuning and evaluation in one workspace.
image: /onellm.png
---
# OneLLM

OneLLM is a personal product for building datasets, fine-tuning language models and evaluating the result in the browser. I built it while working on AI products, where turning real examples into useful training data was a recurring part of the work.

[View OneLLM on BetaList](https://betalist.com/startups/onellm-co)

## A connected workflow

Fine-tuning starts before a training job. We need examples of the inputs a model will receive and the responses we want it to produce. Those examples need to be collected, edited and reviewed.

OneLLM brought these steps together. The dataset editor supported conversation records with user and assistant messages, including keyboard shortcuts for working through many examples. Users could prepare the dataset, start fine-tuning and evaluate the resulting model without writing a separate integration for each step.

## From API logs to training examples

I also built a way to record model API calls and import those logs into datasets. For example, an interaction that produced an unhelpful answer could become an example to review and rewrite for a later training run.

A dashboard displayed usage and cost trends from the recorded calls. This connected the product’s day-to-day model use with the examples used to improve it.

## My contribution

I worked across the dataset editor, model-provider integrations, logging and the usage dashboard. I also used OneLLM in the iteration process for UImagine.

The project is useful to understand as a workflow product: the individual steps already existed, but moving between logs, spreadsheets, provider tools and evaluation made iteration awkward. OneLLM put those steps in one place. The [BetaList listing](https://betalist.com/startups/onellm-co) preserves the public product description.
