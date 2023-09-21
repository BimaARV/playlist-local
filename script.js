const audioPlayer = document.getElementById("audio-player");
const playlistItems = document.querySelectorAll(".playlist li");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const nextButton = document.getElementById("next-button");

let currentTrack = 0;

// Memainkan lagu saat item playlist diklik
playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentTrack = index;
    playTrack(currentTrack);
  });
});

function playTrack(trackIndex) {
  const trackSrc = playlistItems[trackIndex].getAttribute("data-src");
  audioPlayer.src = trackSrc;
  audioPlayer.play();
}

playButton.addEventListener("click", () => {
  audioPlayer.play();
});

pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
});

nextButton.addEventListener("click", () => {
  playNextTrack();
});

// Event handler untuk lagu selesai
audioPlayer.addEventListener("ended", () => {
  playNextTrack();
});

function playNextTrack() {
  currentTrack = (currentTrack + 1) % playlistItems.length;
  playTrack(currentTrack);
}
