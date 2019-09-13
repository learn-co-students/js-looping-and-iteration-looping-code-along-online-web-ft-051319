// Code your solutions in this file
let names = ["Ada", "Brendan", "Ali"];

function writeCards(array, event) {
    let thanks = [];
    for (let i=0; i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    };
    return thanks;
};

writeCards(names, "birthday"); 


function countdown(num){
    let n = num;
while(n >= 0){
    console.log(n--);
}
}