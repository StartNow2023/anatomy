# Anatomy Notes

My website for learning human anatomy. It follows the order of a systematic anatomy textbook in 8 stages: one page per stage, each with a short quiz.
It is a plain static site (HTML + CSS + JavaScript). There is nothing to install; it is published with GitHub Pages.

Live site (once Pages is turned on): **https://startnow2023.github.io/anatomy/**

---

## 1. What's on the site

| Page | Contents |
| --- | --- |
| `index.html` · Roadmap | Cards for the 8 stages — what you'll learn and how you know you've got it — with ticks to track your progress |
| `terms.html` · Stage 0: Terms | The anatomical position, 8 pairs of directional terms (with diagrams), the three planes, a cheat sheet and a quiz |
| `bones.html` · Stage 1: Bones | A clickable skeleton that zooms in on the bone you pick (name labels on the whole-body view; once zoomed, each bone's parts are marked, and the matching words in the text point to them), how the 206 bones add up, the four shapes of bone, a "Find them on your body" checklist (every item has a **Show me** button that jumps to it on the skeleton) and a name-that-bone quiz |

Stages 2–7 (joints, muscles, internal organs, heart and vessels, sense organs, nervous system) are not built yet.

## 2. Turning on GitHub Pages (one time only)

1. Open the repository → **Settings** at the top
2. Click **Pages** in the left menu
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**, then **Save**
4. Wait 1–3 minutes and the address appears at the top of the page: **https://startnow2023.github.io/anatomy/**

> The repository has to be public to use Pages for free.

## 3. Where to edit the content

| What you want to change | Where it lives |
| --- | --- |
| The 8 stages on the roadmap | `STAGES` at the top of `js/roadmap.js` |
| Directional term explanations | `TERMS` at the top of `js/terms.js` |
| Terms quiz questions | `QUESTIONS` at the top of `js/terms.js` |
| The description of each bone | `BONES` at the top of `js/bones.js` |
| The parts marked on a zoomed bone (position, label, and which words in the text they match) | `MARKS` in `js/bones.js` |
| The "Find them on your body" checklist and where each **Show me** points | `LANDMARKS` in `js/bones.js` |
| Name labels on the whole-body skeleton | `ATLAS_L` and `ATLAS_R` in `js/bones.js` |
| Colours and fonts | `:root` at the top of `css/style.css` |

## 4. Adding a new stage (for example Stage 2: Joints)

1. Copy `bones.html` to a new page such as `joints.html` and replace the title and content
2. In `STAGES` in `js/roadmap.js`, add `href: "joints.html"` to the Joints entry — a **Start** button appears on the roadmap
3. Add `<a href="joints.html">2 · Joints</a>` to the navigation at the top of every page

## 5. Copyright and good practice

- The skeleton and body diagrams are simplified drawings made in code for this site; the text is my own study notes and the quiz questions are written from scratch.
- Adding pictures: only use your own drawings, or openly licensed images (OpenStax, Wikimedia Commons, etc.) with the source credited under the image. **Don't** copy pictures from textbooks, atlases, apps or other websites.
- Adding questions: write your own. **Don't** copy end-of-chapter questions, question-bank apps or real exam papers.
- Every page ends with a note: "For learning only — not medical advice."
- Ticks are saved only in each visitor's own browser; the site does not collect any personal information.

## 6. Previewing on your own computer (optional)

Just double-click `index.html` to open it. Or run this in the folder:

```
python3 -m http.server
```

and open http://localhost:8000 in your browser.
