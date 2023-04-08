const getTheTitles = function(object) {
    booksList = [];
    for (let book = 0; book < object.length; book++) {
        booksList.push(object[book]["title"]);
    }
    return booksList;
};

// Do not edit below this line
module.exports = getTheTitles;
