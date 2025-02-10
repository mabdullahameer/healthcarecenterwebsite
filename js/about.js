// JavaScript functionality for the website

// Toggle the navigation menu on smaller screens
document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});
