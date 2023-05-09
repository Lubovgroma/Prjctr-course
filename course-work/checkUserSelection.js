const buttonCalculate = document.getElementById('calculator');
const radioButtonsTime = document.querySelectorAll('input[name="calcTime"]');
const radioButtonsDayType = document.querySelectorAll('input[name="day-type"]');
const firstDateInput = document.querySelector('#first-date');
const secondDateInput = document.querySelector('#second-date');

firstDateInput.addEventListener('change', () => {
    const date = new Date(firstDateInput.value);
    let daySelected = date.getDate();
    let monthSelected = date.getMonth() + 1;
    if (daySelected<10) {
        daySelected = '0'+ daySelected;
    }
    if (monthSelected<10) {
        monthSelected = '0'+ monthSelected;
    }
    const yearSelected =date.getFullYear();
    secondDateInput.disabled = false;
    const minDate = yearSelected + '-' + monthSelected + '-' + daySelected;
    secondDateInput.setAttribute('min', minDate);
});

export const checkUserSelection = (cb) => {
    buttonCalculate.addEventListener('click', () => {
        let selectedTime;
        let selectedDayType;
        const firstDateInputValue = firstDateInput.value;
        const secondDateInputValue = secondDateInput.value;
            for (const radioButtonTime of radioButtonsTime) {
                if (radioButtonTime.checked) {
                    selectedTime = radioButtonTime.value;
                }
            }
            for (const radioButtonDayType of radioButtonsDayType) {
                if (radioButtonDayType.checked) {
                    selectedDayType = radioButtonDayType.value;
                }
            }
            
            cb(selectedTime, selectedDayType, firstDateInputValue, secondDateInputValue);
    });
};