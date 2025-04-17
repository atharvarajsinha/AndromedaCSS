/* Dark Mode Toggler*/
document.addEventListener("DOMContentLoaded", ()=> {
    function toggleDarkMode() {
        const theme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
      }
    document.querySelector(".data-theme-toggle").addEventListener("click",toggleDarkMode);
});