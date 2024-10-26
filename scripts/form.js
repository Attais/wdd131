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


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function submission() { 
    // event.preventDefault();
    const reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0; 
    reviewCount += 1

    localStorage.setItem("reviewCount", reviewCount);
    console.log(reviewCount);
    return true;
}



products.map(product => {
    const optionElement = document.createElement("option");
    optionElement.value = product.id;
    optionElement.textContent = product.name;
    console.log(document.getElementById("selection"), optionElement);
    document.getElementById("selection").appendChild(optionElement);
})


console.log(reviewCount);

