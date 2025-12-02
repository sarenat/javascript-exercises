const palindromes = function (str) {
    str = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replaceAll(' ', '');
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;  
};

// Do not edit below this line
module.exports = palindromes;
