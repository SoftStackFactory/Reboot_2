import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InputsProvider {

  private statusSource = new BehaviorSubject([]);
  currentStatus = this.statusSource.asObservable();

  constructor() {
  }

  changeStatus(val : any){
    this.statusSource.next(val)
  }
  getStatus(){
    
  }

}
