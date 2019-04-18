import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  loginWrapper:boolean = true

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
              this.loginWrapper = true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  toLogin() {
    this.navCtrl.push(LoginPage)
    this.loginWrapper = false
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage)
  }

}


// this.navCtrl.push(LoginPage, null, {animate: true, animation: "transition"})