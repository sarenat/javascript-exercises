const findTheOldest = function(arr) {
    let oldestIndex = 0;
    
    let ages = arr.map(item => item.yearOfDeath - item.yearOfBirth);
    for (let i = 0; i < ages.length; i++) {
        if (isNaN(ages[i])) ages[i] = 0;
        if (ages[i] > ages[oldestIndex]) oldestIndex = i;
    };

    return(arr[oldestIndex]);
};

// Do not edit below this line
module.exports = findTheOldest;
