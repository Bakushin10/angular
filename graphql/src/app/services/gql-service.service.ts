import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GqlService {

  constructor() { }


  getDataFromDjango() {
    return "hi"
  }
}
