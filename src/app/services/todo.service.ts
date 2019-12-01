import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'

  constructor(private http:HttpClient) { }

  //Get Todos
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Delete Todos
  deleteTodo(todo:Todo):Observable<Todo> {
    const url =`${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url =`${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
}
