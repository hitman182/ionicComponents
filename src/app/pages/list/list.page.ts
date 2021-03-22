import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios :Observable<any>;

  favorito : boolean = false;

  @ViewChild(IonList) ionList: IonList;

  constructor( private DataService : DataService) { }

  ngOnInit() {

    this.usuarios = this.DataService.getUsuarios();
  }

  onClick(user){
    this.favorito=!this.favorito;
    console.log('favorito ' ,user);
    this.ionList.closeSlidingItems();
  }

  share(items){
    console.log("compartiendo! ", items);
    this.ionList.closeSlidingItems();
  }

  delete(user){
    console.log('delete ',user.name)
    this.ionList.closeSlidingItems();
  }




}
