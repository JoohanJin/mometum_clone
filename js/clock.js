// get the clock on the document
const clock = document.querySelector("h2#clock");

// set interval function -> for timer
// setInterval(() => {
//     console.log("hello");''
// }, 500);

function getTimeData(){
    const date = new Date();
    // const Hour = ("00" + date.getHours().toString()).slice(-2);
    const hours = date.getHours().toString().padStart(2,"0");
    // const Minute = ("00" + date.getMinutes().toString()).slice(-2);
    const minutes = date.getMinutes().toString().padStart(2,"0");
    // const Second = ("00" + (date.getSeconds().toString())).slice(-2);
    const seconds = date.getSeconds().toString().padStart(2,"0");

    clock.innerText = `${hours}:${minutes}`;
}

// loop every 0.5s
getTimeData();
setInterval(getTimeData, 1000);

// wait for 3 seconds and execute the code
// setTimeout(sayHello, 3000);