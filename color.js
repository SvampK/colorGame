var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

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
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
 //change each color to match given color
        squares[i].style.backgroundColor = color;
}
   
};

function pickColor(){
    //random the number****
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColor(num){
    //make an array
    var arr = [];
    //add num random colors to array******
    for(i = 0; i < .length; i++){
        
    }
    //return the array
    return arr;
}