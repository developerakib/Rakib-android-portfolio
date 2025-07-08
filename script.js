function switchLang() {
  const lang = document.getElementById("langSwitcher").value;
  document.querySelectorAll(".en").forEach(el => el.style.display = lang === "en" ? "block" : "none");
  document.querySelectorAll(".bn").forEach(el => el.style.display = lang === "bn" ? "block" : "none");
}