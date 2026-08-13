---
layout: post
title: Little's Law
law: The average number of items in a system is the product of the average rate at which items arrive and the average time each item spends in the system.
law-author: John D. C. Little
law-url: https://pubsonline.informs.org/doi/10.1287/opre.9.3.383
law-year: 1961
---

Little's Law is often written as L = λW, and it has since become a cornerstone of queueing theory and operations management.

In software development, Little's Law is frequently used to reason about workflow: the average amount of work in progress is the product of the throughput (arrival rate) and the average cycle time. If you know any two of these quantities, you can derive the third, which makes the law a useful tool for forecasting and for understanding the trade-offs of limiting work in progress. While the original law relied on restrictive assumptions about stationary stochastic processes, [others have since argued](https://www.polaris-flow-dispatch.com/p/littles-law-in-a-complex-adaptive) that Little's Law holds even in complex adaptive systems - messy, non-stationary environments like teams working toward product-market fit - so long as the relevant long-run averages are measured correctly.
