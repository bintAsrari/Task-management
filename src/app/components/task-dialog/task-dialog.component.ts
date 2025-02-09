import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { TaskItem } from '../../models/task.model'; // ✅ Import Task interface

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {
  task: TaskItem = {
    title: '',
    description: '',
    status: 'PENDING',
    type: 'default',  // ✅ Provide default values
    state: 'new',
    source: 'manual',
    invoke: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) {}

  saveTask() {
    this.taskService.addTask(this.task).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
