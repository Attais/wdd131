// Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

// Get the last modified date of the document and display it
const lastModified = document.lastModified;
document.getElementById('last-updated').textContent = lastModified;