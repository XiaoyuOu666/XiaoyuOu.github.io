# Xiaoyu Ou · Academic homepage

Personal academic website based on the [existing al-folio template](https://github.com/XiaoyuOu666/XiaoyuOu.github.io) and the supplied September 2026 CV.

The website includes an introduction, research profile, 12 journal articles, one conference paper, one manuscript under review, an online CV, and contact details. It supports mobile layouts, publication filtering, BibTeX, and dark mode.

See [README-ZH.md](README-ZH.md) for Chinese setup and publishing instructions.

## GitHub Pages

The configured project URL is https://xiaoyuou666.github.io/XiaoyuOu.github.io/.

Push the source to the repository's main branch and select **GitHub Actions** under **Settings → Pages**. The workflow builds the Jekyll website and deploys it using the official GitHub Pages actions. Public hosting has not been activated by the local build.

## Content

- Introduction: `_pages/about.md`
- Research: `_pages/research.md`
- Publications: `_bibliography/papers.bib`
- Online CV: `_data/cv.yml`
- Links: `_data/socials.yml`
- PDF CV: `assets/pdf/CV-Xiaoyu-Ou.pdf`
- Profile photo: `assets/img/Xiaoyu-Ou.jpg`
- Personal styles: `_sass/_personal.scss`

## Preview

On the current computer, run `preview.ps1`. With a standard Ruby installation:

```text
bundle install
bundle exec jekyll serve --baseurl ""
```

## Credits

[Jekyll](https://jekyllrb.com/) and [al-folio](https://github.com/alshedivat/al-folio). The original MIT license is retained.
