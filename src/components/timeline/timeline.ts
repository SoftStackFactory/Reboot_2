import { Component } from '@angular/core';

/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  text: string;

  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World';
  }

}
