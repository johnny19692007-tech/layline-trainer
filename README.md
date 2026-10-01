# Layline Trainer: put it on your iPhone home screen

## 1. Host it on GitHub Pages (free)
1. Sign in at github.com (create a free account if you don't have one).
2. Tap "+" > New repository. Name it `layline-trainer`, make it Public, and create it.
3. Choose "uploading an existing file" and upload everything in this folder:
   index.html, manifest.webmanifest, sw.js, README.md, and the fonts and icons folders.
   A computer is easiest, because iPhone Safari can't upload folders well.
4. Commit the upload.
5. Go to Settings > Pages. Under "Build and deployment", pick "Deploy from a branch",
   then `main` and `/ (root)`, and save.
6. After a minute or two, the app is live at:
   https://YOUR-USERNAME.github.io/layline-trainer/

## 2. Add it to your home screen
1. Open that link in Safari on your iPhone.
2. Tap Share > Add to Home Screen > Add.
3. Launch it from the "Layline" icon. It opens full screen and works offline after the first load.

## Updating it later
Upload the new index.html, then edit sw.js and change `layline-v1` to `layline-v2` (and so on).
Close and reopen the app twice to pick up the update.

## Adding "Fifteen Men on the Dead Man's Chest" (optional)
1. Download the free 1891 score file from Project Gutenberg:
   https://www.gutenberg.org/files/19273/19273-h/music/PiraticalBallad.mid
2. Put it in the `music` folder, keeping the name `PiraticalBallad.mid`, and upload it to GitHub with everything else.
3. Reopen the app. The song joins the shuffle, and its lyrics are already in the Lyrics panel.

## Sung versions
Tap **🎤 Vocals** to play sung versions as your background music while you race: your own audio files first (add them in **Lyrics**, they work offline), and YouTube versions for songs without a file (needs signal). You can also open **Lyrics** and tap **Play with vocals** to hear a real recording through YouTube's player, right above the words. It needs signal (the built-in music still works offline). To swap in a version you like better, open "Use a different YouTube version" and paste the link.

## Notes
- Music: tap "♪ Music" to turn it on or off, and use the slider for volume. If you hear nothing, check that the ringer switch isn't on silent and the volume is up.
- Scores, settings and tutorial progress are stored on the phone. Removing the icon clears them.
- To rename it, edit `name` and `short_name` in manifest.webmanifest, and the
  `apple-mobile-web-app-title` line in index.html.
