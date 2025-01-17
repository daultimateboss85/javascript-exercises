const sumAll = function(num1, num2) {

    if(!Number.isInteger(num1) || !Number.isInteger(num2) ){return "ERROR"}

    if(num1 < 0 || num2 < 0){return "ERROR"}

    let bigger = num1 > num2 ? num1 : num2;
    let smaller = num1 > num2 ? num2 : num1;

    let sum = 0;
    for(let num = smaller; num <= bigger; num++){
        sum += num;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
