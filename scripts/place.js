// Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date of the document and display it
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navigation").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// 13.12+0.6215*T11.37*v^{0.16}+0.3965*T*v^{0.16}
// 35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16)

const calculateWindChill = () => {  document.getElementById('calculateWindChill').textContent =
    (13.12 + 0.6215 * 16 - 11.37 * 15 ** .16 + 0.3965 * 16 * 15 ** .16)
}

calculateWindChill()