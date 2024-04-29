for(let statValueElement of document.querySelectorAll('dd.words')){
    statValueElement.innerText = parseInt(statValueElement.innerText.replace(/,/g, ''));
    console.log(statValueElement.innerText);
}
