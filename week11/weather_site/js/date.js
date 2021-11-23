const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const week = date.toDateString();
// Thursday, 6 April 2020
document.getElementById("date").innerText = `${week}`;

console.log("Today is: " + day);

if(day === 6 || day === 5) {
    document.getElementById('banner').style.display = "block";
}