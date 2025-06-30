import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
