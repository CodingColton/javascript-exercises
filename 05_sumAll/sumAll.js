const sumAll = function(...args) {
    let newArray = [];
    let total = 0;
    args.sort()
    for (i = 0; i < args.length; i++) {
        if ((args[i] < 0) || (Array.isArray(args[i]))) {
            return 'ERROR';
        }
    }
    for (let i = args[(args.length - 1)]; i >= 0; i--) {
        
        newArray.push(i);
    }
    newArray.sort();
    for (let i = 0; i < newArray.length; i++) {
        if (typeof(newArray[i]) !== "number") {
            return 'ERROR';
        }
        total += parseInt(newArray[i]);
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
