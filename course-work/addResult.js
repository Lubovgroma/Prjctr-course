const resultElement = document.querySelector('.result');
const result = document.createElement('div');

export const addResult = (timeframe, selectedRange) => {
    result.innerHTML = `${timeframe} ${selectedRange}`
    resultElement.append(result);
};