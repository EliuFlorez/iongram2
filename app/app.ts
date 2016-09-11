import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LoginPage } from './pages/login/login';
import { TabsPage } from './pages/tabs/tabs';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { DataService } from './providers/data/data';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  
  rootPage: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      this.rootPage = TabsPage;
    });
  }
}

ionicBootstrap(MyApp, [
  disableDeprecatedForms(),
  provideForms(),
  DataService
]);
