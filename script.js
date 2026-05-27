// =========================
// BUTTON INTERACTION
// =========================

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", () => {

  alert(
    "Thank you for supporting She Can Foundation 🌸"
  );

});

// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});