const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const startScreen = document.getElementById("start-screen");

let tocando = false;

// Clique para entrar no site
startScreen.addEventListener("click", () => {
  music.muted = false;
  music.volume = 0.5;

  music.play()
    .then(() => {
      tocando = true;
    })
    .catch(err => {
      console.log("Erro ao tocar música:", err);
    });

  startScreen.style.opacity = "0";
  startScreen.style.pointerEvents = "none";

  setTimeout(() => {
    startScreen.style.display = "none";
  }, 600);
});

// Botão 🎵 (pausar / tocar)
btn.addEventListener("click", () => {
  if (tocando) {
    music.pause();
    tocando = false;
  } else {
    music.play();
    tocando = true;
  }
});
