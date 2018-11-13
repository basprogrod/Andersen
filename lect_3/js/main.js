;
(function() {

    function myFrameWork() {}

    function check(val) {
        if (val === null || val === undefined) return true;
        return false;
    }

    function isEmpty(obj) {
        if (check(obj) || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return;
        for (var key in obj) return false;
        return true;
    }

    function objectMap(obj, fn) {
        if (check(obj) || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return 'не объект';
        var changedObj = {};
        for (var key in obj) {
            changedObj[key] = fn(obj[key]);
        }
        return changedObj;
    }

    function aRandomInteger(start, end) {
        return ~~(start + Math.random() * (end + 1 - start));
    }

    function comparison(first, second) {
        if (Object.keys(first).length !== Object.keys(second).length) return false;

        var copy = {}
        var numComparisonsOfFirst = 0;
        var numComparisonsOfSecond = 0;

        for (var k in second) {
            copy[k] = second[k]
        }

        for (var firstKey in first) {
            for (var copyKey in copy) {
                if (typeof first[firstKey] === 'object' && typeof copy[copyKey] === 'object') {
                    if (comparison(first[firstKey], copy[copyKey])) {
                        numComparisonsOfSecond++;
                        break;
                    } else {
                        return false;
                    }
                } else if (first[firstKey] === copy[copyKey] && firstKey === copyKey) {
                    delete copy[copyKey];
                    numComparisonsOfSecond++;
                    break;
                }
            }
            numComparisonsOfFirst++;
        }
        return numComparisonsOfFirst === numComparisonsOfSecond;
    }


    function deleteProperties(obj, fn) {
        var changedObj = {};
        for (let key in obj) {
            changedObj[key] = obj[key];
        }

        for (let key in changedObj) {
            if (!fn(changedObj[key])) {
                delete changedObj[key];
            }
        }
        return changedObj;
    }


    myFrameWork.isNaN = isNaN;
    myFrameWork.isNull = check;
    myFrameWork.isUndefined = check;
    myFrameWork.isEmpty = isEmpty;
    myFrameWork.objectMap = objectMap;
    myFrameWork.random = aRandomInteger;
    myFrameWork.compare = comparison;
    myFrameWork.delProp = deleteProperties;

    window.m = myFrameWork;

})();

var firstUser = {};
console.log(m.isEmpty(firstUser));

firstUser.age = 29;
firstUser.name = 'Igor';
firstUser.surname = 'Vasiliev';
firstUser.can = {
    sleep: true,
    eat: true
}

console.log(m.isEmpty(firstUser) );
console.log(m.isNaN(0));
console.log(m.isNaN(null));
console.log(m.isUndefined());
console.log(m.isNull(null));
console.log(m.objectMap(firstUser, function(item) {
    return item + ' opachki!';
}));

console.log(m.random(-50, 99));

var secondUser = {};
secondUser.surname = 'Vasiliev';
secondUser.age = 29;
secondUser.name = 'Igor';
secondUser.can = {
    sleep: true,
    eat: true
}

console.log(m.compare(firstUser, secondUser));


console.log(m.delProp(firstUser, function(item) {
    if (item.length > 4) return false;
    return true;
}));