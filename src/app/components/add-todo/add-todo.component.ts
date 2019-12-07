import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import {NgForm} from '@angular/forms';
// class DBTodo {
//   constructor(public title) { }
// }
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  
})
export class AddTodoComponent implements OnInit {
@Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;
  
//  public dbtodos: FirebaseListObservable<DBTodo[]>;
//db: AngularFireDatabase // in constructor bracets
  constructor(private af: AngularFireDatabase) {
    // this.dbtodos = db.list('/todos');
}
  // dbtodos$: AngularFireList<any[]>

  ngOnInit() {
    // this.dbtodos$ = this.af.list('/todos');
  }

  // getDBTodos() {
  //   return this.dbtodos;
  // }

  onSubmit(f: NgForm): void {
    console.log("submitted")
    
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
    f.reset();
  }

}
