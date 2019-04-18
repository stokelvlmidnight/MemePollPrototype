import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { LandingPage } from '../landing/landing';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  showLogin:boolean = false

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toSplash() {
    this.navCtrl.push(SplashPage)
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage)
  }

  backToLanding() {
    this.navCtrl.push(LandingPage)
  }

}
