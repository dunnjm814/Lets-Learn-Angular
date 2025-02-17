import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { AddTask } from "./new-task/AddTask.Model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = DUMMY_TASKS;
    
    constructor(){
        const tasks = localStorage.getItem('tasks');

        if (tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((t)=> t.userId === userId)
    }

    addTask(taskData: AddTask, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((t)=> t.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}