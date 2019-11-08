var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var pathImage1 = "images/dice" + randomNumber1 + ".png";
var pathImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", pathImage1);
image2.setAttribute("src", pathImage2);


var leftWins = "Player 1 wins!!";
var rightWins = "Player 2 wins!!";

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = leftWins;
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = rightWins;
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw! \nLets play again!!";
}
