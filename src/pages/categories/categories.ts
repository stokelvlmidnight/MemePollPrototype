import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SplashPage } from '../splash/splash';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.navCtrl.push(CategoriesPage)
  }

  toDashboard() {
    this.navCtrl.push(DashboardPage)
  }



}
