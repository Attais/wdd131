// Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date of the document and display it
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".menu-overlay");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});