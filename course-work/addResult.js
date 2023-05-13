const resultElement = document.querySelector('.result');
const result = document.createElement('div');

export const addResult = (timeframe, selectedRange) => {
    if (isNaN(timeframe) || typeof selectedRange === "undefined") {
        return;
    }
    result.innerHTML = `${timeframe} ${selectedRange}`
    resultElement.append(result);
};