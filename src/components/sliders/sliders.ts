import { Component } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';

@Component({
  selector: 'sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent {
  career: number = 5;
  finance: number = 5;
  personalGrowth: number = 5;
  health: number = 5;
  family: number = 5;
  relationships: number = 5;
  socialLife: number = 5;
  attitude: number = 5;



  constructor( public Inputs: InputsProvider){}
  
  status = () => {
    let Status = [this.attitude, this.career, this.family, this.finance, this.health, this.family, this.relationships, this.socialLife]
    this.Inputs.changeStatus(Status)
  }
  change(){
    console.log(this.career)
  }
  ionViewDidLoad(){
    

  }
 

  

}
