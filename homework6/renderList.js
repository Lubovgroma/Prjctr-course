`use strict`;

const listOfTasks = document.querySelector('#list');
export const renderList = (list) => {
    listOfTasks.innerHTML = '';
    
    list.forEach((element, index) => {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" id="c1" value="test" class="checkbox" data-cheker ="${index}">
                                    ${element.name}
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                            <a class="remove mdi mdi-close-circle-outline" data-index ="${index}"></a>
                            <i class="fa fa-edit center" data-indicator ="${index}"></i>`
        listOfTasks.append(newTask);
    });
    
};
