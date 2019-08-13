// Code your solutions in this file
function writeCards(names, event) {
  let solution = []
  for ( let i = 0; i < names.length; i++ ) {
    solution.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return solution
}

function countdown(number) {
  let count = number
  while (count >= 0) {
    console.log(count--)
  }
}
