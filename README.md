# Arib Khan — Data Analytics Portfolio

A responsive, recruiter-focused portfolio and in-depth NovaMart case study. Built with vanilla HTML, CSS, and JavaScript for static hosting on GitHub Pages.

## Contents

- `index.html` — editorial homepage, one featured project, experience, contact
- `project.html` — NovaMart case study with interactive segment metric comparisons and screenshot zoom
- `styles.css` — responsive styling
- `script.js` — mobile navigation, metric selection, screenshot modal
- `assets/` — optimized screenshots and model-evaluation chart sourced from the project repository
- `resume/arib_khan_analyst_resume.pdf` — contact-safe portfolio résumé (no phone number)
- `.nojekyll` — tell GitHub Pages to serve files directly

**No build process, API key, Python runtime, or payment is required for this website.** The portfolio itself is static. The live NovaMart dashboard is a *separate external Streamlit app* linked from the site.

## Preview locally

Extract all files. Open `index.html` in a browser, or run the following from the extracted folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Follow the “Read the full case study” link to `project.html`.

## Publish with GitHub Pages

1. Log in to GitHub using the account `aribmkhan`.
2. Create a **public** repository named `aribmkhan.github.io` if you want the address `https://aribmkhan.github.io/` (subject to repo-name availability), or create another repository such as `data-analytics-portfolio` (resulting address: `https://aribmkhan.github.io/data-analytics-portfolio/`).
3. Upload **the contents** of this folder (including the `assets` and `resume` folders) directly to the repository root; do not upload the outer enclosing folder as a single folder.
4. Commit the files on the `main` branch.
5. Open **Settings → Pages → Build and deployment**. Under **Source**, select **Deploy from a branch**; select `main` and `/(root)`, then save.
6. After GitHub completes publishing, check both pages and all links, including the résumé, on desktop and mobile.

The site uses relative links and works both at a GitHub Pages user-site root and under a project-site subpath.

## External links and contact

These are the contact links currently in the site:

- Email: `aribmkhan1@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/aribmkhan`
- GitHub: `https://github.com/aribmkhan`
- Project code: `https://github.com/aribmkhan/ai-customer-intelligence`
- Streamlit demo (listed in the project's README): `https://ai-customer-intelligence-yazuaftoreoqmmmmtlpukw.streamlit.app/`

The Streamlit demo may sleep or require its own credentials/cloud configuration; verify that it opens successfully before sharing the portfolio with recruiters. The portfolio does **not** bundle the Streamlit app itself.

Edit links in the two `.html` files if your URLs change.

## Research integrity

The original project data and processed results are from the user's uploaded `ai-customer-intelligence-master.zip` repository. The website does **not** upload or host any raw customer tables, credentials, or APIs. Screenshots are from the repository. Key metrics were checked against `data/processed/final_segment_profiles.csv` and the repository README.

NovaMart uses a **synthetic** dataset; site language distinguishes observed *synthetic-data* findings from business **recommendations**, which were not implemented or validated with actual customers. Three-cluster K-Means was selected for business interpretability rather than claiming it had the best silhouette score.

## Future edits

- Add new projects by introducing new HTML case-study pages and updating the homepage (currently intentionally displays **only NovaMart**).
- Edit résumé PDF in `resume/` when work history or certifications change. The included version intentionally omits your private phone number, including its metadata and contents.
- Charts on `project.html` use `metrics` in `script.js`. Update them if you re-run the model with new data.
- Visual assets can be replaced in `assets/`; use the same file names or update the references in the HTML.
