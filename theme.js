const THEME_STORAGE_KEY = "vts_theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

(function initThemeToggle() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

  if (!savedTheme) {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");
  }

  applyTheme(initialTheme);

  const themeToggleInput = document.getElementById("theme-toggle-input");
  if (!themeToggleInput) {
    return;
  }

  themeToggleInput.checked = initialTheme === "dark";

  themeToggleInput.addEventListener("change", () => {
    const nextTheme = themeToggleInput.checked ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
})();
