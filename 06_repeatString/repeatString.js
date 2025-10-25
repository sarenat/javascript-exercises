const repeatString = function(str, repeat) {
    if (repeat<0) return "ERROR";
    
    let repeatedString = "";
    for (i=1; i<=repeat; i++) repeatedString = repeatedString.concat(str);
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
