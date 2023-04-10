const savedTask = 'savedTask';
export const saveList = (list)=> {
    localStorage.setItem(savedTask, JSON.stringify(list));
};
export const loadList = (list)=> {
    const savedList = localStorage.getItem(savedTask);
    return savedList ? JSON.parse(savedList) : [];
};