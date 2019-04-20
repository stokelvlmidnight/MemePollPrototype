import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { UiProvider } from '../../providers/ui/ui';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public uiProvider: UiProvider) {
  }

  ionViewDidLoad() {
    this.uiProvider.enable = true
    console.log('ionViewDidLoad DashboardPage');
    this.uiProvider.scrollContentMargin()
  }

  toCategories() {
    this.navCtrl.setRoot(CategoriesPage, {}, { animate: true, duration: 300 })
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage, {}, { animate: true, duration: 300 })
  }

}
