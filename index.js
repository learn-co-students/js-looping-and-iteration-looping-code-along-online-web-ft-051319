function writeCards(names, event) {
    var cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countdown(integer) {
    let int = integer;
    console.log(int);
    while (int > 0) {
        int--;
        console.log(int);
    }
}