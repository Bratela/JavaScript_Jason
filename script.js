fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(data){
   localStorage.setItem("products", JSON.stringify(data));
   if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
   }
});

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId){
    let product = products.find(function(item){
       return item.id == productId;
    });
  
    if(cart.length == 0){
       cart.push(product);
    }else{
       let res = cart.find(element => element.id == productId);
       if(res === undefined){
          cart.push(product);
       }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 }
//  addItemToCart(1);
  
 function removeItemFromCart(productId){
    let tempCart = cart.filter(item => item.id != productId);//Создеёт новый массив (tempCart) с ключением produtId
    localStorage.setItem("cart", JSON.stringify(tempCart));
 }
//  removeItemFromCart(4);


 function updateQuantity(productId, quantity){
    for(let product of cart){
       if(product.id == productId){
          product.quantity = quantity;
       }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
 }
//  updateQuantity(1, 8);
