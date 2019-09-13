// function writeCards(namesArray, event) {
//   let sentences = [];
//   for (let i = 0; i < namesArray.length; i++ {
//     sentences.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
//   }
//   return sentences
// }
//
//
// function countdown(number) {
//   while (number > 0) {
//     console.log(number);
//     number -= 1;
//   }
//   console.log(number);
// }

function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
