/**
 * Simple extension, which adds a new read time element to AO3 listings.
 * @author "Gabriella 'Contrastellar' Agathon"
 */

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

function main() {
    var wpm = 500; // words per minute -- this needs to be able to be set by the user

    var wordCountQuerySelector = document.querySelectorAll('dd.words');

    for(let wordCountElement of wordCountQuerySelector){
        // convert the word count from a string to an integer, removing the comma(s) from it
        let wordCount = parseInt(removeCommas(wordCountElement.innerText));
        // calculate the number of minutes it would take to read the given number of words at the given words per minute speed
        let minutesToRead = calculateMinutesToRead(wordCount, wpm);

        // round the number of minutes to the nearest integer
        let roundedMinutesToRead = Math.round(minutesToRead);

        // create new dt element to hold the time to read in minutes
        const dt = document.createElement('dt');
        // create new text node to hold the time to read in minutes
        const node = document.createTextNode("Reading Time: " + roundedMinutesToRead.toString() + " minutes");

        // append the new text node to the new dt element
        dt.appendChild(node);

        // append the new dt element to the parent element of the word count
        // this is a dl element
        wordCountElement.parentElement.appendChild(dt);
    };

}

main();
