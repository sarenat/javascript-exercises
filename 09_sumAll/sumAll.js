const sumAll = function(a, b) {
    if (a<0 || b<0) return "ERROR";
    if (typeof(a) != "number" || typeof(b) != "number") return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let small, large = 0;
    if (a<b) {
        small = a; large = b;
    } else {
        large = a; small = b;
    }

    let range = [];
    for (i=small; i<=large; i++) {
        range = range.concat(i);
    }

    return range.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
