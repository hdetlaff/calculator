import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseConfig = {
    apiKey: "AIzaSyAcliuH6_WPQR-MpSilEQ2SEiMBUhezcJ4",
    authDomain: "calculator-7387b.firebaseapp.com",
    databaseURL: "https://calculator-7387b.firebaseio.com",
    projectId: "calculator-7387b",
    storageBucket: "calculator-7387b.appspot.com",
    messagingSenderId: "474818644295",
    appId: "1:474818644295:web:b732800de251e8e26a2462",
    measurementId: "G-02ZS5YQRF1"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
