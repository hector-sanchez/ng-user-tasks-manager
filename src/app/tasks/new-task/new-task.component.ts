import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  newTitle = '';
  newSummary = '';
  newDueDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.newTitle,
        summary: this.newSummary,
        dueDate: this.newDueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
