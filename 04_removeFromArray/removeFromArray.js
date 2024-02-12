const removeFromArray = function(array, ...numbers) {
    let dictionary = {};

    //put numbers to be removed in hash table
    for(number of numbers){
        dictionary[number] = true;
        console.log("Dictionary: ",dictionary);
    }

    let new_arr = [];

    //if elements not in hash table add it to new array
    for(element of array){
        if(!dictionary[element]){
            new_arr.push(element);
        }}

    return new_arr;
};

removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
