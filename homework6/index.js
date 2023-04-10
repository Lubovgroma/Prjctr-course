`use strict`;


import {renderList} from './renderList.js';
import { formListener } from './formListener.js';
import { loadList } from './localStorage.js';
import { saveList } from './localStorage.js';
import { listClickListener } from './listClickListener.js';
import { formChgListener } from './formChgListener.js';
import {byName} from './filter.js';
import {editClickListener} from './editClickListener.js';
/*
  Google: todo list html css template
  https://freefrontend.com/bootstrap-to-do-lists/
  https://bbbootstrap.com/snippets/awesome-todo-list-template-25095891
 */

//console.log('Workshop 1');

const startApp = () => {
    const tasksList = loadList();

    renderList(tasksList);

    formListener((newListItem) => {
        tasksList.push({
          name: newListItem,
          completed: false
        });
        saveList(tasksList);
        renderList(tasksList);
    });

    listClickListener((index) => {
      tasksList.splice(index, 1);
      saveList(tasksList);
      renderList(tasksList);
    });

    formChgListener((text)=>{
      const filteredTask = tasksList.filter(byName(text));
      renderList(filteredTask);
    });

    editClickListener((editedText, index) => {
      tasksList.push({
        name: editedText,
        completed: false
      });
      tasksList.splice(index, 1);
      saveList(tasksList);
      renderList(tasksList);
    });

};

document.addEventListener('DOMContentLoaded', startApp);
