const visit = document.getElementById('visit');

// let previous = new Date();
let today = new Date()
let todayF = new Date(`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`);
let localPrevious = localStorage.getItem('previous');
console.log(`Local Previous is: ${localPrevious}.`)


if(localPrevious === '' || localPrevious === null) {
  console.log('previous is empty.')
  let previous = new Date();
  previous = todayF;
  // previous = new Date("09/25/2021"); // !! Testing ONLY
}else {
  previous = new Date(localPrevious);
  console.log(typeof(previous), typeof(todayF))
}

let diffTime = todayF.getTime() - previous.getTime();
let difftodayF = diffTime / (1000 * 3600 * 24);
console.log(`todayF since last visit: ${difftodayF}`)

localStorage.setItem('previousVisit', todayF);
console.log(`Local Previous set to: ${todayF}`);

visit.innerText = difftodayF