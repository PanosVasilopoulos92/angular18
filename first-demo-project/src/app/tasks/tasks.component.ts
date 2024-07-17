import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { type NewTaskData, type Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) nameOfUser!: string;
  isAddingTask = false;
  // private tasksService: TasksService;

  // Dependency Injection through the Constructor
  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}

