import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import{AddTodoComponent} from './Mycomponents/add-todo/add-todo.component';
import { AboutComponent } from './Mycomponents/about/about.component';

const routes: Routes = [
  {path:'',component:TodosComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
