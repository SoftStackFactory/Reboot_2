import { Injectable } from '@angular/core';


@Injectable()
export class UserDataProvider {

  user: any = {}

  constructor() {
    console.log('Hello UserDataProvider Provider');
  }

}
