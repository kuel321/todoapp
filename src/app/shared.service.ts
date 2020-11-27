import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:63143/api";

  constructor(private http:HttpClient) { }

  getToDoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/todo');
  }

  addToDo(val:any){
    return this.http.post(this.APIUrl+'/todo',val);
  }

  updateToDo(val:any){
    return this.http.put(this.APIUrl+'/todo', val);
  }

  deleteToDo(val:any) {
    return this.http.delete(this.APIUrl+'/todo/'+val);
  }


}