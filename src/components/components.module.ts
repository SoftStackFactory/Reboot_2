import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SlidersComponent } from './sliders/sliders';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart';
@NgModule({
	declarations: [SlidersComponent,
    ChartComponent],
	imports: [ CommonModule, IonicModule],
	exports: [SlidersComponent,
    ChartComponent]
})
export class ComponentsModule {}
