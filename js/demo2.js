var hx= document.getElementById("box");
hx.innerText= "Xin chao cac ban"; //change text
//DOM: Document object model
hx.innerHTML = "<i>Xin chao sinh vien lop T2507E</i>";
hx.style.color = "green";
hx.style.marginBottom = "20px";
hx.classList.remove("xyz");
hx.classList.add("abc");
hx.classList.add("gik");

var dv= document.getElementById("devide");
//var f = 14;
//var d = setInterval(function(){
//    dv.style.fontSize = f + "px";
//    f+= 2;
//},1000);

var hx= document.getElementById("fan");
var dg = 0;
var fanbox = setInterval(function(){
        fan.style.transform = `rotate(${dg}deg)`;
            dg+=2;
}, 1); //1000 ms

