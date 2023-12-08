import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/add-task-component.js';
import { FormAddTaskBoardComponent } from './components/tasks-board-component.js'
import { FormTasksListComponent } from './components/tasks-list-component.js'
import { TasksService } from './service/task-server.js';
import { tasks } from './mock/task.js';

let taskArr = tasks



import { render, RenderPosition } from './render.js';


const taskService = new TasksService();
const bodyContainer = document.querySelector('body');
const formContainer = document.querySelector('.content-block');
const formTaskBoard = document.querySelector('.content-block');
const formTaskList = new FormAddTaskBoardComponent();

// console.log(bodyContainer);


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new FormTasksListComponent(), formTaskList.getElement());
render(formTaskList, formTaskBoard);





// добавление новой задачи в бэклог
document.getElementById('myButton').onclick = addTask;
function addTask() {
    const input = document.getElementById('input-id'); // Извлекаем элемент input
    taskArr.push({ id: `${Object.keys(taskArr).length}`, title: `${input.value}`, status: 'backlog' });
    console.log(taskArr);
    removeTasks();
    render(new FormTasksListComponent(), formTaskList.getElement());
}

function removeTasks() {
    formTaskList.getElement().querySelector('.type-of-content-block').replaceChildren();
    // formContainer.getElement().remove()
}

// Очистка корзины

document.getElementById('button-delete').onclick = deleteTask;
function deleteTask() {
    taskArr.forEach((element) => {
        if (element.status == 'basket'){
            delete taskArr.status;
            console.log(element.id);
        }
    })
    console.log(taskArr);
}

