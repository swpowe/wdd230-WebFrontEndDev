const data = {
  towns: [
    {
      name: "Soda Springs",
      photo:"images/town-images/sodasprings.jpg",
      motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
      yearFounded: 1858,
      currentPopulation: 2985,
      averageRainfall: 15.75,
      events: [
        "February 29: Geyser Song Day",
        "May 1-6: Days of May Celebration",
        "October 15-16: Octoberfest",
      ],
    },
    {
      name: "Springfield",
      photo:"images/town-images/springfield.jpg",
      motto: "Where everyone is lifted.",
      yearFounded: 1826,
      currentPopulation: 17852,
      averageRainfall: 17,
      events: [
        "January 8: Spring into Winter",
        "April 10-20: Celebration of Life",
        "July 31-Aug 15: Dog Days of Summer Festival",
      ],
    },
    {
      name: "Fish Haven",
      photo:"images/town-images/fishhaven.jpg",
      motto: "This is Fish Heaven.",
      yearFounded: 1864,
      currentPopulation: 501,
      averageRainfall: 14.2,
      events: [
        "April 1: How Big Was That Fish Day",
        "May 15-30: Rush the Creek Days",
        "July 24: Bear Lake Blunder Run",
        "December 12: Light the Tree",
      ],
    },
    {
      name: "Franklin",
      photo:"images/town-images/franklin.jpg",
      motto: "Where you will grow!",
      yearFounded: 1788,
      currentPopulation: 30458,
      averageRainfall: 21,
      events: [
        "March 4: March to the Drum of Donuts",
        "September 5 - 11: Founder Days",
        "December 1 - 26: Christmas in the Heart",
      ],
    },
    {
      name: "Greenville",
      photo:"images/town-images/greenville.jpg",
      motto: "Green is our way of life.",
      yearFounded: 1805,
      currentPopulation: 33458,
      averageRainfall: 25,
      events: [
        "February 10-12: Greenbration",
        "May 8 - 18: Greenville Founder Days",
        "June 20: Verde and Valiant Day",
        "November 15-16: Greensome Gathering",
      ],
    },
    {
      name: "Placerton",
      photo:"images/town-images/placerton.jpg",
      motto: "Positive Placement in Placerton.",
      yearFounded: 1946,
      currentPopulation: 512,
      averageRainfall: 39,
      events: ["July 4: A Blaze of Glory", "October 20: Fall through Fall"],
    },
    {
      name: "Preston",
      photo:"images/town-images/preston.jpg",
      motto: "Home of Napoleon Dynamite.",
      yearFounded: 1866,
      currentPopulation: 5204,
      averageRainfall: 16.65,
      events: [
        "March 29: Work Creek Revival",
        "July 8-12: Napoleon Dynamite Festival",
        "November 2-4: Freedom Days",
      ],
    },
  ],
};

const main = document.getElementById('pages');

data.towns.forEach(e => {
    let townName = document.createElement('h2');
    let townTag = document.createElement('p');
    let townImg = document.createElement('img');
    let townFounded = document.createElement('h2');
    let townPop = document.createElement('h2');
    let townRain = document.createElement('h2');

    let heading = document.createElement('div');
    let info = document.createElement('div');
    let holder = document.createElement('div');
    let bottomHalf = document.createElement('div');


    heading.classList.add('town-page-heading');
    info.classList.add('town-page-info');
    holder.classList.add('town-page-img');

    townName.innerText = e.name;
    townTag.innerText = e.motto;
    townImg.src = e.photo;
    townFounded.innerText = `Year founded: ${e.yearFounded}`;
    townPop.innerText = `Population: ${e.currentPopulation}`;
    townRain.innerText = `Annual Rain Fall: ${e.averageRainfall} "`;

    heading.appendChild(townName);
    heading.appendChild(townTag);

    holder.appendChild(townImg);

    info.appendChild(townFounded);
    info.appendChild(townPop);
    info.appendChild(townRain);

    main.appendChild(heading);
    main.appendChild(holder);
    main.appendChild(info);

});