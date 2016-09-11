import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { SearchPage } from '../search/search';
import { PhotoPage } from '../photo/photo';
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

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.tab1Root = TimelinePage;
    this.tab2Root = SearchPage;
    this.tab3Root = ProfilePage;
    this.tab4Root = ActivityPage;
  }

  showPhotoPage(){
    let modal = this.modalCtrl.create(PhotoPage);
    modal.present();
  }
}
