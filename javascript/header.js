      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      const themeToggle = document.getElementById("theme-toggle");
      const themeIcon = themeToggle.querySelector("i");

      const updateThemeToggle = (darkModeEnabled) => {
        themeToggle.setAttribute("aria-pressed", darkModeEnabled);
        themeToggle.setAttribute(
          "aria-label",
          darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
        );
        themeIcon.className = darkModeEnabled
          ? "fas fa-sun"
          : "fas fa-moon";
      };

      const savedTheme = localStorage.getItem("portfolio-theme");
      const initialDarkMode = savedTheme === "dark";
      document.body.classList.toggle("dark-mode", initialDarkMode);
      updateThemeToggle(initialDarkMode);

      themeToggle.addEventListener("click", () => {
        const darkModeEnabled = document.body.classList.toggle("dark-mode");
        localStorage.setItem(
          "portfolio-theme",
          darkModeEnabled ? "dark" : "light"
        );
        updateThemeToggle(darkModeEnabled);
      });

