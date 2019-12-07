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
  selectedCat: string = "Personal"
  
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
  updateCat(text: string) {
    this.selectedCat = text;
    console.log(this.selectedCat)
  }

  onSubmit(f: NgForm): void {
    console.log("submitted")
    console.log()
    const todo = {
      title: this.title,
      completed: false,
      category: this.selectedCat
    }

    this.addTodo.emit(todo);
    f.reset();
  }

}
