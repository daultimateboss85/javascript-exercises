const palindromes = function (phrase) {
    //filter punctuation
    let to_remove = ".,! ";

    let new_phrase = "";
    for(let letter of phrase){
        if(!to_remove.includes(letter)){
            new_phrase += letter;
        } 
    }

    console.log(new_phrase);
    let length = new_phrase.length;
    //loop through to see if forwards and backwards is same
    for(let i=0; i<Math.floor(length/2);i++){
        if(!(new_phrase[i].toLowerCase() === new_phrase[length-i-1].toLowerCase())){
            return false;
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
