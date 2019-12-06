import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { config } from "../../app.config";
import { map } from 'rxjs/operators';


@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  // todos: Todo[];
  @Input() todo: Todo;
  todos: Observable<any[]>;

  constructor(private db: AngularFirestore, private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as Todo;
          //Get document id
          const id = a.payload.doc.id;
          console.log(id)
          //Use spread operator to add the id to the document data
          return { id, ...data };
      });
      }))
    // this.todoService.getTodos().subscribe(todos => {
    //   this.todos = todos
    // });
    // console.log(this.todos)
  }

  // deleteTodo(todo: Todo) {
  //   //Remove toto from UI
  //   this.todos = this.todos.filter(t => t.id !== todo.id);
  //   //Remove todo from server
  //   this.todoService.deleteTodo(todo).subscribe();
  // }

  addTodo(todo: Todo) {
     this.todoService.addTodo(todo)
    }
  
}
