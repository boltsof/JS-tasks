import {tasks} from "../mock/task.js";


export class TasksService {
    #boardTasks = tasks;
    getBoardTasks() {
        return this.#boardTasks;
    }   
    
    getTasksforStatus(_status){
        return tasks.filter((tasks) => tasks.status.match(_status));
    }
}





