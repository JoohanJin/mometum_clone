// querySelector to find the HTML elements with css tag in js
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("h1");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// global class name to reduce the possibility of error
// and improve simplicity
const HIIDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

// make the function for event listener, form submit in this case
function onLoginFormSubmitted(event){
    // prevent `the` default behavior of the browser
    event.preventDefault();
    console.log(event);
    // get the user input when the form submitted
    const userName = loginInput.value;
    // can save the varaible on the local storage of the browser
    localStorage.setItem(USERNAME_KEY, userName);
    //change the className of the form
    loginForm.classList.add(HIIDEN_CLASSNAME);
    console.log(userName);
    paintGreeting(userName);
}

// add eventListener on the form
function paintGreeting(username) {
    greeting.innerText=`Hello, ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    // show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginFormSubmitted);
}
else {
    // show the greeting
    // we can get the elements info from local storage of the browser
    paintGreeting(savedUsername);
}