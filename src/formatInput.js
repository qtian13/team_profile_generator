// remove extra space and capitalize the first letters in each word
const formatInput = (inputString) => {
    inputWords = inputString.replace(/\s+/g, ' ').trim().split(" ");
    inputWordsFormatted = inputWords.map(word => word[0].toUpperCase() + word.substr(1).toLowerCase());
    return inputWordsFormatted.join(" ");
};

module.exports = formatInput;