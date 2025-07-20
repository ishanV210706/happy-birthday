// Celebrate button
document.getElementById("celebrateBtn").addEventListener("click", () => {
  const song = document.getElementById("birthdaySong");
  song.currentTime = 0;
  song.play();
  launchFireworks();
});

// Fireworks and Confetti
function launchFireworks() {
  const duration = 4000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 10,
      angle: 60 + Math.random() * 60,
      spread: 70,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      },
      colors: ["#ff0", "#0ff", "#f0f", "#f55", "#55f", "#5f5"]
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Balloon Generator
function createBalloons() {
  const container = document.getElementById("balloonContainer");
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 6 + Math.random() * 4 + "s";
    balloon.style.backgroundColor = getRandomColor();
    container.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ["#FF4081", "#3F51B5", "#FFEB3B", "#4CAF50", "#9C27B0", "#00BCD4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

createBalloons();
