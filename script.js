
// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));
