const findTheOldest = function(arr) {
    let oldestIndex = 0;
    let prevAge = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i].yearOfDeath) == 'number' && typeof(arr[i].yearOfBirth == 'number')) {
            if (i > 0 && 
                typeof(arr[i-1].yearOfDeath) == 'number' && 
                typeof(arr[i-1].yearOfBirth == 'number')) {
                    prevAge = arr[i-1].yearOfDeath - arr[i-1].yearOfBirth;
                }
            if (arr[i].yearOfDeath - arr[i].yearOfBirth > prevAge) oldestIndex = i;
        }
    }
    return(arr[oldestIndex]);
};

// Do not edit below this line
module.exports = findTheOldest;
