import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './AddTask.Model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddTask>();

  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.inputTitle,
      summary: this.inputSummary,
      date: this.inputDate
    }, this.userId)
    this.close.emit();
  }
}
