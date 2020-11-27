import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';



@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  constructor(private service:SharedService) { }

  TodoList:any=[];

 

  ModalTitle:string;
  ActivateAddEditTodoComponent:boolean=false;
  todo:any;
 
 
  ngOnInit(): void {
    this.refreshToDoList();
  }

  addClick() {
    this.todo={
      ToDoId:0,
      TodoDescription:""
    }
    this.ModalTitle="Add new todo";
    this.ActivateAddEditTodoComponent=true;

  }

  closeClick() {
    this.ActivateAddEditTodoComponent=false;
    this.refreshToDoList();
  }

  refreshToDoList(){
    this.service.getToDoList().subscribe((data: any)=>{
      this.TodoList=data;
    
    });
  }
  
  editClick(item){
    this.todo=item;
    this.ModalTitle="Edit todo";
    this.ActivateAddEditTodoComponent=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteToDo(item.ToDoId).subscribe((data: any)=>{
        alert(data.toString());
        this.refreshToDoList();
      })
    }
  }
 
}

