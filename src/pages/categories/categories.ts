import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SplashPage } from '../splash/splash';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'Sports', component: HomePage },
      { title: 'Health', component: SplashPage },
      { title: 'Food', component: HomePage },
      { title: 'Politics', component: SplashPage },
      { title: 'Art', component: HomePage },
      { title: 'Movies', component: SplashPage },
      { title: 'TV', component: HomePage },
      { title: 'Music', component: SplashPage },
      { title: 'Games', component: HomePage },
      { title: 'Horror', component: SplashPage },
      { title: 'Technology', component: HomePage },
      { title: 'Kids', component: SplashPage },
      { title: 'Random', component: HomePage },
      { title: 'All Polls', component: SplashPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  toCategories() {
    this.navCtrl.setRoot(CategoriesPage, {}, { animate: true, duration: 300 })
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage, {}, { animate: true, duration: 300 })
  }



}
