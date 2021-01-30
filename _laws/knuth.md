---
layout: post
title: Knuth's optimization principle
law: Premature optimization is the root of all evil.
law-author: Donald Knuth
law-url: https://dl.acm.org/doi/10.1145/356635.356640
law-year: 1974
---

Commonly attributed to Donald Knuth, some say this principle is really a popularization of a quote by Tony Hoare. As with all principles, this one may be taken to improper extremes: neglecting optimization altogether, or choosing intentionally mal-performing approaches from the outset. At one extreme, developers can spend a lot of time writing tightly optimized loops which gain small improvements in efficiency at the expense of huge reductions in maintainability. At the other extreme, developers can choose the wrong framework, or a grossly inappropriate database for the task at hand, leading to "maintainable" software which wilts under the slightest load. In the original article, Knuth himself considers some of these trade-offs; in the main he argues against a "penny-wise, pound-foolish" attitude. Compare to Wirth's Law.