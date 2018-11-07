import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';


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

  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;



  constructor(public renderer: Renderer) { }
  
  ngAfterViewInit(){
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');   
}

}

