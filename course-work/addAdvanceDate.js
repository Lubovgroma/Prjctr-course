const button = document.querySelector('.btn');

export const addAdvanceDate = (cb) => {
    button.addEventListener('click', () => {
        cb(button.value);
    });
};