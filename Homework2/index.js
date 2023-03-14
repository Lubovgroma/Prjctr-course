//----------task 1---------------

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map(element => element.split(' ').map(element => element.substring(0, 1)).join('.'));
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]*/

//----------task 2---------------

const currentMaxValue = 4589;
arrayMaxValue = Array.from(String(currentMaxValue));
const reversedArrvalue = arrayMaxValue.reverse().join("");
const reverseMaxValue = parseInt(reversedArrvalue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//----------task 3---------------
const resultsArray = [1, 2, [3, [4]]];
const productOfArray = resultsArray.flat(Infinity).reduce((a,b)=>a*b);
console.log(productOfArray); // 24