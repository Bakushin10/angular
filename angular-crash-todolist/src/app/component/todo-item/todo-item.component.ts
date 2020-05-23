import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //taking the input from parent component
  @Input() todo: Todo;

  //outputing to parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoservice : TodoService ) { }

  ngOnInit(): void {
  }

  // Set dynamic classes
  // dynamically enable/disble the css here
  // "todo" and "isComplete" are css classes
  setClasses(){
    let classes = {
      todo: true,
      isComplete : this.todo.completed
    }
    return classes;
  }
  
  onToggle(todo){
    // Toggle in UI
    this.todo.completed = !this.todo.completed

    //Toggle on server
    this.todoservice.toggleCompleted(todo).subscribe(todo =>{
      console.log(todo)
    })
  }
  
  //event
  onDelete(todo){
    this.deleteTodo.emit(todo)
  }

}
