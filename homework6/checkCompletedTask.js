const listElement = document.querySelector('#list');

export const checkCompletedTask = (cb) => {
    listElement.addEventListener('click', (event) => {
        if ('checker' in event.target.dataset === false){  
            return
        }
        else {
            const checkedCompletedTask = document.querySelector(`#li${event.target.dataset.checker}`);
            const checkedStatus = checkedCompletedTask.checked;
            cb(checkedStatus, Number(event.target.dataset.checker));
        }
    });
};

