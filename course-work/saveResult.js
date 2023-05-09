const listOfResults = document.querySelector('.listOfResults');
const resultEl = 'resultEl';
let resultsArray = [];

export const saveResult = (firstDate, secondDate, selectedDayType, selectedTime, result) => {
    const firstDateFormated = `${firstDate.getDate()}-${firstDate.getMonth()}-${firstDate.getFullYear()}`;
    const secondDateFormated = `${secondDate.getDate()}-${secondDate.getMonth()}-${secondDate.getFullYear()}`;
    const resultCombined = `First date: ${firstDateFormated}; second date: ${secondDateFormated}; result: ${result} ${selectedTime}`;
    if (resultsArray.length > 9) {
        resultsArray.shift();
    }
    resultsArray.push(resultCombined);
    localStorage.setItem(resultEl, JSON.stringify(resultsArray));
    listOfResults.innerHTML ='';
    loadResult();
};  

export const loadResult = () => {
    if (localStorage.getItem(resultEl)) {
            resultsArray = JSON.parse(localStorage.getItem(resultEl));
            resultsArray.forEach(element => {
            let div = document.createElement('div');
            div.append(element);
            listOfResults.append(div);
        });
    }
};