import { Injectable } from '@angular/core';
import { INewTask, ITask } from './../task/task.model';
import { DUMMY_TASKS } from './dummy-tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)!;
  }

  addTask(task: INewTask, userId: string) {
    this.tasks.unshift({
      ...task,
      id: new Date().getTime().toString(),
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)!;
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
