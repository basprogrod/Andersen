// function compare (a, b) {

//  if (a > b) {
//  	return true
//  } else {
//  	return false	
//  }

// }


// function concat (str) {
// 	return 'Вы ввели: ' + str
// }

// function check (val) {
// 	console.log(val);
//  if (val === null || val === undefined) return true;
//  return false;
// }

// console.log(check());


// var a = {olololo: 1};
// function addParameter (obj) {
//  obj.checked = true;
// }



// function getInterval (n) {
//  if (n === 0 || (typeof n) === 'string' || (typeof n) === 'object' || null || undefined) {
//   console.log('введите число отличное от 0')
//   return false;
// 	}
//  var start = 0;
//  var end = n;
//  if (n < 0) {
//  	end = Math.sqrt(n*n);
//  } if (n === 0){
//     return false;
//  } else {
//  	start -= end;
//  }
//  for (var i = ++start; i < end; i++) console.log(i);
// }


;(function () {

  function myFrameWork () {
  }

  function check (val) {
   if (val === null || val === undefined) return true;
   return false;
  }

  function isEmpty (obj) {
  	if (check(obj) || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return;
  	var num = 0;
  	for (var key in obj) num++;
  	if (num === 0) return true;
   if (num > 0)   return false;
  }

  function objectMap (obj, fn) {
  	if (check(obj) || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return 'не объект';
   var changedObj = {};
   for (var key in obj) {
   	// if (typeof obj[key] === 'object') {
   	// 	objectMap(obj[key], fn);
   	// 	continue;
   	// }
   	changedObj[key] = fn(obj[key]);
   }
   return changedObj;
  }

  function aRandomInteger (start, end) {
  	return ~~(start + Math.random() * (end + 1 - start));	
  }

  function comparison (first, second) {
  	if(Object.keys(first).join('') !== Object.keys(second).join('')) return false;

   var copy = {}
   var numComparisonsOfFirst = 0;
   var numComparisonsOfSecond = 0;

   for (var k in second) {
   	copy[k] = second[k]
   }

   for (var firstKey in first) {
   	    for(var copyKey in copy) {
   	    	if (typeof first[firstKey] === 'object' && typeof copy[copyKey] === 'object') {
   	    	 		    			if ( comparison(first[firstKey], copy[copyKey]) ) {
   	    	 		    			  numComparisonsOfSecond++;
   	    	  		    		  break;
   	    	 		    			} else {
   	    	 		    				return false;
   	    	 		    			}
   	    	 		    		}	else	if (first[firstKey] === copy[copyKey]) {
 		    			  // console.log(first[firstKey] + ' ' + copy[copyKey]);

 		    			  delete copy[copyKey];
  		    		  numComparisonsOfSecond++;
  		    	  	break;
  		    	} 
  		    }
  		    numComparisonsOfFirst++;
  	}
  	// console.log(numComparisonsOfFirst + " " + numComparisonsOfSecond);
  	return numComparisonsOfFirst === numComparisonsOfSecond;
  }


  function deleteProperties (obj, fn) {
  	var changedObj = {};
  	for (let key in obj) {
    changedObj[key] = obj[key];
  	}

  	for (let key in changedObj) {
  		if( !fn(changedObj[key]) ) {
  			delete changedObj[key];
  		}
  	}
  	return changedObj;
  }


  myFrameWork.isNaN       = isNaN;
  myFrameWork.isNull      = check;
  myFrameWork.isUndefined = check;
  myFrameWork.isEmpty     = isEmpty;
  myFrameWork.objectMap   = objectMap;
  myFrameWork.random      = aRandomInteger;
  myFrameWork.compare     = comparison;
  myFrameWork.delProp     = deleteProperties;

  window.m = myFrameWork;

})();

var firstUser = {};
console.log(m.isEmpty(firstUser));

firstUser.age = 29;
firstUser.name = 'Igor';
firstUser.surname = 'Vasiliev';
firstUser.can = {sleep: true, eat: true}

console.log(m.isEmpty(firstUser));
console.log(m.isNaN(0));
console.log(m.isNaN(null));
console.log(m.isUndefined());
console.log(m.isNull(null));
console.log(m.objectMap(firstUser, function (item) {
	return item + ' opachki!';
}));

console.log(m.random(-50, 99));

var secondUser = {};
secondUser.age = 29;
secondUser.name = 'Igor';
secondUser.surname = 'Vasiliev';
secondUser.can = {sleep: true, eat: true}

console.log(m.compare(firstUser, secondUser));


console.log(m.delProp(firstUser, function(item) {
	if (item.length > 4) return false;
	return true;
}));





















