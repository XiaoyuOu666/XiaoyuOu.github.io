# Xiaoyu Ou — Academic Website

Personal academic website for Xiaoyu Ou, a PhD candidate at the University of Bristol.

[View the website](https://xiaoyuou666.github.io/XiaoyuOu.github.io/)

## Editing content

| Content | File |
| --- | --- |
| About me | `_pages/about.md` |
| Research directions and related work | `_data/research.yml` |
| Publications and selected papers | `_bibliography/papers.bib` |
| Education, research experience, teaching, service and skills | `_data/cv.yml` |
| Contact page | `_pages/contact.md` |
| CV page title and description | `_pages/cv.md` |
| Sidebar | `_includes/header.liquid` |
| Email and online profile URLs | `_data/socials.yml` |
| Main design and responsive styles | `_sass/_personal.scss` |
| Photo | `assets/img/Xiaoyu-Ou.jpg` |
| Downloadable CV | `assets/pdf/CV-Xiaoyu-Ou.pdf` |
| Site URL, metadata and footer | `_config.yml` |

The home page reads research directions, selected publications, teaching and service from the same data used by the other pages. To select a paper for the home page, set `selected = {true}` in its BibTeX entry. Use DOI links for publications.

## Local preview

The site uses Jekyll, Ruby 3.3.5 and Bundler. Install the locked dependencies:

```sh
bundle install
```

On Windows, run:

```powershell
.\preview.ps1
```

Open `http://127.0.0.1:4173/`. The preview script also detects the Ruby runtime already installed next to this workspace.

For a production build:

```sh
bundle exec jekyll build
```

Generated pages are written to `_site/`, which is ignored by Git.

## Publishing

Push changes to `main`. `.github/workflows/deploy.yml` builds the website and publishes it to GitHub Pages. The tracked `Gemfile.lock` keeps the build dependencies reproducible.

## Credits

Built from [al-folio](https://github.com/alshedivat/al-folio), with a custom dark layout. The original MIT license is retained in `LICENSE`. Icon resources retain their attribution and license headers.
