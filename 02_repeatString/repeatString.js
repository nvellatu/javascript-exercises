const repeatString = function(string, num) {
    if (num <0){return 'ERROR';}
    var wordSum = "";
    for (let i = 0; i < num; i++) {
        wordSum += string;
    }
    return wordSum;
};

// Do not edit below this line
module.exports = repeatString;
