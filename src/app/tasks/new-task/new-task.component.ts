import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './AddTask.Model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddTask>();

  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.inputTitle,
      summary: this.inputSummary,
      date: this.inputDate
    })
  }
}
