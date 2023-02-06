---
title: Writing Notes
sidebar_position: 2
---

# Writing notes with Jotter

Useful links and a reference to using markdown in general.

## Docusaurus
Jotter is based off ~~Facebook~~ Meta's [Docusaurus](https://docusaurus.io/) documentation framework. 

[Their documentation](https://docusaurus.io/docs/markdown-features) is a good place to start.

## Markdown (and MDX)
Use the [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/).

## Quick Reference
### Ordering Items
At the top of your markdown file (in the [front matter](https://jekyllrb.com/docs/front-matter/)), use the `sidebar_position` key to tell Docusaurus to position a page at a particular index.

```mdx title="my-example.mdx"
---
title: My Example
sidebar_position: 2
---

<!-- page contents here -->
```

### Embedded LaTeX Equations
Jotter uses the KaTeX engine which allows for the code to be rendered into HTML elements.

To embed LaTeX into a page, suround the LaTeX with `$`'s.

#### Example:

$\sin x = x - \frac{x^3}{3!}+\frac{x^5}{5!} + \dots$

```mdx title="Taylor series for sine of x"
#### Example:

$\sin x = x - \frac{x^3}{3!}+\frac{x^5}{5!} + \dots$
```