const reverseString = function(reverseMe) {
    let reversedString = "";
    for (i=reverseMe.length-1; i>=0; i--) {
        reversedString = reversedString.concat(reverseMe[i]);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
