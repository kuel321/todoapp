import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css']
})
export class AddEditTodoComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() todo:any;
  ToDoId:string;
  TodoDescription:string;

  ngOnInit(): void {
    this.ToDoId=this.todo.ToDoId;
    this.TodoDescription=this.todo.TodoDescription;
  }
  
  addToDo(){
    var val = {ToDoId:this.ToDoId,
                TodoDescription:this.TodoDescription};
                
                   this.service.addToDo(val).subscribe(res=>{
                   alert(res.toString());
   });


  }




  updateToDo(){
    var val = {ToDoId:this.ToDoId,
      TodoDescription:this.TodoDescription};
    this.service.updateToDo(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
