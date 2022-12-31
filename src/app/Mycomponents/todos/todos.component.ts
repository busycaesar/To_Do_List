import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  localItem: string="";
  todos: Todo[] = [];
 constructor(){
  this.localItem=localStorage.getItem("todos") || "";
  if(!this.localItem.length){this.todos=[];}
  else{
  this.todos=JSON.parse(this.localItem);
  }
 };
 deleteTodo(todo:Todo) {
console.log("I am in deleteTodo.",todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index,1);
localStorage.setItem("todos",JSON.stringify(this.todos)); 
}
addTodo(todo:Todo) {
  console.log("I am in addTodo.",todo);
  this.todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(this.todos));
   }
   
   checkBoxTodo(todo:Todo) {
    console.log("I am in CheckBoxTodo.",todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
     }
}
