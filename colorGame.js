var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("span");
var pickedColor = pickColor();
var message = document.querySelector("#messages");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    message.innerHTML = "";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    message.innerHTML = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors from array
    pickedColor = pickColor();
    //Update the color display
    colorDisplay.innerHTML = pickedColor;
    this.innerHTML = "New Colors";
    //set the squares into different colors
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    message.innerHTML = "";
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.innerHTML = "Correct";
            resetButton.innerHTML = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //change the colors of the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    var arr = [];
    //Add num random to an array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //check a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //check a "gren" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //check a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
