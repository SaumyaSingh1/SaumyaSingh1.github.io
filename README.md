# Saumya Singh — Brand Book (portfolio)

A plain HTML + CSS + JS site. There's no build step, no framework and nothing to install,
so it runs anywhere for free, forever.

```
index.html   ← all the content (edit text here)
style.css    ← colours, fonts, layout
script.js    ← small animations (count-up, colour picker, draggable stickers)
resume.pdf   ← ADD THIS YOURSELF (the "Download CV" buttons point to it)
```

## 1. Before publishing: fill in your links

Open `index.html` and search for **`EDIT ME`**. Replace:

| Placeholder | Replace with |
|---|---|
| `https://www.youtube.com/@YOUR-CHANNEL` | your YouTube channel URL (it appears 3 times) |
| `https://github.com/YOUR-USERNAME` | your GitHub profile, or the sunscreen project repo (2 times) |
| `resume.pdf` | drop your CV into this folder with exactly that name |

> ⚠️ This site is public, and anyone can download `resume.pdf`. Your CV includes
> your phone number, so consider uploading a copy without it. The site itself only
> shows your Gmail address and LinkedIn.

## 2. Publish on GitHub Pages (free)

1. Create a GitHub account if you don't have one.
2. Click **New repository**.
   - Name it **`YOUR-USERNAME.github.io`** (for example `saumyasingh.github.io`). Your site will then live at
     `https://YOUR-USERNAME.github.io`.
   - Set it to **Public** and click **Create repository**.
3. On the new repo page, click **"uploading an existing file"**, drag in `index.html`,
   `style.css`, `script.js` and `resume.pdf`, then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose
   **Deploy from a branch → `main` → `/ (root)`** and click **Save**.
5. Wait 1–2 minutes, then open `https://YOUR-USERNAME.github.io`. 🎉

Put that link on your CV, your LinkedIn "Featured" section and your email signature.

### To update later
Edit the file directly on GitHub (pencil icon ✏️ → Commit), or upload the changed
file again. The site refreshes within a minute.

## 3. Easy customisations

- **Brand colour:** in `style.css`, change `--accent` under `:root`.
  Visitors can also switch "flavours" with the colour dots in the hero.
- **Add a project:** copy one `<article class="sku ...">…</article>` block in
  `index.html` and change the text.
- **Add a photo:** save it as `photo.jpg` in this folder and add
  `<img src="photo.jpg" alt="Saumya Singh">` wherever you like.

Preview locally by double-clicking `index.html`.
