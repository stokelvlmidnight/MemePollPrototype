import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  slideOpts = {
    effect: 'flip',
    autoHeight: true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  toCategories() {
    this.navCtrl.push(CategoriesPage)
  }

  toDashboard() {
    this.navCtrl.push(DashboardPage)
  }

}
