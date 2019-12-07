import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

//Set Dynamic Classes
setClasses() {
  let classes = {
    todo: true,
    'is-complete': this.todo.completed
  }
  return classes
} 

//onToggle
onToggle(todo) {
  // Toggle in UI
  console.log("toggled")
  // var isCompleted = todo.completed;
  todo.completed = !todo.completed
  // Toggle on server
  this.todoService.updateTodo(todo)
  // todo.completed = !todo.completed
  console.log(todo.completed)
}

onDelete(todo) {
  console.log("deleted")
  this.deleteTodo.emit(todo)
}

}
