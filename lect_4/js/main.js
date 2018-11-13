var digs = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    result = document.querySelector('.result'),
    dec = document.querySelector('.dec'),
    clear = document.querySelector('.clear'),
    clear = document.querySelector('.clear'),
    display = document.querySelector('.display'),
    log = document.querySelector('.log'),
    btns = document.querySelectorAll('.btn'),
    currentNum = 0,
    newNum = false,
    pandingOperation = '',
    str = '';




 for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.addEventListener('click', function (e) {
      loger(this.innerHTML);
    }); 
 }
    function loger(val) {
     // if (display.innerHTML === '0') return;
     str += val; 
     // console.log(str)   
    }


 for (var i = 0; i < digs.length; i++) {
    var number = digs[i];
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

 // dec.addEventListener('click', dot);
 clear.addEventListener('click', function(){
  display.innerHTML = 0;
  currentNum = 0;
  newNum = false;
  str = '';
 }); 
 result.addEventListener('click', function() {
  if (display.innerHTML === '0') return;
  str += currentNum;
  var strok = document.createElement('div');
  strok.innerHTML = str;
  log.appendChild(strok);
  str = '';
 }); 

 function numbPress (number) {
  if (newNum) {
   display.innerHTML = number;
   newNum = false;
  } else {

     if(display.innerHTML === '0') {
      display.innerHTML = number;
     } else {
     display.innerHTML += number;
     }

  }
  
 }



 function toDo (op) {
  a = +display.innerHTML;

  if(newNum && pandingOperation !== '=') {
   display.innerHTML = currentNum;
  } else {
   newNum = true;
   if (pandingOperation === '+') {
    currentNum += a;
   } else if (pandingOperation === '-') {
    currentNum -= a;
   }else if (pandingOperation === '*') {
    currentNum *= a;
   }else if (pandingOperation === '/') {
    currentNum /= a;
   }else {
    currentNum = a;
   }
   display.innerHTML = currentNum;
   pandingOperation = op;
  }
 }

 function dot () {
  // display.innerHTML += this.innerHTML;
 }



// var str = '4-(-16/8*2*2)+3*2';

// function calc (str) {

//  var arr = [];
//  var preRes = [];
//  var currentOperation = [];

//  arr = str.split('');
//  console.log(arr)
//  for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === '*' || arr[i] === '/' ) {
//    var n = i;
//    while (true) {  
//     n--;
//     currentOperation.unshift(arr[n])
//     if (arr[n] === '-' || arr[n] === '+' || arr[n] === '*' || arr[n] === '/' ) {
//      currentOperation.shift();
//      break;
//     }
//    }//while
//    n = i;
//    currentOperation.push(arr[n])
//    n++;
//    while (true) {
//     currentOperation.push(arr[n])
//     if (arr[n] === '-' || arr[n] === '+' || arr[n] === '*' || arr[n] === '/' || n === arr.length ) {
//      currentOperation.pop();
//      break;
//     }
//     n++;
//    }//while

//    if(currentOperation[currentOperation.indexOf('/')] === '/') { 
//      preRes.push(del());
//      currentOperation = [];
//      function del() {
//            var a = '';
//            var b = '';
//            var swich = false;
//            for (var i = 0; i < currentOperation.length; i++) {
//             if (swich === true) {
//              b += currentOperation[i];
//             } else {
//              if(currentOperation[i] === '/') {swich = true; continue;};
//             a += currentOperation[i];
//             }//if
//            }//for
//            swich = false;
//            return +a / +b;
//           };

//    }else if (currentOperation[currentOperation.indexOf('*')] === '*') {
//     preRes.push(mul());
//     currentOperation = [];
//     function mul() {
//           var a = '';
//           var b = '';
//           var swich = false;
//           for (var i = 0; i < currentOperation.length; i++) {
//            if (swich === true) {
//             b += currentOperation[i];
//            } else {
//             if(currentOperation[i] === '*') {swich = true; continue;};
//            a += currentOperation[i];
//            }//if
//           }//for
//           swich = false;
//           return +a * +b;
//          };
//    }
//   }//if

//  }//for
//  console.log(currentOperation);
//  console.log(preRes);
//  return;
// }

// // calc(str);

// function allMulDelOperations(str) {
//  var expArr = [];
//  expArr = str.split('');

//   function expInBrackets() {
//    expArr
//  }

//  return mulArr;
// }