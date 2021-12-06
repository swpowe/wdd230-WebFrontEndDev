console.log('loaded');

// import data from "./test.json" assert { type: "json" }; //!!ES6 option
// data = JSON.parse(test);
// console.log(JSON.stringify(data.name))

fetch("js/test.json").then(res => res.json()).then(data => console.log(data)); //!!Fetch Option




