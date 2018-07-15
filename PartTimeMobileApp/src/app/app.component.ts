import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs'
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'General', component: TabsPage },
      { title: 'Technical', component: TabsPage },
      { title: 'Managerial ', component: TabsPage },
      { title: 'Entrepreneurial', component:TabsPage},
      { title: 'Visionary', component:TabsPage},
      { title: 'Voluntary', component:TabsPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.set('section', 'General');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //console.log( page.title + '------>setRoot')
    this.storage.set('section', page.title );
    this.nav.setRoot(page.component);
  }



}
