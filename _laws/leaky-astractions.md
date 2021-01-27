---
layout: post
title: Law of Leaky Abstractions
source: https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/
---

This law points out that abstractions are imperfect:

> All non-trivial abstractions, to some degree, are leaky.

Hence, for example, SQL programmers must know a fair amount about their database server's query plans in order to understand their code's performance characteristics - the abstractions of the query language are not much help.

Taken to its logical conclusion, this law suggests that abstractions "save us time working, but they don’t save us time learning." The result is a grim conclusion, that programming is only getting more difficult as time goes on.