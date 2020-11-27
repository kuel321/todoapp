import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoComponent1Component } from './todoComponent1/todoComponent1.component';
import { ShowTodoComponent } from './todoComponent1/show-todo/show-todo.component';
import { AddEditTodoComponent } from './todoComponent1/add-edit-todo/add-edit-todo.component';


import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent1Component,
    ShowTodoComponent,
    AddEditTodoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
