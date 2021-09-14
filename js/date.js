// dynamic copyright year
const year = new Date().getFullYear();
document.querySelector("span").textContent = year;

// dynamic last updated date
document.getElementById("update-date").textContent = document.lastModified;

