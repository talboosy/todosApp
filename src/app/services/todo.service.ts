import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AngularFireDatabase } from 'angularfire2/database';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";


import { Todo } from '../models/Todo'

import { config } from "../app.config";


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}
class DBTodo {
  constructor(public title) { }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'
  todos: AngularFirestoreCollection<Todo>;
  private todoDoc: AngularFirestoreDocument<Todo>;

  // public dbtodos: FirebaseListObservable<DBTodo[]>;


  constructor(private http:HttpClient, private db: AngularFirestore) { 
    this.todos = db.collection<Todo>(config.collection_endpoint);
  }
  

  //Get Todos
  // getTodos():Observable<Todo[]> {
  // return this.dbtodos;
  // //  return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  // }

  //Delete Todos
  // deleteTodo(todo:Todo):Observable<Todo> {
  //   const url =`${this.todosUrl}/${todo.id}`
  //   return this.http.delete<Todo>(url, httpOptions)
  // }

  //Toggle Completed
  // toggleCompleted(todo: Todo):Observable<any> {
  //   const url =`${this.todosUrl}/${todo.id}`
  //   return this.http.put(url, todo, httpOptions)
  // }

  //Add Todo
  // addTodo(todo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  // }

  addTodo(todo) {
     this.todos.add(todo)
  }

  updateTodo(id, update) {
    //Get the task document
    this.todoDoc = this.db.doc<Todo>(`${config.collection_endpoint}/${id}`);
    this.todoDoc.update(update);
 }

 deleteTodo(todo) {
  //Get the task document
  this.todoDoc = this.db.doc<Todo>(`${config.collection_endpoint}/${todo.id}`);
  //Delete the document
  this.todoDoc.delete();
}
}
