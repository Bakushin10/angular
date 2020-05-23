import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';1
import * as TutorialActions from '../actions/tutotial.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url){
    this.store.dispatch(new TutorialActions.AddTutorial({name:name, url:url}))
  }

  ngOnInit(): void {
  }

}
