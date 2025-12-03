const fibonacci = function(x) {
    x = Number(x);
    let arr = [1, 1];

    if (x < 0) return "OOPS";
    else if (x == 0) return 0;
    else {
        for (let i = 0; i < 30; i++) {
            let next = arr[arr.length-1] + arr[arr.length-2];
            arr.push(next);
        }
        return arr[x-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
