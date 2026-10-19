# Louie Tapayan — Student Portfolio

A responsive, single-page portfolio website built with plain HTML, CSS, and JavaScript. It uses a dark developer theme with neon blue accents.

## Files

- `index.html` — page content and sections
- `style.css` — colors, layout, responsive design, and animations
- `script.js` — mobile menu, active navigation, copy buttons, and current year
- `assets/images/profile-placeholder.svg` — temporary profile-photo placeholder
- `assets/projects/` — project screenshot images and temporary visual placeholders

## Run it on your computer

1. Extract the ZIP file.
2. Open the `louie_student_portfolio` folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.
4. Scroll through the page and test the navigation and copy buttons.

The Google Fonts import needs an internet connection; the site will still work with fallback fonts if unavailable.

## Personalize before publishing

1. Check the skills and descriptions so they accurately represent your current experience.
2. Replace each project screenshot placeholder with a real screenshot of your own work.
3. Add the actual URL to any project that is publicly available.
4. Replace `https://github.com/` in the Contact section with your own GitHub profile URL.
5. Confirm your email address is correct and that you want it visible publicly.

### Add your own photo to the Home page

1. Put a portrait photo of yourself in `assets/images/` and name it `profile.jpg` (or use `.png`).
2. Open `index.html` and find `assets/images/profile-placeholder.svg`.
3. Change that path to `assets/images/profile.jpg` (or your chosen filename).
4. Save and refresh the page. The photo will be cropped to fit the portrait frame.

The ZIP includes a graphic placeholder because your actual personal photo has not been added yet. If you upload your photo here, I can place it into the website for you.

### Add your project screenshots

Save screenshots of your actual projects in `assets/projects/`, then change the image paths in `index.html`:

- FixTrack: replace `assets/projects/fixtrack-placeholder.svg` with `assets/projects/fixtrack.jpg`
- Website practice: replace `assets/projects/website-placeholder.svg` with `assets/projects/website.jpg`
- Third project: replace `assets/projects/next-project-placeholder.svg` with `assets/projects/next-project.jpg`

Use the exact names you choose, and keep the image files in the `assets/projects/` folder. The images automatically fit the project cards. Use screenshots you own or have permission to publish. Do not upload private information, passwords, API keys, or private documents.

## Publish for free with GitHub Pages

This website uses plain HTML, CSS, and JavaScript, so GitHub Pages is a suitable hosting choice.

1. Sign in at [GitHub](https://github.com/).
2. Create a **Public** repository named `portfolio`.
3. Upload the contents of this folder (not the ZIP itself). Keep `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder at the repository root.
4. Open the repository's **Settings** tab, then select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for publishing to finish. In **Settings → Pages**, open the published site link. It normally looks like `https://YOUR-USERNAME.github.io/portfolio/`.
8. Test the public URL in an incognito/private browser window and on your phone. Check the screenshots, navigation, and links.

The public URL will use your actual GitHub username. Do not submit the repository URL or a local address such as `localhost` as the live website link.

## Update the website later

Edit your files, save them, then upload/commit the changes to the same GitHub repository. Wait for GitHub Pages to redeploy and refresh the live URL.

## Before submission

- [ ] Replace any placeholder content that you do not want to keep.
- [ ] Add real screenshots and links for completed projects.
- [ ] Test the mobile layout and all navigation links.
- [ ] Confirm the public website opens while signed out.
- [ ] Take one desktop screenshot and one mobile screenshot if your instructor requires them.
- [ ] Submit your name and section, live website URL, hosting service, repository URL, and a short note about AI tools used, according to your instructor's instructions.
