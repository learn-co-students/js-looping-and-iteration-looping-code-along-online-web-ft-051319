// Code your solutions in this file
function writeCards(names,event){
  let ans = [];
  for(let i = 0; i< names.length; i++){
    ans.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return ans;
}

function countdown(num){
  while(num>=0){
    console.log(num);
    num--;
  }
}
