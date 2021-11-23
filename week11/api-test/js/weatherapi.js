const apiURL = "http://api.openweathermap.org/data/2.5/weather";
const apiKEY = "c9d68fbf2ae49e0738af3fb4229133ea";
const cityID = [5604473];

let url = `${apiURL}?id=${cityID[0]}&appid=${apiKEY}&units=imperial`;

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });



  `http://api.openweathermap.org/data/2.5/weather?id=${cityID[0]}&appid=${apiKEY}&units=imperial`;