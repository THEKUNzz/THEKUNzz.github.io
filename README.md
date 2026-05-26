# THEKUNzz Academic Homepage

This repository contains a bilingual academic homepage for `THEKUNzz`, based on
the [`academic-homepage`](https://github.com/luost26/academic-homepage) Jekyll template.

## Edit Your Information

- Profile, education, experience, awards: `_data/profile.yml`
- Navigation: `_data/navigation.yml`
- Homepage display options: `_data/display.yml`
- Publications: `_publications/`
- News: `_news/`
- Blog posts: `_posts/`
- Portrait: `assets/images/photos/portrait.jpg`

## Deploy To GitHub Pages

Create a GitHub repository named `THEKUNzz.github.io`, push these files to the
`main` branch, then enable GitHub Pages in the repository settings.

After deployment, the site address will be:

```text
https://THEKUNzz.github.io
```

## Local Preview

Install Ruby and Jekyll, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open the local URL printed by Jekyll.

## Template Credit

Built with [`academic-homepage`](https://github.com/luost26/academic-homepage).
