console.log("Company Script Loaded.");

// import data from "./test.json" assert { type: "json" }; //!!ES6 option
// data = JSON.parse(test);
// console.log(JSON.stringify(data.name))

fetch("js/companyData.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // Get the current page
    let page = window.location.pathname;

    let numToDisplay = 3;

    if (!page.includes('index')) {
      numToDisplay = data.companies.length;
    }

    // get main div ID to append everything to
    // div for each company
    // icon div at same level
    let main = document.getElementById('city-directory-main');

    for (let i = 0; i < numToDisplay; i++) {
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let bio = document.createElement('p');
        let address = document.createElement('p');
        let url = document.createElement('p');
        let a = document.createElement('a');

        logo.src = data.companies[i].logo;
        name.innerText = data.companies[i].companyName;
        bio.innerText = data.companies[i].bio;
        address.innerText = data.companies[i].address;
        a.href = data.companies[i].url;
        a.innerText = data.companies[i].url;
        a.target = "_blank";

        url.appendChild(a);

        main.appendChild(logo);
        main.appendChild(name);
        main.appendChild(bio);
        main.appendChild(address);
        main.appendChild(url);
    }


  }); //!!Fetch Option



//   {
//     "companyName": "Kneaders",
//     "bio": "Made fresh.",
//     "address": "531 E 1000 N",
//     "url": "https://kneaders.com",
//     "icon": ""
//   },
