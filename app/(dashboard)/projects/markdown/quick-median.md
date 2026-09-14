---
title: Quick Median
description: Finding the median without sorting every value.
---
# Quick Median

Quick Median is a JavaScript package I built for calculating the median of an array. The interesting part is that finding the middle value does not require the entire array to be sorted.

[Package on npm](https://www.npmjs.com/package/quick-median) · [Benchmark page](https://vinroger.github.io/quick-median/)

## Why selection instead of sorting?

Consider `[8, 2, 5, 1, 9]`. Sorting produces `[1, 2, 5, 8, 9]`, so the median is `5`. But if we only need the median, the final order of `1` and `2`, or `8` and `9`, is not part of the answer.

Quick Median uses the Floyd and Rivest selection algorithm. Selection narrows the region that can contain the requested position, rather than ordering every value. Its expected running time is linear in the number of values, compared with the typical `O(n log n)` cost of a comparison sort.

For an even-length array, the median is the average of the two central values. For example, `[1, 2, 8, 9]` has median `5`.

## Implementation and measurement

The project includes the package and a benchmark page for comparing median implementations. This gave me a small, concrete way to study the difference between an algorithm’s expected complexity and its actual running time in JavaScript.

The useful comparison is not just the name of the algorithm. Array size, input order, allocations and the runtime all affect the result. The linked benchmark page contains the comparisons and its reference for the selection algorithm, rather than treating a historical speedup as a promise for every input.
