import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <h1>Create new event</h1>
  <hr>
  <div>
    <h3>Form goes here</h3>
    <br>
    <br>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
  </div>

  `
})
export class CreateEventComponent{

  constructor(private route: Router ){

  }

  cancel(){
    this.route.navigate(['/events']);
  }

}
