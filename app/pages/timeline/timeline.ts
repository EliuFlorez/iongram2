import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, ModalController } from 'ionic-angular';
import { DataService } from '../../providers/data/data';
import { CommentsPage } from '../comments/comments';


@Component({
  templateUrl: 'build/pages/timeline/timeline.html',
})
export class TimelinePage {

  timeline: any[] = [];

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private loadCtrl: LoadingController,
    private actionCtrl: ActionSheetController,
    private modalCrtl: ModalController
  ) {}

  ionViewLoaded(){
    this.loadTimeline();
  }

  showOptions(){
    let action = this.actionCtrl.create({
      buttons: [
        {
          text: 'Report',
          role: 'destructive',
          handler: () => {
            console.log('Report');
          }
        },
        {
          text: 'Share to Facebook',
          handler: () => {
            console.log('Facebook');
          }
        },
        {
          text: 'Share to Messenger',
          handler: () => {
            console.log('Messenger');
          }
        },
        {
          text: 'Tweet',
          handler: () => {
            console.log('Tweet');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    action.present();
  }

  like(item: any): void{
    item.favorite = !item.favorite;
  }

  showComments(item: any): void{
    let modal = this.modalCrtl.create(CommentsPage,{
      comments: item.comments
    });
    modal.present();
  }

  private loadTimeline(){
    this.dataService.getTimeline()
    .then(data => {
      this.timeline = data;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
