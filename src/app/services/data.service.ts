import { Injectable } from '@angular/core';
import { takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.getDetails();
   }

  //saveDetails() - To store data into local storage

saveDetails(){
  if(this.userDetails){
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  }
  if(this.currentUser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }
  // if(this.currentAcno){
  //   localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  // }
}

getDetails(){
  if(this.userDetails){
    this.userDetails=JSON.parse(localStorage.getItem('DataBase')|| '')
  }
  // if (this.currentAcno) {
  //   this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')|| '')
    
  // }
  if (this.currentUser) {
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')|| '')
    
  }
}


  //database
  userDetails:any={
    'enjoyal':{uname:'enjoyal', pswd:'abcd',pswd2:'abcd', tasks:[]},
    'basil':{uname:'basil',pswd:'1234',pswd2:'1234',tasks:[]},
    'joyal':{uname:'joyal',pswd:'ABCD',pswd2:'ABCD', tasks:[]},
  }

  register(uname:any, pswd:any, pswd2:any){
    let userDetails=this.userDetails;
    
    if(uname in userDetails){
      return false;
    }
    else{

      userDetails[uname]={
        uname:uname,
        pswd:pswd,
        pswd2:pswd2,
        tasks: []
      }
      console.log(userDetails);
      this.saveDetails();
      return true;
      
    }

  }
//to hold current uname
  currentUser="";

  login(uname:any, pswd:any){
    // alert('Login clicked')

    var userDetails=this.userDetails;
    if(uname in userDetails){
      if(pswd==userDetails[uname]['pswd']){
        // this.currentUser=userDetails[uname].uname;
        this.currentUser=uname;

        this.saveDetails();
       return true;
      }
      else{
        return false;     
       }
    }
    else{
      return false;
    }
  }



  
  //to load the previous task into the todolist 
  loadTodoList(uname:any){
    var userDetails=this.userDetails;
    return userDetails[uname].tasks;

  }
  
  addTask(uname:any, task:any){
    var userDetails=this.userDetails;
    userDetails[uname]['tasks'].push(task)

    return userDetails[uname].tasks;
  }
  
  clearBox(task:any){
      return task='';
    }

  currentTask='';

  editTask(currentTask:any){
    this.currentTask=currentTask;
    return this.currentTask
  }

  updateTask(etask:any, uname:any, currentTask:any){
    var userDetails=this.userDetails;
    for(let t in userDetails[uname].tasks){
      if (userDetails[uname]['tasks'][t]==currentTask) {
         userDetails[uname]['tasks'][t]=etask;
      }
    }
    return this.userDetails[uname].tasks;
    // return etask;
    }

    removeTask( uname:any, currentTask:any){
      var userDetails=this.userDetails;
      // for(let t in userDetails[uname].tasks){
      //   if (userDetails[uname]['tasks'][t]==currentTask) {
      //     userDetails[uname]['tasks'].pop(currentTask)
          
      //     console.log(currentTask);
      //     return this.userDetails[uname].tasks;

      //   }
      // }
      
      userDetails[uname].tasks = userDetails[uname].tasks.filter((i:any)=> i!==currentTask);
      return this.userDetails[uname].tasks;

    
    }
  

  }



