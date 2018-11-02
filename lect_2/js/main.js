function compare (a, b) {

 if (a > b) {
 	return false
 } else {
 	return true	
 }

}
console.log(compare(1, 2));
console.log(compare(9, 2));
function concat (str) {
	return 'Вы ввели: ' + str
}
console.log('//////////////////////////////////////////////////////////////')




//////////////////////////////////////////////////////////////////////////////


function chek (val) {
	if (val === null || val === undefined) return "Значение: " + val;
 return "Значение не является " + null + " или " + undefined;

}


console.log(chek(123));
console.log(chek({}));
console.log(chek('blalbalba'));
console.log(chek("null"));
console.log(chek(null));
console.log(chek());

console.log('//////////////////////////////////////////////////////////////')





//////////////////////////////////////////////////////////////////////////////






var a = {olololo: 1};
function addParameter (obj) {
 obj.checked = true;
}
addParameter(a);
console.log(a);

console.log('//////////////////////////////////////////////////////////////')



///////////////////////////////////////////////////////////





function getInterval (n) {
 // console.log(typeof n + ' ' + n)
	if (n === 0 || (typeof n) === 'string' || (typeof n) === 'object' || null || undefined) {
		console.log('введите число отличное от 0')
		return;
	}

 if (n > 0) {
 	for (var i = 0; i < n; i++) console.log(i);
 } else {
 		for (var i = 0; i > n; i--) console.log(i);
 }
}
getInterval('ffff');
getInterval(0);
getInterval({});
getInterval();
getInterval(null);
getInterval(15);
getInterval(-15);