const apiURL = "https://api.openweathermap.org/data/2.5/";
const apiKEY = "c9d68fbf2ae49e0738af3fb4229133ea";
let cityId = 5604473;
page = window.location.pathname;

if(page.includes("fish")) {
  cityId = 5585000;
}else if(page.includes('preston')) {
  cityId = 5604473;
}else if(page.includes('soda')) {
  cityId = 5607916;
}

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
    document.getElementById(
      "current-value"
    ).textContent = ` ${phrase} ${Math.round(jsObject.main.temp)}\xB0`;
    document.getElementById("high-value").textContent = Math.round(
      jsObject.main.temp_max
    );
    document.getElementById("humidity-value").textContent =
      jsObject.main.humidity;
    document.getElementById("wind-value").textContent = Math.round(
      jsObject.wind.speed
    );
  });

fetch(urlForecast)
  .then((response) => response.json())
  .then((forecastObj) => {
    // get forcast data
    // go through forecast.list and search for 18:00:00
    // console.log(forecastObj);
    const result = forecastObj.list.filter((item) => {
      // console.log(item.dt_txt)
      return item.dt_txt.includes("18:00:00");
    });
    // console.log(result);

    // Swith out table Icons
    for (let i = 0; i < 5; i++) {
      const imagesrc =
        "https://openweathermap.org/img/w/" +
        result[i].weather[0].icon +
        ".png"; // note the concatenation
      const desc = result[i].weather[0].description; // note how we reference the weather array
      document.getElementById(`forecast-table-day${i+1}-img`).textContent = imagesrc; // informational specification only
      document
        .getElementById(`forecast-table-day${i+1}-img`)
        .setAttribute("src", imagesrc); // focus on the setAttribute() method
      document
        .getElementById(`forecast-table-day${i+1}-img`)
        .setAttribute("alt", desc);

      // Table Spans and img
      document.getElementById(
        `forecast-table-day${i+1}-temp`
      ).textContent = `${Math.round(result[i].main.temp)}\xB0`;
    }
  });

//   document.getElementById("current-temp").textContent = jsObject.main.temp;
//   const imagesrc =
//     "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
//   const desc = jsObject.weather[0].description; // note how we reference the weather array
//   document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
//   document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
//   document.getElementById("icon").setAttribute("alt", desc);
