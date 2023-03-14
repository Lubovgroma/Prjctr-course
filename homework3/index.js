//---------------task 1----------------
function durationBetweenDates(firstDate, secondDate, dimension) {
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);
    const diffTime = Math.abs(date1 - date2);
    if (dimension === 'seconds') {
        const diffSeconds = Math.ceil(diffTime / (1000));
        return console.log(diffSeconds);
    }
    if (dimension === 'minutes') { 
        const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60));
        return console.log(diffMinutes);
    }
    if (dimension === 'hours') {
        const diffHours = Math.ceil(diffTime / (1000 * 60));
        return console.log(diffHours);
    }
    if (dimension === 'days') {
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
        return console.log(diffDays);
    }
    //console.log(duration);
}

durationBetweenDates('2004-12-01', '2000-07-09', 'hours');

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
    }else if((number%2 == 1)){
        return number + recursiveOddSumTo(number - 2);
    } return recursiveOddSumTo(number-1);
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