


function questionOne() {
    let answer = prompt('What state was I born in?');
    if (answer.toLowerCase() === 'kentucky') {
        questionTwo();
    } else {
        alert("Try again!");
    }
}

function questionTwo() {
    let answer = prompt('What instrument do I play?');
    if (answer.toLowerCase() === 'piano') {
        questionThree();
    } else {
        alert('Try again!');
    }
}

function questionThree() {
    let answer = prompt('How many pets do I have?');
    if (answer.toLowerCase() === 'three' || answer == 3) {
        questionFour()
    } else {
        alert('Try again!')
    }
}

function questionFour() {
    let answer = prompt('What is my husband\'s name?');
    if (answer === 'Drew' || 'drew') {
        questionFive()
    } else {
        alert('Try again!')
    }
}

function questionFive() {
    let answer = prompt('What college did I go to?');
    if (answer.toLowerCase() === 'cornell') {
        alert('Good job!')
    } else {
        alert('Try again!')
    }
}