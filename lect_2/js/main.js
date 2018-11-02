function compare (a, b) {

 if (a > b) {
 	return true
 } else {
 	return false	
 }

}
console.log(compare(1, 2));
console.log(compare(9, 2));

function concat (str) {
	return 'Вы ввели: ' + str
}





//////////////////////////////////////////////////////////////////////////////


function chek (val) {
 if (val === null || val === undefined) return true;
 return false;
}


console.log(chek(123));
console.log(chek({}));
console.log(chek('blalbalba'));
console.log(chek("null"));
console.log(chek(null));
console.log(chek());







//////////////////////////////////////////////////////////////////////////////






var a = {olololo: 1};
function addParameter (obj) {
 obj.checked = true;
}
addParameter(a);
console.log(a);





///////////////////////////////////////////////////////////





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


 // console.log(mod + '!!!');
 for (var i = ++start; i < end; i++) console.log(i);
 // console.log(-mod)
}
getInterval('ffff');
getInterval(0);
getInterval({});
getInterval();
getInterval(null);
// getInterval(15);

getInterval(-7);