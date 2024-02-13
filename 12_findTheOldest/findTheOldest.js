const findTheOldest = function(people) {
    "yearOfDeath" in people[0]? people[0] : people[0]["yearOfDeath"] = new Date().getFullYear();
    return people.reduce((a, b) => { 
        if ("yearOfDeath" in b){
            return (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) ? a :b;
        }else{
            let today = new Date().getFullYear();
            return (a.yearOfDeath - a.yearOfBirth > today - b.yearOfBirth) ? a :b;
        } },  )
};

// Do not edit below this line
module.exports = findTheOldest;
