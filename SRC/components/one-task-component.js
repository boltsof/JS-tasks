import {createElement} from "../render.js";
// import {TasksService} from "../service/task-server.js";


function createFormOneTaskTemplate(status, title) {
    return (
                `<li class="${status}-li">${title}</li>`
            );
}

export class FormOneTaskComponent {

    #id = null;
    #status = null;
    #title = null;
    
    constructor({id, title, status}){
    this.#id = id;
    this.#status = status;
    this.#title = title;
    }


    getTemplate() {
        return createFormOneTaskTemplate(this.#status, this.#title);
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


