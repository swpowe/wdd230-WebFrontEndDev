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


// id="forecast-current-day"

/* <div class="content">
<p>Current Temp: <span id="current-temp"></span></p>
<p>Current Condition Description: <span id="current-condition"></span></p>
<p>Humidity: <span id="current-humidity"></span></p>
<!-- Weather Alert that's closable popup? -->
<!-- Display and Label a 3 day forcast of the "day" temp from the current date -->
<div class="weather-forecast">
  <p>3 Day forecast for <span id="forecast-current-day">Monday Dec 12</span></p>
  <ul class="three-day-forecast">
    <li>
      <img src="https://via.placeholder.com/150"/>
      <p id="day1">Monday</p>
      <p id="day1-temp">98</p>
    </li>
    <li>
      <img src="https://via.placeholder.com/150"/>
      <p id="day1">Monday</p>
      <p id="day2-temp">98</p>
    </li>
    <li>
      <img src="https://via.placeholder.com/150"/>
      <p id="day1">Monday</p>
      <p id="day3-temp">98</p> */



// >>>>>>>>>>>>>>>>>>>>>>>>>.
const apiURL = "https://api.openweathermap.org/data/2.5/";
const apiKEY = "c9d68fbf2ae49e0738af3fb4229133ea";
let cityId = 5781860;
page = window.location.pathname;

// if(page.includes("fish")) {
//   cityId = 5585000;
// }else if(page.includes('preston')) {
//   cityId = 5604473;
// }else if(page.includes('soda')) {
//   cityId = 5607916;
// }

console.log(`CityId is: ${cityId}`);

let urlWeather = `${apiURL}weather?id=${cityId}&appid=${apiKEY}&units=imperial`;
let urlForecast = `${apiURL}forecast?id=${cityId}&appid=${apiKEY}&units=imperial`;

fetch(urlWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let descSplit = jsObject.weather[0].description.split(" ");
    let phrase = descSplit
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    // Summary Spans
    // document.getElementById(
    //   "current-value"
    // ).textContent = ` ${phrase} ${Math.round(jsObject.main.temp)}\xB0`;
    // document.getElementById("high-value").textContent = Math.round(
    //   jsObject.main.temp_max
    // );
    // document.getElementById("humidity-value").textContent =
    //   jsObject.main.humidity;
    // document.getElementById("wind-value").textContent = Math.round(
    //   jsObject.wind.speed
    // );
  });

// fetch(urlForecast)
//   .then((response) => response.json())
//   .then((forecastObj) => {
//     // get forcast data
//     // go through forecast.list and search for 18:00:00
//     // console.log(forecastObj);
//     const result = forecastObj.list.filter((item) => {
//       // console.log(item.dt_txt)
//       return item.dt_txt.includes("18:00:00");
//     });
//     // console.log(result);

//     // Swith out table Icons
//     for (let i = 0; i < 5; i++) {
//       const imagesrc =
//         "https://openweathermap.org/img/w/" +
//         result[i].weather[0].icon +
//         ".png"; // note the concatenation
//       const desc = result[i].weather[0].description; // note how we reference the weather array
//       document.getElementById(`forecast-table-day${i+1}-img`).textContent = imagesrc; // informational specification only
//       document
//         .getElementById(`forecast-table-day${i+1}-img`)
//         .setAttribute("src", imagesrc); // focus on the setAttribute() method
//       document
//         .getElementById(`forecast-table-day${i+1}-img`)
//         .setAttribute("alt", desc);

//       // Table Spans and img
//       document.getElementById(
//         `forecast-table-day${i+1}-temp`
//       ).textContent = `${Math.round(result[i].main.temp)}\xB0`;
//     }
//   });


// #region EVENTS EVENTS EVENTS

// fetch("js/companyData.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     // get main div ID to append everything to
//     // div for each company
//     // icon div at same level
//     let main = document.getElementById('events-main');

//     for (let i = 0; i < data.companies.length; i++) {
//         let logo = document.createElement('img');
//         let name = document.createElement('h2');
//         let bio = document.createElement('p');
//         let address = document.createElement('p');
//         let url = document.createElement('p');
//         let a = document.createElement('a');

//         logo.src = data.companies[i].logo;
//         name.innerText = data.companies[i].companyName;
//         bio.innerText = data.companies[i].bio;
//         address.innerText = data.companies[i].address;
//         a.href = data.companies[i].url;
//         a.innerText = data.companies[i].url;
//         a.target = "_blank";

//         url.appendChild(a);

//         main.appendChild(logo);
//         main.appendChild(name);
//         main.appendChild(bio);
//         main.appendChild(address);
//         main.appendChild(url);
//     }


//   });



// #endregion
