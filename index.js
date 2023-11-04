var randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./images/dice" + randomDiceNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomDiceNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (randomDiceNumber1 > randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomDiceNumber1 < randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
