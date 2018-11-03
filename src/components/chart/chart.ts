import { Component } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';

@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent {

  text: string;
  data:any
  constructor(public input:InputsProvider) {
    
  }
  status = this.input.currentStatus.subscribe((res)=>{
    this.data = res
})
  
}
