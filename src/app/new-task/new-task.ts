import { Component, EventEmitter, inject, Input, Output, /*signal, WritableSignal*/ } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskToAdd } from './new-task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = ''; 
  private tasksService: TasksService = inject(TasksService); // Alternative way to inject dependency

  /** Method to emit cancel event (close dialog) */
  onCancel(): void { this.close.emit(); }

  /** Method to add task via service and close dialog */
  onSubmit(): void { 
    this.tasksService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
    this.close.emit();
  }

}





  //enteredTitle: WritableSignal<string> = signal('');
  //enteredSummary: WritableSignal<string> = signal('');
  //enteredDate: WritableSignal<string> = signal('');