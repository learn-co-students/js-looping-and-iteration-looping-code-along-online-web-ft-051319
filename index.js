function writeCards(names, message) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

function countdown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}