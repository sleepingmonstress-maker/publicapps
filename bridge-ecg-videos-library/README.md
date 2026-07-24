# Bridge ECG WorkLives Atlas

A mobile-first, static career-exploration website designed for GitHub Pages.

## What is included

- 84 career dossiers across 14 work sectors
- five fresh YouTube searches for every career: day-in-the-life, entry route, practitioner voices, reality check, and student/course experience
- Singapore pathway atlas: Secondary foundations, ITE, Polytechnic, JC/MI, Work-Study, University, portfolio routes and career conversion
- Bridge ECG lens: Fit, Formation, Doors, Risks, Evidence, World Need, Agency
- career comparison tool
- twelve ECG guidance-practice scenarios
- saved learning queue, notes, import/export, reset and optional local device PIN
- PWA manifest and offline shell
- search-engine noindex directives on every HTML page

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select your main branch and the **/(root)** folder, then save.
7. Open the URL GitHub gives you.

All paths are relative, so the site works as a GitHub project page such as:
`https://yourname.github.io/bridge-ecg-worklives-atlas/`

## Search-engine privacy

The site includes:

```html
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noimageindex">
<meta name="googlebot" content="noindex,nofollow,noarchive,nosnippet,noimageindex">
<meta name="bingbot" content="noindex,nofollow,noarchive,nosnippet,noimageindex">
```

The `404.html` page contains the same directives. No sitemap is included.

`robots.txt` intentionally does **not** block crawling. Google must be able to fetch the page to see the `noindex` instruction. Blocking the whole site in `robots.txt` can prevent the crawler from seeing `noindex` and may leave a URL visible if another page links to it.

### Important limitation

A normal GitHub Pages site is publicly reachable by anyone who has the URL. `noindex` asks compliant search engines not to list it; it is not authentication. The optional device PIN is only a local, casual screen lock. Do not place confidential personal data or copyrighted private materials in a public Pages build.

Truly private GitHub Pages access is an Enterprise Cloud feature. For real password protection on an ordinary plan, use a host with access control or place authentication in front of the site.

## Updating the career library

Edit `data.js`. Each career entry contains:

- title and sector
- route and work setting
- people, quantitative and physical demands
- core contribution
- typical work
- pathway map
- reality check
- fit experiment
- future / AI shift
- five targeted video-search queries

Because career-specific videos age quickly, the site opens fresh YouTube results rather than hard-coding 420 video embeds. The featured home videos are directly embedded and can be changed in `featuredVideos` inside `data.js`.

## Local data

Saved careers, comparisons, notes and device PIN are stored in browser `localStorage`. Use **Founder Notebook → Export** to back up the data. The app reset button clears the local database.

## Version

Built 24 July 2026.
