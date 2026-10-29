# For Bebi — romantic reconciliation website

A responsive static website built with plain HTML, CSS, and JavaScript.

## Preview locally
1. Unzip the project folder.
2. Open `index.html` in a modern browser.
3. To test music, create an `audio` folder and add an audio file named `our-song.mp3`. Use music you have permission to share. Browsers only allow playback after a user taps the music button.

## Personalize it before sharing
- **Photos:** Create an `images` folder. Add `memory-1.jpg`, `memory-2.jpg`, and `memory-3.jpg`. In `index.html`, replace each `.photo-placeholder` div with an image element, for example:
  `<img src="images/memory-1.jpg" alt="A favorite memory together">`
  Keep the existing `<figcaption>` beneath it.
- **Letter:** Edit the letter paragraphs in `index.html`. Specific, true details will feel more meaningful than generic promises.
- **Timeline:** Replace the sample headings and text with real memories. Avoid dates/details she would prefer to keep private.
- **Music:** Add `audio/our-song.mp3` if you have permission to use the track. It is optional.
- **Question buttons:** These only display a message locally. They do not send you her choice or collect any data.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com.
2. Create a new **public** repository, e.g. `for-bebi`.
3. Upload `index.html`, `style.css`, `script.js`, and any `images/` or `audio/` folders.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment settings, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then save.
7. Wait for GitHub Pages to publish. The website URL will look like `https://YOUR-USERNAME.github.io/for-bebi/`.

GitHub's labels may change slightly. See the official guide:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Alternative: Netlify Drop
You can also deploy the project by dragging the unzipped website folder into Netlify's manual deploy workflow:
https://app.netlify.com/drop
Follow the prompts to publish and get a shareable URL.

## Privacy and respect
- Only use photos that you have permission to share.
- The site does not collect or transmit responses. It has no form backend or analytics.
- Share the link once, and give her room to decide whether she wants to read or respond.
