import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<{ title: string; summary: string; date: string; }>();
  // @Output() add = new EventEmitter<NewTaskData>();
  private tasksService = inject(TasksService)
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // using signal to update state. Nothing need to change in template in order for ngModel to work.
  enteredTitleSignal = signal('');
  enteredSummarySignal = signal('');
  enteredDateSignal = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId)

    this.close.emit();

    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
  }

}
