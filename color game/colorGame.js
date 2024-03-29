var numSquares =6;
var colors= [];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //mode buttons
    for(var i= 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for(var i = 0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor===pickedcolor){
                message.textContent="correct";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
                resetbtn.textContent = "Play Again ?"
            }else{
                message.textContent="Try again";
                this.style.background='#232323';
            }
        });
    }
    reset();
}



function reset(){
    colors= generateRandomColors(numSquares);
    //pick new random color
    pickedcolor=pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = "";
    //change colors of the square
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background=colors[i]; 
        }else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
    resetbtn.textContent = "New Colors";

}

resetbtn.addEventListener("click", function(){
   reset();

});

// colorDisplay.textContent=pickedcolor;


function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //create an aaray
    var arr=[];
    //add random colors to the array
    for(var i=0; i< num; i++){
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}