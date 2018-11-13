var nums = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    result = document.querySelector('.result'),
    dec = document.querySelector('.dec'),
    clear = document.querySelector('.clear'),
    display = document.querySelector('.display');
    currentNum = 0,
    newNum = false,
    pandingOperation = '';


 for (var i = 0; i < nums.length; i++) {
    var number = nums[i];
    number.addEventListener('click', function (e) {
      numbPress(e.target.textContent);
    }); 
 }

 for (var i = 0; i < operations.length; i++) {
    var operation = operations[i];
    operation.addEventListener('click', function (e) {
     toDo(e.target.textContent);
    }); 
 }

 dec.addEventListener('click', dot);
 clear.addEventListener('click', null); 
 result.addEventListener('click', null); 

 function numbPress (number) {
  if(display.innerHTML === '0') {
   display.innerHTML = number;
  } else {
  display.innerHTML += number;
  }
 }



 function toDo (op) {
  if (op === '=') {
   
   if (true) {
    display.innerHTML = (sum(display.innerHTML));
   }


  } else {
   display.innerHTML += op;
  };

 //  if(newNum) {
 //   display.innerHTML = currentNum;
 //  } else {
 //   newNum = true;
 //  }
  function sum (str) {
   var arr = str.split('+');
   return arr.reduce(function(acc, i){
    return +acc + +i;
   });
  }
 }

 function dot () {
 
 }



