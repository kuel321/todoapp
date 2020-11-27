import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent1Component } from './todoComponent1/todoComponent1.component';


const routes: Routes = [

  {path: 'todo',component:TodoComponent1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
