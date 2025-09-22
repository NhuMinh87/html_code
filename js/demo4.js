// lay duoc du lieu ve 
// CALL API
const url = `http://127.0.0.1:5500/data/product.json`;
fetch(url).then(re=>re.json())
.then(function(data){

// su dung du lieu
var sp = data;

var spname= document.getElementById("p-name");
spname.innerText = sp.name;

document.getElementById("p-price").innerText = sp.price;
document.getElementById("p-img").src= sp.image;
document.getElementById("p-desc").innerText = sp.description;
document.getElementById("p-qty").innerText = sp.stock.qty;

var rvHtml = "";
for(var i=0; i< sp.reviews.length; i++){
    var rate = sp.reviews[i].rate;
    var review = sp.reviews[i]. review;
    rvHtml += `<li> ${rate} sao - ${review}</li>`;
}
document.getElementById("rv").innerHTML = rvHtml;
});
