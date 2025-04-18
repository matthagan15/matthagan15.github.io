
console.log("hello from js");
const viewport = document.querySelector("h1");
viewport.textContent = "Now we really in here.";
var requestBox = document.getElementById("request_box");
var requestBoxButton = document.getElementById("request_box_button");
requestBoxButton.addEventListener('click', () => {
    console.log("click on introPar");
})