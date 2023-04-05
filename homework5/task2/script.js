'use strict'
const btnClick = document.querySelector('.button');
const bodyValue = document.querySelector('body');
const dateDiv = document.querySelector('div');

//declaration of saveStatus() / saving status of button and date when button was clicked
const saveStatusAndTime = (latestStatus, latestDate) => {
    localStorage.setItem('Button', latestStatus);
    localStorage.setItem('Date', latestDate);
}

//getting saved status and date
let savedStatus = localStorage.getItem('Button');
let savedDate = localStorage.getItem('Date');

const buttonOn = (timeOfClick) => 
{
    bodyValue.style.backgroundColor = "rgb(234, 210, 200)";
    btnClick.innerHTML = "Turn Off"
    dateDiv.innerHTML = "Last Turn On: " + timeOfClick;
    savedStatus = "On";
    saveStatusAndTime(savedStatus, timeOfClick);
}


const buttonOff = (timeOfClick) => 
{
    bodyValue.style.backgroundColor = "black";
    btnClick.innerHTML = "Turn On";
    dateDiv.innerHTML = "Last Turn Off: " + timeOfClick;
    savedStatus = "Off";
    saveStatusAndTime(savedStatus, timeOfClick);
}

if(savedStatus != null){
    if(savedStatus === "On"){
        buttonOn(savedDate);
    }
    else buttonOff(savedDate);
}

const listener = (event) => {
	let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let timeOfClick = day + "-" + month + "-" + year + "  " + hour + ":" + min + ":" + sec;

    if(savedStatus === "Off"){
    buttonOn(timeOfClick);
    }
    else buttonOff(timeOfClick);  
}

btnClick.addEventListener('click', listener);