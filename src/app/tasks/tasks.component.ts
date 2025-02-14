import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks"
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name! : string;
  tasks = DUMMY_TASKS;

  get selectedUserTasks(){
    console.log(this.tasks.filter((t)=> t.userId === this.userId))
    return this.tasks.filter((t)=> t.userId === this.userId)
  }
}
