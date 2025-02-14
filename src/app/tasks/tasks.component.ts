import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks"
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { AddTask } from './new-task/AddTask.Model';
import { TasksService } from './tasks.service';

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
  
  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string){
    
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: AddTask){
    
    this.isAddingTask = false;
  }
}
