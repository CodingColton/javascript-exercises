const repeatString = function(text, number) {
    if (number < 0) {
        return 'ERROR';
    }
    let string = '';
    for (i = 0; i < number; i++) {
        string = string + text;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
