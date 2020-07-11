alert("connected");
var p1button=document.querySelector("#p1");
var p2vutton=document.querySelector("#p2");
var resetbtn=document.querySelector("#reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var inpt=document.querySelector("input");
var p=document.querySelector("#winsccr");
var p1score= 0;
var p2score=0;
var gameover=false;
var winningscore=5;

p1button.addEventListener("click", function(){
    if(!gameover){
        p1score++;
        if(p1score===winningscore){
            p1display.classList.add("winner");
            gameover=true;
        }
        p1display.textContent=p1score;
    }
    
    
});
p2vutton.addEventListener("click", function(){
    if(!gameover){
        p2score++;
        if(p2score===winningscore){
            p2display.classList.add("winner");
            gameover=true;
        }
        p2display.textContent=p2score;
    }
});
resetbtn.addEventListener("click", function(){
    reset();
});
function reset(){
    p1score= 0;
    p2score= 0;
    p1display.textContent=p1score;
    p2display.textContent=p2score;
    gameover=false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
}

inpt.addEventListener("change", function(){
    winningscore=Number(inpt.value);
    if(winningscore>0){
        p.textContent=inpt.value;
        winningscore=Number(inpt.value);
    }
    if(winningscore<0){
        alert("score can't be negative");
        p.textContent=0;
        winningscore=0;
    }
    
    reset();
});