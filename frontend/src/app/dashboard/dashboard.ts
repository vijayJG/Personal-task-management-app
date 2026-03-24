import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  tasks: any[] = [];
  newTask = '';
  userId = Number(localStorage.getItem('userId'));

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks(this.userId).subscribe((res: any) => {
      this.tasks = res;
    });
  }

  addTask() {
    const task = { title: this.newTask, completed: false };

    this.taskService.addTask(this.userId, task).subscribe(() => {
      this.newTask = '';
      this.loadTasks();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  completeTask(id: number) {
  this.taskService.completeTask(id).subscribe(() => {
    this.loadTasks();
  });
  }
  logout() {
    localStorage.removeItem('userId');
    location.href = '/';
 }
}

