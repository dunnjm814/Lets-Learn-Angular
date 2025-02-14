import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks"
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { AddTask } from './new-task/AddTask.Model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name! : string;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks(){
    return this.tasks.filter((t)=> t.userId === this.userId)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((t)=> t.id !== id)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: AddTask){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
