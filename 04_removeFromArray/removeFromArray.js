const removeFromArray = function(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (number !== array[i]) {
            newArray.push(array[i]);
        };
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
