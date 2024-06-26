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

/**
 * The main function that executes the script.
 * It calculates and adds a new 'Reading Time' element to AO3 listings.
 */
function main() {
    var wpm = 500; // TODO this needs to be able to be set by the user

    var wordCountQuerySelector = document.querySelectorAll('dd.words');

    for(let wordCountElement of wordCountQuerySelector){
        // convert the word count from a string to an integer, removing the comma(s) from it
        let wordCount = parseInt(removeCommas(wordCountElement.innerText));
        // calculate the number of minutes it would take to read the given number of words at the given words per minute speed
        let minutesToRead = calculateMinutesToRead(wordCount, wpm);

        // round the number of minutes to the nearest integer
        let roundedMinutesToRead = Math.floor(minutesToRead);

        // create new dt element to hold the time to read in minutes
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        // create new text node to hold the time to read in minutes
        const node = document.createTextNode("Reading Time: ");
        const node2 = document.createTextNode(roundedMinutesToRead + " minutes");

        // add the relevant classes to the new dt and dd elements
        dt.classList.add('chapters');
        dd.classList.add('chapters');

        // append the new text node to the new dt element
        dt.appendChild(node);
        dd.appendChild(node2);

        // create a new div element to hold the new dt and dd elements
        const div = document.createElement('div');

        // add the relevant classes to the new div element
        div.classList.add('chapters');

        // append the new dt and dd element to the new div element
        div.appendChild(dt);
        div.appendChild(dd);

        // append the new dt element to the parent element of the word count
        // this is a dl element
        wordCountElement.parentElement.appendChild(div);
    };

}

main();
