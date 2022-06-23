import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiURL = "https://api.angularbootcamp.com";

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) {}

  loadVideos(): Observable<any[]> {
    return this.http
      .get<any[]>(apiURL + '/videos')
      .pipe(map(v => v.concat([{"title":"Test","author":"Janice Dsouza","id":"test123ert"}]).map(video => ({...video, title: video.title.toUpperCase()}))));
    }
  }
