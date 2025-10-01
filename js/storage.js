var user = { //object
    name : "John Doe",
    email: "john@gmail.com",
    age: 30,
    address: "123 Main St, City, Country"
}
var strUser = JSON.stringify(user); // bien doi tuong thanh chuoi
localStorage.setItem("user", strUser); //luu chuoi JSON vao localStorage