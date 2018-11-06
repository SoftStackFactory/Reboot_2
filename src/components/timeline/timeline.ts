import { Component, Input } from '@angular/core';


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

  list = [
    {
      title: 'Getting Out',
      checkmark: true,
      completed: false,
    },
    {
      title: 'Something else',
      checkmark: true,
      completed: false,
    }
  ]

  @Input('endIcon') endIcon = "ionic";

  constructor() {

  }
  toggleItem(item){
    if(item.itemExpand){
      item.itemExpand = false;
    } else {
      item.itemExpand = true;
    }
  }
  
}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
  constructor(){

  }
}

@Component({
  selector: 'timeline-time',
  template: '<span>{{time.subtitle}}</span><span>{{time.title}}</span>'
})
export class TimelineTimeComponent {
  constructor(){

  }
}
