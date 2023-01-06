---
layout: post
title: Hyrum's Law
law: "With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody."
law-author: Hyrum Wright
law-url: https://www.hyrumslaw.com/
law-year: 2012
---

Given enough use, there is no such thing as a private implementation. That is, if an interface has enough consumers, they will collectively depend on every aspect of the implementation, intentionally or not. This effect serves to constrain changes to the implementation, which must now conform to both the explicitly documented interface, as well as the implicit interface captured by usage. We often refer to this phenomenon as "bug-for-bug compatibility."
