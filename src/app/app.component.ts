import { Component, OnInit } from '@angular/core';
import { digimonescigrservices } from './digimones-cigr/digimonescigr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digimones: any;

  constructor(public digimon:digimonescigrservices)
  {}

  ngOnInit()
  {
    this.digimon.getDigimones().subscribe
    (
      (r) => {this.digimones =r; console.log(r)},
      (e) => {console.error(e)}
    )
  }
}
