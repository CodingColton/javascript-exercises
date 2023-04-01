const sumAll = function(...args) {
    let newArray = [];
    let total = 0;
    args.sort()
    for (let i = args[(args.length - 1)]; i >= 0; i--) {
        newArray.push(i);
    }
    newArray.sort();
    for (let i = 0; i < newArray.length; i++) {
        total += parseInt(newArray[i]);
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
