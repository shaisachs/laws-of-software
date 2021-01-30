---
layout: post
title: Kerchkhoff's principle
law: In cryptography, a system should be secure even if everything about the system, except for a small piece of information - the key - is public knowledge.
law-author: Auguste Kerckhoffs
law-url: https://www.arcsi.fr/doc/cryptomilitaire.pdf
law-year: 1883
---

This principle predates modern software development by several decades, but establishes an important principle that extends beyond the domain of cryptography. It establishes a bright line between the code in a system, which is public knowledge, and the data in the system, which is private. By doing so, it discourages the common but ultimately insecure practice of "security by obscurity". This principle has found particular popularity in the open source community, which is built on the principle of publicizing source code but not the data it uses.