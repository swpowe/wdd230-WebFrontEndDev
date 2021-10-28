const visit = document.getElementById('visit')

let previous = new Date("09/25/2021");
let today = new Date("10/25/2021");

// localStorage.previous = previous;
// localStorage.today = today;

// localStorage.previous = '';

// console.log(`Today:${today.getMonth() + 1}, ${today.getDate()}, ${today.getFullYear()}`)

function difference(date1, date2) {  
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    let day = 1000*60*60*24;
    return(date2utc - date1utc)/day
  }
  
  let date1 = new Date("2021-09-25")
        let date2 = new Date("2021-10-25")
        let time_difference = difference(date1,date2)
  
  console.log(time_difference)