let buttons = document.getElementsByClassName("accordion");

console.log(typeof buttons);

Object.keys(buttons).forEach((button) => {
  buttons[button].addEventListener("click", () => {
    buttons[button].classList.toggle("active");
    let content = buttons[button].nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>.

let page = window.location.pathname;
// const apiURL = "https://api.openweathermap.org/data/2.5/";
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?";
const apiKEY = "c9d68fbf2ae49e0738af3fb4229133ea";
let cityId = 5781860;
let lon = -111.654922;
let lat = 40.11496;
// console.log(`CityId is: ${cityId}`);

// let urlWeather = `${apiURL}weather?id=${cityId}&appid=${apiKEY}&units=imperial`;
// let urlForecast = `${apiURL}forecast?id=${cityId}&appid=${apiKEY}&units=imperial`;
let urlWeather = `${apiURL}lat=${lat}&lon=${lon}&units=imperial&appid=${apiKEY}`;

fetch(urlWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let today = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = today.getDate();

    // document.getElementById('forecast-current-day').textContent = timestamp;
    document.getElementById("current-temp").textContent = `${Math.round(
      jsObject.current.temp
    )}\xB0`;
    document.getElementById("current-condition").textContent =
      jsObject.current.weather[0].description;
    document.getElementById("current-humidity").textContent =
      jsObject.current.humidity;

    // 3 day forecast
    let imgRoot = "https://openweathermap.org/img/w/";
    document.getElementById(
      "day1-img"
    ).src = `${imgRoot}${jsObject.daily[0].weather[0].icon}.png`;
    document.getElementById(
      "day2-img"
    ).src = `${imgRoot}${jsObject.daily[1].weather[0].icon}.png`;
    document.getElementById(
      "day3-img"
    ).src = `${imgRoot}${jsObject.daily[2].weather[0].icon}.png`;

    document.getElementById("day1").textContent = days[
      today.getDay() + 1
    ].substring(0, 3);
    document.getElementById("day2").textContent = days[
      today.getDay() + 2
    ].substring(0, 3);
    document.getElementById("day3").textContent = days[
      today.getDay() + 3
    ].substring(0, 3);

    document.getElementById("day1-temp").textContent = `${Math.round(
      jsObject.daily[0].temp.day
    )}\xB0`;
    document.getElementById("day2-temp").textContent = `${Math.round(
      jsObject.daily[1].temp.day
    )}\xB0`;
    document.getElementById("day3-temp").textContent = `${Math.round(
      jsObject.daily[3].temp.day
    )}\xB0`;

    if (jsObject.alerts != null) {
      alert(jsObject.alerts.description);
    }
  });


function expandContent(list) {
  if(list.matches) {
    // document.body.style.backgroundColor = "purple";
    // Object.keys(buttons).forEach((button) => {
    //   button.click()
    // })
    // for (let i = 0; i < buttons.length; i++) {
    //   buttons[i].click();
      
    // }
  }
}

expandContent(mediaQueryList);
mediaQueryList.addEventListener('change', expandContent);
