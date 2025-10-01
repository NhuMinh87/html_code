// lay duoc du lieu ve 
// CALL API
const url = `http://127.0.0.1:5500/data/weather.json`;
fetch(url).then(re=>re.json())
.then(function(data){

// su dung du lieu
var wt = data;

var wtname= document.getElementById("w-city");
wtname.innerText = wt.name;

document.getElementById("w-city").innerText = wt.city;
document.getElementById("w-tem").innerText = wt.temperature;
document.getElementById("w-img").src= wt.image;
document.getElementById("w-pre").innerText = wt.preticitation;
document.getElementById("w-wind").innerText = wt.wind;
document.getElementById("w-day").innerText = wt.day;
document.getElementById("w-time").innerText = wt.time;
document.getElementById("w-rain").innerText = wt.rain;
});

