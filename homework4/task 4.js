//---------------task 4------------------

// with setInterval
function detonatorTimer1(delay){
    let timer = delay;
    const timerId = setInterval(() => {
        if (timer === 0) {
            console.log('BOOM!');
            return clearInterval(timerId);
        }
        console.log(timer);
        timer--;
    }, 1000);
}

// with setTimeout
function detonatorTimer2(delay){
    let timer = delay;
    const timerId = setTimeout(() => {
        if (timer === 0) { 
            console.log("BOOM!");
            return 1;
        }
        console.log(timer);
        return detonatorTimer2(timer-1);   
    }, 1000);
}

detonatorTimer1(3);
detonatorTimer2(3);