var num1 = Math.floor(Math.random() * 6) +1;
var dice_source = "images/" + "dice" + num1+ ".png";

var img1 = document.getElementsByTagName("img")[0];

img1.setAttribute("src", dice_source)



var num2 = Math.floor(Math.random() * 6) +1;
var dice_source = "images/" + "dice" + num2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", dice_source)


if(num1 > num2) {
  document.querySelector("h1").innerHTML = "Player 1 wins"
} else  if (num2 > num1){   document.querySelector("h1").innerHTML = "Player 2 wins"


}

else {
  document.getElementsByTagName("h1")[0].innerHTML = "all even, all square 🤝🏼"
}
