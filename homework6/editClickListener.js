const listElement = document.querySelector('#list');
//const editor = window.prompt("Edit your task");

export const editClickListener = (cb) => {
    listElement.addEventListener('click', (event) => {
        if ('edit' in event.target.dataset) {
            const editor = window.prompt("Edit your task");
            if (editor != null ) {
               cb(editor, Number(event.target.dataset.edit)); 
            }
        }
    });
};