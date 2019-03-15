var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //***?? need to read again-->
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){squares[i].style.backgroundColor = colors[i];
    } else{
        squares[i].style.display = "none";
    }}
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //***?? need to read again-->
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});
resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColor(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Color"
} );

//random the array
for(var i = 0; i < squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
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
    })
};

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
};
