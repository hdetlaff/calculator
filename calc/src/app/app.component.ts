import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  items: FirebaseListObservable<any>;
  name: any;
  userIntput: string = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 10
      }
    })
  }

  calcSend(theirCalc: string) {
    this.items.push({message: theirMessage});
    this.userInput: '';
  }
}
