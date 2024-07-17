import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService)

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }

}