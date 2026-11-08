# Minyoung An’s research website

Personal academic website for Minyoung An, a sociologist and postdoctoral fellow at Stanford University.

- Live site: https://an-minyoung.github.io/
- Framework: Jekyll, based on [al-folio](https://github.com/alshedivat/al-folio)
- Hosting: GitHub Pages; the existing workflow builds `master` and publishes to `gh-pages`

## Updating content

| Content                            | Source                              |
| ---------------------------------- | ----------------------------------- |
| Home biography                     | `_pages/about.md`                   |
| Research themes and working papers | `_data/research.yml`                |
| Peer-reviewed publications         | `_data/publications.yml`            |
| Policy reports                     | `_data/policy_reports.yml`          |
| Featured Stanford talk             | `_data/featured_talk.yml`           |
| Research page structure            | `_pages/research.md`                |
| CV overview and downloadable PDF   | `_pages/CV.md`, `assets/pdf/CV.pdf` |
| Teaching                           | `_pages/teaching.md`                |
| Social profiles                    | `_data/socials.yml`                 |

Use publisher records for publication dates, page ranges, and DOI links. Keep working papers separate from published articles and update their statuses when they change. When replacing the CV, update its version query in `_pages/CV.md` and `_data/socials.yml`.

The featured video uses YouTube’s thumbnail and attribution. Clicking it loads the privacy-enhanced embedded player; the direct YouTube link also works without JavaScript.

## Build and preview

Use Ruby 3.3, Bundler, Node.js, Python with `nbconvert`, and ImageMagick (matching the existing deployment workflow):

```sh
bundle install
npm ci
JEKYLL_ENV=production bundle exec jekyll build
bundle exec jekyll serve --port 8080
```

The local preview runs at http://127.0.0.1:8080/. Check the homepage, research, CV, teaching, mobile layout, theme switch, and video before deployment. Pull requests run the existing build without publishing; pushes to `master` publish automatically.

Unused theme examples remain in the repository for reference but are explicitly excluded from the generated site. Do not remove those exclusions without reviewing the content. The template’s general setup guides are retained in `INSTALL.md`, `CUSTOMIZE.md`, and `TROUBLESHOOTING.md`.

## Credits

Built on the MIT-licensed al-folio theme and Jekyll. See `LICENSE` for the theme license. Research citations link to their publishers; the seminar video is hosted by Stanford APARC on YouTube.
