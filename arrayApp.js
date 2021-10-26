let docNumber = document.getElementById("getNumbers");
let arrayOfNumbers = [ ];
function getNumbers() {
    for (let i = 0; i <= 20; i++ ) {
        arrayOfNumbers.push(i);
        docNumber.innerHTML = arrayOfNumbers.join(" "); 
    }
}

let arrayShuffle = arrayOfNumbers;

function shuffleArray() {
    for (let i = arrayShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayShuffle[i], arrayShuffle[j]] = [arrayShuffle[j], arrayShuffle[i]];
        docNumber.innerHTML = arrayShuffle.join(" ");
    }
}
let arraySort = arrayShuffle;
function sortArrayA() {
    arraySort.sort(function(a, b) {return a-b});
    docNumber.innerHTML = arraySort.join(" ");
}

function sortArrayD() {
    arraySort.sort(function(a, b) {return b-a});
    docNumber.innerHTML = arraySort.join(" ");
}

function pushRandomNr(min, max) {
    let randomPush = Math.floor((Math.random()* 21) + 30);
    arrayOfNumbers.push(randomPush);
    docNumber.innerHTML = arrayOfNumbers.join(" ");
    
}

docNumber.style.cssText = "padding: 10px; border: 2px solid blue; text-align: center; font-weight: bold";