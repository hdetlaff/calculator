import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userInput;
  result;
  equations = [];


  constructor(public navCtrl: NavController, public afd: AngularFireDatabase) {
    this.getDataFromFirebase();
  }


  calculate(){
    var cleaned = this.userInput.replace(/([a-z]|[A-Z])/g, "");
    this.result=eval(cleaned);
    this.equations.push(cleaned + " = " + this.result);
    if(this.equations.length>10){
      this.equations.shift();
    }
  }

  getDataFromFirebase(){
    this.afd.list('/RecentCalculations/').valueChanges()
    .subscribe(
      data => {
        console.log(JSON.stringify(data))
      }

    )

  }


}
