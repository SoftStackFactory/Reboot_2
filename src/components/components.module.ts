import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SlidersComponent } from './sliders/sliders';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [SlidersComponent],
	imports: [ CommonModule, IonicModule],
	exports: [SlidersComponent]
})
export class ComponentsModule {}
