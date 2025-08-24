import { Component, EventEmitter, Output, /*signal, WritableSignal*/ } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskToAdd } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskToAdd>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  //enteredTitle: WritableSignal<string> = signal('');
  //enteredSummary: WritableSignal<string> = signal('');
  //enteredDate: WritableSignal<string> = signal('');

  /** Method to emit cancel event (close dialog) */
  onCancel(): void { this.cancel.emit(); }

  /** Method to emit add event (create new task) */
  onSubmit(): void { this.add.emit({title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate});}

}