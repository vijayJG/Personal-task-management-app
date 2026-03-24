import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://localhost:8081/tasks';

  constructor(private http: HttpClient) {}

  getTasks(userId: number) {
    return this.http.get(`${this.api}/${userId}`);
  }

  addTask(userId: number, task: any) {
    return this.http.post(`${this.api}/${userId}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  completeTask(id: number) {
  return this.http.put(`${this.api}/${id}`, {});
}
}