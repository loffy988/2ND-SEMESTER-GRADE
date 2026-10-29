const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const responseMessage = document.getElementById("responseMessage");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Pause our song";
    } catch (error) {
      musicLabel.textContent = "Add audio/our-song.mp3";
      responseMessage.textContent = "To use music, add your own audio file at audio/our-song.mp3.";
    }
  } else {
    music.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Play our song";
  }
});

document.getElementById("talkButton").addEventListener("click", () => {
  responseMessage.textContent = "Thank you for being open to a conversation. We can take it slowly, at your pace. ♡";
});

document.getElementById("timeButton").addEventListener("click", () => {
  responseMessage.textContent = "I understand. Take the time and space you need — there's no pressure to reply. ♡";
});

const backgroundMusic = document.getElementById("backgroundMusic");

if (backgroundMusic) {
backgroundMusic.volume = 0.5;

backgroundMusic.play().catch(() => {
console.log("Autoplay blocked. Tap the page to start the music.");
});

document.addEventListener("click", function startMusic() {
if (backgroundMusic.paused) {
backgroundMusic.play().catch(() => {});
}
}, { once: true });
}