
let imageContainer = document.getElementById("imageContainer");

// Function for the button 1
document.getElementById("button1").addEventListener("click", chosenImage1);
function chosenImage1(event){
    imageContainer.src = "../images/pic1.jpg";
}

// Function for the button 2
document.getElementById("button2").addEventListener("click", chosenImage2);
function chosenImage2(event){
    imageContainer.src = "../images/pic2.jpg";
}

// Function for the button 3
document.getElementById("button3").addEventListener("click", chosenImage3);
function chosenImage3(event){
    imageContainer.src = "../images/pic3.jpg";
}

// Function for the button 4
document.getElementById("button4").addEventListener("click", chosenImage4);
function chosenImage4(event){
    imageContainer.src = "../images/pic4.jpg";
}
