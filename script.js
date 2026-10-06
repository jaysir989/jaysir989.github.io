document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio-player');
  const playBtn = document.getElementById('play-btn');
  const songTitleDisplay = document.getElementById('song-title');
  const trackItems = document.querySelectorAll('.track-item');

  // 1. Handle playlist track clicks
  trackItems.forEach(track => {
    track.addEventListener('click', () => {
      const songSrc = track.getAttribute('data-src');
      const songName = track.textContent;

      // Set audio source and play
      audio.src = songSrc;
      songTitleDisplay.textContent = songName;

      audio.play().catch(error => {
        console.error("Browser prevented auto-play:", error);
      });
    });
  });

  // 2. Play / Pause button toggle
  playBtn.addEventListener('click', () => {
    if (!audio.src) {
      alert("Please select a song first!");
      return;
    }

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
