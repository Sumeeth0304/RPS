function rps(){
var randomNumber = (Math.floor(Math.random()*9)) + 1;
var imageSource1 = "Images/Paper-Rock.jpeg";
var imageSource2 = "Images/Rock-Scissors.jpeg";
var imageSource3 = "Images/Scissors-Paper.jpeg";
var imageSource4 = "Images/Rock-Paper.jpeg";
var imageSource5 = "Images/Scissors-Rock.jpeg";
var imageSource6 = "Images/Paper-Scissors.jpeg";
var imageSource7 = "Images/Paper-Paper.jpeg";
var imageSource8 = "Images/Rock-Rock.jpeg";
var imageSource9 = "Images/Scissors-Scissors.jpeg";
if(randomNumber === 1){
    document.querySelector("img").setAttribute("src", imageSource1 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Papering the Rock!"
} else
if(randomNumber === 2){
    document.querySelector("img").setAttribute("src", imageSource2 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Rocking the Scissors!"
} else
if(randomNumber === 3){
    document.querySelector("img").setAttribute("src", imageSource3 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Scissoring the Paper!"
} else
if(randomNumber === 4){
    document.querySelector("img").setAttribute("src", imageSource4 )
    document.querySelector("h1").innerHTML = "Player 2 wins by Papering the Rock!"
} else
if(randomNumber === 5){
    document.querySelector("img").setAttribute("src", imageSource5 )
    document.querySelector("h1").innerHTML = "Player 2 wins by Rocking the Scissors!"
} else
if(randomNumber === 6){
    document.querySelector("img").setAttribute("src", imageSource6 )
    document.querySelector("h1").innerHTML = "Player 1 wins by Scissoring the Paper!"
} else
if(randomNumber === 7){
    document.querySelector("img").setAttribute("src", imageSource7 )
    document.querySelector("h1").innerHTML = "Both draw Paper...it's a draw"
} else 
if(randomNumber === 8){
    document.querySelector("img").setAttribute("src", imageSource8 )
    document.querySelector("h1").innerHTML = "Both draw Rock...it's a draw"
} else if(randomNumber === 9){
    document.querySelector("img").setAttribute("src", imageSource9 )
    document.querySelector("h1").innerHTML = "Both draw Scissors...it's a draw"
} 
}
document.getElementById("Shoot!").onclick = function () {
 rps();
};




