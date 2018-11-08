import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ComponentsModule } from './../components/components.module';
import { TimelineComponent } from  '../components/timeline/timeline';

import { ProfilePage } from '../pages/profile/profile';
import { TimelinePage } from '../pages/timeline/timeline'
import { WizardPage } from '../pages/wizard/wizard';
import { ChartPage } from '../pages/chart/chart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserDataProvider } from '../providers/user-data/user-data';
import { InputsProvider } from '../providers/inputs/inputs';




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
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WizardPage,
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
    UserDataProvider,
    InputsProvider
  ]
})
export class AppModule {}
