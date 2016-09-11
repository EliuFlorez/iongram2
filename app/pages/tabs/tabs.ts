import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { ProfilePage } from '../profile/profile';
import { TimelinePage } from '../timeline/timeline';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;

  constructor(public navCtrl: NavController) {
    this.tab1Root = TimelinePage;
    this.tab2Root = SearchPage;
    this.tab3Root = ProfilePage;
    this.tab4Root = ActivityPage;
    
  }
}
