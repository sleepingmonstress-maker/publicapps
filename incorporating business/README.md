# Bridge Founder Launch Academy — GitHub Pages package

## Upload

1. Create a GitHub repository.
2. Prefer a **private repository** if your GitHub plan supports publishing Pages from private repositories. This reduces exposure of the source code, although the Pages website itself is still public unless you have separate enterprise access control.
3. Upload `index.html`, `.nojekyll`, and `COPYRIGHT.md` to the repository root.
4. In **Settings → Pages**, publish from the branch containing these files.
5. Open the Pages URL shown by GitHub.

## Search-engine indexing

The deployed HTML includes `robots`, `googlebot`, and `bingbot` meta directives requesting `noindex`, `nofollow`, `noarchive`, and `nosnippet`. Keep these lines in the `<head>`.

Do **not** add `Disallow: /` to `robots.txt`. Search engines need to load the page to see its `noindex` instruction. A blocked URL can sometimes still appear in search results without a snippet.

The noindex tags apply to the **deployed webpage**, not to GitHub's repository pages. If the repository is public, its files and repository page remain public and may be discovered, viewed, or forked through GitHub.

## Important privacy limitation

`noindex` is not password protection. A normal GitHub Pages site is publicly reachable by anyone who has or discovers the URL. Do not place confidential information, personal records, API keys, passwords, or identifiable child data in the published files.

## Copyright

No open-source licence is granted with this package. Keep `COPYRIGHT.md` in the repository. Do not add an MIT, Apache, GPL, Creative Commons, or other reuse licence unless you intentionally want to grant those permissions.

## Updating

Replace `index.html` with a newer version while keeping the same LocalStorage key. Browser progress should remain on the same domain and path, but users should export a JSON backup before major changes.
