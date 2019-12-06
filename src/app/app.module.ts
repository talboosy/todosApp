import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from "angularfire2/firestore";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC899GNXZRIz7AexD7y-nzj5N4dwseo00U",
  authDomain: "boostodo-84224.firebaseapp.com",
  databaseURL: "https://boostodo-84224.firebaseio.com",
  projectId: "boostodo-84224",
  storageBucket: "boostodo-84224.appspot.com",
  messagingSenderId: "100608680039",
  appId: "1:100608680039:web:a3687d7c318e2993e574c2",
  measurementId: "G-HGB9RFG2J3"
}

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'boostodo-84224'),
    AngularFireDatabaseModule
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
