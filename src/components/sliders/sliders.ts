import { Component, OnInit } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';

@Component({
  selector: 'sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent implements OnInit {
  
 //Initializes the different values that users can rate
  career: number = 5;
  finance: number = 5;
  personalGrowth: number = 5;
  health: number = 5;
  family: number = 5;
  relationships: number = 5;
  socialLife: number = 5;
  attitude: number = 5;



  constructor( public Inputs: InputsProvider){}
  

  change(){
    //Status is an array of the 8 values, Charts.Js uses in array to
    //build the chart
    let statusChange = [
      this.attitude,
      this.career,
      this.family,
      this.finance,
      this.health,
      this.family,
      this.relationships,
      this.socialLife
                ]
    //sends the status array to the inputs service where it sets the value
    //of the behavior subject so that it can update in realtime as an observable
    this.Inputs.changeStatus(statusChange)

  }
  ngOnInit(){
    let initStatus = [
      this.attitude,
      this.career,
      this.family,
      this.finance,
      this.health,
      this.family,
      this.relationships,
      this.socialLife
                ]
    this.Inputs.changeStatus(initStatus)
  }
 

  

}
