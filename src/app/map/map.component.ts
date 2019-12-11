import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/ol/ol.css',
    './map.component.scss'
  ]
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) { 
  }
  
  ngOnInit() {
    const map= this.mapService.getMap();
    return map;
  }

}
