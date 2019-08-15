// Code your solutions in this file

function writeCards(str_arr, event){
  let result = [];
  for(let i = 0; i < str_arr.length; i++){
    result.push(`Thank you, ${str_arr[i]}, for the wonderful surprise gift!`);
  }
  return result;
}

function countdown(num){

  while(num >= 0 ){
    console.log(num);
    num--;
  }
}


