const removeFromArray = function(arr) {
    const args = [...arguments];

            for (i=arr.length; i>=0; i--) {
                if (args.includes(arr[i])) {
                    arr.splice(i, 1);
                }
            }
            return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
