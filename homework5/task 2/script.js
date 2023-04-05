'use strict'
const btnClick = document.querySelector('.button');
const bodyValue = document.querySelector('body');
const dateDiv = document.querySelector('div');

const buttonStatusKey = 'lastStatus';
const lastDateKey = 'lastDate';
//declaration of saveStatus() / saving status of button and date when button was clicked
const saveStatusAndTime = (latestStatus, latestDate) => {
    localStorage.setItem(buttonStatusKey, latestStatus);
    localStorage.setItem(lastDateKey, latestDate);
}

//getting saved status and date
let savedStatus = localStorage.getItem(buttonStatusKey);
let savedDate = localStorage.getItem(lastDateKey);

const switchButton = (timeOfClick, buttonAction) => 
{   
    if (buttonAction === "on") {
        bodyValue.style.backgroundColor = "rgb(234, 210, 200)";
        btnClick.innerHTML = "Turn Off";
    }
    else if (buttonAction === "off"){
        bodyValue.style.backgroundColor = "black";
        btnClick.innerHTML = "Turn On";
    }
    dateDiv.innerHTML = `Last Turn ${buttonAction}: ${timeOfClick}`;
    savedStatus = buttonAction;
    saveStatusAndTime(savedStatus, timeOfClick);
}

if(savedStatus !== null){
    if(savedStatus === "on"){
        switchButton(savedDate, "on");
    }
    else {
        switchButton(savedDate, "off");
    }
}

const listener = (event) => {
	let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let timeOfClick = `${day}-${month}-${year}  ${hour}:${min}:${sec}`;

    if(savedStatus === "off"){
        switchButton(timeOfClick, "on");
    }
    else {
        switchButton(timeOfClick, "off");
    }  
}

btnClick.addEventListener('click', listener);