// Create stars
function createStars() {
  const container = document.getElementById("starsContainer");
  const numberOfStars = 150;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random size
    const sizes = ["small", "medium", "large"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(randomSize);

    // Random position
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Random animation delay
    star.style.animationDelay = Math.random() * 3 + "s";

    // Random animation duration for variation (slower)
    star.style.animationDuration = 3 + Math.random() * 4 + "s";

    container.appendChild(star);
  }
}

// Initialize stars
createStars();

// Add some sparkle effect on mouse move
document.addEventListener("mousemove", function (e) {
  if (Math.random() > 0.95) {
    // Only occasionally
    const sparkle = document.createElement("div");
    sparkle.className = "star small";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.position = "fixed";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = "twinkle 0.6s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(function () {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 600);
  }
});
