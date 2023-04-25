const input = document.querySelector('#input');
export const formChgListener = (cb) =>{
    input.addEventListener('keyup', ()=>{
        cb(input.value);
    });
};