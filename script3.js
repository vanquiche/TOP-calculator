const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const allClearBtn = document.querySelector('[data-allClear]');
const deleteBtn = document.querySelector('[data-delete]');
const currentOperation = document.querySelector('[data-cur-oper]');
const previousOperation = document.querySelector('[data-pre-oper]');
const resultOperation = document.querySelector('[data-temp-oper]');
// var for current operation
let disNum1 = '';
// var for previous operation
let disNum2 = '';
// result of operations num1 and num2
let result = '';
let lastOperator = '';
let haveDecimal = false;


// for all number buttons
numberBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDecimal) haveDecimal = true;
    else if (e.target.innerText === '.' && haveDecimal) return;
    disNum1 += e.target.innerText;
    currentOperation.innerText = disNum1;
    //console.log(e.target.innerText);
  });
});

operatorBtns.forEach(operator => {
  operator.addEventListener('click', (e) => {
    if(!disNum1) {
    console.log('no num selected')
    return}
    haveDecimal = false;
    const operationName = e.target.innerText;
    if(disNum1 && disNum2 && lastOperator) {
      mathOperation();
    } else {
      result = parseFloat(disNum1);
    }
    clearVar(operationName);
    lastOperator = operationName;
  })
})

equalBtn.addEventListener('click', (e) => {
  if (!disNum1 || !disNum2) {
    console.log('no values to be equaled');
    return;
  }
  console.log('equal is true');
  haveDecimal = true;
  mathOperation();
  clearVar();
  resultOperation.innerText = '';
  currentOperation.innerText = result;
  disNum2 = '';
  disNum1 = result;
})

allClearBtn.addEventListener('click', (e) => {
  console.log('all clear');
  haveDecimal = false;
  disNum1 = '';
  disNum2 = '';
  currentOperation.innerText = '';
  previousOperation.innerText = '';
  resultOperation.innerText = '';
})

deleteBtn.addEventListener('click', (e) => {
  if (!disNum1) return;
  haveDecimal = false;
  deleteNum();
  console.log('delete');

})
function deleteNum() {
  let deletedStr = disNum1.slice(0, disNum1.length - 1);
  currentOperation.innerText = deletedStr;
  disNum1 = deletedStr;
}

function clearVar(name = '') {
  disNum2 += disNum1 + ' ' + name + ' ';
  previousOperation.innerText = disNum2;
  currentOperation.innerText = '';
  disNum1 = '';
  resultOperation.innerText = result;
}

function mathOperation() {
  disNum1.replace(/[^0-9]/g, '');
  if (lastOperator === '+') {
    result = parseFloat(result) + parseFloat(disNum1);
    console.log('add');
    //alert(a);
  }
  else if (lastOperator === '-') {
    result = parseFloat(result) - parseFloat(disNum1);
    console.log('minus');
  }
  else if (lastOperator === '/') {
    result = parseFloat(result) / parseFloat(disNum1);
    console.log('divide');
  }
  else if (lastOperator === '*') {
    result = parseFloat(result) * parseFloat(disNum1);
    console.log('multiply');
  }
}
