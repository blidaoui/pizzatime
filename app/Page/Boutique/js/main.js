// const { button, input } = require("@nextui-org/react")

// let cartIcon =document.querySelector('#cart-icon')
// let cart=document.querySelector('.cart')
// let closecart=document.querySelector('#close-cart')

// cartIcon.onClick=()=>{
//     cart.classList.add('active')
// }
// // cartIcon.onClick=()=>{
// //     cart.classList.add('active')
// // }
// closecart.onClick=()=>{
//     cart.classList.add('active')
// }
// if (document.readyState =='loading'){
//     document.addEventListener('DOMContentLoaded', ready)

// }else{
//     ready();
// }

// function ready(){
//     var removeCartButtons =document.getElementsByClassName('cart-remove')
//     console.log(removeCartButtons)
//     for(var i = 0; i < removeCartButtons.length; i++){
//         button.addEventListener('click ', removeCartItem)
//     }
//     var quantityInputs= document.getElementsByClassName('cart-quantity')
//     for (var i = 0; i < quantityInputs.length; i++){
//         input.addEventListener('change',quantityChanged);
//     }
// }
// function removeCartItem(event){
//     var buttonClicked =event.target
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }
// function quantityChanged(event){
// var input=event.target;
// if(isNaN(input.value)|| input.value <=0 ){
//     input.value=1
// }
// updatetotal();
// }
// function updatetotal(){
// var cartContent = document.getElementsByClassName('cart-content')[0]
// var carBoxes= cartContent.getElementsByClassName('cart-box')
// var total=0;
// for(var i = 0; i < carBoxes.length; i++){
//  var cartBox =carBoxes[i]
//  var priceElement=cartBox.getElementsByClassName('cart-price')[0]
//  var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0]
// var price=parseFloat(priceElement.innerText.replace("$",""));
//  var quantity=quantityElement.value;
// total=total+ price * quantity;
// document.getElementsByClassName('total-price')


// }}
