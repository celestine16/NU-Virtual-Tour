document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.getElementById("menu-toggle");
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const floorLinks = document.querySelectorAll(".floor-link");
    const kuulaFrame = document.getElementById("kuula-frame"); // Get iframe directly

    // Hide landing screen on click
    document.getElementById("landing-screen").addEventListener("click", function () {
        this.style.display = "none";
    });

    // Toggle navigation panel
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Expand/collapse building floors
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const floorList = this.parentElement.nextElementSibling;
            const isVisible = floorList.style.display === "block";

            // Toggle floor visibility
            floorList.style.display = isVisible ? "none" : "block";

            // Change arrow direction
            this.textContent = isVisible ? "▼" : "▲";
        });
    });

    // Change Kuula iframe source when a floor is clicked
    floorLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior
            const newKuulaLink = this.getAttribute("data-link");

            if (newKuulaLink && kuulaFrame) {
                kuulaFrame.src = newKuulaLink; // Update iframe src without replacing it
            }
        });
    });
});