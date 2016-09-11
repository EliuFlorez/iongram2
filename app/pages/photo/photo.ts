import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { CameraPage } from '../camera/camera';


@Component({
  templateUrl: 'build/pages/photo/photo.html'
})
export class PhotoPage {

  tab1Root: any;
  tab2Root: any;
  params: any;

  constructor(
    private viewCtrl: ViewController
  ) {
    this.params = {
      viewCtrl: this.viewCtrl
    }
    this.tab1Root = LibraryPage;
    this.tab2Root = CameraPage;
  }
}
