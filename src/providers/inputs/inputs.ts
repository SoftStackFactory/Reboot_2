import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InputsProvider {
  //Status Source is the RXJS behavior subject, this allows it to update as the component is updated.
  private statusSource = new BehaviorSubject([]);
  //Current status is the observable.
  currentStatus = this.statusSource.asObservable();

  initValue:[];
  constructor() {
  }
  //Function that is called on sliders.ts, changes the value of the section in real time.
  changeStatus(val : any){
    this.statusSource.next(val)
    this.initValue = val;
    
  }
  

}
