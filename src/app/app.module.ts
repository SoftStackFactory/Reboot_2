import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WizardPage } from '../pages/wizard/wizard';
import { ChartPage } from '../pages/chart/chart';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputsProvider } from '../providers/inputs/inputs';
import { ComponentsModule } from './../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WizardPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WizardPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InputsProvider
  ]
})
export class AppModule {}
