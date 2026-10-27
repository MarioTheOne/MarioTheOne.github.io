# MarioTheOne.github.io

Personal online CV of Mario Alfonso Prado Romero — served by GitHub Pages at **https://mariopradoromero.com** (custom domain, stored in the `CNAME` file that GitHub adds to the repo).

Plain static site (no build step): `index.html`, `style.css`, `script.js`.

## Editing
- **Name, title and intro** (sidebar) and **text sections** (About, Experience, Education, Skills, Service & awards): edit `index.html`.
- **Profile links**: they appear in the sidebar contact list, the phone icon row and the JSON-LD block in the `<head>` (`sameAs`); update all three.
- **Publications**: add an entry at the top of the `PUBLICATIONS` array in `script.js`. Set `type` to `journal`, `conference` or `workshop`, and add `selected: true` to show a paper under the Selected filter.
- **Projects**: edit the Projects section in `index.html`. A button with `data-pub-filter="text"` opens Publications filtered by that text.
- **CV download**: replace `cv/cv.pdf`. The Download CV button appears automatically when the file exists.
- **Photo**: replace `images/profile.jpg` (square, ~640×640).
- **Colors**: change the tokens at the top of `style.css` (`--accent`, etc.).

## Link previews
The preview image and canonical URL in `index.html` point to `https://mariopradoromero.com`. If the domain changes, update them (search for `mariopradoromero.com`) and the `CNAME` file.

## Cache note
GitHub Pages lets browsers cache files for ~10 minutes. After changing `style.css` or `script.js`, bump the `?v=` number where they're linked in `index.html` (e.g. `style.css?v=8` → `?v=9`) so visitors get the new version immediately.

## Publish
```bash
git add .
git commit -m "Online CV"
git branch -M main
git push -u origin main
```
Then in the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root**.
