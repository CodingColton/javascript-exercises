const fibonacci = function(number) {
    if (parseInt(number) < 0) return "OOPS";
    fibonacciList = [1, 1];
    i = 0
    while (fibonacciList.length < parseInt(number)) {
        fibonacciList.push(fibonacciList[i] + fibonacciList[fibonacciList.length - 1]);
        i += 1;
    }
    
    return fibonacciList[fibonacciList.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
