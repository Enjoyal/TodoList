import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uname:any
  tasks:any
  task:any
  etask:any
  currentTask:any


  //
  user='';

  constructor(private ds:DataService) {
  this.user=this.ds.currentUser;
  

   
   }

  ngOnInit(): void {
    this.loadTodoList();
  }

loadTodoList(){
  this.uname=this.ds.currentUser;
  this.tasks=this.ds.loadTodoList(this.uname);
}


  addTask(){
   if(this.task){
    this.uname=this.ds.currentUser;
    this.tasks=this.ds.addTask(this.uname,this.task);
    console.log(this.tasks);
    this.task='';
   }
   else{
    alert('Please enter the task');

   }
  }
  clearBox(){
    // this.task=this.ds.currentTask;
    this.task=this.ds.clearBox(this.task);
  }
  editTask(id:number){
    this.currentTask=this.tasks[id];
    this.currentTask=this.ds.editTask(this.currentTask);    // return this.currentTask;
    // this.task=this.ds.currentTask;
    this.etask=this.currentTask;
    console.log(this.currentTask);
    console.log(id);
    

  }
  updateTask(id:number){
    
    this.uname=this.ds.currentUser;
    this.currentTask=this.ds.editTask(this.currentTask);
    console.log(this.currentTask);
    console.log(id);
    // this.task=this.ds.currentTask;
    this.tasks=this.ds.updateTask(this.etask, this.uname, this.currentTask);
    console.log(this.tasks);
  }
  removeTask(id:number){
    this.currentTask=this.tasks[id];
    console.log(this.tasks[id]);

    // this.tasks = this.tasks.filter((i:any)=> i!==this.tasks[id]);
    this.tasks=this.ds.removeTask(this.uname, this.currentTask);
    console.log(this.tasks);
    // this.clearBox();
  }
}
