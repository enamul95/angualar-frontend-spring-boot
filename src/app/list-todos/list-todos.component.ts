import { Component, OnInit } from '@angular/core';

export class  Todo{

  constructor(
    public id:number,
    public descriptions:String,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new Todo(1,"Learn to dance",false,new Date),
    new Todo(2,"Become an Expert in angular",false,new Date),
    new Todo(3,"Visit Bangladesh",false,new Date)
    // {id:1, description:'Learn to dance'},
    // {id:2, description:'Become an Expert in angular'},
    // {id:3, description:'Visit Bangladesh'},
  ]
  // todo = {
  //   id:1,
  //   description:'Learn to dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
