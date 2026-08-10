---
layout: post
title: Little's Law
law: The average number of items in a system (L) is equal to the average arrival rate (λ) multiplied by the average time each item spends in the system (W).
law-author: John D. C. Little
law-url: https://www.polaris-flow-dispatch.com/p/littles-law-in-a-complex-adaptive
law-year: 1961
---

Little's Law, proven by John D. C. Little in 1961, states that L = λW: the long-run average number of items in a stable system equals the average arrival rate multiplied by the average time an item spends in the system. In software development, it connects work in progress, throughput, and cycle time: to reduce the time work spends in a system, you must either reduce the amount of work in flight or increase throughput. The law holds regardless of the distribution of arrival or service times, which makes it a remarkably robust tool for reasoning about software delivery processes.

While the law is often framed for stable, stationary systems, more recent work using sample-path analysis shows that Little's Law holds far more broadly - even in complex adaptive systems like real-world product development, where arrival rates and cycle times are highly variable and non-stationary.
