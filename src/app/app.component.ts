import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Said';
  constructor(){
    this.changeName('Said Soumah');
  }
  changeName(name:string){
    this.name=name;
  }
}
