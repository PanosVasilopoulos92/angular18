import { Injectable } from "@angular/core"
import { NewTaskData, Task } from "./task/task.model"

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task1: Task = {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basics and advanced features of Angular 18 & how to apply them.',
    dueDate: '2024'
  }

  task2: Task = {
    id: 't2',
    userId: 'u5',
    title: 'Master Spring',
    summary: 'Learn all the basics and advanced features of Spring Framework 6 & how to apply them.',
    dueDate: '2024'
  }

  task3: Task = {
    id: 't3',
    userId: 'u1',
    title: 'Master Spring',
    summary: 'Learn all the basics and advanced features of Spring Framework 6 & how to apply them.',
    dueDate: '2024'
  }

  private tasks = [
    this.task1,
    this.task2,
    this.task3,
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })

    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // will save the 'tasks' Array when invoked.
  }

}