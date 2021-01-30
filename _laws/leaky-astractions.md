---
layout: post
title: Law of Leaky Abstractions
law: All non-trivial abstractions, to some degree, are leaky.
law-author: Joel Spolsky
law-url: https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/
law-year: 2002
---

This law points out that abstractions are imperfect. Hence, for example, SQL programmers must know a fair amount about their database server's query plans in order to understand their code's performance characteristics - the abstractions of the query language are not much help.

Taken to its logical conclusion, this law suggests that abstractions "save us time working, but they don’t save us time learning." The result is a grim conclusion, that programming is only getting more difficult as time goes on.