function demoOne(){
    alert("One two three...");
}

function demoTwo(){
    alert("1 2 3...");
}

function startFan(){
var hx= document.getElementById("fan");
var dg = 0;
var fanbox = setInterval(function fanfan(){
        fan.style.transform = `rotate(${dg}deg)`;
            dg+=2;
},1); //1000 ms

var btn= document.getElementById("btn-fan");
btn.innerText= "Stop"; //change text
//DOM: Document object model
}

function startFan(e){
var hx= document.getElementById("fan");
var dg = 0;
var fanbox = setInterval(function(){
        fan.style.transform = `rotate(${dg}deg)`;
            dg+=2;
},1); //1000 ms
//var btn= document.getElementById("btn-fan");
//btn.innerText= "Stop"; //change text
e.innerText= "Stop";
//DOM: Document object model
}

var flag = false;
var fanbox = null;
function startFan(e){
    if (flag == false) {
        var fan = document.getElementById ("fan");
        var dg = 0;
        fanbox = setInterval (function(){
            fan.style.transform = `rotate($(dg)deg)`;
            dg+=2;
       },1);
    //var btn= document.getElementById("btn-fan");
    //btn.innerText= "Stop"; //change text
        e.innerText = "Stop";
        flag = true;
    }else{
        clearInterval(fanbox);
        e.innerText = "Start";
        flag = false;
    }
}