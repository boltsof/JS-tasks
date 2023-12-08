import {createElement} from "../render.js";

function createFormAddTaskBoardTemplate() {
    return (
                `<div class="sss"></div>`
            );
}

export class FormAddTaskBoardComponent {
    getTemplate() {
        return createFormAddTaskBoardTemplate();
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
