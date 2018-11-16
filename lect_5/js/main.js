function log(arg) {
  console.log(arg);
}

function debounce(fn, ms) {
  var timerId;
    return function (val) {
        if (timerId) {
            clearTimeout(timerId);
        }     
        timerId = setTimeout(function() { fn(val) }, ms);
    }
}

var debounce = debounce(log, 500);

debounce(1);
debounce(2);
debounce(3);




function timer(ms) {
  var promise = new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
    return promise;
}



