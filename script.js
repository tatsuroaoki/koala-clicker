// get the element we want
// addEventListener syntax
window.onload = function() {
	document.getElementById("koala").onclick = function() {counterFunction()};
}

// declare counter variable
var clickCount = 0;

// click handler function
function counterFunction() {
	clickCount = clickCount + 1;
	document.getElementById("counter").innerHTML = clickCount;
}	