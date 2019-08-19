// Code your solutions in this file
function writeCards(names, message) {
    let cards = []

    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return cards
}

function countdown(i) {
    let count = i
    while (count >= 0) {
        console.log(count--)
    }
}