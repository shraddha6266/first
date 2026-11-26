
// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("open");

  menuToggle.textContent =
    navLinks.classList.contains("open") ? "✕" : "☰";
});

// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Magic Button

const magicButton = document.getElementById("magicButton");
const message = document.getElementById("message");

magicButton.addEventListener("click", function() {
  message.textContent =
    "✨ You can create amazing things. Keep learning!";
});

// Scroll Animation

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".card, .project, .about").forEach(function(item) {
  observer.observe(item);
});
