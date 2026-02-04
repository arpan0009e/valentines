document.addEventListener("DOMContentLoaded", () => {

  const emojis = ["❤️", "😘", "💕", "💋", "😍"];
  const container = document.getElementById("emojiRain");

  if (!container) {
    console.error("emojiRain container not found");
    return;
  }

  function createEmoji() {
    const emoji = document.createElement("span");
    emoji.className = "emoji-ball";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 20 + 24 + "px";
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s";

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 6000);
  }

  setInterval(createEmoji, 500);

});

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !sideMenu || !overlay) {
    console.error("Menu elements missing");
    return;
  }

  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });

  // Close menu when clicking a link
  sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("open");
      overlay.classList.remove("show");
    });
  });
});
