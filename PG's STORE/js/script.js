let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name:name,price:price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");

}

function updateCartCount(){

document.getElementById("count").innerText = cart.length;

}

function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let products = document.getElementsByClassName("card");

for(let i=0;i<products.length;i++){

let title = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(title.includes(input))
products[i].style.display="block";

else
products[i].style.display="none";

}

}

updateCartCount();