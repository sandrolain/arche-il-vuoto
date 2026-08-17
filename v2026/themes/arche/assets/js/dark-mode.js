document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById("theme-toggle");
  var body = document.body;
  var saved = localStorage.getItem("theme") || "system";

  function applyTheme(mode) {
    body.classList.remove("dark-mode", "light-mode");
    if (mode === "dark") {
      body.classList.add("dark-mode");
    } else if (mode === "light") {
      body.classList.add("light-mode");
    }
    // "system" → neither class, uses prefers-color-scheme
    updateToggleIcon(mode);
    localStorage.setItem("theme", mode);
  }

  function updateToggleIcon(mode) {
    if (!toggle) return;
    var sys = toggle.querySelector(".theme-toggle-system");
    var light = toggle.querySelector(".theme-toggle-light");
    var dark = toggle.querySelector(".theme-toggle-dark");
    if (sys) sys.style.display = "none";
    if (light) light.style.display = "none";
    if (dark) dark.style.display = "none";
    if (mode === "system" && sys) sys.style.display = "inline";
    else if (mode === "light" && light) light.style.display = "inline";
    else if (mode === "dark" && dark) dark.style.display = "inline";
  }

  applyTheme(saved);

  if (toggle) {
    toggle.addEventListener("click", function() {
      var current = localStorage.getItem("theme") || "system";
      var next;
      if (current === "system") next = "light";
      else if (current === "light") next = "dark";
      else next = "system";
      applyTheme(next);
    });
  }
});
