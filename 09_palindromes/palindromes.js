const palindromes = function (string) {
    const punctuationAndSpaces = ' ,.!?'
    //convert letters to lowercase and filter out punctuation
    string = string.toLowerCase()
        .split('')
        .filter(char => !punctuationAndSpaces.includes(char))
        .join('');

    //check if palindrome
    const reversed = string.split('').reverse().join('');
    if (string ===reversed){return true;}
    return false;
};

// Do not edit below this line
module.exports = palindromes;
