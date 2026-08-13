---
layout: post
title: Generative AI Scaling Laws
law: The performance of language models scales predictably with three quantities: the number of parameters, the amount of training data, and the amount of compute.
law-author: Jared Kaplan
law-url: https://arxiv.org/abs/2001.08361
law-year: 2020
---

The empirical regularity that this law captures made scale a reliable engineering lever for generative AI. Rather than hand-tuning architectures or hunting for cleverer algorithms, model builders could simply spend more compute and more data, with a reasonable expectation of steady gains. That expectation has largely been validated by the steady march of ever-larger models, though not without complications: a later analysis from DeepMind suggested that the original account over-weighted parameters relative to data, and argued that training data should be scaled up in tandem with model size, roughly doubling the number of training tokens for every doubling of parameters.

The catch is that the data needed to sustain this approach is a finite resource. The internet contains only so much text written by humans, and modern models have already consumed a large fraction of it. There is no "second internet" from which to draw more; the stock of high-quality public text is growing far more slowly than the appetite of successive models. One [analysis](https://arxiv.org/abs/2211.04325) projects that, on current trends, models will be trained on datasets comparable in size to the entire stock of public human-generated text before the end of this decade, at which point further progress will depend on synthetic data, better data efficiency, or other innovations.
