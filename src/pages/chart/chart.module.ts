import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';

@NgModule({
  declarations: [
    ChartPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
  ],
})
export class ChartPageModule {}
