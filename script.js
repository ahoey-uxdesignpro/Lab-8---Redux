var shoppingItems = [
  {
    name: "Mr.Freeze's: Popsicles",
    price: 4.28,
    qty: 1
  },
  {
    name: "Poison Ivy's: Organic Strawberries",
    price: 5.96,
    qty: 1
  },
{
  name: "Bane's: Cough Syrup",
  price: 7.80,
  qty: 1
},

{
  name: "Clayface's: Sunscreen 50SPF",
  price: 10.92,
  qty: 1
},

  {
  name: "Harvey Dent's: Moisturizing Face Serum",
  price: 17.32,
  qty: 1
},

  {
  name:"Cat-Woman's: Fancy Adult Cat Food",
  price: 37.16,
  qty: 1
},

  {
  name: "Ra's al Ghul's: Lazurus Water",
  price: 97.16,
  qty: 3
},

];

var maincontent = document.getElementById('maincontent');


//This is the first container for the items to print to inside te div//
var grandTotal = 0;
var total = 0;
shoppingItems.forEach(function(items){
  var container = document.createElement('p');
  container.innerText = items.name  + ' ' + '$'+ items.price.toFixed(2) + '                               Qty:  ' +  items.qty;
  maincontent.appendChild(container);
});

// // var myFunction =
// browser.notifications.onClicked.addListener(function(myFunction) {
// console.log('container1' + notificationId + ' clicked it');
// });



function myFunction() {
 var test = document.getElementById("addbutton");
 console.log(test.textContent);
}

  // function myFunction() {
  // var test = document.getElementById("input1").value;
  // console.log(test);


function myFunction() {
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
shoppingItems.push({name:input1.value, price:input2.value, qty:input3.value})
console.log(shoppingItems);
}
//  function myFunction() {
//  var test = document.getElementById("input2").value;
//  console.log(test);
// // }
// console.log(myFunction);


// function myFunction(maincontent) {
// var container1 =
// container1.button = items.name  + ' ' + '$'+ items.price.toFixed(2) + '                               Qty:  ' +  items.qty;
// console.log(container1);
// };
//This is the function that will be tied to the buttons: The aim is to create a button that has an .onCLick method that when the
//items are entered in they are printed to the console.


// console.log(document.getElementsByTagName('input'));
// form.button.on('click');

//This container will contain the heading with the text inside"Welcome to Gotham Mart"
// var container2 =
// document.createElement('h1');
// container2.innerText = "Welcome To Gotham Mart";
// document.body.appendChild(container2);








// console.log(items.name + items.price + items.qty.toFixed(2));
// total += items.price;
// grandTotal += items.price + items.qty + (items.price * 0.06);
  //  })

//Note: TO MAKE ANYTHING APPEAR IN HTML, WHEN CODING JAVASCRIPT YOU MUST .appendChild
//THE ELEMENTS IN JAVASCRIPT//
  // console.log('Your total before tax is $' + total.toFixed(2));
  // console.log('Your grand total after tax is $' + grandTotal.toFixed(2));
