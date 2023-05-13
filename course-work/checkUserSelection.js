const buttonCalculate = document.getElementById('calculator');
const firstDateInput = document.querySelector('#first-date');
const secondDateInput = document.querySelector('#second-date');

const setMinDate = (date) =>{
    let daySelected = date.getDate();
    let monthSelected = date.getMonth() + 1;
    if (daySelected<10) {
        daySelected = '0'+ daySelected;
    }
    if (monthSelected<10) {
        monthSelected = '0'+ monthSelected;
    }
    const yearSelected =date.getFullYear();
    const minDate = yearSelected + '-' + monthSelected + '-' + daySelected;
    return minDate;
};

firstDateInput.addEventListener('change', () => {
    const date = new Date(firstDateInput.value);
    secondDateInput.disabled = false;
    secondDateInput.setAttribute('min', setMinDate(date));
});

export const checkUserSelection = (cb) => {
    buttonCalculate.addEventListener('click', () => {
        let selectedTime;
        let selectedDayType;     
        const firstDateInputValue = firstDateInput.value;
        const secondDateInputValue = secondDateInput.value;
        const radioButtonsTime = document.querySelectorAll('input[name="calcTime"]:checked');
        const radioButtonsDayType = document.querySelectorAll('input[name="day-type"]:checked');
        selectedTime = radioButtonsTime.length > 0 ? radioButtonsTime[0].value : undefined;
        selectedDayType = radioButtonsDayType.length > 0 ? radioButtonsDayType[0].value : undefined;
        cb(selectedTime, selectedDayType, firstDateInputValue, secondDateInputValue);
    });
};