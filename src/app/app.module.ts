import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { TimelineComponent } from  '../components/timeline/timeline';
import { WizardPage } from '../pages/wizard/wizard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputsProvider } from '../providers/inputs/inputs';
import { ComponentsModule } from './../components/components.module';
import { ChartPage } from '../pages/chart/chart';


@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    TimelineComponent,
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
    ProfilePage,
    TimelineComponent,
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
