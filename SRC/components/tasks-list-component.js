import { createElement } from "../render.js";
import { FormOneTaskComponent } from "./one-task-component.js";
import { tasks } from "../mock/task.js";

function createFormTasksListTemplate() {
    const tasksWindow = document.createElement("div");
    tasksWindow.className = "type-of-content-block";

    // Группируем массив по статусу
    function getGroupBy(key) {
        return function group(array) {
            return array.reduce((acc, obj) => {
                const property = obj[key];
                acc[property] = acc[property] || [];
                acc[property].push(obj);
                return acc;
            }, {});
        };
    }
    const groupByStatus = getGroupBy("status");
    let groupTasksGroup = groupByStatus(tasks);

    // Сортируем массив по порядку
    const testmass = [2,0,3,1];
    const groupTasks = testmass.reduce((acc, index) => {
        const key = Object.keys(groupTasksGroup)[index];
        acc[key] = groupTasksGroup[key];
        return acc;
    }, {});

    // Проходимся по массиву переводим данные в HTML код
    Object.values(groupTasks).forEach((columnElement) => {
        const columnTasks = document.createElement("div");
        columnTasks.className = `${(columnElement[0].status)} task-block`;
        const columnTaskName = document.createElement("h3");
        columnTaskName.className = `${(columnElement[0].status)} task-block-name`;
        columnTaskName.innerHTML += `${defineName(columnElement[0].status)}`;
        columnTasks.innerHTML += columnTaskName.outerHTML;

        
        Object.values(columnElement).forEach((data) => {
            const task = new FormOneTaskComponent(data);
            const template = task.getTemplate();
            columnTasks.innerHTML += template;
        });
        
        if (columnElement[0].status == 'basket'){
            // console.log(columnElement[0].status);
            const basketElement = document.createElement("button");
            basketElement.className = `button-delete`;
            basketElement.id = 'button-delete'
            basketElement.innerHTML = `Очистить`;
            columnTasks.innerHTML += basketElement.outerHTML;
        }
        tasksWindow.innerHTML+=columnTasks.outerHTML;
    });

    return tasksWindow.outerHTML;
}

export class FormTasksListComponent {
    getTemplate() {
        return createFormTasksListTemplate();
    }
    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }
    removeElement() {
        this.element = null;
    }
}

function defineName (name) {
    switch (name) {
        case 'backlog':
            return 'Бэклог'
        case 'in-processing':
            return 'В процессе'
        case 'done':
            return 'Готово'      
        case 'basket':
            return 'Корзина'
        default:
            return name
    }
}

