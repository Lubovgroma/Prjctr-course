//---------------task 1----------------
function durationBetweenDates(firstDate = '1999-12-01', secondDate = '2015-05-26', dimension = 'days') {
    const firstInputDate = new Date(firstDate);
    const secondInputDate = new Date(secondDate);
    const diffTime = Math.abs(firstInputDate - secondInputDate);

    dimensionObject = new Map([
        ['seconds', 1000],
        ['minutes', 60000],
        ['hours', 3600000],
        ['days', 86400000]
    ]);
    if (dimensionObject.has(dimension)){
        return Math.ceil(diffTime/dimensionObject.get(dimension));
    }
    return diffTime;
}

console.log(durationBetweenDates('2004-12-01', '2000-07-09', 'hoursss'));
//console.log(durationBetweenDates());
//---------------task 2----------------

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};
function optimizer(data) {
    const newObj = Object.entries(data)
    .map(([key, value]) => ([key.toUpperCase(), Number(value)]))
    .map(([key, value]) => ([key, value.toFixed(2)]));
    return Object.fromEntries(newObj);
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);   // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

//-----------------task 3-----------------

function recursiveOddSumTo(number) {
    if (number === 1){
        return 1;
    } 
    if((number % 2 == 0)){
        return recursiveOddSumTo(number-1);
    } 
    return number + recursiveOddSumTo(number - 2);
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

//--------------------------------------------

function iterativeOddSumTo(number) {
    let sum =0;
    for (let index = 1; index <= number; index+=2) {
        sum += index;
    }
    return sum;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25