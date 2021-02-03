
//display numbers/value upon click
let userInput = '';
let a = 0;
let b = 0;
let temp = 0;
let integer = Number(userInput);
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const display = document.getElementById('demo');
const aValue = document.getElementById('aValue');
const bValue = document.getElementById('bValue');
const equal = document.getElementById('equal');
const subtract = document.getElementById('subtract');
let firstValue = '';
let secondValue = '';
//clear button to remove userInput
clear.addEventListener('click', () => {
  display.innerText = '';
  userInput = 0;
  a = 0;

})
//add button
add.addEventListener('click', () => {



});
subtract.addEventListener('click', () => {
  //a -= Number(userInput);
  userInput = '';
});

//equal operator button
equal.addEventListener('click', () => {
  console.log('hello');
  //display.innerText = a;
  total();
});
//buttons will create a string of numbers
document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    display.innerText += item.value;
    //firstValue += item.value
    //console.log(firstValue);
  });
});

function calculation() {
  return a + b;
}

