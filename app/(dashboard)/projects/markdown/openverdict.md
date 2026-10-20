---
title: OpenVerdict
description: A 4B decision model that thinks in about 50 tokens.
image: /projects/openverdict/accuracy_vs_cot_length.png
report: /projects/openverdict/report.pdf
---
# OpenVerdict: A 4B Decision Model with an 80-Token Thinking Budget

OpenVerdict is a 4B decision model that thinks in about 50 tokens. Give it a state, a question and a list of options; it returns a probability for every option, either in one forward pass or after a short chain-of-thought.

[Read the technical report (PDF)](/projects/openverdict/report.pdf) · [Model on Hugging Face](https://huggingface.co/vinroger/OpenVerdict-4B) · [Code on GitHub](https://github.com/vinroger/openverdict)

The base model needs about 500 tokens of its own thinking to beat its direct answer on 540 questions from BIG-Bench Hard and ProofWriter (the BBH + ProofWriter sample), and a thinking cut at 64–256 tokens is worse than no thinking at all. OpenVerdict's thinking mode reaches **73.5%** with **53 tokens** on average, inside the range that fits in half a second on one GPU.

## At a glance

- **Two modes, one set of weights.** *Non-thinking*: one forward pass, about 0.04 s per answer on one H100. *Thinking*: a chain-of-thought (CoT) of at most 80 tokens, then one more pass that scores the options; a median of 0.24–0.40 s on one H100. Both figures are estimates from our measurements on rented cloud GPUs.
- **Always a full distribution.** Both modes end the same way: one forward pass scores every option at once, so you get calibrated probabilities for all options, not a sampled word.
- **Strong among open models of its size.** Among the open models up to 9B parameters that we tested, OpenVerdict is the most accurate or tied for first on seven of ten test sets, with a clear lead on four of them, including all three multi-step reasoning sets.
- **Small and open.** Base model: [Qwen3.5-4B](https://huggingface.co/Qwen/Qwen3.5-4B). OpenVerdict is one LoRA adapter (65M parameters) on top of it, Apache-2.0, with the complete training recipe and our [800 logic puzzles](https://github.com/vinroger/openverdict/tree/main/benchmarks/logic_puzzles) in the repository.

## Results

Accuracy (%) of each mode on the ten test sets, and the mean CoT length of the thinking mode.

| Test set | Questions | Non-thinking | Thinking | Mean CoT tokens |
| --- | ---: | ---: | ---: | ---: |
| BIG-Bench Hard (all 23 tasks) | 5,507 | 64.6 | **72.9** | 48 |
| BBH + ProofWriter sample | 540 | 62.4 | **73.5** | 53 |
| Logic puzzles | 800 | 48.4 | **63.5** | 60 |
| JevBench, public items¹ | 231 | 84.0 | **89.2** | 41 |
| Five public decision datasets: toxicity detection, tool-call decisions, product search relevance, reward modeling, next-action prediction | 1,281 | **72.7** | **72.7** | 41 |
| OpenAI moderation set | 300 | 84.7 | **85.3** | 29 |
| XSTest (exaggerated safety) | 300 | 81.7 | **87.3** | 25 |
| ChartQA + Geometry3K + CORD (images) | 460 | 71.5 | **81.5** | 51 |
| VisA anomaly detection (images) | 240 | **81.2** | 77.9 | 25 |
| ScreenSpot GUI grounding (images)² | 200 | **78.0** | 77.5 | 32 |

¹ JevBench public served as our development set. ² The screenshot alone; with optional close-up crops of the marked elements the thinking mode scores 82.5.

Thinking helps most on multi-step reasoning (tracking objects through swaps, chains of truth-tellers and liars, navigation) and least on single-step judgments such as anomaly detection, which is why both modes are kept: the caller picks the mode per question.

### Compared with other decision models

Accuracy (%) on the same questions, OpenVerdict in thinking mode, all models run by us with each model's own prompt format. **Bold**: the best open model up to 9B parameters. Kev-27B and Jev are larger or commercial models, shown for reference.

| Test set | **OpenVerdict** | H2O-Lightning-4B v1.2.3 | Imajev-4B | Clef-Flash 9B | Kev-27B | Jev 1.13.0 (TypeSafe API) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| BIG-Bench Hard (5,507) | **72.9** | 66.7 | 65.6 | 68.7 | 77.3 | 91.5 |
| BBH + ProofWriter sample (540) | **73.5** | 60.2 | 65.6 | 62.8 | 74.6 | 94.6 |
| Logic puzzles (800) | **63.5** | 49.5 | 49.1 | 52.0 | 55.9 | 65.6 |
| JevBench public (231)¹ | **89.2** | **89.2** | 86.1 | 82.3 | 87.9 | 87.9³ |
| Five public decision datasets (1,281)⁴ | **72.7** | 68.3 | 55.9⁵ | 69.9 | 69.9 | 71.4 |
| OpenAI moderation set (300) | 85.3 | **87.7** | 87.0 | 86.0 | 88.0 | 87.0 |
| XSTest (300) | **87.3** | 83.3 | 79.0 | 81.0 | 88.3 | 89.3 |
| ChartQA + Geometry3K + CORD (460) | **81.5** | 75.9 | 78.7 | 75.2 | text only | text only |
| VisA anomaly detection (240) | 77.9 | 67.5 | **89.2** | 62.5 | text only | text only |
| ScreenSpot GUI grounding (200)² | 77.5 | 82.0 | 81.0 | **86.0** | text only | text only |

³ Jev 1.14.0 on this set (1.13.0 scored 85.7). ⁴ Yes / no questions use the default 0.5 threshold; on ToxicChat this threshold decides the lead over Kev-27B and Jev, which rank the messages about as well as OpenVerdict does. ⁵ Imajev-4B declines RewardBench 2 questions with very long options; they count as incorrect. The other open 4B models we tested (Kev-4B, JevK5, Decision 4B) are in the technical report; none of them is ahead of OpenVerdict on any set.

The lead over the open models is clear (95% confidence interval above zero) on four sets: BIG-Bench Hard, the BBH + ProofWriter sample, the logic puzzles and the decision datasets. Against the larger models, OpenVerdict is ahead of Kev-27B, about seven times its size, on the logic puzzles and level with it on JevBench and the BBH + ProofWriter sample, and it is level with Jev on the logic puzzles, JevBench and the decision datasets. Both stay ahead on BIG-Bench Hard, where many tasks need knowledge rather than steps of reasoning. Every result, with its confidence interval, is in the [technical report](/projects/openverdict/report.pdf).

## How it works

<figure class="project-visual">
  <img src="/projects/openverdict/two_modes.png" alt="The two modes: non-thinking reads the prompt once; thinking writes a CoT of at most 80 tokens before the answer pass" width="1459" height="507" loading="lazy" />
</figure>

The prompt is the decision in compact JSON, with a one-letter code per option. In **non-thinking mode** the model reads the prompt once and we take the next-token logits of the option letters at the answer position. A softmax over those letters gives the probability of each option, where j runs over the options:

`p(k | x) = exp(z_k) / Σ_j exp(z_j)`

In **thinking mode** the model first writes a CoT, one token at a time, until it closes its thinking or reaches the **thinking budget** of 80 tokens. If it reaches the budget we close the thinking ourselves, and an answer-extraction pass scores the options in the same way. Finally, calibration of the thinking mode (temperature scaling for choice and rating questions, a cap on the top probability for yes / no questions) makes the probabilities match how often the model is correct, without changing any answer.

**The 80-token budget comes from the latency target.** On an H100, the CoT plus the answer-extraction pass takes about 99 ms + 4.4 ms per CoT token in our timings, so an 80-token CoT takes about 0.45 s and fits a half-second target. Most CoTs end well before the budget, because training rewards a CoT that finishes.

## Training recipe

<figure class="project-visual">
  <img src="/projects/openverdict/training_pipeline.png" alt="Training pipeline: supervised fine-tuning, rejection-sampling fine-tuning, reinforcement learning, a short image round and calibration" width="1286" height="280" loading="lazy" />
</figure>

| Stage | What it does |
| --- | --- |
| 1. Supervised fine-tuning | Teaches the decision format: answer with an option letter, direct answers only |
| 2. Rejection-sampling fine-tuning | The model writes several CoTs per question in three prompt styles; we keep the **shortest correct** one and train on it |
| 3. Reinforcement learning (RLOO) | Rewards correct answers, plus a small **completion bonus** when the CoT finishes inside the budget |
| Short final round on images | One epoch for two image tasks that were still weak (anomaly detection, GUI grounding); part of the questions with a CoT |
| Calibration | Temperature scaling for choice and rating questions and a cap for yes / no, fitted on a validation set (thinking mode) |

Each stage runs on one GPU with 48–80 GB of memory. The scripts and the configs with the hyperparameters of the released model are in the [GitHub repository](https://github.com/vinroger/openverdict).

**The reward.** For each question the model samples 4 CoTs. Each one earns 1 if the answer is correct, plus a bonus β = 0.25 if it is correct *and* the CoT finished inside the budget; the advantage of a rollout is its reward minus the mean reward of the other three (RLOO), with a small KL penalty to the policy at the start of RL. The bonus is a form of the overlong penalty of DAPO, paid only to correct answers so that a short incorrect CoT earns nothing.

<figure class="project-visual">
  <img src="/projects/openverdict/rl_grading.png" alt="How one RL question is graded" width="1186" height="461" loading="lazy" />
</figure>

## What we found

- **A truncated CoT is worth little; the training goal is a CoT that finishes.** Cut at 64 tokens, the base model's own thinking is correct 35.6% of the time on the BBH + ProofWriter sample, below its direct answer (48.3%). For the final model on JevBench public, a finished CoT is correct 93.8% of the time and a truncated one 65.8%.
- **Measure a larger budget before training at it.** Running the 64-token model at 80 tokens, with no training, raised accuracy on the BBH + ProofWriter sample from 70.4% to 75.0%. After RL at the new budget, the released model writes shorter CoTs (53 against 65 tokens) with no clear change in accuracy there (−1.5 points, 95% interval −4.6 to +1.9).
- **Train on the model's own shortest correct CoT.** Selecting it across three prompt styles raised accuracy from 64.3% to 68.7% and cut the share of truncated CoTs from 61% to 24%. A small completion bonus (β = 0.25) cut it further, from 46% to 29%, for about one point of accuracy.
- **Do not reward correct answers reached through invalid reasoning.** On tasks the model cannot do yet, many correct answers are guesses. In a separate RL experiment, a reward that also paid those taught a shortcut and lowered accuracy on BIG-Bench Hard's three tracking tasks from 61% to 47%; rewarding only correct answers with valid reasoning kept it at 63.6% and 62.8% (two seeds).

## Intended use

OpenVerdict is meant for typed decisions inside software: routing a request, checking it against a policy, moderating a message, deciding whether to call a tool, or choosing an element on a screen. It is not a chat model. Tune the 0.5 threshold of yes / no questions for your application, and keep a person in the loop for high-stakes decisions.

## Limitations

- **Knowledge-heavy tasks.** A short CoT adds reasoning steps, not knowledge; on knowledge and language tasks larger models stay ahead. Use the non-thinking mode where a CoT does not help.
- **Long reasoning.** Questions whose reasoning needs more than about 80 tokens, such as long policies or multi-step date arithmetic, often reach the budget, and the answer after an unfinished CoT is less reliable.
- **Multi-step agent tasks.** Thinking on each step of a web task does not raise the success rate of whole tasks.
- **Latency.** The H100 figures are estimates from our measurements on rented cloud GPUs; real latency depends on the hardware, the serving setup and the load.
