// Code your solutions in this file
const names = ["Harry", "Mark", "John"]

function writeCards(names, event) {
  var text;
  var messages = [];
  for (let i = 0; i < names.length; i++) {
    // console.log(`Wrapped ${gifts[i]} and added a bow!`);
    messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }

  return messages;
}
function countdown(count) {
  var index;
  index = count;
  while (index >= 0) {

    console.log (index);
    index = index - 1;

  }

}

writeCards(names);
countdown( 4 );
