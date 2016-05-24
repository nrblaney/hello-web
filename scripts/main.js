/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
//Rotates image between condiment cabinet and Bubble Bass caught lying.
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/condCab.jpg') {
      myImage.setAttribute ('src','images/caught2.png');
    } else {
      myImage.setAttribute ('src','images/condCab.jpg');
    }
}

//Sign in function.
var myButton = document.querySelector('button');
//function for name prompt, written to localStorage.
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  alert("We serve food here, " + myName +".");
}
//Checks for name in localStorage when page loads.
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  alert("We serve food here, " + storedName +".");
}
//Event handler to make button actually do a thing.
myButton.onclick = function() {
  setUserName();
}