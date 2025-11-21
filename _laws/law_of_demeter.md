---
layout: post
title: Law of Demeter
law: Talk only to your immediate friends
law-author: Ian Holland (Northeastern University)
law-url: https://en.wikipedia.org/wiki/Law_of_Demeter
law-year: 1987
---

# Law of Demeter

**Description:**  
The Law of Demeter (LoD), also called the *Principle of Least Knowledge*, 
states that a module should only communicate with its direct collaborators. In practice: *“Don’t talk to strangers.”*

**Implications in Software Engineering:**  
- Reduces coupling and increases maintainability.  
- Encourages clear object boundaries and simpler interfaces.  
- Helps prevent deep call chains such as `obj.getA().getB().getC()`.

**Example:**  
Instead of chaining multiple method calls to access deep structures, provide higher-level methods that expose only the required behavior.
