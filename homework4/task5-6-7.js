'use strict';

// //---------------task 5------------------

let airline = {
    name: 'Emirates',
    hub: 'DXB - Dubai International Airport',
    country: 'UAE',
    type: 'private',
    aircraftBoeing: 'Boeing 777',
    aircraftAirbus: 'Airbus A380',
    destinations: 161,
    aircraftName(){
        console.log(`${this.name} has 2 types of aicrafts ${this.aircraftBoeing} and ${this.aircraftAirbus}`);
    },
    countryAndHub(){
        console.log(`The company's Headquarters is locatad in ${this.country} and Hub is in ${this.hub}`);
    }
};

airline.aircraftName();
airline.countryAndHub();

// //---------------task 6------------------

let securedAircraftName = airline.aircraftName.bind(airline);
let securedCountryAndHub = airline.countryAndHub.bind(airline);

setTimeout(securedAircraftName, 1000); // виведе коректний результат*
setTimeout(securedCountryAndHub, 2000); // виведе коректний результат*

//--------------task 7-------------------

function someFunction (a, b){
    return console.log(a * b);
}// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    return (a, b) => { setTimeout(() => {
        func(a, b);
    }, seconds*1000);
    }
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(3, 5); // викликаєте декоратор*
console.log('Chill out, you will get you result in 5 seconds')
// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'