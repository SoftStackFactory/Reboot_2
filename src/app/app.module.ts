import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { TimelineComponent } from  '../components/timeline/timeline';
import { TimelinePage } from '../pages/timeline/timeline'
import { WizardPage } from '../pages/wizard/wizard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserDataProvider } from '../providers/user-data/user-data';
import { InputsProvider } from '../providers/inputs/inputs';
import { ComponentsModule } from './../components/components.module';
import { ChartPage } from '../pages/chart/chart';


@NgModule({
  declarations: [
    MyApp,
    WizardPage,
    ProfilePage,
    TimelineComponent,
    TimelinePage,
    WizardPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WizardPage
    ProfilePage,
    TimelineComponent,
    TimelinePage,
    WizardPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider
    InputsProvider
  ]
})
export class AppModule {}
