gvar myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

myHeading.onclick = function() {
    alert("does this work?!!?");
}

var myImage = document.querySelector("img");

myImage.onclick = function() {
    var currentImage = myImage.getAttribute('src');
    if(currentImage === "images/steph.jpg") {
        myImage.setAttribute ('src', 'images/dray.jpg');
    } else {
        myImage.setAttribute ('src', 'images/steph.jpg');
    }
}

function myResetFunction() {
    document.getElementById("test-form").reset();
}
