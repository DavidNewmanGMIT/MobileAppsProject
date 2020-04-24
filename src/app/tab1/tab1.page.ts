import { Component } from '@angular/core';
//Geolocation imported
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
lon:number;
lat:number;
quiz:number;

  //Geolocation add to constructor, using lowercase to be clear
  constructor(private geolocation: Geolocation) {

  }

  //Method for geolocation that uses the geolocation from 
  geoMethod() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      this.quiz = this.lat + this.lon;
      //lat and lon added together to get a number for the quiz, might need to
      //make the equation more complex depended on how longitude and latitude works.
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


}
