const listElement = document.querySelector('#list');
const checkedCompletedTask = document.getElementById("c1");
const checkedStatus = true;

export const checkCompletedTask = () => {
    listElement.addEventListener('click', (event) => {
        if ('cheker' in event.target.dataset) {
           //if(checkedCompletedTask.checked) {
                console.log(checkedCompletedTask.value);
           //}
            
        }
    });
};