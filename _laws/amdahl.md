---
layout: post
title: Amdahl's Law
law: The speedup of a program using multiple processors is limited by the sequential portion of the program.
law-author: Gene Amdahl
law-url: https://en.wikipedia.org/wiki/Amdahl%27s_law
law-year: 1967
---

# Amdahl's Law

**Description:**  
Amdahl's Law, introduced by Gene Amdahl in 1967, explains the limitations of parallel processing. It states that the potential speedup of a program by parallelization is constrained by the portion of the program that must be executed sequentially. Even with infinite processors, the speedup is capped by the time spent on the sequential part.

**Implications in Software Engineering:**  
- Encourages careful analysis of which parts of a program can be parallelized.
- Highlights diminishing returns when adding more processors beyond a certain point.
- Useful in optimizing multi-threaded applications and understanding scalability limits.

**Example:**  
If 90% of a program can be parallelized and 10% must remain sequential, the maximum theoretical speedup, regardless of the number of processors, is 10x.

**Reference:**  
[Amdahl's Law on Wikipedia](https://en.wikipedia.org/wiki/Amdahl%27s_law)

- [Modeling critical sections in Amdahl's law and its implications for multicore design](https://dl.acm.org/doi/10.1145/1815961.1816011)