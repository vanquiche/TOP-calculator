const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const allClearBtn = document.querySelector('[data-allClear]');
const currentOperationText = document.querySelector('[data-cur-oper]');
const previousOperationText = document.querySelector('[data-pre-oper]');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');

subtractBtn.addEventListener('click', () => {
  console.log('subtract pressed');
})

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.value);
  })
})
addBtn.addEventListener('click', () => {
  if (previousOperationText.innerText != '' && currentOperationText.innerText != '') {
    return add(currentOperationText.innerText, previousOperationText.innerText);
  }
  if (currentOperationText.innerText == '') {
    console.log('no value to add');
    return;
  } else {
    previousOperationText.innerText = currentOperationText.innerText;
    currentOperationText.innerText = '';
  }
  appendNumber(addBtn.innerText, currentOperationText);
})
equalBtn.addEventListener('click', () => {
  add(currentOperationText.innerText, previousOperationText.innerText);
})
allClearBtn.addEventListener('click', () => {
  currentOperationText.innerText = '';
  previousOperationText.innerText = '';
})
function clear() {
  currentOperationText.innerText = '';
}
function updateDisplay(value) {
  return currentOperationText.innerText += value;
};
function appendNumber(append, element) {
  element.innerText = append + element.innerText;
}

function add(a, b) {
  a.replace(/[^0-9]/g, '');
  b.replace(/[^0-9]/g, '');
  let sum = Number(a) + Number(b);
  previousOperationText.innerText = sum;
  clear();
  console.log(sum);
}
