const fibonacci = function(num) {
    if (num <0) {return 'OOPS';}
    var sequence = [0,1];
    if (num <=1){return sequence[num];}

    for(i = 2; i <=num; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence[sequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
