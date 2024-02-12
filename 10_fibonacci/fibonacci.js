const fibonacci = function(number) {
    if (number <0){
        return "OOPS";
    }

    if(number ==0){
        return 0;
    }
    if(number==1|| number==2){
        return 1
    }else{
        let [next, previous] = [1, 1];

        for(let i = 3; i<=number; i++){
            [next, previous] = [next+previous, next];
            
        }
        return next;
    }

};

// Do not edit below this line
module.exports = fibonacci;
