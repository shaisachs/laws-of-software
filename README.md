# Laws of Software

A website dedicated to cataloging and exploring the rules-of-thumb which guide software development. See the [about](about.md) page for details on the author, contributions, etc.

[https://www.laws-of-software.com/](https://www.laws-of-software.com/)

To run this site locally, from the root directory run:

```
docker run -it --publish 4000:4000 --volume="$PWD:/srv/jekyll:Z" --rm jekyll/jekyll:3.8 jekyll serve \\\
```