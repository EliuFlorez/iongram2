import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DataService } from '../../providers/data/data';


@Component({
  templateUrl: 'build/pages/library/library.html',
})
export class LibraryPage {

  viewCtrl: ViewController;
  photoSelected: any = {};
  photos: any[] = [];

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private dataService: DataService
  ) {}

  ionViewLoaded(){
    this.viewCtrl = this.params.get('viewCtrl');
    this.loadPhotos();
  }

  changePhoto( photo:any ){
    this.photoSelected = photo;
  }

  close(){
    this.viewCtrl.dismiss();
  }

  private loadPhotos(){
    this.dataService.getPhotos()
    .then(data => {
      this.photos = data;
      this.photoSelected = this.photos[0];
    })
    .catch(error => {
      console.log(error);
    });
  }

}
