import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {

  photos: any[] = [];
  photosCopy: any[] = [];
  queryText: string = '';

  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) {}

  ionViewLoaded(){
    this.loadPhotos();
  }

  ngAfterViewInit(){

  }

  query(event: any): void{

    this.photos = this.photosCopy;

    let value = event.target.value;
    
    if(value && value.trim() != ''){

      let text = value.toLowerCase().replace(/,|\.|-/g, ' ');
      let queryWords = text.split(' ').filter(w => !!w.trim().length);

      this.photos = this.photos.filter(photo => {
        let show = false;
        queryWords.forEach(queryWord => {
          show = photo.name.toLowerCase().indexOf(queryWord) > -1;
        });
        return show;
      })
    }
    
  }

  private loadPhotos(){
    this.dataService.getPhotos()
    .then(data => {
      this.photos = data;
      this.photosCopy = data;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
