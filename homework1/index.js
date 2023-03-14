//-----1st task-----------
function makeNegative(num) {
  return -Math.abs(num);
}

//-----2nd task-----------

function opposite(number) {
  return -number;
}

//-----3rd task-----------

function evenOrOdd(number) {
  if (number % 2 === 0){
    return 'Even'
  }else return 'Odd'
}

//-----4th task--------------

function numberToString(num) {
  return num.toString(); 
}

//-----5th task--------------

function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}

//-----6th task--------------

function solution(str){
  let reversedStr = "";
  for (let i of str) {
    reversedStr = i + reversedStr;
  }
  return reversedStr;
}