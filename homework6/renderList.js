`use strict`;

const listOfTasks = document.querySelector('#list');
export const renderList = (list) => {
    listOfTasks.innerHTML = '';
    
    list.forEach((element, index) => {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="checkbox" type="checkbox">
                                    ${element.name}
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                            <a class="remove mdi mdi-close-circle-outline" data-index ="${index}"></a>
                            <i class="fa fa-edit center" data-edit ="${index}"></i>`
        listOfTasks.append(newTask);
    });
    
};
