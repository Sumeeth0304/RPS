function rps(){
var randomNumber = (Math.floor(Math.random()*9)) + 1;
var imagesource1 = "images/Paper-Rock.jpeg";
var imagesource2 = "images/Rock-Scissors.jpeg";
var imagesource3 = "images/Scissors-Paper.jpeg";
var imagesource4 = "images/Rock-Paper.jpeg";
var imagesource5 = "images/Scissors-Rock.jpeg";
var imagesource6 = "images/Paper-Scissors.jpeg";
var imagesource7 = "images/Paper-Paper.jpeg";
var imagesource8 = "images/Rock-Rock.jpeg";
var imagesource9 = "images/Scissors-Scissors.jpeg";
if(randomNumber === 1){
    document.querySelector("img").setAttribute("src", imagesource1 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Papering the Rock!"
} else
if(randomNumber === 2){
    document.querySelector("img").setAttribute("src", imagesource2 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Rocking the Scissors!"
} else
if(randomNumber === 3){
    document.querySelector("img").setAttribute("src", imagesource3 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Scissoring the Paper!"
} else
if(randomNumber === 4){
    document.querySelector("img").setAttribute("src", imagesource4 )
    document.querySelector("h1").innerHTML = "Player 2 wins by Papering the Rock!"
} else
if(randomNumber === 5){
    document.querySelector("img").setAttribute("src", imagesource5 )
    document.querySelector("h1").innerHTML = "Player 2 wins by Rocking the Scissors!"
} else
if(randomNumber === 6){
    document.querySelector("img").setAttribute("src", imagesource6 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Scissoring the Paper!"
} else
if(randomNumber === 7){
    document.querySelector("img").setAttribute("src", imagesource7 )
    document.querySelector("h1").innerHTML = "Both draw Paper...it's a draw"
} else 
if(randomNumber === 8){
    document.querySelector("img").setAttribute("src", imagesource8 )
    document.querySelector("h1").innerHTML = "Both draw Rock...it's a draw"
} else if(randomNumber === 9){
    document.querySelector("img").setAttribute("src", imagesource9 )
    document.querySelector("h1").innerHTML = "Both draw Scissors...it's a draw"
} 
}
document.getElementById("Shoot!").onclick = function () {
 rps();
};




