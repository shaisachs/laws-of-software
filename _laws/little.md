---
layout: post
title: Little's Law
law: The average number of items in a system is the product of the average rate at which items arrive and the average time each item spends in the system.
law-author: John D. C. Little
law-url: https://www.polaris-flow-dispatch.com/p/littles-law-in-a-complex-adaptive
law-year: 1961
---

Little's Law, often written as L = λW, states that the average number of items in a stable system is the product of the average arrival rate of items and the average time each item spends in the system. John D. C. Little proved this relationship in 1961, and it has since become a cornerstone of queueing theory and operations management.

In software development, Little's Law is frequently used to reason about workflow: the average amount of work in progress is the product of the throughput (arrival rate) and the average cycle time. If you know any two of these quantities, you can derive the third, which makes the law a useful tool for forecasting and for understanding the trade-offs of limiting work in progress.

The linked article argues that the law is far more general than its original proof suggests. Little's original proof relied on restrictive assumptions about stationary stochastic processes, which often do not hold in real-world product development. Using sample path analysis, the article shows that Little's Law holds even in complex adaptive systems - messy, non-stationary environments like teams working toward product-market fit - so long as the relevant long-run averages are measured correctly.
