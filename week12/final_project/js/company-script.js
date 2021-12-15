console.log("Company Script Loaded.");

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

    let main = document.getElementById('city-directory-main');

    for (let i = 0; i < numToDisplay; i++) {
        let container = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let bio = document.createElement('p');
        let address = document.createElement('p');
        let url = document.createElement('p');
        let a = document.createElement('a');

        container.classList.add('business-container');

        logo.src = data.companies[i].logo;
        logo.alt = ' company logo'
        name.innerText = data.companies[i].companyName;
        bio.innerText = data.companies[i].bio;
        address.innerText = data.companies[i].address;
        a.href = data.companies[i].url;
        a.innerText = data.companies[i].url;
        a.target = "_blank";

        url.appendChild(a);

        container.appendChild(logo);
        container.appendChild(name);
        container.appendChild(bio);
        container.appendChild(address);
        container.appendChild(url);

        main.appendChild(container);
    }
  });
