import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: Map; 
  singleLine;
  searchValue: string;
  constructor(private http: HttpClient) { }
  getMap(){
    return this.map =  new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });
  }
  getSearch(searchValue: string){
    this.searchValue = searchValue;
    return this.http.get('http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine='+this.searchValue+'&f=json');
  }
}
