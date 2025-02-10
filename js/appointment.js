// You can add JavaScript interactions here
// script.js
document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});
