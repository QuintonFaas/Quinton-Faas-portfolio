      document.getElementById("current-year").textContent =
        new Date().getFullYear();

      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const navLinks = document.getElementById("nav-links");

      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });