function log(event) {
    console.log(event);

    event.stopPropagation();
    event.preventDefault();
}

function containerReverse() {
    myDiv.style = 'transform: rotate(180deg);'
}

function logThis() {
    console.log(this);
}

var myDiv = document.querySelector('.container');
var childDiv = myDiv.querySelector('.title');

myDiv.addEventListener('click', containerReverse);
childDiv.addEventListener('click', log);
// div.addEventListener('click', logThis);
// div.removeEventListener('click', log);