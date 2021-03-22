import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes :Observable<any[]>;

  text :string = '';

  constructor( private dataService : DataService) { }

  ngOnInit() {
    this.superheroes = this.dataService.getSuperHeroes();
  }

  segmentChanged( event ){
    this.text = event.detail.value;
  }

}
