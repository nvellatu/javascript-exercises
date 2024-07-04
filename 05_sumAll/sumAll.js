const sumAll = function(num1, num2) {
    if (!((typeof num1 === 'number' && !isNaN(num1) && num1>=0) && (typeof num2 === 'number' && !isNaN(num2) && num2>=0))){
        return 'ERROR';
    }

    var sum = 0;
    if (num1 <= num2){
        for(let i=num1; i<=num2; i++){
            sum+= i;
        }
    }
    else{
        for(let i=num2; i<=num1; i++){
            sum+= i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
