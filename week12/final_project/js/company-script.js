console.log("Company Script Loaded.");

fetch("js/companyData.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // Get the current page
    let page = window.location.pathname;

    let numToDisplay = 3;

    if (page.includes('directory')) {
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
        logo.classList.add('business-container-item');
        bio.classList.add('business-container-item');
        address.classList.add('business-container-item');
        url.classList.add('business-container-item');
        a.classList.add('business-container-item');

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

  function grid() {
    let main = document.getElementsByClassName('city-directory-list');
    main[0].classList.add('city-directory-main');
    main[0].classList.remove('city-directory-list');
  }

  function list() {
    let main = document.getElementsByClassName('city-directory-main');
    main[0].classList.add('city-directory-list');
    main[0].classList.remove('city-directory-main');
    let items = document.getElementsByClassName('business-container');
    for (let i = 0; i < items.length; i++) {
      items[i].style.margin = "0 5px";
    }
    let parents = document.getElementsByClassName('business-container');
    for (let i = 0; i < parents.length; i++) {
      parents[i].style.maxWidth = '135px';
      parents[i].style.textAlign = 'center';
      let img = parents[i].querySelector('img');
      img.style.maxWidth = "10vw";
      
    }
  }
