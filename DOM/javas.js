alert("connected");
var body=document.querySelector("body");
var but=document.querySelector("button");
var purple=false;
but.addEventListener("click", function(){
    if(purple){
        body.style.backgroundColor="white";
        body.style.color="black";
    }
    else{
        body.style.backgroundColor="purple";
        body.style.color="white";
    }
    purple=!purple;
});