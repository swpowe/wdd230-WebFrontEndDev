console.log("Events Script Loaded.");

fetch("js/eventData.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // Get the current page
    let page = window.location.pathname;
    // Load events onto page
    let main = document.getElementById('city-events');
    let numToDisplay = 3;

    if (!page.includes('index')) {
      numToDisplay = data.events.length;
    }

    for (let i = 0; i < numToDisplay; i++) {

        let container = document.createElement('div');
        let dateContainer = document.createElement('div');
        let infoContainer = document.createElement('div');
        let event = document.createElement('h2');
        let description = document.createElement('p');
        let date = document.createElement('p');

        container.classList.add('event-container');
        dateContainer.classList.add('date-container');
        infoContainer.classList.add('event-info-container');

        event.innerText = data.events[i].event;
        description.innerText = data.events[i].description;
        date.innerText = data.events[i].date;

        dateContainer.appendChild(date);
        infoContainer.appendChild(event);
        infoContainer.appendChild(description);

        container.appendChild(dateContainer);
        container.appendChild(infoContainer);
    
        main.appendChild(container);
    }
  });
