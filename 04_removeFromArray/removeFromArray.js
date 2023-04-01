const removeFromArray = function(array, ...numbers) {
    for (let num = 0; num < numbers.length; num++) {
        let index = array.indexOf(numbers[num]);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
