//---------------task 4------------------

detonatorTimer1(3);
detonatorTimer2(3);
// 3
// 2
// 1
// BOOM!*

// with setInterval
function detonatorTimer1(delay){
    let timer = delay;
    console.log(timer);
    let timerId = setInterval(() => {
        timer--;
        console.log(timer); //constantly executes expression inside callback function until clearInterval
    }, 1000);
    setTimeout(() => { clearInterval(timerId); console.log('BOOM!'); }, delay*1000); //stoped after delay
}

// with setTimeout
function detonatorTimer2(delay){
    let timer = delay;
    let timerId = setTimeout(() => {
        console.log(timer); // in console.log will show first value of delay   
        timerId = setTimeout(() => {
            timer--;
            console.log(timer); //second value
            timerId = setTimeout(() => {
                timer--;
                console.log(timer); //third value
                timerId = setTimeout(() => {
                    console.log('BOOM!'); // finish
                }, 1000)
            }, 1000)
        }, 1000)
           
    }, 1000);
}