const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const contactButton = document.getElementById("contact-button");
const contactMessage = document.getElementById("contact-message");

menuButton.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

contactButton.addEventListener("click", function () {
contactMessage.textContent =
"Thanks for reaching out! I look forward to connecting with you.";
});