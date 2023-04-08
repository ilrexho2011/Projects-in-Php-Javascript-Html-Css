var reset = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var heading = document.querySelector("#rgbHeading");
var hexHeading = document.querySelector("#hexHeading");
var userMessage = document.querySelector("#userMessage")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var headerCol = document.querySelector("body");
var numSq = 6;
var colors = generateRandomColors(numSq);
var randColor = randomPicker();
var clickedCol;
heading.textContent = randColor;
hexHeading.textContent = hexedRGB();

// Inicializimi i pjeses llogjike te lojes
gameLogic();

reset.addEventListener("click", function(){
  colors = generateRandomColors(numSq);
  init();
  reset.innerHTML = "<i class=\""+ "fa fa-refresh fa-2x\""+"aria-hidden="+"true>";
  gameLogic();
  resetAttr();
});

easy.addEventListener("click", function(){
  easy.classList.add("active");
  hard.classList.remove("active");
  numSq = 3
  colors = generateRandomColors(numSq);
  init();
  resetAttr();
  for(var i = 0; i < squares.length ; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].classList.add("hide");
    }
  }
  gameLogic();
});

hard.addEventListener("click", function(){
  hard.classList.add("active");
  easy.classList.remove("active");
  numSq = 6;
  colors = generateRandomColors(numSq);
  init();
  gameLogic();
  resetAttr();
  for(var i = 0; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.remove("hide");
    }
});

function init(){
  randColor = randomPicker();
  heading.textContent = randColor;
  hexHeading.textContent = hexedRGB();
  userMessage.textContent = "GJENI NGJYREN";
}
// Funksioni i risetimit te ngjyres se sfondit te kutizave
function resetAttr() {
  heading.setAttribute("style", "background-color: transparent");
  hexHeading.setAttribute("style", "background-color: transparent");
  userMessage.setAttribute("style", "background-color: transparent");
}
// Funksioni qe ekzekuton pjesen llogjike te lojes
function gameLogic(){
  for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    clickedCol = this.style.backgroundColor;
    if(clickedCol === randColor){
      userMessage.textContent = "Sakte!";
      updateColors(clickedCol);
      reset.textContent = "Do Luani serish?";
    }
    else {
      this.style.backgroundColor = "#2c3e50";
      this.setAttribute("style", "border: 3px solid #81cfe0");
      userMessage.textContent = "Provoni serish";
    }
  });
}

}
//Function to update boxes and heading colors
function updateColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  heading.setAttribute("style", "background-color: " +color+"");
  hexHeading.setAttribute("style", "background-color: " +color+"");
  userMessage.setAttribute("style", "background-color: " +color+"");
}
//Function to pick a random index from an array
function randomPicker(){
  randomGeneratedColor = colors[Math.floor(Math.random() * colors.length)];
  return randomGeneratedColor;
}
//Function to generate the random colors array
function generateRandomColors(num){
  array = [];
  for(var i = 0 ; i < num ; i++){
    array.push(randomRGB());
  }
  return array;
}
//Function to generate the rgb(x, x, x) string
function randomRGB(){
  var r = Math.floor(Math.random() * 255) + 0;
  var g = Math.floor(Math.random() * 255) + 0;
  var b = Math.floor(Math.random() * 255) + 0;
  return "rgb("+r +", "+g+", "+b +")";

}
// Function to convert each number component into the hex code
function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
  }
// combining the hex string from the converted components
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// slicing the rgb(number, number, number) string to 3 number variables and returning
// the hexed value
function hexedRGB(){
  var slicedRGB = randColor.substring(4, randColor.length - 1);
  var rgb = slicedRGB.split(',', 3);
  var r = Number(rgb[0]);
  var g = Number(rgb[1]);
  var b = Number(rgb[2]);
  return rgbToHex(r, g, b);
}