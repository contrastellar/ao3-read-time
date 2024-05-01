var wpm = 500;
const seconds = 60;
const milliseconds = 1000;

var wordCountQuerySelector = document.querySelectorAll('dd.words');

for(let wordCountElement of wordCountQuerySelector){
    let wordCount = parseInt(removeCommas(wordCountElement.innerText));
    let minutesToRead = calculateMinutesToRead(wordCount, wpm);

    let roundedMinutesToRead = Math.round(minutesToRead);

    const dt = document.createElement('dt');
    const node = document.createTextNode(" Time to read in minutes: " + roundedMinutesToRead.toString());

    dt.appendChild(node);

    wordCountElement.parentElement.appendChild(dt);
};

/**
 * Removes commas from a word count and returns the integer value
 * @param {string} wordCount - The word count with commas
 * @returns {number} The integer value of the word count without commas
 */
function removeCommas(wordCountInnerText){
    return wordCountInnerText.replace(/,/g, '');
}

/**
 * Calculates the number of minutes it would take to read a given number of words at a given words per minute speed.
 *
 * @param {number} wordCount - The number of words to be read.
 * @param {number} wpm - The words per minute speed.
 * @returns {number} The number of minutes it would take to read the given number of words.
 */
function calculateMinutesToRead(wordCount, wpm) {
    return wordCount / wpm;
  }
