import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  path: string = 'data';

  constructor(private http: Http) {}

  getTimeline(): Promise<any>{
    return this.http.get(`${this.path}/timeline.json`)
    .map(response => response.json())
    .toPromise();
  }

  getPhotos(): Promise<any>{
    return this.http.get(`${this.path}/photos.json`)
    .map(response => response.json())
    .toPromise();
  }

}

