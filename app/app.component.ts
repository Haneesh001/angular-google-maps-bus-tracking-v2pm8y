import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 16;

  // initial center position for the map

  currentPos: point = {
    lat: 12.9716, 
    lng:77.5946
  };
  points: point[] = [];
  tmpPoints: point[] = [
    this.currentPos,
    {
       lat: 12.9716, 
    lng:77.5946
    },
    {
      lat: 13.0827,
      lng:  80.2707
    },
    {
      lat: 17.3850,
      lng:  78.4867
    },
    {
      lat:22.5726, 
      lng: 88.3639
    },
    {
      lat: 18.5204, 
      lng: 73.8567
    }
  ]


  ngOnInit() {
    let i = 0;
    const obs = Observable.interval(2000)
      .takeWhile((v) =>  i < this.tmpPoints.length)
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        this.currentPos = pos;
        i++;
      })
  }



















}

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
