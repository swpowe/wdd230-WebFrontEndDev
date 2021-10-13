const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const week = date.toDateString();
// Thursday, 6 April 2020
document.getElementById("date").innerText = `${week}`;

if(day === 5) {
    document.getElementById('banner').style.display = "block";
}