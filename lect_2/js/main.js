function compare (a, b) {

 if (a > b) {
 	return true
 } else {
 	return false	
 }

}


function concat (str) {
	return 'Вы ввели: ' + str
}

function check (val) {
	console.log(val);
 if (val === null || val === undefined) return true;
 return false;
}

console.log(check());


var a = {olololo: 1};
function addParameter (obj) {
 obj.checked = true;
}



function getInterval (n) {
 if (n === 0 || (typeof n) === 'string' || (typeof n) === 'object' || null || undefined) {
  console.log('введите число отличное от 0')
  return false;
	}
 var start = 0;
 var end = n;
 if (n < 0) {
 	end = Math.sqrt(n*n);
 } if (n === 0){
    return false;
 } else {
 	start -= end;
 }
 for (var i = ++start; i < end; i++) console.log(i);
}
