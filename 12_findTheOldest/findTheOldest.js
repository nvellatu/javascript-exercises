const findTheOldest = function(people) {
    var oldest = null;
    var oldestAge = 0;
    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath')){
            var yearOfDeath = person.yearOfDeath;
        }
        else{
            var yearOfDeath = new Date().getFullYear();
        }
        const age = yearOfDeath - person.yearOfBirth;
        if (age > oldestAge){
            oldest = person;
            oldestAge = age;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
