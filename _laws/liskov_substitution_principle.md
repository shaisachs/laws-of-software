---
layout: post
title: Liskov Substitution Principle (LSP)
law: Objects of a superclass should be replaceable with objects of a subclass without altering program correctness.
law-author: Barbara Liskov
law-url: https://en.wikipedia.org/wiki/Liskov_substitution_principle
law-year: 1987
---

# Liskov Substitution Principle (LSP)

**Description:**  
The Liskov Substitution Principle, introduced by Barbara Liskov in 1987, is a key component of object-oriented design. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. This ensures that inheritance strengthens a system's robustness rather than undermines it.

**Implications in Software Engineering:**  
- Promotes the design of classes that adhere to consistent behavior across hierarchies.
- Enhances system scalability by ensuring that extending classes do not break established functionality.
- Encourages adherence to interface contracts, ensuring predictable behavior.

**Example:**  
A classic violation of LSP occurs when a subclass overrides methods of a superclass in a way that alters expected behavior. For instance, if `Rectangle` has methods to set width and height independently, a subclass `Square` that forces width and height to be the same would violate LSP.

**Reference:**  
[Liskov Substitution Principle on Wikipedia](https://en.wikipedia.org/wiki/Liskov_substitution_principle)

- [Making the liskov substitution principle happy and sad](https://dl.acm.org/doi/10.1145/3183377.3183392)
- [Evolving an integrated curriculum for object-oriented analysis and design](https://dl.acm.org/doi/10.1145/1352135.1352252)
