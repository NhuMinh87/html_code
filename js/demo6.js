// lay duoc du lieu ve 
// CALL API
function weather(ct){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    fetch(url).then(re=>re.json())
    .then(function(data){

    // nap du lieu vao giao dien
    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("hump").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
});
}
weather("hanoi");

function forecast(){
    //
    var list = [data.list];// giả sử là danh sách thời tiết
    var box_html = "";
    for(var i=0;i<list.length;i++){
        box_html += `<div class="item">
                        <h1>${list[i].dt_txt}</h1>
                        <h2>Nhiệt độ</h2>
                        <h3>Thông tin</h3>
                        <img src="#"/>
                    </div>`;

    }
    // in vào box bên html
    document.getElementById("box").innerHTML = box_html;
}