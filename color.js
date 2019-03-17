var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    setupModeButtons();
    setupSquares();
    
    reset();
};

function setupModeButtons(){
    //mode button eventListener
    for(var i = 0; i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //if sats
        this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
        reset();
        });
    }
};

function setupSquares(){
        //random the array
for(var i = 0; i < squares.length; i++){
    //add initial color to squares
    //string and it became to show the color(maybe can use in blackjack)
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickerColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}}

function reset(){
 //generate all new colors
 colors = generateRandomColor(numSquares);
 //pick a new random color from array
 pickedColor = pickColor();
 //change colorDisplay to match picked color
 colorDisplay.textContent = pickedColor;
 //change colors of the squares
 for(var i = 0; i < squares.length; i++){
    //need to check again 
    if(colors[i]){
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
     }else{
         squares[i].style.display = "none";
     }
 }
 h1.style.backgroundColor = "steelblue";
 messageDisplay.textContent = "";
 resetButton.textContent = "New Colors"; 
}

resetButton.addEventListener("click",function(){
    reset();
} );



function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
 //change each color to match given color
    squares[i].style.backgroundColor = color;
}
   
};

function pickColor(){
    //random the number****  and pick a color
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColor(num){
    //make an array
    var arr = [];
    //repeat num times
    for(i = 0; i < num; i++){
    // get random color and push i array
      arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a "red' from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
