
/**
 * 
 * @param {String} string 
 */

const reverseString = function(string) {
    let length = string.length;
    let reversed = "";
    for(let i = length-1; i >= 0 ; i--){
        reversed += string[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
