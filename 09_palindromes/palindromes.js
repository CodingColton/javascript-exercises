const palindromes = function (phrase) {
    let formattedPhrase = phrase.replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let reversedPhrase = formattedPhrase.split("").reverse().join("");
    return formattedPhrase === reversedPhrase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
