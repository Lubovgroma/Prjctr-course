`use strict`;

const listOfTasks = document.querySelector('#list');
export const renderList = (list) => {
    listOfTasks.innerHTML = '';
    
    list.forEach((element, index) => {
        const newTask = document.createElement('li');
        const isChecked = list[index].checked;
        let inputChecked = null;
        isChecked ? inputChecked = "checked" : inputChecked = "unChecked";
        
        newTask.innerHTML = `
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox"  value="test" class="checkbox" data-checker ="${index}" id="li${index}"${inputChecked}>
                                    ${element.name}
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                            <a class="remove mdi mdi-close-circle-outline" data-index ="${index}"></a>
                            <i class="fa fa-edit center" data-indicator ="${index}"></i>`
        listOfTasks.append(newTask);

    });
    
};
