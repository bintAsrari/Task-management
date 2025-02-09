import { Injectable } from '@angular/core';  // ✅ Import Injectable
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/task.model';



@Injectable({ providedIn: 'root' })
export class TaskService {
    private apiUrl = 'http://localhost:8080/api/tasks';

    constructor(private http: HttpClient) { }

    getTasks(userId: number): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.apiUrl}?userId=${userId}`);
    }

    addTask(task: TaskItem): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);
    }

    deleteTask(taskId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${taskId}`);
    }
}
