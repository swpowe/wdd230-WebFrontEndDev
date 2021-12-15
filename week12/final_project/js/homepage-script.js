let buttons = document.getElementsByClassName('accordion');

console.log(typeof(buttons));

Object.keys(buttons).forEach(button => {
   buttons[button].addEventListener("click", () => {
    buttons[button].classList.toggle("active");
    let content = buttons[button].nextElementSibling;

    if(content.style.maxHeight) {
        content.style.maxHeight = null;
    }else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
   }); 
});

function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("hide");
}

// >>>>>>>>>>>>>>>>>>>>>>>>>.

let page = window.location.pathname;
// const apiURL = "https://api.openweathermap.org/data/2.5/";
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKEY = "c9d68fbf2ae49e0738af3fb4229133ea";
let cityId = 5781860;
let lon = -111.654922
let lat = 40.11496;
// console.log(`CityId is: ${cityId}`);

// let urlWeather = `${apiURL}weather?id=${cityId}&appid=${apiKEY}&units=imperial`;
// let urlForecast = `${apiURL}forecast?id=${cityId}&appid=${apiKEY}&units=imperial`;
let urlWeather = `${apiURL}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKEY}`;

fetch(urlWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // let descSplit = jsObject.weather[0].description.split(" ");
    // let phrase = descSplit
    //   .map((word) => {
    //     return word[0].toUpperCase() + word.substring(1);
    //   })
    //   .join(" ");

    // Summary Spans
    // document.getElementById(
    //   "current-temp"
    // ).textContent = ` ${phrase} ${Math.round(jsObject.main.temp)}\xB0`;
    // document.getElementById("current-condition").textContent =
    //   jsObject.weather[0].description;
    // document.getElementById("current-humidity").textContent =
    //   jsObject.main.humidity;
    let today = new Date();
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let month = months[today.getMonth()];
    // let week = days[today.getDay()];
    let day = today.getDate();

    // let timestamp = `${week} ${month} ${day}`;

    // document.getElementById('forecast-current-day').textContent = timestamp;
    document.getElementById('current-temp').textContent = `${Math.round(jsObject.current.temp)}\xB0`;
    document.getElementById('current-condition').textContent = jsObject.current.weather[0].description;
    document.getElementById('current-humidity').textContent = jsObject.current.humidity;

    // 3 day forecast
    let imgRoot = "https://openweathermap.org/img/w/";
    document.getElementById('day1-img').src = `${imgRoot}${jsObject.daily[0].weather[0].icon}.png`;
    document.getElementById('day2-img').src = `${imgRoot}${jsObject.daily[1].weather[0].icon}.png`;
    document.getElementById('day3-img').src = `${imgRoot}${jsObject.daily[2].weather[0].icon}.png`;

    document.getElementById('day1').textContent = (days[today.getDay() + 1]).substring(0,3);
    document.getElementById('day2').textContent = (days[today.getDay() + 2]).substring(0,3);
    document.getElementById('day3').textContent = (days[today.getDay() + 3]).substring(0,3);

    document.getElementById('day1-temp').textContent = `${Math.round(jsObject.daily[0].temp.day)}\xB0`;
    document.getElementById('day2-temp').textContent = `${Math.round(jsObject.daily[1].temp.day)}\xB0`;
    document.getElementById('day3-temp').textContent = `${Math.round(jsObject.daily[3].temp.day)}\xB0`;
  });
