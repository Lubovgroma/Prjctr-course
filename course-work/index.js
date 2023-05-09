import { addResult } from "./addResult.js";
import { addAdvanceDate } from "./addAdvanceDate.js";
import { checkUserSelection } from "./checkUserSelection.js";
import { saveResult, loadResult } from "./saveResult.js";
import {calculateWeekendDays, calculateWeekdays} from "./calculateWeekendDays.js"

const dateCalculator = () => {
    loadResult();
    const dimensionObject = new Map([
        ['seconds', 1000],
        ['minutes', 60000],
        ['hours', 3600000],
        ['days', 86400000]
    ]);

    const button1 = document.querySelector('.btn-1');
    const button2 = document.querySelector('.btn-2');

    const addAdvanceDate = (days) => {
        const secondDateField = document.getElementById('second-date'); 
        const firstDateField = new Date(document.getElementById('first-date').value);
        firstDateField.setDate(firstDateField.getDate() + days);
        secondDateField.valueAsDate = firstDateField;
    }
    button1.addEventListener('click', () => {
        addAdvanceDate(7);
    });
    button2.addEventListener('click', () => {
        addAdvanceDate(31);
    });
        
    checkUserSelection((selectedTime, selectedDayType, firstDate, secondDate) => {
        let firstDateEntered = new Date(firstDate);
        const secondDateEntered = new Date(secondDate);
        const timeDifferenceInMilliseconds = secondDateEntered - firstDateEntered;
        if (selectedDayType === 'weekends') {
            const weekendDays = calculateWeekendDays(firstDateEntered, secondDateEntered, dimensionObject.get(selectedTime));
            addResult(weekendDays, selectedTime);
            saveResult(firstDateEntered, secondDateEntered, selectedDayType, selectedTime, weekendDays);
        } else if (selectedDayType === 'all-days') {
            const timeDimension = dimensionObject.get(selectedTime);
            const timeframe = Math.ceil(timeDifferenceInMilliseconds / timeDimension);
            addResult(timeframe, selectedTime);
            saveResult(firstDateEntered, secondDateEntered, selectedDayType, selectedTime, timeframe);
        } else if (selectedDayType === 'weekdays') {
            const timeDimension = dimensionObject.get(selectedTime);
            const weekdays = calculateWeekdays(firstDateEntered, secondDateEntered, timeDimension, timeDifferenceInMilliseconds);
            addResult(weekdays, selectedTime);
            saveResult(firstDateEntered, secondDateEntered, selectedDayType, selectedTime, weekdays);
        }
    });
};

document.addEventListener('DOMContentLoaded', dateCalculator);