import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  datas;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }
  onClickMe(event: any){
    this.searchInput=event.target.value;
    console.log(this.searchInput);
    this.mapService.getSearch(this.searchInput).subscribe(data => {
      this.datas = data;
     
      console.log(this.datas.candidates[0]);
    });
  }
}
