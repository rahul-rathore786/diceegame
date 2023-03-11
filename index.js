var randamnumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages = "dice" + randamnumber1 + ".png";
var imagesrc = "images/" + randomImages;
var imgleft = document.querySelectorAll("img")[0];

imgleft.setAttribute("src", imagesrc);

var randamnumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "dice" + randamnumber2 + ".png";
var imagesrc2 = "images/" + randomImages2;
var imgleft = document.querySelectorAll("img")[1];

imgleft.setAttribute("src", imagesrc2);

if (randamnumber1 > randamnumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if (randamnumber1 < randamnumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draws";
}

