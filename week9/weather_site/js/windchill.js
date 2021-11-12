const temp = document.getElementById("high-value").innerHTML;
const wind = document.getElementById("wind-value").innerHTML;
let chill = 'N/A';

// if wind more than 3 & 50 of colder
if(wind > 3 && temp <= 50) {
    chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));
    chill =  chill + '&deg; F'
}

document.getElementById("wind-chill-value").innerHTML = chill



function windChill(form) {
wind=eval(form.wind.value);
temp=eval(form.temp.value);

chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);
form.windchill.value = chill;
}
