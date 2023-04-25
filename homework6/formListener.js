const formItem = document.querySelector('#form');
const inputItem = document.querySelector('#input');

export const formListener = (cb) => {
        formItem.addEventListener('submit', (action) => {
        action.preventDefault();
        cb(inputItem.value);
        inputItem.value = '';
    });
}
